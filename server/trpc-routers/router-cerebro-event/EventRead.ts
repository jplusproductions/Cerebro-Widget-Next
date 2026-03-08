// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GraphQLEvent, EventReadInputs, EventReadOutputs } from "./EventReadIO"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const graphql = new CerebroGraphqlApi()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface GraphQLEventResponse {
  event_by_pk: GraphQLEvent | null
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const EventRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/event/read",
      summary: "EventRead() -> Returns a specific event.",
      tags: ["Events"],
    },
  })
  .input(EventReadInputs)
  .output(EventReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Event Read query")
    const data = await graphql.query<GraphQLEventResponse>(
      `query GetEvent($id: uuid!) {
        event_by_pk(id: $id) {
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
      }`,
      { id: input.id },
    )

    const e = data.event_by_pk
    if (!e) throw new Error(`Event not found: ${input.id}`)

    return {
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
    }
  })
