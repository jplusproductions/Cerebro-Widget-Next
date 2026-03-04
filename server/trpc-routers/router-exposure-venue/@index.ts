import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { VenueRead } from "./VenueRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureVenue = router({
  VenueRead,
})
