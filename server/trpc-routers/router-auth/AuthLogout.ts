// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { publicProcedure } from "@/server/trpc"
import { AuthLogoutInputs, AuthLogoutOutputs } from "./AuthLogoutIO"
import { PORTAL_COOKIE_NAME } from "@/server/trpc-middlewares/jwt-construction"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AuthLogout = publicProcedure
  .meta({
    openapi: {
      method: "POST",
      path: "/auth/logout",
      summary: "AuthLogout() -> Logout User, deleting the auth cookie",
      tags: ["Auth"],
    },
  })
  .input(AuthLogoutInputs)
  .output(AuthLogoutOutputs)
  .mutation(async ({ ctx }) => {
    ctx.resHeaders.append(
      "Set-Cookie",
      `${PORTAL_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
    )
    return { message: "Logout Successful" }
  })
