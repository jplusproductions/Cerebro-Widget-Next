import { z } from "zod"
import type { Team } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const TeamReadInputs = z.object({
  id: z.number()
    .describe("The unique identifier of the event in the database"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const TeamReadOutputs = z.custom<Team>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TTeamReadInputs = z.TypeOf<typeof TeamReadInputs>
export type TTeamReadOutputs = z.TypeOf<typeof TeamReadOutputs>
