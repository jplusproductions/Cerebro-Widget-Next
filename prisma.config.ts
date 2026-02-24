import "dotenv/config"
import { defineConfig, env } from "prisma/config"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
})
