import { createOpenApiFetchHandler } from "trpc-swagger"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AppRouter } from "@/server/trpc-routers"
import { createTRPCContext } from "@/server/trpc-contexts/context-auth"

// Application Architecture || Define Handler
// =======================================================================================
// NOTE: Assign REST Request Behavior ====================================================
const restRouteHandler = (req: Request) => {
  const path = new URL(req.url).pathname.replace("/api/", "")
  return createOpenApiFetchHandler({
    req,
    router: AppRouter,
    endpoint: "/api",
    createContext: () => createTRPCContext({ headers: req.headers, path }),
    cors: {
      origin: "*", // Allow all sources
      methods: ["*"], // This resolves to "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD"
    },
  })
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export {
  restRouteHandler as DELETE,
  restRouteHandler as GET,
  restRouteHandler as PATCH,
  restRouteHandler as POST,
  restRouteHandler as PUT,
}
