import "dotenv/config"
import { defineConfig, env } from "prisma/config"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default defineConfig({
  earlyAccess: true,
  schema: "prisma/schema.prisma",
  migrate: {
    async createDatabase(info) {
      return false
    },
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
})
