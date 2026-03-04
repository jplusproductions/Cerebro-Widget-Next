import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
// import { RouterAuth } from "./router-auth/@index"
import { RouterExposureEvent } from "@/server/trpc-routers/router-exposure-event/@index"
import { RouterExposureEvents } from "@/server/trpc-routers/router-exposure-events/@index"
import { RouterExposureGame } from "@/server/trpc-routers/router-exposure-game/@index"
import { RouterExposureGames } from "@/server/trpc-routers/router-exposure-games/@index"
import { RouterExposureTeam } from "@/server/trpc-routers/router-exposure-team/@index"
import { RouterExposureTeams } from "@/server/trpc-routers/router-exposure-teams/@index"
import { GraphQLPlayers } from "./router-graphql-players/@index"
// import { RouterProfile } from "./router-profile/@index"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AppRouter = router({
  // RouterAuth,
  RouterExposureEvent,
  RouterExposureEvents,
  RouterExposureGame,
  RouterExposureGames,
  RouterExposureTeam,
  RouterExposureTeams,
  GraphQLPlayers,
  // RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
