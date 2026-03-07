import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const PlayerReadInputs = z.object({
  ...paginationInputs.shape,
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const PlayerReadOutputs = z.object({
  id: z.string(),
  name: z.string(),
  position: z.string().nullable(),
  nationality: z.string().nullable(),
  hometown: z.string().nullable(),
  dateOfBirth: z.string().nullable(),
  heightInches: z.number().nullable(),
  weightLb: z.number().nullable(),
  teamName: z.string().nullable(),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface GraphQLPlayer {
  id: string
  name: string
  date_of_birth: string | null
  position: string | null
  height_inches: number | null
  weight_lb: number | null
  nationality: string | null
  hometown: string | null
  player_team: Array<{ team: { name: string } }>
}

export type TPlayerReadInputs = z.TypeOf<typeof PlayerReadInputs>
export type TPlayerReadOutputs = z.TypeOf<typeof PlayerReadOutputs>
