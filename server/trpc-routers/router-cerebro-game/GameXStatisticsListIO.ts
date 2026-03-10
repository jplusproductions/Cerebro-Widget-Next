import { z } from "zod"
import { StatisticReadOutputs } from "@/server/trpc-routers/router-cerebro-statistics/StatisticReadIO"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const GameXStatisticsListInputs = z.object({
  gameId: z.string().describe("The unique identifier of the game"),
  teamId: z.string().optional().describe("The unique identifier of the team"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const GameXStatisticsListOutputs = z.object({
  statistics: StatisticReadOutputs,
  total: z.number(),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TGameXStatisticsListInputs = z.TypeOf<typeof GameXStatisticsListInputs>
export type TGameXStatisticsListOutputs = z.TypeOf<typeof GameXStatisticsListOutputs>
