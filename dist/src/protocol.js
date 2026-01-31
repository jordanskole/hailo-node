"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LENGTH_PREFIX_SIZE = exports.GENAI_HEADER_SIZE = exports.HailoGenAIActionID = void 0;
exports.packPayload = packPayload;
exports.unpackPayload = unpackPayload;
exports.packLengthPrefix = packLengthPrefix;
exports.readLengthPrefix = readLengthPrefix;
/**
 * GenAI RPC action IDs — mirrors HailoGenAIActionID from serializer.hpp
 */
var HailoGenAIActionID;
(function (HailoGenAIActionID) {
    HailoGenAIActionID[HailoGenAIActionID["LLM__CREATE"] = 0] = "LLM__CREATE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GET_GENERATOR_PARAMS"] = 1] = "LLM__GET_GENERATOR_PARAMS";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GENERATOR_CREATE"] = 2] = "LLM__GENERATOR_CREATE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GENERATOR_WRITE"] = 3] = "LLM__GENERATOR_WRITE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GENERATOR_GENERATE"] = 4] = "LLM__GENERATOR_GENERATE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GENERATOR_READ"] = 5] = "LLM__GENERATOR_READ";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GENERATOR_ABORT"] = 6] = "LLM__GENERATOR_ABORT";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GENERATOR_RELEASE"] = 7] = "LLM__GENERATOR_RELEASE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__TOKENIZE"] = 8] = "LLM__TOKENIZE";
    HailoGenAIActionID[HailoGenAIActionID["LLM_CLEAR_CONTEXT"] = 9] = "LLM_CLEAR_CONTEXT";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GET_CONTEXT"] = 10] = "LLM__GET_CONTEXT";
    HailoGenAIActionID[HailoGenAIActionID["LLM__SET_CONTEXT"] = 11] = "LLM__SET_CONTEXT";
    HailoGenAIActionID[HailoGenAIActionID["LLM__SET_END_OF_GENERATION_SEQUENCE"] = 12] = "LLM__SET_END_OF_GENERATION_SEQUENCE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GET_END_OF_GENERATION_SEQUENCE"] = 13] = "LLM__GET_END_OF_GENERATION_SEQUENCE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__SET_STOP_TOKENS"] = 14] = "LLM__SET_STOP_TOKENS";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GET_STOP_TOKENS"] = 15] = "LLM__GET_STOP_TOKENS";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GET_CONTEXT_USAGE_SIZE"] = 16] = "LLM__GET_CONTEXT_USAGE_SIZE";
    HailoGenAIActionID[HailoGenAIActionID["LLM__GET_MAX_CONTEXT_CAPACITY"] = 17] = "LLM__GET_MAX_CONTEXT_CAPACITY";
    HailoGenAIActionID[HailoGenAIActionID["LLM_RELEASE"] = 18] = "LLM_RELEASE";
    HailoGenAIActionID[HailoGenAIActionID["VLM__CREATE"] = 19] = "VLM__CREATE";
    HailoGenAIActionID[HailoGenAIActionID["VLM__GENERATOR_GENERATE"] = 20] = "VLM__GENERATOR_GENERATE";
    HailoGenAIActionID[HailoGenAIActionID["GENAI__CHECK_HEF_EXISTS"] = 21] = "GENAI__CHECK_HEF_EXISTS";
    HailoGenAIActionID[HailoGenAIActionID["SPEECH2TEXT__CREATE"] = 22] = "SPEECH2TEXT__CREATE";
    HailoGenAIActionID[HailoGenAIActionID["SPEECH2TEXT__GENERATE"] = 23] = "SPEECH2TEXT__GENERATE";
    HailoGenAIActionID[HailoGenAIActionID["SPEECH2TEXT__RELEASE"] = 24] = "SPEECH2TEXT__RELEASE";
    HailoGenAIActionID[HailoGenAIActionID["SPEECH2TEXT__TOKENIZE"] = 25] = "SPEECH2TEXT__TOKENIZE";
})(HailoGenAIActionID || (exports.HailoGenAIActionID = HailoGenAIActionID = {}));
/** Size of the GenAI RPC header (just action_id as uint32 LE) */
exports.GENAI_HEADER_SIZE = 4;
/** Size of the length prefix sent before each payload (uint64 LE / size_t on 64-bit) */
exports.LENGTH_PREFIX_SIZE = 8;
/**
 * Pack a GenAI payload: [4-byte action_id LE][protobuf bytes]
 */
function packPayload(actionId, protobufBytes) {
    const buf = Buffer.alloc(exports.GENAI_HEADER_SIZE + protobufBytes.length);
    buf.writeUInt32LE(actionId, 0);
    buf.set(protobufBytes, exports.GENAI_HEADER_SIZE);
    return buf;
}
/**
 * Unpack a GenAI payload into action_id and protobuf body.
 */
function unpackPayload(buf) {
    const actionId = buf.readUInt32LE(0);
    const body = buf.subarray(exports.GENAI_HEADER_SIZE);
    return { actionId, body };
}
/**
 * Pack a length prefix (uint64 LE) for the SessionWrapper framing.
 */
function packLengthPrefix(size) {
    const buf = Buffer.alloc(exports.LENGTH_PREFIX_SIZE);
    buf.writeBigUInt64LE(BigInt(size), 0);
    return buf;
}
/**
 * Read a length prefix (uint64 LE) from a buffer.
 */
function readLengthPrefix(buf) {
    return Number(buf.readBigUInt64LE(0));
}
//# sourceMappingURL=protocol.js.map