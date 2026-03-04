// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { TeamsListInputs, TeamsListOutputs } from "./TeamsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const TeamsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/teams/list",
      summary: "TeamsList() -> Returns a list of all teams.",
      tags: ["Teams"],
    },
  })
  .input(TeamsListInputs)
  .output(TeamsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Teams list query")

    const response = await ExposureClient.getTeams({
      page: input.page,
      pagesize: input.pageSize,
    })

    return {
      teams: response.results,
      pagination: response.pagination,
    }
  })
