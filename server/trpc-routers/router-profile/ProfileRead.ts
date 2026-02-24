import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { protectedProcedure } from "@/server/trpc"
import { ProfileReadInputs, ProfileReadOutputs } from "./ProfileReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const ProfileRead = protectedProcedure
  .meta({
    openapi: {
      method: "GET",
      path: "/profile/read",
      summary: "ProfileRead() -> Get the authenticated user's profile",
      tags: ["Profile"],
    },
  })
  .input(ProfileReadInputs)
  .output(ProfileReadOutputs)
  .query(async ({ ctx }) => {
    return ctx.session.user
  })
