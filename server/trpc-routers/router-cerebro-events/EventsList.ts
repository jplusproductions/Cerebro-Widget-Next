// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { EventsListInputs, EventsListOutputs } from "./EventsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const EventsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/events/list",
      summary: "EventsList() -> Returns a list of all events.",
      tags: ["Events"],
    },
  })
  .input(EventsListInputs)
  .output(EventsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Events list query")
    const offset = (input.page - 1) * input.pageSize
    const where = input.search ? { name: { _ilike: `%${input.search}%` } } : undefined
    const data = await CerebroClient.getEvents({ limit: input.pageSize, offset, where })

    const totalRecords = data.event_aggregate.aggregate?.count ?? 0
    const events = data.event.map((e) => ({
      id: e.id,
      name: e.name,
      gender: e.gender,
      level: e.level,
      location: e.location,
      region: e.region,
      startDate: e.start_date,
      endDate: e.end_date,
      createdDate: e.created_date,
      modifiedDate: e.modified_date,
    }))

    return {
      events,
      pagination: {
        page: input.page,
        pageSize: input.pageSize,
        totalPages: Math.ceil(totalRecords / input.pageSize),
        totalRecords,
      },
    }
  })
