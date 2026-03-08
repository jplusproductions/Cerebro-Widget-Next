import { scripts } from "chalk-scripts"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { verifyPortalToken, PORTAL_COOKIE_NAME } from "@/server/trpc-middlewares/jwt-construction"

// Application Architecture || Define Helpers
// =======================================================================================
// =======================================================================================
function parseSession(headers: Headers): { user: string } | null {
  const cookieHeader = headers.get("cookie")
  if (!cookieHeader) return null

  const match = cookieHeader.split(";").map(c => c.trim()).find(c => c.startsWith(`${PORTAL_COOKIE_NAME}=`))
  if (!match) return null

  const token = match.split("=").slice(1).join("=")
  if (!token || !verifyPortalToken(token)) return null

  const payload = token.substring(0, token.lastIndexOf("."))
  const user = payload.replace("cerebro:", "")
  return { user }
}

// Application Architecture || Define Context
// =======================================================================================
// =======================================================================================
export async function createTRPCContext(opts: { headers: Headers, path?: string }) {
  const session = parseSession(opts.headers)
  const functionName = opts.path ? `${opts.path.split(".").pop()}()` : "Unknown()"
  const script = scripts({ id: session?.user ?? "xxxxxxxx", name: functionName })
  await script.log("Route Initialize")

  return {
    session,
    script,
    resHeaders: new Headers(),
  }
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAuthContext = Awaited<ReturnType<typeof createTRPCContext>>
