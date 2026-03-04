import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { DivisionsList } from "./DivisionsList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureDivisions = router({
  DivisionsList,
})
