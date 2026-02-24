import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { middleware } from "@/server/trpc"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const onlyTestEnvs = middleware(async ({ next }) => {
  const allowedEnvs = ["local", "dev", "stage", "demo"]

  // Allow Local Development to work on any testing env
  if (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_BUILD_ENV !== "prod") {
    return next()
  }

  if (!allowedEnvs.includes(process.env.NEXT_PUBLIC_BUILD_ENV ?? "")) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "This environment does not support this feature.",
    })
  }
  return next()
})
