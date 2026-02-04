import { Hono } from "hono";
import { stream } from "hono/streaming";
import { HailoLLM, type Message, type LLMGeneratorParams } from "./llm";
import type { ServerConfig } from "./config";
import type { Mutex } from "./mutex";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatRequest {
  model?: string;
  messages: ChatMessage[];
  stream?: boolean;
  options?: Record<string, unknown>;
}

interface GenerateRequest {
  model?: string;
  prompt: string;
  system?: string;
  stream?: boolean;
  options?: Record<string, unknown>;
}

function mapOptions(
  options: Record<string, unknown> | undefined
): Partial<LLMGeneratorParams> {
  if (!options) return {};
  const mapped: Partial<LLMGeneratorParams> = {};
  if (typeof options.temperature === "number")
    mapped.temperature = options.temperature;
  if (typeof options.top_p === "number") mapped.topP = options.top_p;
  if (typeof options.top_k === "number") mapped.topK = options.top_k;
  if (typeof options.num_predict === "number")
    mapped.maxGeneratedTokens = options.num_predict;
  if (typeof options.seed === "number") mapped.seed = options.seed;
  if (typeof options.frequency_penalty === "number")
    mapped.frequencyPenalty = options.frequency_penalty;
  return mapped;
}

function prependSystemPrompt(
  messages: ChatMessage[],
  config: ServerConfig
): Message[] {
  const result: Message[] = messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));
  if (result.length > 0 && result[0].role !== "system" && config.systemPrompt) {
    result.unshift({ role: "system", content: config.systemPrompt });
  }
  return result;
}

export function createApp(
  llm: HailoLLM,
  mutex: Mutex,
  config: ServerConfig
): Hono {
  const app = new Hono();

  // POST /api/chat
  app.post("/api/chat", async (c) => {
    const body = (await c.req.json()) as ChatRequest;
    const messages = prependSystemPrompt(body.messages, config);
    const params = mapOptions(body.options);
    const model = config.modelDisplayName;
    const shouldStream = body.stream !== false;

    if (shouldStream) {
      return stream(c, async (s) => {
        c.header("Content-Type", "application/x-ndjson");

        const release = await mutex.acquire();
        const startTime = Date.now();
        let tokenCount = 0;
        let aborted = false;

        s.onAbort(() => {
          aborted = true;
        });

        try {
          for await (const token of llm.generate(messages, params)) {
            if (aborted) break;
            tokenCount++;
            const chunk = JSON.stringify({
              model,
              created_at: new Date().toISOString(),
              message: { role: "assistant", content: token },
              done: false,
            });
            await s.write(chunk + "\n");
          }

          const totalDuration = (Date.now() - startTime) * 1_000_000;
          const final = JSON.stringify({
            model,
            created_at: new Date().toISOString(),
            message: { role: "assistant", content: "" },
            done: true,
            total_duration: totalDuration,
            eval_count: tokenCount,
          });
          await s.write(final + "\n");
        } finally {
          release();
        }
      });
    }

    // Non-streaming
    const release = await mutex.acquire();
    const startTime = Date.now();
    let fullContent = "";
    let tokenCount = 0;

    try {
      for await (const token of llm.generate(messages, params)) {
        fullContent += token;
        tokenCount++;
      }
    } finally {
      release();
    }

    const totalDuration = (Date.now() - startTime) * 1_000_000;
    return c.json({
      model,
      created_at: new Date().toISOString(),
      message: { role: "assistant", content: fullContent },
      done: true,
      total_duration: totalDuration,
      eval_count: tokenCount,
    });
  });

  // POST /api/generate
  app.post("/api/generate", async (c) => {
    const body = (await c.req.json()) as GenerateRequest;
    const messages: Message[] = [];
    const systemContent = body.system ?? config.systemPrompt;
    if (systemContent) {
      messages.push({ role: "system", content: systemContent });
    }
    messages.push({ role: "user", content: body.prompt });
    const params = mapOptions(body.options);
    const model = config.modelDisplayName;
    const shouldStream = body.stream !== false;

    if (shouldStream) {
      return stream(c, async (s) => {
        c.header("Content-Type", "application/x-ndjson");

        const release = await mutex.acquire();
        const startTime = Date.now();
        let tokenCount = 0;
        let aborted = false;

        s.onAbort(() => {
          aborted = true;
        });

        try {
          for await (const token of llm.generate(messages, params)) {
            if (aborted) break;
            tokenCount++;
            const chunk = JSON.stringify({
              model,
              created_at: new Date().toISOString(),
              response: token,
              done: false,
            });
            await s.write(chunk + "\n");
          }

          const totalDuration = (Date.now() - startTime) * 1_000_000;
          const final = JSON.stringify({
            model,
            created_at: new Date().toISOString(),
            response: "",
            done: true,
            total_duration: totalDuration,
            eval_count: tokenCount,
          });
          await s.write(final + "\n");
        } finally {
          release();
        }
      });
    }

    // Non-streaming
    const release = await mutex.acquire();
    const startTime = Date.now();
    let fullResponse = "";
    let tokenCount = 0;

    try {
      for await (const token of llm.generate(messages, params)) {
        fullResponse += token;
        tokenCount++;
      }
    } finally {
      release();
    }

    const totalDuration = (Date.now() - startTime) * 1_000_000;
    return c.json({
      model,
      created_at: new Date().toISOString(),
      response: fullResponse,
      done: true,
      total_duration: totalDuration,
      eval_count: tokenCount,
    });
  });

  // GET /api/tags
  app.get("/api/tags", (c) => {
    return c.json({
      models: [
        {
          name: config.modelDisplayName,
          model: config.modelDisplayName,
          modified_at: new Date().toISOString(),
          size: 0,
          digest: "",
          details: {
            parent_model: "",
            format: "hef",
            family: "qwen2",
            parameter_size: "1.5B",
            quantization_level: "",
          },
        },
      ],
    });
  });

  // GET /api/version
  app.get("/api/version", (c) => {
    return c.json({ version: "0.1.0" });
  });

  // POST /api/show
  app.post("/api/show", (c) => {
    return c.json({
      modelfile: "",
      parameters: "",
      template: llm.getPromptTemplate(),
      details: {
        parent_model: "",
        format: "hef",
        family: "qwen2",
        parameter_size: "1.5B",
        quantization_level: "",
      },
      model_info: {
        "general.architecture": "qwen2",
        "general.parameter_count": 1_500_000_000,
      },
    });
  });

  return app;
}
