import { serve } from "@hono/node-server";
import { HailoLLM } from "./llm";
import { loadConfig } from "./config";
import { Mutex } from "./mutex";
import { createApp } from "./routes";

async function main() {
  const config = loadConfig();
  const mutex = new Mutex();

  console.log(
    `Connecting to HailoRT LLM server at ${config.llmHostname}:${config.llmPort}...`
  );
  console.log(`Model: ${config.hefPath}`);

  const llm = await HailoLLM.connect({
    host: config.llmHostname,
    port: config.llmPort,
    hefPath: config.hefPath,
  });

  console.log("Connected to Hailo accelerator");

  const app = createApp(llm, mutex, config);

  const server = serve(
    {
      fetch: app.fetch,
      hostname: config.serverHost,
      port: config.serverPort,
    },
    (info) => {
      console.log(
        `Ollama-compatible API listening on http://${info.address}:${info.port}`
      );
      console.log(`Model: ${config.modelDisplayName}`);
      console.log(`System prompt: ${config.systemPrompt}`);
    }
  );

  const shutdown = async () => {
    console.log("\nShutting down...");
    server.close();
    await llm.close();
    console.log("Disconnected.");
    process.exit(0);
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
