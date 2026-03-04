// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { EventsListInputs, EventsListOutputs } from "./EventsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const EventsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/events/list",
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

    let events = response.results

    if (input.search) {
      const term = input.search.toLowerCase()
      events = events.filter((e) => e.Name.toLowerCase().includes(term))
    }

    return {
      events,
      pagination: response.pagination,
    }
  })
