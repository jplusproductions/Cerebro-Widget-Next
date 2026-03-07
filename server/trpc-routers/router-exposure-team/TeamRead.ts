// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { TeamReadInputs, TeamReadOutputs } from "./TeamReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const TeamRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/team/read",
      summary: "TeamRead() -> Returns a single event by ID.",
      tags: ["Teams"],
    },
  })
  .input(TeamReadInputs)
  .output(TeamReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Team read query")

    return ExposureClient.getTeam({
      id: input.id,
    })
  })
