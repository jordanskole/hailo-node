import * as path from "path";
import * as fs from "fs";
import * as pbjs from "protobufjs-cli/pbjs";
import * as pbts from "protobufjs-cli/pbts";

const PROTO_DIR = path.resolve(__dirname, "..", "proto");
const OUT_DIR = path.resolve(__dirname, "..", "src", "generated");

const protoFile = path.join(PROTO_DIR, "genai_scheme.proto");
const jsOut = path.join(OUT_DIR, "genai_scheme.js");
const tsOut = path.join(OUT_DIR, "genai_scheme.d.ts");

fs.mkdirSync(OUT_DIR, { recursive: true });

function runPbjs(): Promise<void> {
  return new Promise((resolve, reject) => {
    pbjs.main(
      [
        "--target",
        "static-module",
        "--wrap",
        "commonjs",
        "--out",
        jsOut,
        protoFile,
      ],
      (err: Error | null) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}

function runPbts(): Promise<void> {
  return new Promise((resolve, reject) => {
    pbts.main(["--out", tsOut, jsOut], (err: Error | null) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function main() {
  console.log("Generating JS from proto...");
  await runPbjs();
  console.log("Generating TS declarations...");
  await runPbts();
  console.log(`Done. Output in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
