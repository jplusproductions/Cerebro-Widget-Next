import { router } from "@/server/trpc"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { RouterAuth } from "./router-auth/@index"
import { GraphQLPlayers } from "./router-graphql-players/@index"
import { RouterProfile } from "./router-profile/@index"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const AppRouter = router({
  RouterAuth,
  GraphQLPlayers,
  RouterProfile,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAppRouter = typeof AppRouter
