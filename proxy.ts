import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyPortalToken, PORTAL_COOKIE_NAME } from "@/server/trpc-middlewares/jwt-construction"

// Application Architecture || Define Middleware
// =======================================================================================
// =======================================================================================
export function proxy(request: NextRequest) {
  const token = request.cookies.get(PORTAL_COOKIE_NAME)?.value
  if (!token || !verifyPortalToken(token)) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

// Application Architecture || Define Configurations
// =======================================================================================
// =======================================================================================
export const config = {
  matcher: ["/portal/:path*"],
}
