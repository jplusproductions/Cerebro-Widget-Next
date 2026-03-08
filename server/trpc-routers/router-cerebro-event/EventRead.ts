// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { TRPCError } from "@trpc/server"
import { whiteListProcedure } from "@/server/trpc"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { EventReadInputs, EventReadOutputs } from "./EventReadIO"

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
    const e = await CerebroClient.getEvent({ id: input.id })
    if (!e) throw new TRPCError({ code: "NOT_FOUND", message: `Event not found: ${input.id}` })

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
