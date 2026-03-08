import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AuthLogin } from "./AuthLogin"
import { AuthLogout } from "./AuthLogout"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterAuth = router({
  AuthLogin,
  AuthLogout,
})
