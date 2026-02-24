import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AuthLogin } from "./AuthLogin"
import { AuthLogout } from "./AuthLogout"
import { AuthRegisterLocal } from "./AuthRegisterLocal"
import { AuthSessionRead } from "./AuthSessionRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterAuth = router({
  AuthLogin,
  AuthLogout,
  AuthRegisterLocal,
  AuthSessionRead,
})
