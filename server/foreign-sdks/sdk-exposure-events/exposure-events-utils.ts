/* eslint-disable */
import { TRPCError } from "@trpc/server"
import type { Error as ExposureError } from "./exposure-events-types"

// Application Architecture || Error Code to tRPC Code Mapping
// =======================================================================================
const ErrorCodeToTRPCCode: Record<number, TRPCError["code"]> = {
  0:  "INTERNAL_SERVER_ERROR", // Other
  1:  "NOT_FOUND",             // NotFound
  2:  "BAD_REQUEST",           // Invalid
  3:  "BAD_REQUEST",           // Required
  5:  "UNAUTHORIZED",          // InvalidCredentials
  6:  "FORBIDDEN",             // PermissionDenied
  7:  "CONFLICT",              // Duplicate
  8:  "BAD_REQUEST",           // Maximum
  9:  "BAD_REQUEST",           // Minimum
  10: "BAD_REQUEST",           // Inactive
  11: "BAD_REQUEST",           // Range
  12: "INTERNAL_SERVER_ERROR", // Unavailable
  13: "BAD_REQUEST",           // SecureConnection
  14: "CONFLICT",              // Exists
}

// Application Architecture || Error Helper
// =======================================================================================
export function throwExposureError(errors: ExposureError[]): never {
  const code = ErrorCodeToTRPCCode[errors[0]?.Code ?? 0] ?? "INTERNAL_SERVER_ERROR"
  throw new TRPCError({ code, message: errors.map((e) => e.Message).join("; ") })
}
