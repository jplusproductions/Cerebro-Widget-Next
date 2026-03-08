// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { restrictToEvent } from "@/server/trpc-middlewares/restrict-to-event"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GamesListInputs, GamesListOutputs } from "./GamesListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GamesList = whiteListProcedure
  .use(restrictToEvent)
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/games/list",
      summary: "GamesList() -> Returns a list of all games.",
      tags: ["Games"],
    },
  })
  .input(GamesListInputs)
  .output(GamesListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Games list query")
    const offset = (input.page - 1) * input.pageSize
    const conditions: Record<string, unknown>[] = []
    if (input.eventId) conditions.push({ event_id: { _eq: input.eventId } })
    if (input.teamId) conditions.push({
      _or: [
        { team_one_id: { _eq: input.teamId } },
        { team_two_id: { _eq: input.teamId } },
      ],
    })
    if (input.playerId) conditions.push({ player_game: { player_id: { _eq: input.playerId } } })
    const where = conditions.length > 0 ? { _and: conditions } : undefined
    const data = await CerebroClient.getGames({ limit: input.pageSize, offset, where })

    const totalRecords = data.game_aggregate.aggregate?.count ?? 0

    return {
      games: data.game,
      pagination: {
        page: input.page,
        pageSize: input.pageSize,
        totalPages: Math.ceil(totalRecords / input.pageSize),
        totalRecords,
      },
    }
  })
