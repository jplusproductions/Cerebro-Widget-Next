import { z } from "zod"
import type { StandingsResponse } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const StandingsListInputs = z.object({
  eventId: z.number()
    .describe("The event ID"),
  divisionId: z.number().optional()
    .describe("Filter standings by division ID"),
  bracketId: z.number().optional()
    .describe("Filter standings by bracket ID"),
  display: z.string().optional()
    .describe("Display format"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const StandingsListOutputs = z.custom<StandingsResponse>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TStandingsListInputs = z.TypeOf<typeof StandingsListInputs>
export type TStandingsListOutputs = z.TypeOf<typeof StandingsListOutputs>
