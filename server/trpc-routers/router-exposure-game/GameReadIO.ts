import { z } from "zod"
import type { Game } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const GameReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the game in the database"),
  includes: z.string().optional()
    .describe("Additional data to include in the response, comma-separated"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const GameReadOutputs = z.custom<Game>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TGameReadInputs = z.TypeOf<typeof GameReadInputs>
export type TGameReadOutputs = z.TypeOf<typeof GameReadOutputs>
