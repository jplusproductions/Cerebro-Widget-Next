import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AppRouter } from "@/server/trpc-routers"
import { createTRPCContext } from "@/server/trpc-contexts/context-auth"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
const tRPCRouteHandler = async (req: Request) => {
  const path = new URL(req.url).pathname.replace("/api/trpc/", "")
  const ctx = await createTRPCContext({ headers: req.headers, path })
  const res = await fetchRequestHandler({
    req,
    router: AppRouter,
    endpoint: "/api/trpc",
    createContext: () => ctx,
  })
  ctx.resHeaders.forEach((value, key) => {
    res.headers.append(key, value)
  })
  return res
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export {
  tRPCRouteHandler as DELETE,
  tRPCRouteHandler as GET,
  tRPCRouteHandler as PATCH,
  tRPCRouteHandler as POST,
  tRPCRouteHandler as PUT,
}
