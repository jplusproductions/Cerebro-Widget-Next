import { z } from "zod"
import type { Division } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const DivisionReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the division in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const DivisionReadOutputs = z.custom<Division>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TDivisionReadInputs = z.TypeOf<typeof DivisionReadInputs>
export type TDivisionReadOutputs = z.TypeOf<typeof DivisionReadOutputs>
