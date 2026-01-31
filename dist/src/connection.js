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
exports.HailoConnection = void 0;
const net = __importStar(require("net"));
const protocol_1 = require("./protocol");
const DEFAULT_TIMEOUT_MS = 10_000;
/**
 * Low-level TCP connection to a HailoRT GenAI server.
 *
 * Implements the SessionWrapper framing protocol:
 *   Write: [8 bytes: payload_size as uint64 LE][payload bytes]
 *   Read:  [8 bytes: payload_size as uint64 LE][payload bytes]
 */
class HailoConnection {
    socket = null;
    readBuffer = Buffer.alloc(0);
    pendingReads = [];
    /**
     * Connect to a GenAI server.
     */
    async connect(host, port) {
        return new Promise((resolve, reject) => {
            const socket = net.createConnection({ host, port }, () => {
                this.socket = socket;
                resolve();
            });
            socket.on("error", (err) => {
                if (!this.socket) {
                    reject(err);
                }
                else {
                    this.drainError(err);
                }
            });
            socket.on("close", () => {
                this.drainError(new Error("Connection closed"));
            });
            socket.on("data", (chunk) => {
                this.onData(chunk);
            });
        });
    }
    /**
     * Send a payload and read the response (request/response pattern).
     *
     * Sends: [8-byte length prefix][payload]
     * Reads: [8-byte length prefix][response payload]
     */
    async execute(payload, timeoutMs = DEFAULT_TIMEOUT_MS) {
        this.ensureConnected();
        await this.writeFrame(payload);
        return this.readFrame(timeoutMs);
    }
    /**
     * Write a length-prefixed frame to the socket.
     */
    async writeFrame(payload) {
        this.ensureConnected();
        const prefix = (0, protocol_1.packLengthPrefix)(payload.length);
        await this.writeRaw(Buffer.concat([prefix, payload]));
    }
    /**
     * Read a length-prefixed frame from the socket.
     */
    async readFrame(timeoutMs = DEFAULT_TIMEOUT_MS) {
        const sizeBytes = await this.readExact(protocol_1.LENGTH_PREFIX_SIZE, timeoutMs);
        const payloadSize = (0, protocol_1.readLengthPrefix)(sizeBytes);
        if (payloadSize === 0) {
            return Buffer.alloc(0);
        }
        return this.readExact(payloadSize, timeoutMs);
    }
    /**
     * Close the connection.
     */
    async close() {
        if (this.socket) {
            this.socket.destroy();
            this.socket = null;
        }
    }
    get connected() {
        return this.socket !== null && !this.socket.destroyed;
    }
    // --- internals ---
    ensureConnected() {
        if (!this.socket || this.socket.destroyed) {
            throw new Error("Not connected");
        }
    }
    writeRaw(data) {
        return new Promise((resolve, reject) => {
            this.socket.write(data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    }
    /**
     * Read exactly `needed` bytes from the socket, with timeout.
     */
    readExact(needed, timeoutMs) {
        // Check if we already have enough buffered data
        if (this.readBuffer.length >= needed) {
            const result = this.readBuffer.subarray(0, needed);
            this.readBuffer = this.readBuffer.subarray(needed);
            return Promise.resolve(Buffer.from(result));
        }
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                const idx = this.pendingReads.findIndex((r) => r.resolve === resolve);
                if (idx >= 0)
                    this.pendingReads.splice(idx, 1);
                reject(new Error(`Read timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            this.pendingReads.push({
                needed,
                resolve: (buf) => {
                    clearTimeout(timer);
                    resolve(buf);
                },
                reject: (err) => {
                    clearTimeout(timer);
                    reject(err);
                },
            });
        });
    }
    /**
     * Called when data arrives on the socket. Fulfills pending reads.
     */
    onData(chunk) {
        this.readBuffer = Buffer.concat([this.readBuffer, chunk]);
        this.drainPendingReads();
    }
    drainPendingReads() {
        while (this.pendingReads.length > 0) {
            const front = this.pendingReads[0];
            if (this.readBuffer.length >= front.needed) {
                this.pendingReads.shift();
                const result = Buffer.from(this.readBuffer.subarray(0, front.needed));
                this.readBuffer = this.readBuffer.subarray(front.needed);
                front.resolve(result);
            }
            else {
                break;
            }
        }
    }
    drainError(err) {
        const pending = this.pendingReads.splice(0);
        for (const p of pending) {
            p.reject(err);
        }
    }
}
exports.HailoConnection = HailoConnection;
//# sourceMappingURL=connection.js.map