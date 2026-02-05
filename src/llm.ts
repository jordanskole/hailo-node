import * as protobuf from "protobufjs";
import * as path from "path";
import { HailoConnection } from "./connection";
import { HailoGenAIActionID, packPayload, unpackPayload } from "./protocol";
import { HailoError, checkStatus } from "./errors";

// --- Types ---

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface LLMGeneratorParams {
  temperature: number;
  topP: number;
  topK: number;
  frequencyPenalty: number;
  maxGeneratedTokens: number;
  doSample: boolean;
  seed: number;
}

export enum GenerationStatus {
  GENERATING = 0,
  MAX_TOKENS_REACHED = 1,
  LOGICAL_END_OF_GENERATION = 2,
  ABORTED = 3,
}

export interface LLMConnectOptions {
  /** Server host (default: "localhost") */
  host?: string;
  /** LLM server port (default: 12145) */
  port?: number;
  /** Path to the HEF model file on the server */
  hefPath: string;
  /** VDevice group ID */
  groupId?: string;
  /** LoRA adapter name */
  loraName?: string;
}

// --- Proto loading ---

let protoRoot: protobuf.Root | null = null;

function getProtoRoot(): protobuf.Root {
  if (!protoRoot) {
    protoRoot = protobuf.loadSync(
      path.resolve(__dirname, "..", "proto", "genai_scheme.proto")
    );
  }
  return protoRoot;
}

function getType(name: string): protobuf.Type {
  return getProtoRoot().lookupType(name);
}

// --- Internal RPC helpers ---

// Map action IDs to their inner proto type names.
// The wire protocol sends inner types directly (NOT wrapped in GenAIRpcRequest/Reply).
const requestTypeMap: Partial<Record<HailoGenAIActionID, string>> = {
  [HailoGenAIActionID.LLM__CREATE]: "LLM_Create_Request",
  [HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS]: "LLM_Get_Generator_Params_Request",
  [HailoGenAIActionID.LLM__GENERATOR_CREATE]: "LLM_Generator_Create_Request",
  [HailoGenAIActionID.LLM__GENERATOR_WRITE]: "LLM_Generator_Write_Request",
  [HailoGenAIActionID.LLM__GENERATOR_GENERATE]: "LLM_Generator_Generate_Request",
  [HailoGenAIActionID.LLM__GENERATOR_READ]: "LLM_Generator_Read_Request",
  [HailoGenAIActionID.LLM__GENERATOR_ABORT]: "LLM_Generator_Abort_Request",
  [HailoGenAIActionID.LLM__GENERATOR_RELEASE]: "LLM_Generator_Release_Request",
  [HailoGenAIActionID.LLM__TOKENIZE]: "LLM_Tokenize_Request",
  [HailoGenAIActionID.LLM_CLEAR_CONTEXT]: "LLM_Clear_Context_Request",
  [HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE]: "LLM_Get_Context_Usage_Size_Request",
  [HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY]: "LLM_Get_Max_Context_Capacity_Request",
  [HailoGenAIActionID.LLM_RELEASE]: "LLM_Release_Request",
};

const replyTypeMap: Partial<Record<HailoGenAIActionID, string>> = {
  [HailoGenAIActionID.LLM__CREATE]: "LLM_Create_Reply",
  [HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS]: "LLM_Get_Generator_Params_Reply",
  [HailoGenAIActionID.LLM__GENERATOR_CREATE]: "LLM_Generator_Create_Reply",
  [HailoGenAIActionID.LLM__GENERATOR_WRITE]: "LLM_Generator_Write_Reply",
  [HailoGenAIActionID.LLM__GENERATOR_GENERATE]: "LLM_Generator_Generate_Reply",
  [HailoGenAIActionID.LLM__GENERATOR_READ]: "LLM_Generator_Read_Reply",
  [HailoGenAIActionID.LLM__GENERATOR_ABORT]: "LLM_Generator_Abort_Reply",
  [HailoGenAIActionID.LLM__GENERATOR_RELEASE]: "LLM_Generator_Release_Reply",
  [HailoGenAIActionID.LLM__TOKENIZE]: "LLM_Tokenize_Reply",
  [HailoGenAIActionID.LLM_CLEAR_CONTEXT]: "LLM_Clear_Context_Reply",
  [HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE]: "LLM_Get_Context_Usage_Size_Reply",
  [HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY]: "LLM_Get_Max_Context_Capacity_Reply",
  [HailoGenAIActionID.LLM_RELEASE]: "LLM_Release_Reply",
};

function encodeRequest(actionId: HailoGenAIActionID, fields: Record<string, unknown>): Buffer {
  const typeName = requestTypeMap[actionId];
  if (!typeName) {
    throw new Error(`No request type mapping for action ${actionId}`);
  }

  const MsgType = getType(typeName);
  const message = MsgType.create(fields);
  const encoded = MsgType.encode(message).finish();
  return packPayload(actionId, encoded);
}

function decodeReply(buf: Buffer): Record<string, unknown> {
  const { actionId, body } = unpackPayload(buf);
  const typeName = replyTypeMap[actionId as HailoGenAIActionID];
  if (!typeName) {
    throw new Error(`No reply type mapping for action ${actionId}`);
  }

  const MsgType = getType(typeName);
  const decoded = MsgType.decode(body);
  return MsgType.toObject(decoded, {
    longs: Number,
    defaults: true,
  }) as Record<string, unknown>;
}

// --- HailoLLM ---

export class HailoLLM {
  private conn: HailoConnection;
  private promptTemplate: string = "";
  private defaultParams: LLMGeneratorParams | null = null;

  private constructor(conn: HailoConnection) {
    this.conn = conn;
  }

  /**
   * Connect to a HailoRT GenAI LLM server and initialize a model.
   */
  static async connect(options: LLMConnectOptions): Promise<HailoLLM> {
    const host = options.host ?? "localhost";
    const port = options.port ?? 12145;

    const conn = new HailoConnection();
    await conn.connect(host, port);

    const llm = new HailoLLM(conn);

    // LLM__CREATE
    const createPayload = encodeRequest(HailoGenAIActionID.LLM__CREATE, {
      hefPath: options.hefPath,
      groupId: options.groupId ?? "",
      loraName: options.loraName ?? "",
      tokenizerOnHost: false,
      totalHefSize: 0,
    });
    const createReply = decodeReply(await conn.execute(createPayload, 300_000));
    checkStatus(createReply.status as number, "LLM create");
    llm.promptTemplate = (createReply.promptTemplate as string) ?? "";

    // LLM__GET_GENERATOR_PARAMS
    const paramsPayload = encodeRequest(
      HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS,
      {}
    );
    const paramsReply = decodeReply(await conn.execute(paramsPayload));
    checkStatus(paramsReply.status as number, "Get generator params");
    const gp = paramsReply.generatorParams as Record<string, unknown> | undefined;
    if (gp) {
      llm.defaultParams = {
        temperature: (gp.temperature as number) ?? 1.0,
        topP: (gp.topP as number) ?? 1.0,
        topK: (gp.topK as number) ?? 50,
        frequencyPenalty: (gp.frequencyPenalty as number) ?? 0,
        maxGeneratedTokens: (gp.maxGeneratedTokens as number) ?? 256,
        doSample: (gp.doSample as boolean) ?? true,
        seed: (gp.seed as number) ?? 0,
      };
    }

    return llm;
  }

  /**
   * Get the model's default generator parameters.
   */
  getDefaultParams(): LLMGeneratorParams | null {
    return this.defaultParams ? { ...this.defaultParams } : null;
  }

  /**
   * Get the model's prompt template string.
   */
  getPromptTemplate(): string {
    return this.promptTemplate;
  }

  /**
   * Convenience method: generate a streaming response for the given messages.
   * Yields token strings as they are generated.
   */
  async *generate(
    messages: Message[],
    params?: Partial<LLMGeneratorParams>
  ): AsyncGenerator<string, void, undefined> {
    const generator = await this.createGenerator(params);
    try {
      generator.write(messages);
      yield* generator.run();
    } finally {
      await generator.release();
    }
  }

  /**
   * Create a generator for fine-grained control over the generation process.
   */
  async createGenerator(
    params?: Partial<LLMGeneratorParams>
  ): Promise<LLMGenerator> {
    const merged = { ...this.defaultParams, ...params };
    return LLMGenerator.create(this.conn, merged as LLMGeneratorParams);
  }

  /**
   * Clear the conversation context on the server.
   */
  async clearContext(): Promise<void> {
    const payload = encodeRequest(HailoGenAIActionID.LLM_CLEAR_CONTEXT, {});
    const reply = decodeReply(await this.conn.execute(payload));
    checkStatus(reply.status as number, "Clear context");
  }

  /**
   * Get current context usage (number of tokens in context).
   */
  async getContextUsage(): Promise<number> {
    const payload = encodeRequest(
      HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE,
      {}
    );
    const reply = decodeReply(await this.conn.execute(payload));
    checkStatus(reply.status as number, "Get context usage");
    return (reply.contextUsage as number) ?? 0;
  }

  /**
   * Get the maximum context capacity (in tokens).
   */
  async getMaxContextCapacity(): Promise<number> {
    const payload = encodeRequest(
      HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY,
      {}
    );
    const reply = decodeReply(await this.conn.execute(payload));
    checkStatus(reply.status as number, "Get max context capacity");
    return (reply.maxContextCapacity as number) ?? 0;
  }

  /**
   * Tokenize a text string using the server's tokenizer.
   */
  async tokenize(text: string): Promise<number[]> {
    const payload = encodeRequest(HailoGenAIActionID.LLM__TOKENIZE, {
      prompt: text,
    });
    const reply = decodeReply(await this.conn.execute(payload));
    checkStatus(reply.status as number, "Tokenize");
    return (reply.tokens as number[]) ?? [];
  }

  /**
   * Release the LLM instance on the server and close the connection.
   */
  async close(): Promise<void> {
    try {
      const payload = encodeRequest(HailoGenAIActionID.LLM_RELEASE, {});
      await this.conn.execute(payload);
    } finally {
      await this.conn.close();
    }
  }
}

// --- LLMGenerator ---

export class LLMGenerator {
  private conn: HailoConnection;
  private prompt: string = "";
  private initialPrefixTokens: number[] = [];

  private constructor(conn: HailoConnection) {
    this.conn = conn;
  }

  /** @internal */
  static async create(
    conn: HailoConnection,
    params: LLMGeneratorParams
  ): Promise<LLMGenerator> {
    // LLM__GENERATOR_CREATE
    const createPayload = encodeRequest(
      HailoGenAIActionID.LLM__GENERATOR_CREATE,
      {
        generatorParams: {
          temperature: params.temperature,
          topP: params.topP,
          topK: params.topK,
          frequencyPenalty: params.frequencyPenalty,
          maxGeneratedTokens: params.maxGeneratedTokens,
          doSample: params.doSample,
          seed: params.seed,
        },
      }
    );
    const createReply = decodeReply(await conn.execute(createPayload));
    checkStatus(createReply.status as number, "Generator create");

    // LLM__GENERATOR_WRITE (empty signal)
    const writePayload = encodeRequest(
      HailoGenAIActionID.LLM__GENERATOR_WRITE,
      {}
    );
    const writeReply = decodeReply(await conn.execute(writePayload));
    checkStatus(writeReply.status as number, "Generator write");

    return new LLMGenerator(conn);
  }

  /**
   * Accumulate prompt messages. Call before run().
   * Messages are formatted using ChatML tokens (Qwen im_start/im_end format).
   */
  write(messages: Message[]): void {
    for (const m of messages) {
      this.prompt += `<|im_start|>${m.role}\n${m.content}<|im_end|>\n`;
    }
    this.prompt += `<|im_start|>assistant\n`;
  }

  /**
   * Initiate generation and yield tokens as they are produced.
   */
  async *run(): AsyncGenerator<string, void, undefined> {
    // LLM__GENERATOR_GENERATE
    const genPayload = encodeRequest(
      HailoGenAIActionID.LLM__GENERATOR_GENERATE,
      {}
    );
    const genReply = decodeReply(await this.conn.execute(genPayload));
    checkStatus(genReply.status as number, "Generator generate");
    this.initialPrefixTokens =
      (genReply.initialPrefixTokens as number[]) ?? [];

    // First read: send prompt + prefix tokens
    let prevTokenId: number | null = null;
    let isFirst = true;

    while (true) {
      const generationInput: Record<string, unknown> = {};

      if (isFirst) {
        generationInput.initialPrompt = this.prompt;
        generationInput.tokens = this.initialPrefixTokens;
        isFirst = false;
      } else {
        generationInput.initialPrompt = "";
        generationInput.tokens = prevTokenId !== null ? [prevTokenId] : [];
      }

      const readPayload = encodeRequest(
        HailoGenAIActionID.LLM__GENERATOR_READ,
        {
          timeoutMs: 10_000,
          generationInput,
        }
      );
      const readReply = decodeReply(await this.conn.execute(readPayload, 45_000));
      checkStatus(readReply.status as number, "Generator read");

      const output = readReply.generationOutput as
        | Record<string, unknown>
        | undefined;
      const status = (readReply.generationStatus as number) ?? 0;
      const tokenStr = (output?.outputTokenStr as string) ?? "";
      const tokenId = (output?.outputTokenId as number) ?? 0;

      if (tokenStr) {
        yield tokenStr;
      }

      prevTokenId = tokenId;

      if (status !== GenerationStatus.GENERATING) {
        break;
      }
    }
  }

  /**
   * Abort an in-progress generation.
   */
  async abort(): Promise<void> {
    const payload = encodeRequest(
      HailoGenAIActionID.LLM__GENERATOR_ABORT,
      {}
    );
    const reply = decodeReply(await this.conn.execute(payload));
    checkStatus(reply.status as number, "Generator abort");
  }

  /**
   * Release the generator on the server.
   */
  async release(): Promise<void> {
    const payload = encodeRequest(
      HailoGenAIActionID.LLM__GENERATOR_RELEASE,
      {}
    );
    const reply = decodeReply(await this.conn.execute(payload));
    checkStatus(reply.status as number, "Generator release");
  }
}
