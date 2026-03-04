// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { PlayerReadInputs, PlayerReadOutputs } from "./PlayerReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayerRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/player/read",
      summary: "PlayerRead() -> Returns a single player by ID.",
      tags: ["Player"],
    },
  })
  .input(PlayerReadInputs)
  .output(PlayerReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Player read query")
    return ExposureClient.getPlayer({
      id: input.id,
    })
  })
