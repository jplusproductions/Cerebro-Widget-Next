// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { StandingReadInputs, StandingReadOutputs } from "./StandingReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const StandingRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/standing/read",
      summary: "StandingRead() -> Returns a single standing by ID.",
      tags: ["Standing"],
    },
  })
  .input(StandingReadInputs)
  .output(StandingReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Standing read query")
    return ExposureClient.getStanding({
      id: input.id,
    })
  })
