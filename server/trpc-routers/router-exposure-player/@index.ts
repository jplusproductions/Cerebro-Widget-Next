import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { PlayerRead } from "./PlayerRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposurePlayer = router({
  PlayerRead,
})
