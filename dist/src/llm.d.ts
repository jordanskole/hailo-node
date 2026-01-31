import { HailoConnection } from "./connection";
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
export declare enum GenerationStatus {
    GENERATING = 0,
    MAX_TOKENS_REACHED = 1,
    LOGICAL_END_OF_GENERATION = 2,
    ABORTED = 3
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
export declare class HailoLLM {
    private conn;
    private promptTemplate;
    private defaultParams;
    private constructor();
    /**
     * Connect to a HailoRT GenAI LLM server and initialize a model.
     */
    static connect(options: LLMConnectOptions): Promise<HailoLLM>;
    /**
     * Get the model's default generator parameters.
     */
    getDefaultParams(): LLMGeneratorParams | null;
    /**
     * Get the model's prompt template string.
     */
    getPromptTemplate(): string;
    /**
     * Convenience method: generate a streaming response for the given messages.
     * Yields token strings as they are generated.
     */
    generate(messages: Message[], params?: Partial<LLMGeneratorParams>): AsyncGenerator<string, void, undefined>;
    /**
     * Create a generator for fine-grained control over the generation process.
     */
    createGenerator(params?: Partial<LLMGeneratorParams>): Promise<LLMGenerator>;
    /**
     * Clear the conversation context on the server.
     */
    clearContext(): Promise<void>;
    /**
     * Get current context usage (number of tokens in context).
     */
    getContextUsage(): Promise<number>;
    /**
     * Get the maximum context capacity (in tokens).
     */
    getMaxContextCapacity(): Promise<number>;
    /**
     * Tokenize a text string using the server's tokenizer.
     */
    tokenize(text: string): Promise<number[]>;
    /**
     * Release the LLM instance on the server and close the connection.
     */
    close(): Promise<void>;
}
export declare class LLMGenerator {
    private conn;
    private prompt;
    private initialPrefixTokens;
    private constructor();
    /** @internal */
    static create(conn: HailoConnection, params: LLMGeneratorParams): Promise<LLMGenerator>;
    /**
     * Accumulate prompt messages. Call before run().
     * Messages are formatted as JSON strings per the HailoRT chat format.
     */
    write(messages: Message[]): void;
    /**
     * Initiate generation and yield tokens as they are produced.
     */
    run(): AsyncGenerator<string, void, undefined>;
    /**
     * Abort an in-progress generation.
     */
    abort(): Promise<void>;
    /**
     * Release the generator on the server.
     */
    release(): Promise<void>;
}
//# sourceMappingURL=llm.d.ts.map