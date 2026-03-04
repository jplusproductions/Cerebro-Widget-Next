// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { GameReadInputs, GameReadOutputs } from "./GameReadIO"
import {TRPCError} from "@trpc/server"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GameRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/game/read",
      summary: "GameRead() -> Returns a single game by ID.",
      tags: ["Game"],
    },
  })
  .input(GameReadInputs)
  .output(GameReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Game read query")

    const response = await ExposureClient.getGame({
      id: input.id,
      includes: input.includes,
    })

    if(!response) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Game could not be found"
      })
    }

    console.log("response", response)

    return response
  })
