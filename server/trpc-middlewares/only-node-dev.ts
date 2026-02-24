import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { middleware } from "@/server/trpc"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const onlyNodeDev = middleware(async ({ next }) => {
  if (process.env.NODE_ENV !== "development") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "This environment does not support this feature.",
    })
  }

  return next()
})
