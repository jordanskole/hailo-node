export interface ServerConfig {
  serverPort: number;
  serverHost: string;
  systemPrompt: string;
  language: string;
  modelDisplayName: string;
  llmHostname: string;
  llmPort: number;
  hefPath: string;
}

export function loadConfig(): ServerConfig {
  const hefLibraryPath =
    process.env.HEF_LIBRARY_PATH ??
    "/usr/local/hailo/resources/models/hailo10h/";
  const hefDefaultModel =
    process.env.HEF_DEFAULT_MODEL ?? "Qwen2.5-1.5B-Instruct.hef";

  return {
    serverPort: parseInt(process.env.SERVER_PORT ?? "11434", 10),
    serverHost: process.env.SERVER_HOST ?? "0.0.0.0",
    systemPrompt:
      process.env.SYSTEM_PROMPT ??
      "You are a helpful assistant. Always respond in English.",
    language: process.env.LANGUAGE ?? "en",
    modelDisplayName: process.env.MODEL_DISPLAY_NAME ?? "qwen2.5:1.5b",
    llmHostname: process.env.LLM_HOSTNAME ?? "localhost",
    llmPort: parseInt(process.env.LLM_PORT_NUMBER ?? "12145", 10),
    hefPath: `${hefLibraryPath}${hefDefaultModel}`,
  };
}
