/**
 * Common HailoRT status codes (from hailo/hailort.h)
 */
export declare enum HailoStatus {
    HAILO_SUCCESS = 0,
    HAILO_INVALID_ARGUMENT = 2,
    HAILO_UNINITIALIZED = 4294967295,
    HAILO_TIMEOUT = 6,
    HAILO_INSUFFICIENT_BUFFER = 8,
    HAILO_INTERNAL_FAILURE = 13,
    HAILO_COMMUNICATION_CLOSED = 23,
    HAILO_NOT_FOUND = 36,
    HAILO_DEVICE_IN_USE = 56
}
export declare class HailoError extends Error {
    readonly status: number;
    constructor(status: number, message?: string);
}
/**
 * Throw if status is not HAILO_SUCCESS.
 */
export declare function checkStatus(status: number, context?: string): void;
//# sourceMappingURL=errors.d.ts.map