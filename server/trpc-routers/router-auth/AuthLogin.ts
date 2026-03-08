import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { publicProcedure } from "@/server/trpc"
import { AuthLoginInputs, AuthLoginOutputs } from "./AuthLoginIO"
import { createPortalToken, PORTAL_COOKIE_NAME } from "@/server/trpc-middlewares/jwt-construction"

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
  .mutation(async ({ input, ctx }) => {
    const validEmail = process.env.CEREBRO_USERNAME
    const validPassword = process.env.CEREBRO_PASSWORD

    if (input.email !== validEmail || input.password !== validPassword) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid credentials" })
    }

    const token = createPortalToken(input.email)
    const secure = process.env.NODE_ENV === "production"
    ctx.resHeaders.append(
      "Set-Cookie",
      `${PORTAL_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${secure ? "; Secure" : ""}`,
    )

    return { token }
  })
