// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { DivisionsListInputs, DivisionsListOutputs } from "./DivisionsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const DivisionsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/divisions/list",
      summary: "DivisionsList() -> Returns a list of divisions.",
      tags: ["Divisions"],
    },
  })
  .input(DivisionsListInputs)
  .output(DivisionsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Divisions list query")

    const response = await ExposureClient.getDivisions({
      page: input.page,
      pagesize: input.pageSize,
      eventid: input.eventId,
    })

    return {
      divisions: response.results,
      pagination: response.pagination,
    }
  })
