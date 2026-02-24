import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { publicProcedure } from "@/server/trpc"
import { AuthSessionReadInputs, AuthSessionReadOutputs } from "./AuthSessionReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AuthSessionRead = publicProcedure
  .meta({
    openapi: {
      method: "GET",
      path: "/auth/session/read",
      summary: "AuthSessionRead() -> Get the current user session",
      tags: ["Auth"],
    },
  })
  .input(AuthSessionReadInputs)
  .output(AuthSessionReadOutputs)
  .query(async ({ ctx }) => {
    return ctx.session
  })
