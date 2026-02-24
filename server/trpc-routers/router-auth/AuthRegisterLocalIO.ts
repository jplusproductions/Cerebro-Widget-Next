import { z, TypeOf } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const AuthRegisterLocalInputs = z.object({
  name: z.string().min(1)
    .describe("The user's display name"),
  email: z.string().email()
    .describe("The user's email address"),
  password: z.string().min(8)
    .describe("The user's password"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const AuthRegisterLocalOutputs = z.object({
  token: z.string()
    .describe("The session token"),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAuthRegisterLocalInputs = TypeOf<typeof AuthRegisterLocalInputs>
export type TAuthRegisterLocalOutputs = TypeOf<typeof AuthRegisterLocalOutputs>
