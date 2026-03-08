// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { restrictToEvent } from "@/server/trpc-middlewares/restrict-to-event"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { TeamsListInputs, TeamsListOutputs } from "./TeamsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const TeamsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/teams/list",
      summary: "TeamsList() -> Returns a list of all teams.",
      tags: ["Teams"],
    },
  })
  .use(restrictToEvent)
  .input(TeamsListInputs)
  .output(TeamsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Teams list query")
    const offset = (input.page - 1) * input.pageSize
    const conditions: Record<string, unknown>[] = []
    if (input.search) conditions.push({ name: { _ilike: `%${input.search}%` } })
    if (input.eventId) conditions.push({ team_event: { event_id: { _eq: input.eventId } } })
    const where = conditions.length > 0 ? { _and: conditions } : undefined
    const data = await CerebroClient.getTeams({ limit: input.pageSize, offset, where })

    const totalRecords = data.team_aggregate.aggregate?.count ?? 0

    return {
      teams: data.team,
      pagination: {
        page: input.page,
        pageSize: input.pageSize,
        totalPages: Math.ceil(totalRecords / input.pageSize),
        totalRecords,
      },
    }
  })
