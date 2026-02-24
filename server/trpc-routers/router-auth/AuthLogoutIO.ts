import { z, TypeOf } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const AuthLogoutInputs = z.void()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const AuthLogoutOutputs = z.object({
  message: z.string()
    .describe("Front End safe display message"),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAuthLogoutInputs = TypeOf<typeof AuthLogoutInputs>
export type TAuthLogoutOutputs = TypeOf<typeof AuthLogoutOutputs>
