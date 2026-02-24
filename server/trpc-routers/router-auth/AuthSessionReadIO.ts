import { z, TypeOf } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const AuthSessionReadInputs = z.void()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const AuthSessionReadOutputs = z.object({
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
  }),
  session: z.object({
    id: z.string(),
    token: z.string(),
    expiresAt: z.coerce.date(),
  }),
}).nullable()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAuthSessionReadInputs = TypeOf<typeof AuthSessionReadInputs>
export type TAuthSessionReadOutputs = TypeOf<typeof AuthSessionReadOutputs>
