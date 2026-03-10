import { z } from "zod"
import type { Team } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@AppUtils/cross/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const TeamsListInputs = z.object({
  ...paginationInputs.shape,
})

// Application Architecture || Define Singletons
// =======================================================================================
// ===================================================================================
export const TeamsListItem = z.custom<Team>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const TeamsListOutputs = z.object({
  teams: z.array(TeamsListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TTeamsListItem = z.TypeOf<typeof TeamsListItem>
export type TTeamsListInputs = z.TypeOf<typeof TeamsListInputs>
export type TTeamsListOutputs = z.TypeOf<typeof TeamsListOutputs>
