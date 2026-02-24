import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { RouterAuth } from "./router-auth/@index"
import { RouterProfile } from "./router-profile/@index"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AppRouter = router({
  RouterAuth,
  RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
