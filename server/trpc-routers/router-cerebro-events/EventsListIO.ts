import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@/prisma/validators/filters"
import { EventReadOutputs } from "@/server/trpc-routers/router-cerebro-event/EventReadIO"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const EventsListInputs = z.object({
  ...paginationInputs.shape,
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const EventsListOutputs = z.object({
  events: z.array(EventReadOutputs),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TEventsListInputs = z.TypeOf<typeof EventsListInputs>
export type TEventsListOutputs = z.TypeOf<typeof EventsListOutputs>
