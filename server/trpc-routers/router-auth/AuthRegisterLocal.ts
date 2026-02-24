import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { BetterAuth } from "@/server/trpc-contexts/context-auth"
import { publicProcedure } from "@/server/trpc"
import { AuthRegisterLocalInputs, AuthRegisterLocalOutputs } from "./AuthRegisterLocalIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AuthRegisterLocal = publicProcedure
  .meta({
    openapi: {
      method: "POST",
      path: "/auth/register/local",
      summary: "AuthRegisterLocal() -> The local registration strategy",
      tags: ["Auth"],
    },
  })
  .input(AuthRegisterLocalInputs)
  .output(AuthRegisterLocalOutputs)
  // @ts-ignore
  .mutation(async ({ input }) => {
    const result = await BetterAuth.api.signUpEmail({
      body: {
        email: input.email,
        password: input.password,
        name: input.name,
      },
    })
    return result
  })
