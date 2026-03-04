import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { StandingRead } from "./StandingRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureStanding = router({
  StandingRead,
})
