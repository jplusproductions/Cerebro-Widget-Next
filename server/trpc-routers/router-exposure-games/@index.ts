import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { GamesList } from "./GamesList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureGames = router({
  GamesList,
})
