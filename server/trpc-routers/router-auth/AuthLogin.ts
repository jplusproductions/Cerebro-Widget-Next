import { publicProcedure } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AuthLoginInputs, AuthLoginOutputs } from "./AuthLoginIO"
import { BetterAuth } from "@/server/trpc-contexts/context-auth"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AuthLogin = publicProcedure
  .meta({
    openapi: {
      method: "POST",
      path: "/auth/login",
      summary: "AuthLogin() -> Login a user via their email and password",
      tags: ["Auth"],
    },
  })
  .input(AuthLoginInputs)
  .output(AuthLoginOutputs)
  .mutation(async ({ input }) => {
    const result = await BetterAuth.api.signInEmail({
      body: {
        email: input.email,
        password: input.password,
      },
    })
    return result
  })
