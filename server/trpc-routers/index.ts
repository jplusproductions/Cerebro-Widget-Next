import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { RouterAuth } from "./router-auth/@index"
import { RouterCerebroEvent } from "./router-cerebro-event/@index"
import { RouterCerebroEvents } from "./router-cerebro-events/@index"
import { RouterCerebroGame } from "./router-cerebro-game/@index"
import { RouterCerebroGames } from "./router-cerebro-games/@index"
import { RouterCerebroPlayer } from "./router-cerebro-player/@index"
import { RouterCerebroPlayers } from "./router-cerebro-players/@index"
import { RouterCerebroStatistics } from "./router-cerebro-statistics/@index"
import { RouterCerebroTeam } from "./router-cerebro-team/@index"
import { RouterCerebroTeams } from "./router-cerebro-teams/@index"
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

// import { RouterExposureVenue } from "./router-exposure-venue/@index"
// import { RouterExposureVenues } from "./router-exposure-venues/@index"
// import { GraphQLPlayers } from "./router-exposure-venues/@index"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AppRouter = router({
  RouterAuth,
  RouterCerebroEvent,
  RouterCerebroEvents,
  RouterCerebroGame,
  RouterCerebroGames,
  RouterCerebroPlayer,
  RouterCerebroPlayers,
  RouterCerebroStatistics,
  RouterCerebroTeam,
  RouterCerebroTeams,
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

  // RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
