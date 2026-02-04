# hailo-node

Node.js/TypeScript bindings for HailoRT GenAI LLM inference on Hailo-10H accelerators.

This library provides a high-level interface to run LLM inference on Hailo hardware via the HailoRT GenAI RPC server.

## Architecture

```
┌─────────────────┐     TCP/12145     ┌─────────────────────┐     PCIe     ┌─────────────┐
│   hailo-node    │ ◄───────────────► │   hailort_server    │ ◄──────────► │  Hailo-10H  │
│   (Your App)    │    Protobuf RPC   │   (GenAI Server)    │              │     TPU     │
└─────────────────┘                   └─────────────────────┘              └─────────────┘
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

### 1. Verify your setup

Run the included check script to verify everything is configured correctly:

```bash
./check-hailo-setup.sh
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the HailoRT server (if not running as a service)

```bash
hailort_server 0.0.0.0
```

### 4. Run the example

```bash
npx ts-node examples/chat.ts /path/to/your/model.hef
```

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

### Function/Tool Calling

```typescript
import { HailoLLM, Message } from "hailo-node";

const tools = [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "Get the current weather for a location",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string", description: "City name" },
        },
        required: ["location"],
      },
    },
  },
];

const messages: Message[] = [
  { role: "user", content: "What's the weather in Paris?" },
];

// Generate with tools (model may request tool calls)
for await (const token of llm.generate(messages, { tools })) {
  process.stdout.write(token);
}
```

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

## Building HailoRT from Source

See [BUILDING.md](./BUILDING.md) for complete instructions on building HailoRT 5.2.0 with GenAI server support.

## License

MIT

## Related Projects

- [HailoRT](https://github.com/hailo-ai/hailort) - Hailo Runtime Library
- [Hailo Model Zoo GenAI](https://github.com/hailo-ai/hailo_model_zoo_genai) - Pre-compiled GenAI HEF models
