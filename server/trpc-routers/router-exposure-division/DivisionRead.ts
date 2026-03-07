// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { ExposureClient } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-api"
import { DivisionReadInputs, DivisionReadOutputs } from "./DivisionReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const DivisionRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/exposure/division/read",
      summary: "DivisionRead() -> Returns a single division by ID.",
      tags: ["Divisions"],
    },
  })
  .input(DivisionReadInputs)
  .output(DivisionReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Division read query")
    return ExposureClient.getDivision({
      id: input.id,
    })
  })
