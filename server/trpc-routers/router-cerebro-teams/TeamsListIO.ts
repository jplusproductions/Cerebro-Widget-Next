import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@/prisma/validators/filters"
import { TeamReadOutputs } from "@/server/trpc-routers/router-cerebro-team/TeamReadIO"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const TeamsListInputs = z.object({
  ...paginationInputs.shape,
  search: z.string().optional().describe("Filter teams by name (case-insensitive)"),
  eventId: z.string().optional().describe("Filter teams by event ID"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const TeamsListOutputs = z.object({
  teams: z.array(TeamReadOutputs),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TTeamsListInputs = z.TypeOf<typeof TeamsListInputs>
export type TTeamsListOutputs = z.TypeOf<typeof TeamsListOutputs>
