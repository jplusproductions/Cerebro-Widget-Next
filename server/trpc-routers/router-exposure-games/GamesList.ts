// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { GamesListInputs, GamesListOutputs } from "./GamesListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GamesList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/games/list",
      summary: "GamesList() -> Returns a list of games.",
      tags: ["Games"],
    },
  })
  .input(GamesListInputs)
  .output(GamesListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Games list query")

    const response = await ExposureClient.getGames({
      page: input.page,
      pagesize: input.pageSize,
      eventid: input.eventId,
      divisionid: input.divisionId,
      teamid: input.teamId,
      date: input.date,
    })

    return {
      games: response.results,
      pagination: response.pagination
    }
  })
