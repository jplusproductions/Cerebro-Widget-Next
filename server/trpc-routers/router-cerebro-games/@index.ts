import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { GamesList } from "./GamesList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterCerebroGames = router({
  GamesList,
})
