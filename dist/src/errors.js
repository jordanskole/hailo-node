"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HailoError = exports.HailoStatus = void 0;
exports.checkStatus = checkStatus;
/**
 * Common HailoRT status codes (from hailo/hailort.h)
 */
var HailoStatus;
(function (HailoStatus) {
    HailoStatus[HailoStatus["HAILO_SUCCESS"] = 0] = "HAILO_SUCCESS";
    HailoStatus[HailoStatus["HAILO_UNINITIALIZED"] = 1] = "HAILO_UNINITIALIZED";
    HailoStatus[HailoStatus["HAILO_INVALID_ARGUMENT"] = 2] = "HAILO_INVALID_ARGUMENT";
    HailoStatus[HailoStatus["HAILO_OUT_OF_HOST_MEMORY"] = 3] = "HAILO_OUT_OF_HOST_MEMORY";
    HailoStatus[HailoStatus["HAILO_TIMEOUT"] = 4] = "HAILO_TIMEOUT";
    HailoStatus[HailoStatus["HAILO_INSUFFICIENT_BUFFER"] = 5] = "HAILO_INSUFFICIENT_BUFFER";
    HailoStatus[HailoStatus["HAILO_INVALID_OPERATION"] = 6] = "HAILO_INVALID_OPERATION";
    HailoStatus[HailoStatus["HAILO_NOT_IMPLEMENTED"] = 7] = "HAILO_NOT_IMPLEMENTED";
    HailoStatus[HailoStatus["HAILO_INTERNAL_FAILURE"] = 8] = "HAILO_INTERNAL_FAILURE";
    HailoStatus[HailoStatus["HAILO_OPEN_FILE_FAILURE"] = 13] = "HAILO_OPEN_FILE_FAILURE";
    HailoStatus[HailoStatus["HAILO_NOT_FOUND"] = 61] = "HAILO_NOT_FOUND";
    HailoStatus[HailoStatus["HAILO_COMMUNICATION_CLOSED"] = 62] = "HAILO_COMMUNICATION_CLOSED";
    HailoStatus[HailoStatus["HAILO_DEVICE_IN_USE"] = 73] = "HAILO_DEVICE_IN_USE";
})(HailoStatus || (exports.HailoStatus = HailoStatus = {}));
class HailoError extends Error {
    status;
    constructor(status, message) {
        const statusName = HailoStatus[status] ?? `UNKNOWN(${status})`;
        super(message ?? `HailoRT error: ${statusName} (${status})`);
        this.name = "HailoError";
        this.status = status;
    }
}
exports.HailoError = HailoError;
/**
 * Throw if status is not HAILO_SUCCESS.
 */
function checkStatus(status, context) {
    if (status !== HailoStatus.HAILO_SUCCESS) {
        const msg = context
            ? `${context}: ${HailoStatus[status] ?? status}`
            : undefined;
        throw new HailoError(status, msg);
    }
}
//# sourceMappingURL=errors.js.map