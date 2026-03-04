import { z } from "zod"
import type { ExposureEvent } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const EventReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the event in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const EventReadOutputs = z.custom<ExposureEvent>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TEventReadInputs = z.TypeOf<typeof EventReadInputs>
export type TEventReadOutputs = z.TypeOf<typeof EventReadOutputs>
