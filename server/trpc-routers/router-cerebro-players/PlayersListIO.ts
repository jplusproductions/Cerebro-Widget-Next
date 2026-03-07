import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@/prisma/validators/filters"
import { PlayerReadOutputs } from "@/server/trpc-routers/router-cerebro-player/PlayerReadIO"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const PlayersListInputs = z.object({
  ...paginationInputs.shape,
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const PlayersListOutputs = z.object({
  players: z.array(PlayerReadOutputs),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TPlayersListInputs = z.TypeOf<typeof PlayersListInputs>
export type TPlayersListOutputs = z.TypeOf<typeof PlayersListOutputs>
