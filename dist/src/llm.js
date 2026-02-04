"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMGenerator = exports.HailoLLM = exports.GenerationStatus = void 0;
const protobuf = __importStar(require("protobufjs"));
const path = __importStar(require("path"));
const connection_1 = require("./connection");
const protocol_1 = require("./protocol");
const errors_1 = require("./errors");
var GenerationStatus;
(function (GenerationStatus) {
    GenerationStatus[GenerationStatus["GENERATING"] = 0] = "GENERATING";
    GenerationStatus[GenerationStatus["MAX_TOKENS_REACHED"] = 1] = "MAX_TOKENS_REACHED";
    GenerationStatus[GenerationStatus["LOGICAL_END_OF_GENERATION"] = 2] = "LOGICAL_END_OF_GENERATION";
    GenerationStatus[GenerationStatus["ABORTED"] = 3] = "ABORTED";
})(GenerationStatus || (exports.GenerationStatus = GenerationStatus = {}));
// --- Proto loading ---
let protoRoot = null;
function getProtoRoot() {
    if (!protoRoot) {
        protoRoot = protobuf.loadSync(path.resolve(__dirname, "..", "proto", "genai_scheme.proto"));
    }
    return protoRoot;
}
function getType(name) {
    return getProtoRoot().lookupType(name);
}
// --- Internal RPC helpers ---
// Map action IDs to their inner proto type names.
// The wire protocol sends inner types directly (NOT wrapped in GenAIRpcRequest/Reply).
const requestTypeMap = {
    [protocol_1.HailoGenAIActionID.LLM__CREATE]: "LLM_Create_Request",
    [protocol_1.HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS]: "LLM_Get_Generator_Params_Request",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_CREATE]: "LLM_Generator_Create_Request",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_WRITE]: "LLM_Generator_Write_Request",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_GENERATE]: "LLM_Generator_Generate_Request",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_READ]: "LLM_Generator_Read_Request",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_ABORT]: "LLM_Generator_Abort_Request",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_RELEASE]: "LLM_Generator_Release_Request",
    [protocol_1.HailoGenAIActionID.LLM__TOKENIZE]: "LLM_Tokenize_Request",
    [protocol_1.HailoGenAIActionID.LLM_CLEAR_CONTEXT]: "LLM_Clear_Context_Request",
    [protocol_1.HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE]: "LLM_Get_Context_Usage_Size_Request",
    [protocol_1.HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY]: "LLM_Get_Max_Context_Capacity_Request",
    [protocol_1.HailoGenAIActionID.LLM_RELEASE]: "LLM_Release_Request",
};
const replyTypeMap = {
    [protocol_1.HailoGenAIActionID.LLM__CREATE]: "LLM_Create_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS]: "LLM_Get_Generator_Params_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_CREATE]: "LLM_Generator_Create_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_WRITE]: "LLM_Generator_Write_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_GENERATE]: "LLM_Generator_Generate_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_READ]: "LLM_Generator_Read_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_ABORT]: "LLM_Generator_Abort_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GENERATOR_RELEASE]: "LLM_Generator_Release_Reply",
    [protocol_1.HailoGenAIActionID.LLM__TOKENIZE]: "LLM_Tokenize_Reply",
    [protocol_1.HailoGenAIActionID.LLM_CLEAR_CONTEXT]: "LLM_Clear_Context_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE]: "LLM_Get_Context_Usage_Size_Reply",
    [protocol_1.HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY]: "LLM_Get_Max_Context_Capacity_Reply",
    [protocol_1.HailoGenAIActionID.LLM_RELEASE]: "LLM_Release_Reply",
};
function encodeRequest(actionId, fields) {
    const typeName = requestTypeMap[actionId];
    if (!typeName) {
        throw new Error(`No request type mapping for action ${actionId}`);
    }
    const MsgType = getType(typeName);
    const message = MsgType.create(fields);
    const encoded = MsgType.encode(message).finish();
    return (0, protocol_1.packPayload)(actionId, encoded);
}
function decodeReply(buf) {
    const { actionId, body } = (0, protocol_1.unpackPayload)(buf);
    const typeName = replyTypeMap[actionId];
    if (!typeName) {
        throw new Error(`No reply type mapping for action ${actionId}`);
    }
    const MsgType = getType(typeName);
    const decoded = MsgType.decode(body);
    return MsgType.toObject(decoded, {
        longs: Number,
        defaults: true,
    });
}
// --- HailoLLM ---
class HailoLLM {
    conn;
    promptTemplate = "";
    defaultParams = null;
    constructor(conn) {
        this.conn = conn;
    }
    /**
     * Connect to a HailoRT GenAI LLM server and initialize a model.
     */
    static async connect(options) {
        const host = options.host ?? "localhost";
        const port = options.port ?? 12145;
        const conn = new connection_1.HailoConnection();
        await conn.connect(host, port);
        const llm = new HailoLLM(conn);
        // LLM__CREATE
        const createPayload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__CREATE, {
            hefPath: options.hefPath,
            groupId: options.groupId ?? "",
            loraName: options.loraName ?? "",
            tokenizerOnHost: false,
            totalHefSize: 0,
        });
        const createReply = decodeReply(await conn.execute(createPayload, 300_000));
        (0, errors_1.checkStatus)(createReply.status, "LLM create");
        llm.promptTemplate = createReply.promptTemplate ?? "";
        // LLM__GET_GENERATOR_PARAMS
        const paramsPayload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS, {});
        const paramsReply = decodeReply(await conn.execute(paramsPayload));
        (0, errors_1.checkStatus)(paramsReply.status, "Get generator params");
        const gp = paramsReply.generatorParams;
        if (gp) {
            llm.defaultParams = {
                temperature: gp.temperature ?? 1.0,
                topP: gp.topP ?? 1.0,
                topK: gp.topK ?? 50,
                frequencyPenalty: gp.frequencyPenalty ?? 0,
                maxGeneratedTokens: gp.maxGeneratedTokens ?? 256,
                doSample: gp.doSample ?? true,
                seed: gp.seed ?? 0,
            };
        }
        return llm;
    }
    /**
     * Get the model's default generator parameters.
     */
    getDefaultParams() {
        return this.defaultParams ? { ...this.defaultParams } : null;
    }
    /**
     * Get the model's prompt template string.
     */
    getPromptTemplate() {
        return this.promptTemplate;
    }
    /**
     * Convenience method: generate a streaming response for the given messages.
     * Yields token strings as they are generated.
     */
    async *generate(messages, params) {
        const generator = await this.createGenerator(params);
        try {
            generator.write(messages);
            yield* generator.run();
        }
        finally {
            await generator.release();
        }
    }
    /**
     * Create a generator for fine-grained control over the generation process.
     */
    async createGenerator(params) {
        const merged = { ...this.defaultParams, ...params };
        return LLMGenerator.create(this.conn, merged);
    }
    /**
     * Clear the conversation context on the server.
     */
    async clearContext() {
        const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM_CLEAR_CONTEXT, {});
        const reply = decodeReply(await this.conn.execute(payload));
        (0, errors_1.checkStatus)(reply.status, "Clear context");
    }
    /**
     * Get current context usage (number of tokens in context).
     */
    async getContextUsage() {
        const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE, {});
        const reply = decodeReply(await this.conn.execute(payload));
        (0, errors_1.checkStatus)(reply.status, "Get context usage");
        return reply.contextUsage ?? 0;
    }
    /**
     * Get the maximum context capacity (in tokens).
     */
    async getMaxContextCapacity() {
        const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY, {});
        const reply = decodeReply(await this.conn.execute(payload));
        (0, errors_1.checkStatus)(reply.status, "Get max context capacity");
        return reply.maxContextCapacity ?? 0;
    }
    /**
     * Tokenize a text string using the server's tokenizer.
     */
    async tokenize(text) {
        const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__TOKENIZE, {
            prompt: text,
        });
        const reply = decodeReply(await this.conn.execute(payload));
        (0, errors_1.checkStatus)(reply.status, "Tokenize");
        return reply.tokens ?? [];
    }
    /**
     * Release the LLM instance on the server and close the connection.
     */
    async close() {
        try {
            const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM_RELEASE, {});
            await this.conn.execute(payload);
        }
        finally {
            await this.conn.close();
        }
    }
}
exports.HailoLLM = HailoLLM;
// --- LLMGenerator ---
class LLMGenerator {
    conn;
    prompt = "";
    initialPrefixTokens = [];
    constructor(conn) {
        this.conn = conn;
    }
    /** @internal */
    static async create(conn, params) {
        // LLM__GENERATOR_CREATE
        const createPayload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GENERATOR_CREATE, {
            generatorParams: {
                temperature: params.temperature,
                topP: params.topP,
                topK: params.topK,
                frequencyPenalty: params.frequencyPenalty,
                maxGeneratedTokens: params.maxGeneratedTokens,
                doSample: params.doSample,
                seed: params.seed,
            },
        });
        const createReply = decodeReply(await conn.execute(createPayload));
        (0, errors_1.checkStatus)(createReply.status, "Generator create");
        // LLM__GENERATOR_WRITE (empty signal)
        const writePayload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GENERATOR_WRITE, {});
        const writeReply = decodeReply(await conn.execute(writePayload));
        (0, errors_1.checkStatus)(writeReply.status, "Generator write");
        return new LLMGenerator(conn);
    }
    /**
     * Accumulate prompt messages. Call before run().
     * Messages are formatted as JSON strings per the HailoRT chat format.
     */
    write(messages) {
        const jsonMessages = messages
            .map((m) => JSON.stringify({ role: m.role, content: m.content }))
            .join("");
        this.prompt += jsonMessages;
    }
    /**
     * Initiate generation and yield tokens as they are produced.
     */
    async *run() {
        // LLM__GENERATOR_GENERATE
        const genPayload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GENERATOR_GENERATE, {});
        const genReply = decodeReply(await this.conn.execute(genPayload));
        (0, errors_1.checkStatus)(genReply.status, "Generator generate");
        this.initialPrefixTokens =
            genReply.initialPrefixTokens ?? [];
        // First read: send prompt + prefix tokens
        let prevTokenId = null;
        let isFirst = true;
        while (true) {
            const generationInput = {};
            if (isFirst) {
                generationInput.initialPrompt = this.prompt;
                generationInput.tokens = this.initialPrefixTokens;
                isFirst = false;
            }
            else {
                generationInput.initialPrompt = "";
                generationInput.tokens = prevTokenId !== null ? [prevTokenId] : [];
            }
            const readPayload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GENERATOR_READ, {
                timeoutMs: 10_000,
                generationInput,
            });
            const readReply = decodeReply(await this.conn.execute(readPayload, 45_000));
            (0, errors_1.checkStatus)(readReply.status, "Generator read");
            const output = readReply.generationOutput;
            const status = readReply.generationStatus ?? 0;
            const tokenStr = output?.outputTokenStr ?? "";
            const tokenId = output?.outputTokenId ?? 0;
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
    async abort() {
        const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GENERATOR_ABORT, {});
        const reply = decodeReply(await this.conn.execute(payload));
        (0, errors_1.checkStatus)(reply.status, "Generator abort");
    }
    /**
     * Release the generator on the server.
     */
    async release() {
        const payload = encodeRequest(protocol_1.HailoGenAIActionID.LLM__GENERATOR_RELEASE, {});
        const reply = decodeReply(await this.conn.execute(payload));
        (0, errors_1.checkStatus)(reply.status, "Generator release");
    }
}
exports.LLMGenerator = LLMGenerator;
//# sourceMappingURL=llm.js.map