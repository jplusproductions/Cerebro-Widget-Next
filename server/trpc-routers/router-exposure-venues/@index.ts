import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { VenuesList } from "./VenuesList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureVenues = router({
  VenuesList,
})
