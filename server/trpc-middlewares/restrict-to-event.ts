import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { middleware } from "@/server/trpc"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const restrictToEvent = middleware(async ({ ctx, getRawInput, next }) => {
  if (!ctx.session) {
    const input = (await getRawInput()) as Record<string, unknown> | undefined
    if (!input?.eventId) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "eventId is required when not authenticated" })
    }
  }
  return next()
})
