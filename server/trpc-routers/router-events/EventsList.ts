// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureEventsApi } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { EventsListInputs, EventsListOutputs } from "./EventsListIO"

const exposureApi = new ExposureEventsApi()

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

    const response = await exposureApi.getEvents({
      page: input.page,
      pagesize: input.pageSize,
    })

    let events = response.results.map((e) => ({
      id: e.Id,
      name: e.Name,
      startDate: e.StartDate,
      endDate: e.EndDate,
      image: e.Image,
      type: e.Type,
      gender: e.Gender,
      archive: e.Archive,
      city: e.Address?.City ?? "",
      stateRegion: e.Address?.StateRegion ?? "",
      organizationName: e.Organization?.Name ?? "",
    }))

    if (input.search) {
      const term = input.search.toLowerCase()
      events = events.filter((e) => e.name.toLowerCase().includes(term))
    }

    return {
      events,
      pagination: {
        page: response.page,
        pageSize: response.pageSize,
        totalPages: Math.ceil(response.total / response.pageSize),
        totalRecords: response.total,
      },
    }
  })
