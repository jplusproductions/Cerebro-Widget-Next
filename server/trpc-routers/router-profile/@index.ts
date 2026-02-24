import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { ProfileRead } from "./ProfileRead"
import { ProfileUpdate } from "./ProfileUpdate"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterProfile = router({
  ProfileRead,
  ProfileUpdate,
})
