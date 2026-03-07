// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { EventReadInputs, EventReadOutputs } from "./EventReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const EventRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/event/read",
      summary: "EventRead() -> Returns a single event by ID.",
      tags: ["Events"],
    },
  })
  .input(EventReadInputs)
  .output(EventReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Event read query")

    return ExposureClient.getEvent({
      id: input.id,
      includes: input.includes,
    })
  })
