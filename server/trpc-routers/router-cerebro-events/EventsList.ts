// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GraphQLEvent } from "@/server/trpc-routers/router-cerebro-event/EventReadIO"
import { EventsListInputs, EventsListOutputs } from "./EventsListIO"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const graphql = new CerebroGraphqlApi()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface GraphQLEventsResponse {
  event: GraphQLEvent[]
  event_aggregate: { aggregate: { count: number } }
}

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
    const data = await graphql.query<GraphQLEventsResponse>(
      `query GetEvents($limit: Int, $offset: Int) {
        event(limit: $limit, offset: $offset) {
          id
          name
          gender
          level
          location
          region
          start_date
          end_date
          created_date
          modified_date
        }
        event_aggregate {
          aggregate {
            count
          }
        }
      }`,
      {
        limit: input.pageSize,
        offset,
      })

    const totalRecords = data.event_aggregate.aggregate.count
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
