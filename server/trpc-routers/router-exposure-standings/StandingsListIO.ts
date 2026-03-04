import { z } from "zod"
import type { ExposureStanding } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationOutputs } from "@/prisma/validators/filters"

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

// Application Architecture || Define Singletons
// =======================================================================================
// =======================================================================================
export const StandingsListItem = z.custom<ExposureStanding>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const StandingsListOutputs = z.object({
  standings: z.array(StandingsListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TStandingsListItem = z.TypeOf<typeof StandingsListItem>
export type TStandingsListInputs = z.TypeOf<typeof StandingsListInputs>
export type TStandingsListOutputs = z.TypeOf<typeof StandingsListOutputs>
