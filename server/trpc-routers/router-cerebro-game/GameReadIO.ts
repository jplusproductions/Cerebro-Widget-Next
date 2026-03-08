import { z } from "zod"
import type { Game } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const GameReadInputs = z.object({
  id: z.string().describe("The unique identifier of the game"),
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
