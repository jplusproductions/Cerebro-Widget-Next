import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { EventRead } from "./EventRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterCerebroEvent = router({
  EventRead,
})
