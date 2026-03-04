import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { GameRead } from "./GameRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureGame = router({
  GameRead,
})
