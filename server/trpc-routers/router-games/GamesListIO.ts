import { z } from "zod"
import type { ExposureGame } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs, optionalSearch } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const GamesListInputs = z.object({
  ...optionalSearch.shape,
  ...paginationInputs.shape,
  eventId: z.number()
    .describe("The event id"),
  divisionId: z.number().optional()
    .describe("Filter games by division ID"),
  teamId: z.number().optional()
    .describe("Filter games by team ID"),
  date: z.string().optional()
    .describe("Filter games by date"),
})

// Application Architecture || Define Singletons
// =======================================================================================
// ===================================================================================
export const GamesListItem = z.custom<ExposureGame>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const GamesListOutputs = z.object({
  games: z.array(GamesListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TGamesListItem = z.TypeOf<typeof GamesListItem>
export type TGamesListInputs = z.TypeOf<typeof GamesListInputs>
export type TGamesListOutputs = z.TypeOf<typeof GamesListOutputs>
