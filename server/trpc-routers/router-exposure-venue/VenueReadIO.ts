import { z } from "zod"
import type { ExposureVenue } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const VenueReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the venue in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const VenueReadOutputs = z.custom<ExposureVenue>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TVenueReadInputs = z.TypeOf<typeof VenueReadInputs>
export type TVenueReadOutputs = z.TypeOf<typeof VenueReadOutputs>
