import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs, optionalSearch } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const EventsListInputs = z.object({
  ...optionalSearch.shape,
  ...paginationInputs.shape,
})

// Application Architecture || Define Singletons
// =======================================================================================
// ===================================================================================
export const EventsListItem = z.object({
  id: z.number(),
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  image: z.string(),
  type: z.number(),
  gender: z.number(),
  archive: z.boolean(),
  city: z.string(),
  stateRegion: z.string(),
  organizationName: z.string(),
})

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
