/**
 * Low-level TCP connection to a HailoRT GenAI server.
 *
 * Implements the SessionWrapper framing protocol:
 *   Write: [8 bytes: payload_size as uint64 LE][payload bytes]
 *   Read:  [8 bytes: payload_size as uint64 LE][payload bytes]
 */
export declare class HailoConnection {
    private socket;
    private readBuffer;
    private pendingReads;
    /**
     * Connect to a GenAI server.
     */
    connect(host: string, port: number): Promise<void>;
    /**
     * Send a payload and read the response (request/response pattern).
     *
     * Sends: [8-byte length prefix][payload]
     * Reads: [8-byte length prefix][response payload]
     */
    execute(payload: Buffer, timeoutMs?: number): Promise<Buffer>;
    /**
     * Write a length-prefixed frame to the socket.
     */
    writeFrame(payload: Buffer): Promise<void>;
    /**
     * Read a length-prefixed frame from the socket.
     */
    readFrame(timeoutMs?: number): Promise<Buffer>;
    /**
     * Close the connection.
     */
    close(): Promise<void>;
    get connected(): boolean;
    private ensureConnected;
    private writeRaw;
    /**
     * Read exactly `needed` bytes from the socket, with timeout.
     */
    private readExact;
    /**
     * Called when data arrives on the socket. Fulfills pending reads.
     */
    private onData;
    private drainPendingReads;
    private drainError;
}
//# sourceMappingURL=connection.d.ts.map