import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
// import { RouterAuth } from "./router-auth/@index"
// import { RouterExposureDivision } from "@/server/trpc-routers/router-exposure-division/@index"
// import { RouterExposureDivisions } from "@/server/trpc-routers/router-exposure-divisions/@index"
import { RouterExposureEvent } from "@/server/trpc-routers/router-exposure-event/@index"
import { RouterExposureEvents } from "@/server/trpc-routers/router-exposure-events/@index"
import { RouterExposureGame } from "@/server/trpc-routers/router-exposure-game/@index"
import { RouterExposureGames } from "@/server/trpc-routers/router-exposure-games/@index"
import { RouterExposurePlayer } from "@/server/trpc-routers/router-exposure-player/@index"
import { RouterExposurePlayers } from "@/server/trpc-routers/router-exposure-players/@index"
import { RouterExposureStanding } from "@/server/trpc-routers/router-exposure-standing/@index"
import { RouterExposureStandings } from "@/server/trpc-routers/router-exposure-standings/@index"
// import { RouterExposureStatistic } from "@/server/trpc-routers/router-exposure-statistic/@index"
import { RouterExposureStatistics } from "@/server/trpc-routers/router-exposure-statistics/@index"
import { RouterExposureTeam } from "@/server/trpc-routers/router-exposure-team/@index"
import { RouterExposureTeams } from "@/server/trpc-routers/router-exposure-teams/@index"
// import { RouterExposureVenue } from "@/server/trpc-routers/router-exposure-venue/@index"
// import { RouterExposureVenues } from "@/server/trpc-routers/router-exposure-venues/@index"
// import { GraphQLPlayers } from "./router-graphql-players/@index"
// import { RouterProfile } from "./router-profile/@index"

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
  RouterExposurePlayer,
  RouterExposurePlayers,
  RouterExposureStanding,
  RouterExposureStandings,
  RouterExposureStatistics,
  RouterExposureTeam,
  RouterExposureTeams,
  // RouterExposureVenue,
  // RouterExposureVenues,
  // GraphQLPlayers,
  // RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
