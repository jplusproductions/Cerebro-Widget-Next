import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { EventsList } from "./EventsList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterEvents = router({
  EventsList,
})
