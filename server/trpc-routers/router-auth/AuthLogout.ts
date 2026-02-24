import { publicProcedure } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AuthLogoutInputs, AuthLogoutOutputs } from "./AuthLogoutIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AuthLogout = publicProcedure
  .meta({
    openapi: {
      method: "POST",
      path: "/auth/logout",
      summary: "AuthLogout() -> Logout User, deleting the `Authorization` header",
      tags: ["Auth"],
    },
  })
  .input(AuthLogoutInputs)
  .output(AuthLogoutOutputs)
  .mutation(async ({ }) => {
    return {
      message: "Logout Successful"
    }
  })
