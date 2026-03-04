import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { StandingsList } from "./StandingsList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureStandings = router({
  StandingsList,
})
