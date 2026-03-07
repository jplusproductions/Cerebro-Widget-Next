// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GraphQLPlayer } from "@/server/trpc-routers/router-cerebro-player/PlayerReadIO"
import { PlayersListInputs, PlayersListOutputs, TPlayersListItem } from "./PlayersListIO"

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
  .input(PlayersListInputs)
  .output(PlayersListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Players list query")
    const offset = (input.page - 1) * input.pageSize
    const data = await graphql.query<GraphQLPlayersResponse>(
      `query GetPlayers($limit: Int, $offset: Int) {
        player(limit: $limit, offset: $offset) {
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
        player_aggregate {
          aggregate {
            count
          }
        }
      }`,
    {
      limit: input.pageSize,
      offset,
    })

    console.log("Graphql", data)

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
