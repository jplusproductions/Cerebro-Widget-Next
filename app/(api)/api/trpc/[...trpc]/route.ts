import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { createTRPCContext } from "@/server/trpc-contexts/context-auth"
import { AppRouter } from "@/server/trpc-routers"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
const handler = (req: Request) => {
  const path = new URL(req.url).pathname.replace("/api/trpc/", "")
  return fetchRequestHandler({
    req,
    router: AppRouter,
    endpoint: "/api/trpc",
    createContext: () => createTRPCContext({ headers: req.headers, path }),
  })
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export { handler as GET, handler as POST }
