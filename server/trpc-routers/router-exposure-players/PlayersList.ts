// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { PlayersListInputs, PlayersListOutputs } from "./PlayersListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayersList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/players/list",
      summary: "PlayersList() -> Returns a list of players.",
      tags: ["Players"],
    },
  })
  .input(PlayersListInputs)
  .output(PlayersListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Players list query")

    const response = await ExposureClient.getPlayers({
      page: input.page,
      pagesize: input.pageSize,
      eventid: input.eventId,
      divisionid: input.divisionId,
      teamids: input.teamIds,
      playerids: input.playerIds,
    })

    console.log("response", response)

    return {
      players: response.results,
      pagination: response.pagination,
    }
  })
