"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const pbjs = __importStar(require("protobufjs-cli/pbjs"));
const pbts = __importStar(require("protobufjs-cli/pbts"));
const PROTO_DIR = path.resolve(__dirname, "..", "proto");
const OUT_DIR = path.resolve(__dirname, "..", "src", "generated");
const protoFile = path.join(PROTO_DIR, "genai_scheme.proto");
const jsOut = path.join(OUT_DIR, "genai_scheme.js");
const tsOut = path.join(OUT_DIR, "genai_scheme.d.ts");
fs.mkdirSync(OUT_DIR, { recursive: true });
function runPbjs() {
    return new Promise((resolve, reject) => {
        pbjs.main([
            "--target",
            "static-module",
            "--wrap",
            "commonjs",
            "--out",
            jsOut,
            protoFile,
        ], (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
function runPbts() {
    return new Promise((resolve, reject) => {
        pbts.main(["--out", tsOut, jsOut], (err) => {
            if (err)
                reject(err);
            else
                resolve();
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
//# sourceMappingURL=generate-proto.js.map