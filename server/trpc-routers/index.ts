import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
// import { RouterAuth } from "./router-auth/@index"
// import { RouterExposureDivision } from "./router-exposure-division/@index"
// import { RouterExposureDivisions } from "./router-exposure-divisions/@index"
import { RouterExposureEvent } from "./router-exposure-event/@index"
import { RouterExposureEvents } from "./router-exposure-events/@index"
import { RouterExposureGame } from "./router-exposure-game/@index"
import { RouterExposureGames } from "./router-exposure-games/@index"
// import { RouterExposurePlayer } from "./router-exposure-player/@index"
// import { RouterExposurePlayers } from "./router-exposure-players/@index"
import { RouterExposureStanding } from "./router-exposure-standing/@index"
import { RouterExposureStandings } from "./router-exposure-standings/@index"
// import { RouterExposureStatistic } from "./router-exposure-statistic/@index"
import { RouterExposureStatistics } from "./router-exposure-statistics/@index"
import { RouterExposureTeam } from "./router-exposure-team/@index"
import { RouterExposureTeams } from "./router-exposure-teams/@index"
import { RouterCerebroPlayers } from "@/server/trpc-routers/router-cerebro-players/@index"
// import { RouterExposureVenue } from "./router-exposure-venue/@index"
// import { RouterExposureVenues } from "./router-exposure-venues/@index"
// import { GraphQLPlayers } from "./router-exposure-venues/@index"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AppRouter = router({
  // RouterAuth,
  // RouterExposureDivision,
  // RouterExposureDivisions,
  RouterExposureEvent,
  RouterExposureEvents,
  RouterExposureGame,
  RouterExposureGames,
  // RouterExposurePlayer,
  // RouterExposurePlayers,
  RouterExposureStanding,
  RouterExposureStandings,
  RouterExposureStatistics,
  RouterExposureTeam,
  RouterExposureTeams,
  // RouterExposureVenue,
  // RouterExposureVenues,
  RouterCerebroPlayers
  // RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
