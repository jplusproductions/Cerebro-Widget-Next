import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { StatisticsList } from "./StatisticsList"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const RouterExposureStatistics = router({
  StatisticsList,
})
