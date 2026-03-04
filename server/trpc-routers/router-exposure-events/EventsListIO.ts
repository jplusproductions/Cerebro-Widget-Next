import { z } from "zod"
import type { ExposureEvent } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const EventsListInputs = z.object({
  ...paginationInputs.shape,
})

// Application Architecture || Define Singletons
// =======================================================================================
// ===================================================================================
export const EventsListItem = z.custom<ExposureEvent>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const EventsListOutputs = z.object({
  events: z.array(EventsListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TEventsListItem = z.TypeOf<typeof EventsListItem>
export type TEventsListInputs = z.TypeOf<typeof EventsListInputs>
export type TEventsListOutputs = z.TypeOf<typeof EventsListOutputs>
