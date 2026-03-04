// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { VenuesListInputs, VenuesListOutputs } from "./VenuesListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const VenuesList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/venues/list",
      summary: "VenuesList() -> Returns a list of venues.",
      tags: ["Venues"],
    },
  })
  .input(VenuesListInputs)
  .output(VenuesListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Venues list query")

    const response = await ExposureClient.getVenues({
      eventid: input.eventId,
    })

    return {
      venues: response.results,
      pagination: response.pagination,
    }
  })
