import { z } from "zod"
import type { Player } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@AppUtils/cross/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const PlayersListInputs = z.object({
  ...paginationInputs.shape,
  eventId: z.number().optional()
    .describe("Filter players by event ID"),
  divisionId: z.number().optional()
    .describe("Filter players by division ID"),
  teamIds: z.string().optional()
    .describe("Comma-separated team IDs"),
  playerIds: z.string().optional()
    .describe("Comma-separated player IDs"),
})

// Application Architecture || Define Singletons
// =======================================================================================
// =======================================================================================
export const PlayersListItem = z.custom<Player>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const PlayersListOutputs = z.object({
  players: z.array(PlayersListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TPlayersListItem = z.TypeOf<typeof PlayersListItem>
export type TPlayersListInputs = z.TypeOf<typeof PlayersListInputs>
export type TPlayersListOutputs = z.TypeOf<typeof PlayersListOutputs>
