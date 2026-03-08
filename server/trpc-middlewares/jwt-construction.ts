import { createHmac } from "crypto"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const SECRET = process.env.CEREBRO_PASSWORD ?? "fallback-secret"
const TOKEN_PREFIX = "cerebro:"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export function createPortalToken(username: string): string {
  const payload = `${TOKEN_PREFIX}${username}`
  const signature = createHmac("sha256", SECRET).update(payload).digest("hex")
  return `${payload}.${signature}`
}

export function verifyPortalToken(token: string): boolean {
  const lastDot = token.lastIndexOf(".")
  if (lastDot === -1) return false
  const payload = token.substring(0, lastDot)
  const signature = token.substring(lastDot + 1)
  const expected = createHmac("sha256", SECRET).update(payload).digest("hex")
  return signature === expected && payload.startsWith(TOKEN_PREFIX)
}

export const PORTAL_COOKIE_NAME = "cerebro-portal-auth"
