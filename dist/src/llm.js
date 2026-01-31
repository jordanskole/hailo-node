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
function encodeRequest(actionId, fields) {
    const root = getProtoRoot();
    const RequestType = root.lookupType("GenAIRpcRequest");
    // Map action IDs to the oneof field names in GenAIRpcRequest
    const actionFieldMap = {
        [protocol_1.HailoGenAIActionID.LLM__CREATE]: "llmCreate",
        [protocol_1.HailoGenAIActionID.LLM__GET_GENERATOR_PARAMS]: "llmGetGeneratorParams",
        [protocol_1.HailoGenAIActionID.LLM__GENERATOR_CREATE]: "llmGeneratorCreate",
        [protocol_1.HailoGenAIActionID.LLM__GENERATOR_WRITE]: "llmGeneratorWrite",
        [protocol_1.HailoGenAIActionID.LLM__GENERATOR_GENERATE]: "llmGeneratorGenerate",
        [protocol_1.HailoGenAIActionID.LLM__GENERATOR_READ]: "llmGeneratorRead",
        [protocol_1.HailoGenAIActionID.LLM__GENERATOR_ABORT]: "llmGeneratorAbort",
        [protocol_1.HailoGenAIActionID.LLM__GENERATOR_RELEASE]: "llmGeneratorRelease",
        [protocol_1.HailoGenAIActionID.LLM__TOKENIZE]: "llmTokenize",
        [protocol_1.HailoGenAIActionID.LLM_CLEAR_CONTEXT]: "llmClearContext",
        [protocol_1.HailoGenAIActionID.LLM__GET_CONTEXT_USAGE_SIZE]: "llmGetContextUsageSize",
        [protocol_1.HailoGenAIActionID.LLM__GET_MAX_CONTEXT_CAPACITY]: "llmGetMaxContextCapacity",
        [protocol_1.HailoGenAIActionID.LLM_RELEASE]: "llmRelease",
    };
    const fieldName = actionFieldMap[actionId];
    if (!fieldName) {
        throw new Error(`No request field mapping for action ${actionId}`);
    }
    const message = RequestType.create({ [fieldName]: fields });
    const encoded = RequestType.encode(message).finish();
    return (0, protocol_1.packPayload)(actionId, encoded);
}
function decodeReply(buf) {
    const { body } = (0, protocol_1.unpackPayload)(buf);
    const root = getProtoRoot();
    const ReplyType = root.lookupType("GenAIRpcReply");
    const decoded = ReplyType.decode(body);
    const obj = ReplyType.toObject(decoded, {
        longs: Number,
        defaults: true,
    });
    // Extract the active oneof field
    const decodedAny = decoded;
    const reply = decoded.$type.fieldsArray.find((f) => decodedAny[f.name] != null && f.name !== "");
    if (reply) {
        return obj[reply.name];
    }
    return obj;
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
        const createReply = decodeReply(await conn.execute(createPayload, 45_000));
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