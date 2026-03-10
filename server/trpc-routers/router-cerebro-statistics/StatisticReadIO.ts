import { z } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const StatisticReadInputs = z.object({
  gameId: z.string().describe("The unique identifier of the game"),
  teamId: z.string().optional().describe("The unique identifier of the team"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const StatisticReadOutputs = z.array(
  z.object({
    id: z.string(),
    gameId: z.string(),
    teamId: z.string(),
    playerId: z.string(),
    playerName: z.string(),
    oppTeamId: z.string().nullable(),
    position: z.string().nullable(),
    jerseyNumber: z.union([z.string(), z.number()]).nullable(),
    minutes: z.number().nullable(),
    pts: z.number().nullable(),
    reb: z.number().nullable(),
    ast: z.number().nullable(),
    stl: z.number().nullable(),
    blk: z.number().nullable(),
    pf: z.number().nullable(),
    tov: z.number().nullable(),
    fga: z.number().nullable(),
    fgm: z.number().nullable(),
    fta: z.number().nullable(),
    ftm: z.number().nullable(),
    threePa: z.number().nullable(),
    threePm: z.number().nullable(),
    drb: z.number().nullable(),
    orb: z.number().nullable(),
  }),
)

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface GraphQLPlayerGame {
  id: string
  game_id: string
  team_id: string
  player_id: string
  opp_team_id: string | null
  position: string | null
  jersey_number: string | number | null
  minutes: number | null
  pts: number | null
  reb: number | null
  ast: number | null
  stl: number | null
  blk: number | null
  pf: number | null
  tov: number | null
  fga: number | null
  fgm: number | null
  fta: number | null
  ftm: number | null
  three_pa: number | null
  three_pm: number | null
  drb: number | null
  orb: number | null
  player: { name: string }
}

export type TStatisticReadInputs = z.TypeOf<typeof StatisticReadInputs>
export type TStatisticReadOutputs = z.TypeOf<typeof StatisticReadOutputs>
export type TStatisticItem = TStatisticReadOutputs[number]
