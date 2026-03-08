// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { TRPCError } from "@trpc/server"
import { whiteListProcedure } from "@/server/trpc"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GraphQLPlayer, PlayerReadInputs, PlayerReadOutputs } from "./PlayerReadIO"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const graphql = new CerebroGraphqlApi()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface GraphQLPlayerResponse {
  player_by_pk: GraphQLPlayer | null
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayerRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      path: "/cerebro/player/read",
      summary: "PlayerRead() -> Returns a specific player.",
      tags: ["Players"],
    },
  })
  .input(PlayerReadInputs)
  .output(PlayerReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Player Read query")
    const data = await graphql.query<GraphQLPlayerResponse>(
      `query GetPlayer($id: uuid!) {
        player_by_pk(id: $id) {
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
      }`,
      { id: input.id },
    )

    const p = data.player_by_pk
    if (!p) throw new TRPCError({ code: "NOT_FOUND", message: `Player not found: ${input.id}` })

    return {
      id: p.id,
      name: p.name,
      position: p.position,
      nationality: p.nationality,
      hometown: p.hometown,
      dateOfBirth: p.date_of_birth,
      heightInches: p.height_inches,
      weightLb: p.weight_lb,
      teamName: p.player_team[0]?.team.name ?? null,
    }
  })
