import { z } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const EventReadInputs = z.object({
  id: z.string().describe("The unique identifier of the event"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const EventReadOutputs = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.string().nullable(),
  level: z.string().nullable(),
  location: z.string().nullable(),
  region: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  createdDate: z.string(),
  modifiedDate: z.string(),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface GraphQLEvent {
  id: string
  name: string
  gender: string | null
  level: string | null
  location: string | null
  region: string | null
  start_date: string | null
  end_date: string | null
  created_date: string
  modified_date: string
}

export type TEventReadInputs = z.TypeOf<typeof EventReadInputs>
export type TEventReadOutputs = z.TypeOf<typeof EventReadOutputs>
