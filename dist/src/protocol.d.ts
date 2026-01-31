/**
 * GenAI RPC action IDs — mirrors HailoGenAIActionID from serializer.hpp
 */
export declare enum HailoGenAIActionID {
    LLM__CREATE = 0,
    LLM__GET_GENERATOR_PARAMS = 1,
    LLM__GENERATOR_CREATE = 2,
    LLM__GENERATOR_WRITE = 3,
    LLM__GENERATOR_GENERATE = 4,
    LLM__GENERATOR_READ = 5,
    LLM__GENERATOR_ABORT = 6,
    LLM__GENERATOR_RELEASE = 7,
    LLM__TOKENIZE = 8,
    LLM_CLEAR_CONTEXT = 9,
    LLM__GET_CONTEXT = 10,
    LLM__SET_CONTEXT = 11,
    LLM__SET_END_OF_GENERATION_SEQUENCE = 12,
    LLM__GET_END_OF_GENERATION_SEQUENCE = 13,
    LLM__SET_STOP_TOKENS = 14,
    LLM__GET_STOP_TOKENS = 15,
    LLM__GET_CONTEXT_USAGE_SIZE = 16,
    LLM__GET_MAX_CONTEXT_CAPACITY = 17,
    LLM_RELEASE = 18,
    VLM__CREATE = 19,
    VLM__GENERATOR_GENERATE = 20,
    GENAI__CHECK_HEF_EXISTS = 21,
    SPEECH2TEXT__CREATE = 22,
    SPEECH2TEXT__GENERATE = 23,
    SPEECH2TEXT__RELEASE = 24,
    SPEECH2TEXT__TOKENIZE = 25
}
/** Size of the GenAI RPC header (just action_id as uint32 LE) */
export declare const GENAI_HEADER_SIZE = 4;
/** Size of the length prefix sent before each payload (uint64 LE / size_t on 64-bit) */
export declare const LENGTH_PREFIX_SIZE = 8;
/**
 * Pack a GenAI payload: [4-byte action_id LE][protobuf bytes]
 */
export declare function packPayload(actionId: number, protobufBytes: Uint8Array): Buffer;
/**
 * Unpack a GenAI payload into action_id and protobuf body.
 */
export declare function unpackPayload(buf: Buffer): {
    actionId: number;
    body: Buffer;
};
/**
 * Pack a length prefix (uint64 LE) for the SessionWrapper framing.
 */
export declare function packLengthPrefix(size: number): Buffer;
/**
 * Read a length prefix (uint64 LE) from a buffer.
 */
export declare function readLengthPrefix(buf: Buffer): number;
//# sourceMappingURL=protocol.d.ts.map