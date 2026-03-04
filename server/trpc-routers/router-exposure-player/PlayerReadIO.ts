import { z } from "zod"
import type { ExposurePlayer } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const PlayerReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the player in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const PlayerReadOutputs = z.custom<ExposurePlayer>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TPlayerReadInputs = z.TypeOf<typeof PlayerReadInputs>
export type TPlayerReadOutputs = z.TypeOf<typeof PlayerReadOutputs>
