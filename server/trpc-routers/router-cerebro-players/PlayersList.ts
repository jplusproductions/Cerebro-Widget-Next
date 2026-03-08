// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { restrictToEvent } from "@/server/trpc-middlewares/restrict-to-event"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GraphQLPlayer, TPlayersListItem } from "@/server/trpc-routers/router-cerebro-player/PlayerReadIO"
import { PlayersListInputs, PlayersListOutputs } from "./PlayersListIO"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const graphql = new CerebroGraphqlApi()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface GraphQLPlayersResponse {
  player: GraphQLPlayer[]
  player_aggregate: { aggregate: { count: number } }
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayersList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/players/list",
      summary: "PlayersList() -> Returns a list of all players.",
      tags: ["Players"],
    },
  })
  .use(restrictToEvent)
  .input(PlayersListInputs)
  .output(PlayersListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Players list query")
    const offset = (input.page - 1) * input.pageSize
    const conditions: Record<string, unknown>[] = []
    if (input.search) conditions.push({ name: { _ilike: `%${input.search}%` } })
    if (input.eventId) conditions.push({ player_event: { event_id: { _eq: input.eventId } } })
    if (input.teamId) conditions.push({ player_team: { team_id: { _eq: input.teamId } } })
    const where = conditions.length > 0 ? { _and: conditions } : undefined
    const data = await graphql.query<GraphQLPlayersResponse>(
      `query GetPlayers($limit: Int, $offset: Int, $where: player_bool_exp) {
        player(limit: $limit, offset: $offset, where: $where) {
          id
          name
          date_of_birth
          position
          height_inches
          weight_lb
          nationality
          hometown
          player_team {
            team {
              name
            }
          }
        }
        player_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }`,
      {
        limit: input.pageSize,
        offset,
        where,
      })

    const totalRecords = data.player_aggregate.aggregate.count
    const players: TPlayersListItem[] = data.player.map((p) => ({
      id: p.id,
      name: p.name,
      position: p.position,
      nationality: p.nationality,
      hometown: p.hometown,
      dateOfBirth: p.date_of_birth,
      heightInches: p.height_inches,
      weightLb: p.weight_lb,
      teamName: p.player_team[0]?.team.name ?? null,
    }))

    return {
      players,
      pagination: {
        page: input.page,
        pageSize: input.pageSize,
        totalPages: Math.ceil(totalRecords / input.pageSize),
        totalRecords,
      },
    }
  })
