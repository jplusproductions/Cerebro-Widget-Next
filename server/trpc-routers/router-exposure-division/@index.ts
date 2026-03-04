import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { DivisionRead } from "./DivisionRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureDivision = router({
  DivisionRead,
})
