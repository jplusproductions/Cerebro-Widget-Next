import { z } from "zod"
import type { Division } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const DivisionsListInputs = z.object({
  ...paginationInputs.shape,
  eventId: z.number().optional()
    .describe("Filter divisions by event ID"),
})

// Application Architecture || Define Singletons
// =======================================================================================
// =======================================================================================
export const DivisionsListItem = z.custom<Division>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const DivisionsListOutputs = z.object({
  divisions: z.array(DivisionsListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TDivisionsListItem = z.TypeOf<typeof DivisionsListItem>
export type TDivisionsListInputs = z.TypeOf<typeof DivisionsListInputs>
export type TDivisionsListOutputs = z.TypeOf<typeof DivisionsListOutputs>
