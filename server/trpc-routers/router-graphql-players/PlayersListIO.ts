import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationInputs, paginationOutputs, optionalSearch } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const PlayersListInputs = z.object({
  ...optionalSearch.shape,
  ...paginationInputs.shape,
})

// Application Architecture || Define Singletons
// =======================================================================================
// =======================================================================================
export const PlayersListItem = z.object({
  id: z.string(),
  name: z.string(),
  imageURL: z.string().nullable(),
  teamName: z.string(),
  teamImageURL: z.string().nullable(),
  nationality: z.string().nullable(),
  age: z.number().nullable(),
  height: z.number().nullable(),
  weight: z.number().nullable(),
  bib: z.string().nullable(),
})

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
