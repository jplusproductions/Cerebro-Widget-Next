import { z } from "zod"
import { ExposureGameSchema } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const GameReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the game in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const GameReadOutputs = ExposureGameSchema

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TGameReadInputs = z.TypeOf<typeof GameReadInputs>
export type TGameReadOutputs = z.TypeOf<typeof GameReadOutputs>
