// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { VenueReadInputs, VenueReadOutputs } from "./VenueReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const VenueRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/exposure/venue/read",
      summary: "VenueRead() -> Returns a single venue by ID.",
      tags: ["Venues"],
    },
  })
  .input(VenueReadInputs)
  .output(VenueReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Venue read query")
    return ExposureClient.getVenue({
      id: input.id,
    })
  })
