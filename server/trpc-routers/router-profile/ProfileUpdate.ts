import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { BetterAuth } from "@/server/trpc-contexts/context-auth"
import { protectedProcedure } from "@/server/trpc"
import { ProfileUpdateInputs, ProfileUpdateOutputs } from "./ProfileUpdateIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const ProfileUpdate = protectedProcedure
  .meta({
    openapi: {
      method: "POST",
      path: "/profile/update",
      summary: "ProfileUpdate() -> Update the authenticated user's name",
      tags: ["Profile"],
    },
  })
  .input(ProfileUpdateInputs)
  .output(ProfileUpdateOutputs)
  .mutation(async ({ input, ctx }) => {
    const result = await BetterAuth.api.updateUser({
      body: { name: input.name },
      headers: ctx.headers,
    })
    return result
  })
