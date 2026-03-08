// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { protectedProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { EventsListInputs, EventsListOutputs } from "./EventsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const EventsList = protectedProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/events/list",
      summary: "EventsList() -> Returns a list of all events.",
      tags: ["Events"],
    },
  })
  .input(EventsListInputs)
  .output(EventsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Events list query")

    const response = await ExposureClient.getEvents({
      page: input.page,
      pagesize: input.pageSize,
    })

    return {
      events: response.results,
      pagination: response.pagination,
    }
  })
