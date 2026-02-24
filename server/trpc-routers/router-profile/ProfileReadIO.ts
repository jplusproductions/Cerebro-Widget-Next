import { z, TypeOf } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const ProfileReadInputs = z.void()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const ProfileReadOutputs = z.object({
  id: z.string()
    .describe("The user's unique identifier"),
  name: z.string()
    .describe("The user's display name"),
  email: z.string()
    .describe("The user's email address"),
  image: z.string().nullable()
    .describe("The user's profile image URL"),
  createdAt: z.coerce.date()
    .describe("Account creation timestamp"),
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TProfileReadInputs = TypeOf<typeof ProfileReadInputs>
export type TProfileReadOutputs = TypeOf<typeof ProfileReadOutputs>
