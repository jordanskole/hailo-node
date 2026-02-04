/**
 * Common HailoRT status codes (from hailo/hailort.h)
 */
export enum HailoStatus {
  HAILO_SUCCESS = 0,
  HAILO_UNINITIALIZED = 1,
  HAILO_INVALID_ARGUMENT = 2,
  HAILO_OUT_OF_HOST_MEMORY = 3,
  HAILO_TIMEOUT = 4,
  HAILO_INSUFFICIENT_BUFFER = 5,
  HAILO_INVALID_OPERATION = 6,
  HAILO_NOT_IMPLEMENTED = 7,
  HAILO_INTERNAL_FAILURE = 8,
  HAILO_OPEN_FILE_FAILURE = 13,
  HAILO_NOT_FOUND = 61,
  HAILO_COMMUNICATION_CLOSED = 62,
  HAILO_DEVICE_IN_USE = 73,
}

export class HailoError extends Error {
  public readonly status: number;

  constructor(status: number, message?: string) {
    const statusName =
      (HailoStatus as Record<number, string>)[status] ?? `UNKNOWN(${status})`;
    super(message ?? `HailoRT error: ${statusName} (${status})`);
    this.name = "HailoError";
    this.status = status;
  }
}

/**
 * Throw if status is not HAILO_SUCCESS.
 */
export function checkStatus(status: number, context?: string): void {
  if (status !== HailoStatus.HAILO_SUCCESS) {
    const msg = context
      ? `${context}: ${(HailoStatus as Record<number, string>)[status] ?? status}`
      : undefined;
    throw new HailoError(status, msg);
  }
}
