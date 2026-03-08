import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { TeamsList } from "./TeamsList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterCerebroTeams = router({
  TeamsList,
})
