import { z } from "zod"
import type { ExposureVenue } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationOutputs } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const VenuesListInputs = z.object({
  eventId: z.number().optional()
    .describe("Filter venues by event ID"),
})

// Application Architecture || Define Singletons
// =======================================================================================
// =======================================================================================
export const VenuesListItem = z.custom<ExposureVenue>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const VenuesListOutputs = z.object({
  venues: z.array(VenuesListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TVenuesListItem = z.TypeOf<typeof VenuesListItem>
export type TVenuesListInputs = z.TypeOf<typeof VenuesListInputs>
export type TVenuesListOutputs = z.TypeOf<typeof VenuesListOutputs>
