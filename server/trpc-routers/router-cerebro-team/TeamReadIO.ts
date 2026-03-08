import { z } from "zod"
import type { Team } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const TeamReadInputs = z.object({
  id: z.string().describe("The unique identifier of the team"),
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
