import { BetterAuth } from "package-servers"
import { toNextJsHandler } from "better-auth/next-js"

export const { GET, POST } = toNextJsHandler(BetterAuth)
