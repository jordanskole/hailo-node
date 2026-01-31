/**
 * Common HailoRT status codes (from hailo/hailort.h)
 */
export enum HailoStatus {
  HAILO_SUCCESS = 0,
  HAILO_INVALID_ARGUMENT = 2,
  HAILO_UNINITIALIZED = 0xffffffff,
  HAILO_TIMEOUT = 6,
  HAILO_INSUFFICIENT_BUFFER = 8,
  HAILO_INTERNAL_FAILURE = 13,
  HAILO_COMMUNICATION_CLOSED = 23,
  HAILO_NOT_FOUND = 36,
  HAILO_DEVICE_IN_USE = 56,
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
