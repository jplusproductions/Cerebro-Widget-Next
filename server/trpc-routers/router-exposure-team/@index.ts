import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { TeamRead } from "./TeamRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureTeam = router({
  EventRead: TeamRead
})
