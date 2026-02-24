import { z, TypeOf } from "zod"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const ProfileUpdateInputs = z.object({
  name: z.string().min(1)
    .describe("The user's updated display name"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const ProfileUpdateOutputs = z.object({
  id: z.string()
    .describe("The user's unique identifier"),
  name: z.string()
    .describe("The user's updated display name"),
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
export type TProfileUpdateInputs = TypeOf<typeof ProfileUpdateInputs>
export type TProfileUpdateOutputs = TypeOf<typeof ProfileUpdateOutputs>
