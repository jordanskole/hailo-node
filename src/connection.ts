import * as net from "net";
import { packLengthPrefix, readLengthPrefix, LENGTH_PREFIX_SIZE } from "./protocol";

const DEFAULT_TIMEOUT_MS = 10_000;

/**
 * Low-level TCP connection to a HailoRT GenAI server.
 *
 * Implements the SessionWrapper framing protocol:
 *   Write: [8 bytes: payload_size as uint64 LE][payload bytes]
 *   Read:  [8 bytes: payload_size as uint64 LE][payload bytes]
 */
export class HailoConnection {
  private socket: net.Socket | null = null;
  private readBuffer: Buffer = Buffer.alloc(0);
  private pendingReads: Array<{
    needed: number;
    resolve: (buf: Buffer) => void;
    reject: (err: Error) => void;
  }> = [];

  /**
   * Connect to a GenAI server.
   */
  async connect(host: string, port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const socket = net.createConnection({ host, port }, () => {
        this.socket = socket;
        resolve();
      });
      socket.on("error", (err) => {
        if (!this.socket) {
          reject(err);
        } else {
          this.drainError(err);
        }
      });
      socket.on("close", () => {
        this.drainError(new Error("Connection closed"));
      });
      socket.on("data", (chunk: Buffer) => {
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
  async execute(payload: Buffer, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<Buffer> {
    this.ensureConnected();
    await this.writeFrame(payload);
    return this.readFrame(timeoutMs);
  }

  /**
   * Write a length-prefixed frame to the socket.
   */
  async writeFrame(payload: Buffer): Promise<void> {
    this.ensureConnected();
    const prefix = packLengthPrefix(payload.length);
    await this.writeRaw(Buffer.concat([prefix, payload]));
  }

  /**
   * Read a length-prefixed frame from the socket.
   */
  async readFrame(timeoutMs = DEFAULT_TIMEOUT_MS): Promise<Buffer> {
    const sizeBytes = await this.readExact(LENGTH_PREFIX_SIZE, timeoutMs);
    const payloadSize = readLengthPrefix(sizeBytes);
    if (payloadSize === 0) {
      return Buffer.alloc(0);
    }
    return this.readExact(payloadSize, timeoutMs);
  }

  /**
   * Close the connection.
   */
  async close(): Promise<void> {
    if (this.socket) {
      this.socket.destroy();
      this.socket = null;
    }
  }

  get connected(): boolean {
    return this.socket !== null && !this.socket.destroyed;
  }

  // --- internals ---

  private ensureConnected(): void {
    if (!this.socket || this.socket.destroyed) {
      throw new Error("Not connected");
    }
  }

  private writeRaw(data: Buffer): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket!.write(data, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Read exactly `needed` bytes from the socket, with timeout.
   */
  private readExact(needed: number, timeoutMs: number): Promise<Buffer> {
    // Check if we already have enough buffered data
    if (this.readBuffer.length >= needed) {
      const result = this.readBuffer.subarray(0, needed);
      this.readBuffer = this.readBuffer.subarray(needed);
      return Promise.resolve(Buffer.from(result));
    }

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        const idx = this.pendingReads.findIndex((r) => r.resolve === resolve);
        if (idx >= 0) this.pendingReads.splice(idx, 1);
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
  private onData(chunk: Buffer): void {
    this.readBuffer = Buffer.concat([this.readBuffer, chunk]);
    this.drainPendingReads();
  }

  private drainPendingReads(): void {
    while (this.pendingReads.length > 0) {
      const front = this.pendingReads[0];
      if (this.readBuffer.length >= front.needed) {
        this.pendingReads.shift();
        const result = Buffer.from(this.readBuffer.subarray(0, front.needed));
        this.readBuffer = this.readBuffer.subarray(front.needed);
        front.resolve(result);
      } else {
        break;
      }
    }
  }

  private drainError(err: Error): void {
    const pending = this.pendingReads.splice(0);
    for (const p of pending) {
      p.reject(err);
    }
  }
}
