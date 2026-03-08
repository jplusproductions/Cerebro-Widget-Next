// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { StandingsListInputs, StandingsListOutputs } from "./StandingsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const StandingsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/standings/list",
      summary: "StandingsList() -> Returns a list of standings.",
      tags: ["Standings"],
    },
  })
  .input(StandingsListInputs)
  .output(StandingsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Standings list query")

    const response = await ExposureClient.getStandings({
      eventid: input.eventId,
      divisionid: input.divisionId,
      bracketid: input.bracketId,
      display: input.display,
    })

    return response
  })
