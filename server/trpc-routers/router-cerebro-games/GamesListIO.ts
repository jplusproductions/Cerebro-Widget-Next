import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@AppUtils/cross/validators/filters"
import { GameReadOutputs } from "@/server/trpc-routers/router-cerebro-game/GameReadIO"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const GamesListInputs = z.object({
  ...paginationInputs.shape,
  search: z.string().optional().describe("Filter games (currently unused, reserved)"),
  eventId: z.string().optional().describe("Filter games by event ID"),
  teamId: z.string().optional().describe("Filter games by team ID"),
  playerId: z.string().optional().describe("Filter games by player ID"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const GamesListOutputs = z.object({
  games: z.array(GameReadOutputs),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TGamesListInputs = z.TypeOf<typeof GamesListInputs>
export type TGamesListOutputs = z.TypeOf<typeof GamesListOutputs>
