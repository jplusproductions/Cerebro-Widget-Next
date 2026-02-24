import { BetterAuth } from "@/server/trpc-contexts/context-auth"
import { toNextJsHandler } from "better-auth/next-js"

export const { GET, POST } = toNextJsHandler(BetterAuth)
