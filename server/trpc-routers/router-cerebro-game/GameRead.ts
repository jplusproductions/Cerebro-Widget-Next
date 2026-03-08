import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GameReadInputs, GameReadOutputs } from "./GameReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GameRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/game/read",
      summary: "GameRead() -> Returns a specific game.",
      tags: ["Games"],
    },
  })
  .input(GameReadInputs)
  .output(GameReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Game Read query")

    const targetGame = await CerebroClient.getGame({ id: input.id })
    if (!targetGame) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `Game not found: ${input.id}`
      })
    }

    return targetGame
  })
