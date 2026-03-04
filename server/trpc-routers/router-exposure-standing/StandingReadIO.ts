import { z } from "zod"
import type { ExposureStanding } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const StandingReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the standing in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const StandingReadOutputs = z.custom<ExposureStanding>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TStandingReadInputs = z.TypeOf<typeof StandingReadInputs>
export type TStandingReadOutputs = z.TypeOf<typeof StandingReadOutputs>
