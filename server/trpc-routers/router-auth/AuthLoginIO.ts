import { z, TypeOf } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const AuthLoginInputs = z.object({
  email: z.string().email()
    .describe("The user's email address"),
  password: z.string().min(8)
    .describe("The user's password"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const AuthLoginOutputs = z.object({
  token: z.string()
    .describe("The session token"),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAuthLoginInputs = TypeOf<typeof AuthLoginInputs>
export type TAuthLoginOutputs = TypeOf<typeof AuthLoginOutputs>
