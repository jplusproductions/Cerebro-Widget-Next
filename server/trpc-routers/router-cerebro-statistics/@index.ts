import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { StatisticRead } from "./StatisticRead"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterCerebroStatistics = router({
  StatisticRead,
})
