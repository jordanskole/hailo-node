import * as readline from "readline";
import { HailoLLM, Message } from "./index";

const HOST = process.env.LLM_HOSTNAME ?? "localhost";
const PORT = parseInt(process.env.LLM_PORT_NUMBER ?? "12145", 10);
const HEF_PATH = `${process.env.HEF_LIBRARY_PATH ?? "/usr/local/hailo/resources/models/hailo10h/"}${process.env.HEF_DEFAULT_MODEL ?? "Qwen2.5-1.5B-Instruct.hef"}`;

async function main() {
  console.log(`Connecting to HailoRT LLM server at ${HOST}:${PORT}...`);
  console.log(`Model: ${HEF_PATH}`);

  const llm = await HailoLLM.connect({
    host: HOST,
    port: PORT,
    hefPath: HEF_PATH,
  });

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
