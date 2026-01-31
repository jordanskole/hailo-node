import * as readline from "readline";
import { HailoLLM, Message } from "../src";

const HEF_PATH = process.argv[2];

if (!HEF_PATH) {
  console.error("Usage: npx ts-node examples/chat.ts <hef-path> [host] [port]");
  console.error("  hef-path: Path to the HEF model file on the server");
  console.error("  host:     Server host (default: localhost)");
  console.error("  port:     LLM server port (default: 12145)");
  process.exit(1);
}

const HOST = process.argv[3] ?? "localhost";
const PORT = parseInt(process.argv[4] ?? "12145", 10);

async function main() {
  console.log(`Connecting to HailoRT LLM server at ${HOST}:${PORT}...`);

  const llm = await HailoLLM.connect({
    host: HOST,
    port: PORT,
    hefPath: HEF_PATH,
  });

  const params = llm.getDefaultParams();
  if (params) {
    console.log("Default params:", params);
  }

  const maxCtx = await llm.getMaxContextCapacity();
  console.log(`Max context capacity: ${maxCtx} tokens`);
  console.log('Type your message and press Enter. Type "quit" to exit.\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const prompt = (query: string): Promise<string> =>
    new Promise((resolve) => rl.question(query, resolve));

  try {
    while (true) {
      const userInput = await prompt("You: ");
      if (userInput.toLowerCase() === "quit") break;
      if (!userInput.trim()) continue;

      const messages: Message[] = [{ role: "user", content: userInput }];

      process.stdout.write("Assistant: ");
      for await (const token of llm.generate(messages)) {
        process.stdout.write(token);
      }
      process.stdout.write("\n\n");
    }
  } finally {
    rl.close();
    await llm.close();
    console.log("Disconnected.");
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
