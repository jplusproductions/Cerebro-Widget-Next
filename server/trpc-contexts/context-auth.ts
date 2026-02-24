import { scripts } from "chalk-scripts"
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { prisma } from "@/prisma"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const BetterAuth = betterAuth({
  baseURL: process.env.DATABASE_URL,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    "claudeexpo://",
    ...(process.env.NODE_ENV === "development"
      ? ["exp://", "exp://**", "exp://192.168.*.*:*/**"]
      : []),
  ],
})

// Application Architecture || Define Context
// =======================================================================================
// =======================================================================================
export async function createTRPCContext(opts: { headers: Headers, path?: string }) {
  const session = await BetterAuth.api.getSession({
    headers: opts.headers,
  })

  const functionName = opts.path ? `${opts.path.split(".").pop()}()` : "Unknown()"
  const script = scripts({ id: session?.user.id ?? "xxxxxxxx", name: functionName })
  await script.log("Route Initialize")

  return {
    session,
    script,
  }
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TAuthContext = Awaited<ReturnType<typeof createTRPCContext>>
