# hailo-node

Node.js/TypeScript client library for HailoRT GenAI LLM inference on Hailo-10H accelerators.

Provides both a programmatic TypeScript API and an **Ollama-compatible HTTP server**, so standard tools (Open WebUI, LangChain, `curl`) can use the Hailo accelerator as a drop-in LLM backend.

## Architecture

```
                                       ┌─────────────────────┐     PCIe     ┌─────────────┐
┌──────────────┐    HTTP/11434         │                     │ ◄──────────► │  Hailo-10H  │
│  Open WebUI  │ ──────────────►┐      │   hailort_server    │              │     TPU     │
│  LangChain   │                │      │   (GenAI Server)    │              └─────────────┘
│  curl / etc  │                │      └──────────▲──────────┘
└──────────────┘                │                 │
                         ┌──────▼──────┐    TCP/12145
                         │ hailo-node  │    Protobuf RPC
                         │ HTTP Server │──────────┘
                         └─────────────┘
```

## Prerequisites

### Hardware

- Raspberry Pi 5 (8GB recommended)
- Hailo AI+ Kit / AI HAT+ with Hailo-10H accelerator

### Software

- HailoRT 5.2.0+ built from source with GenAI server enabled
- `hailort_server` running with GenAI support
- Node.js 18+

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env with your Hailo server settings
```

### 3. Start the HailoRT server (if not running as a service)

```bash
hailort_server 0.0.0.0
```

### 4. Start the Ollama-compatible HTTP server

```bash
npm run start
```

The server listens on `http://0.0.0.0:11434` by default (the standard Ollama port).

### 5. Test it

```bash
# Check the server is running
curl http://localhost:11434/api/tags

# Chat (streaming)
curl -N http://localhost:11434/api/chat \
  -d '{"model":"qwen2.5:1.5b","messages":[{"role":"user","content":"What is 2+2?"}]}'

# Chat (non-streaming)
curl http://localhost:11434/api/chat \
  -d '{"model":"qwen2.5:1.5b","messages":[{"role":"user","content":"Hello"}],"stream":false}'
```

### Interactive CLI example

The original interactive chat is still available as an example:

```bash
npx ts-node examples/chat.ts /path/to/your/model.hef
```

## Ollama-Compatible HTTP API

The server exposes endpoints compatible with the [Ollama API](https://github.com/ollama/ollama/blob/main/docs/api.md), making it a drop-in backend for tools like Open WebUI, LangChain, and anything that speaks the Ollama protocol.

### Endpoints

| Method | Path            | Description                     |
| ------ | --------------- | ------------------------------- |
| POST   | `/api/chat`     | Chat completions (streaming/non-streaming) |
| POST   | `/api/generate` | Text generation (streaming/non-streaming)  |
| GET    | `/api/tags`     | List available models           |
| GET    | `/api/version`  | Server version                  |
| POST   | `/api/show`     | Model metadata                  |

### POST /api/chat

```bash
curl -N http://localhost:11434/api/chat -d '{
  "model": "qwen2.5:1.5b",
  "messages": [
    {"role": "user", "content": "Write a haiku about computing"}
  ],
  "stream": true,
  "options": {
    "temperature": 0.7,
    "top_p": 0.9,
    "num_predict": 256
  }
}'
```

Streams NDJSON (`application/x-ndjson`). Each line:

```json
{"model":"qwen2.5:1.5b","created_at":"...","message":{"role":"assistant","content":"token"},"done":false}
```

Final line includes `"done": true` with timing stats. Set `"stream": false` for a single JSON response.

### POST /api/generate

```bash
curl -N http://localhost:11434/api/generate -d '{
  "model": "qwen2.5:1.5b",
  "prompt": "Explain quantum computing in one sentence",
  "system": "You are a physics professor."
}'
```

Same streaming behavior as `/api/chat`, but uses a `response` field instead of `message`.

### Supported Options

| Ollama option       | Maps to               |
| ------------------- | ---------------------- |
| `temperature`       | `temperature`          |
| `top_p`             | `topP`                 |
| `top_k`             | `topK`                 |
| `num_predict`       | `maxGeneratedTokens`   |
| `seed`              | `seed`                 |
| `frequency_penalty` | `frequencyPenalty`     |

Unsupported options are silently ignored.

### System Prompt

A configurable system prompt is automatically prepended to requests that don't include a `role: "system"` message. This ensures the model responds in the configured language (Qwen2.5-1.5B defaults to Chinese without one). Callers can override by providing their own system message:

```bash
curl -N http://localhost:11434/api/chat -d '{
  "model": "qwen2.5:1.5b",
  "messages": [
    {"role": "system", "content": "You are a pirate. Respond in pirate speak."},
    {"role": "user", "content": "Hello"}
  ]
}'
```

### Configuration

All settings are read from environment variables (loaded from `.env`):

| Variable             | Default                                                    | Description              |
| -------------------- | ---------------------------------------------------------- | ------------------------ |
| `SERVER_PORT`        | `11434`                                                    | HTTP listen port         |
| `SERVER_HOST`        | `0.0.0.0`                                                 | HTTP bind address        |
| `SYSTEM_PROMPT`      | `You are a helpful assistant. Always respond in English.`  | Default system prompt    |
| `LANGUAGE`           | `en`                                                       | Language hint            |
| `MODEL_DISPLAY_NAME` | `qwen2.5:1.5b`                                            | Model name in API responses |
| `LLM_HOSTNAME`       | `localhost`                                                | Hailo RPC server host    |
| `LLM_PORT_NUMBER`    | `12145`                                                    | Hailo RPC server port    |
| `HEF_LIBRARY_PATH`   | `/usr/local/hailo/resources/models/hailo10h/`              | HEF directory on server  |
| `HEF_DEFAULT_MODEL`  | `Qwen2.5-1.5B-Instruct.hef`                               | HEF model filename       |

### Concurrency

The Hailo TCP connection is single-threaded. Concurrent HTTP requests are serialized via an internal mutex (FIFO queue), not rejected. Requests wait their turn rather than returning 503.

## Usage

### Basic LLM Inference

```typescript
import { HailoLLM, Message } from "hailo-node";

async function main() {
  // Connect to the HailoRT GenAI server
  const llm = await HailoLLM.connect({
    host: "localhost",
    port: 12145,
    hefPath: "/path/to/llm.hef",
  });

  // Generate a response
  const messages: Message[] = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is the capital of France?" },
  ];

  // Streaming generation
  for await (const token of llm.generate(messages)) {
    process.stdout.write(token);
  }

  await llm.close();
}

main();
```

### Generation Parameters

```typescript
const params = llm.getDefaultParams();
// {
//   temperature: 0.7,
//   topP: 0.8,
//   topK: 20,
//   frequencyPenalty: 1.1,
//   maxGeneratedTokens: 1024,
//   doSample: true,
//   seed: 0
// }

// Custom parameters via generator
const generator = await llm.createGenerator({
  temperature: 0.5,
  maxGeneratedTokens: 256,
});
```

### Context Management

```typescript
// Get current context usage (tokens)
const usage = await llm.getContextUsage();
console.log(`Context: ${usage} tokens`);

// Get max context capacity
const maxCtx = await llm.getMaxContextCapacity();
console.log(`Max capacity: ${maxCtx} tokens`);

// Clear context for new conversation
await llm.clearContext();
```

### Tool / Function Calling

Tool calling works the same way as with OpenAI, Anthropic, or Ollama — it's a client-side orchestration loop on top of regular token generation. The Hailo server is a pure token generator; tool calling is handled by formatting tool schemas into the prompt and parsing the model's output for tool call blocks.

The pattern:

1. Include tool definitions in your messages (using the model's expected format)
2. Stream tokens from `generate()`
3. Detect tool call syntax in the output (e.g., Qwen2.5 uses `<tool_call>...</tool_call>` tags)
4. Execute the tool locally
5. Feed the result back as a new message and resume generation

```typescript
import { HailoLLM, Message } from "hailo-node";

const toolDef = `You have access to the following tools:
- get_weather(location: string): Get current weather for a city

When you want to call a tool, use: <tool_call>{"name": "get_weather", "arguments": {"location": "Paris"}}</tool_call>`;

const messages: Message[] = [
  { role: "system", content: `You are a helpful assistant. ${toolDef}` },
  { role: "user", content: "What's the weather in Paris?" },
];

// Collect the full response
let response = "";
for await (const token of llm.generate(messages)) {
  response += token;
}

// Parse for tool calls and handle them
if (response.includes("<tool_call>")) {
  const toolCall = JSON.parse(
    response.match(/<tool_call>(.*?)<\/tool_call>/s)![1]
  );
  const result = await executeToolLocally(toolCall);

  // Feed result back and continue
  messages.push({ role: "assistant", content: response });
  messages.push({ role: "user", content: `Tool result: ${JSON.stringify(result)}` });

  for await (const token of llm.generate(messages)) {
    process.stdout.write(token);
  }
}
```

> **Note:** Tool calling quality depends on the model. Smaller models (e.g., Qwen2.5-1.5B) can follow the format but may produce unreliable results. Tool definitions also consume context window tokens, which are limited on Hailo.

## API Reference

### HailoLLM

#### `HailoLLM.connect(options): Promise<HailoLLM>`

Connect to a HailoRT GenAI LLM server.

| Option     | Type   | Default       | Description                          |
| ---------- | ------ | ------------- | ------------------------------------ |
| `host`     | string | `"localhost"` | Server hostname                      |
| `port`     | number | `12145`       | LLM server port                      |
| `hefPath`  | string | required      | Path to HEF model file on the server |
| `groupId`  | string | optional      | VDevice group ID                     |
| `loraName` | string | optional      | LoRA adapter name                    |

#### `llm.generate(messages, params?): AsyncGenerator<string>`

Stream tokens for the given messages.

#### `llm.createGenerator(params?): Promise<LLMGenerator>`

Create a generator for fine-grained control.

#### `llm.clearContext(): Promise<void>`

Clear the conversation context.

#### `llm.getContextUsage(): Promise<number>`

Get current context usage in tokens.

#### `llm.getMaxContextCapacity(): Promise<number>`

Get maximum context capacity in tokens.

#### `llm.tokenize(text): Promise<number[]>`

Tokenize a string using the server's tokenizer.

#### `llm.close(): Promise<void>`

Release resources and close connection.

## Server Ports

| Port  | Service     | Description                     |
| ----- | ----------- | ------------------------------- |
| 12133 | HailoRT RPC | Core HailoRT server             |
| 12145 | LLM GenAI   | Large Language Model inference  |
| 12147 | VLM GenAI   | Vision Language Model inference |
| 12149 | Speech2Text | Audio transcription             |

## Troubleshooting

### Connection refused on port 12145

Make sure `hailort_server` is running with an IP address:

```bash
# Check if server is running
ps aux | grep hailort_server

# Start with socket mode (required for Pi 5)
hailort_server 0.0.0.0
```

### "Failed to open device file /dev/hailo_pci_ep"

You're running `hailort_server` without an IP. On Pi 5, always use:

```bash
hailort_server 0.0.0.0   # or 127.0.0.1
```

### Device not found

```bash
# Check device exists
ls -la /dev/hailo*

# Check driver is loaded
lsmod | grep hailo

# Check PCIe detection
lspci | grep -i hailo
```

### Server built without GenAI support

Rebuild HailoRT with GenAI enabled:

```bash
cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DHAILO_BUILD_HAILORT_SERVER=ON \
  -DHAILO_BUILD_GENAI_SERVER=ON

cmake --build . --target hailort_server -j$(nproc)
```

## License

MIT

## Related Projects

- [HailoRT](https://github.com/hailo-ai/hailort) - Hailo Runtime Library
- [Hailo Model Zoo GenAI](https://github.com/hailo-ai/hailo_model_zoo_genai) - Pre-compiled GenAI HEF models
