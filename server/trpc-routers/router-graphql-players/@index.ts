import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { PlayersList } from "./PlayersList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GraphQLPlayers = router({
  PlayersList,
})
