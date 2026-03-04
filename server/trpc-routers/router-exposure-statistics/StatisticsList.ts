// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { StatisticsListInputs, StatisticsListOutputs } from "./StatisticsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const StatisticsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/statistics/list",
      summary: "StatisticsList() -> Returns a list of statistics.",
      tags: ["Statistics"],
    },
  })
  .input(StatisticsListInputs)
  .output(StatisticsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Statistics list query")

    const response = await ExposureClient.getStatistics({
      eventid: input.eventId,
      divisionid: input.divisionId,
      categories: input.categories,
      pagesize: input.pageSize,
    })

    return {
      statistics: response.results,
      pagination: response.pagination,
    }
  })
