import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
// import { RouterAuth } from "./router-auth/@index"
import { RouterEvent } from "./router-event/@index"
import { RouterEvents } from "./router-events/@index"
import { RouterGame } from "./router-game/@index"
import { RouterGames } from "./router-games/@index"
import { GraphQLPlayers } from "./router-graphql-players/@index"
// import { RouterProfile } from "./router-profile/@index"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AppRouter = router({
  // RouterAuth,
  RouterEvent,
  RouterEvents,
  RouterGame,
  RouterGames,
  GraphQLPlayers,
  // RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
