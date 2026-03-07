// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { PlayerInputs, PlayerOutputs, TPlayerItem } from "./PlayerIO"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const graphql = new CerebroGraphqlApi()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface GraphQLPlayer {
  id: string
  name: string
  date_of_birth: string | null
  position: string | null
  height_inches: number | null
  weight_lb: number | null
  nationality: string | null
  hometown: string | null
  player_team: Array<{ team: { name: string } }>
}

interface GraphQLPlayersResponse {
  player: GraphQLPlayer[]
  player_aggregate: { aggregate: { count: number } }
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const Player = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/player/read",
      summary: "Player() -> Returns a specific player.",
      tags: ["Players"],
    },
  })
  .input(PlayerInputs)
  .output(PlayerOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Player Read list query")

  })
