// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GamesListInputs, GamesListOutputs } from "./GamesListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GamesList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/games/list",
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

    // Collect unique team names from games
    const teamNames = new Set<string>()
    for (const game of response.results) {
      if (game.HomeTeam?.Name) teamNames.add(game.HomeTeam.Name)
      if (game.AwayTeam?.Name) teamNames.add(game.AwayTeam.Name)
    }

    // PEACH JAM
    // 0f08bf49-b4fe-48b5-97da-56d0b2099dec
    // // Look up Cerebro teams by name
    // const cerebroTeams = teamNames.size > 0
    //   ? await CerebroClient.getTeams({
    //     where: { name: { _in: [...teamNames] } },
    //   })
    //   : null
    //
    // const abEliteTeams = cerebroTeams?.team.filter((t) => t.name === "AB Elite")
    // console.log("AB Elite teams:", abEliteTeams)

    return {
      games: response.results,
      pagination: response.pagination
    }
  })
