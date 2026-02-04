# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Node.js/TypeScript client library for the HailoRT GenAI RPC server. Communicates with Hailo AI accelerator devices for LLM inference over TCP sockets using Protocol Buffers for message serialization. There are no native/C++ bindings — all communication is via a TCP RPC protocol.

## Build Commands

```bash
npm run build              # Generate protobuf code + compile TypeScript
npm run generate-proto     # Regenerate JS/TS from proto/genai_scheme.proto
npm run example:chat       # Run interactive chat example (args: <hef-path> [host] [port])
```

No test or lint commands are configured.

## Architecture

Three-layer design:

1. **Application layer** (`src/llm.ts`) — `HailoLLM` (main API, use static `connect()`) and `LLMGenerator` (stateful token-streaming generator). Manages RPC lifecycle: create model → create generator → write prompt → generate/read tokens → release.

2. **Protocol layer** (`src/protocol.ts`, `src/errors.ts`) — RPC action ID enum (`HailoGenAIActionID`), payload pack/unpack utilities, `HailoError` class with HailoRT status codes.

3. **Connection layer** (`src/connection.ts`) — `HailoConnection` wraps a TCP socket with length-prefixed framing (8-byte uint64 LE size prefix + 4-byte action ID + protobuf body). Request/response pattern via `execute()`.

### RPC request encoding

**Important:** The wire protocol sends inner proto types directly (e.g., `LLM_Create_Request`, `LLM_Create_Reply`), NOT wrapped in `GenAIRpcRequest`/`GenAIRpcReply`. The oneof wrappers exist in the proto schema but are only used internally by the C++ library. The action ID in the 4-byte header identifies which message type to decode. `encodeRequest()` and `decodeReply()` in `src/llm.ts` use `requestTypeMap`/`replyTypeMap` to map action IDs to proto type names. When adding new RPC actions, update both maps and the action ID enum.

### Token streaming loop

`LLMGenerator.run()` uses an async generator pattern. The first `LLM__GENERATOR_READ` sends `{ initialPrompt, tokens: prefixTokens }`. Subsequent reads send `{ initialPrompt: "", tokens: [prevTokenId] }`. The loop exits when `generationStatus !== GENERATING`.

### Protobuf code generation

`scripts/generate-proto.ts` runs `protobufjs-cli` (`pbjs` + `pbts`) to produce `src/generated/genai_scheme.js` and `.d.ts`. Do not hand-edit files in `src/generated/`.

## Key Conventions

- Public API exported from `src/index.ts`
- Protobuf schema lives in `proto/genai_scheme.proto`; generated code goes to `src/generated/` (do not edit generated files)
- `HailoLLM` constructor is private — always use `HailoLLM.connect()`
- TypeScript strict mode, ES2022 target, CommonJS modules
- Requires Node.js >= 18.0.0
- Default server port: 12145 (LLM GenAI)
- Timeouts: 10s default, 45s for `LLM__CREATE` and `LLM__GENERATOR_READ`
- All RPC replies are status-checked via `checkStatus()` which throws `HailoError` on failure

## Wire Protocol

Frames: `[8-byte length (uint64 LE)][4-byte action ID (uint32 LE)][protobuf message]`

Typical flow: `LLM__CREATE` → `LLM__GET_GENERATOR_PARAMS` → `LLM__GENERATOR_CREATE` → `LLM__GENERATOR_WRITE` → `LLM__GENERATOR_GENERATE` → repeated `LLM__GENERATOR_READ` until done → `LLM__GENERATOR_RELEASE` → `LLM_RELEASE`
