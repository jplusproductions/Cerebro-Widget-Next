import path from "path"
import dotenv from "dotenv"
import { execSync } from "child_process"
import { scripts } from "chalk-scripts"
import { CerebroAuthApi } from "@/server/foreign-sdks/sdk-cerebro-auth/cerebro-auth-api"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
dotenv.config({ path: path.resolve(process.cwd(), ".env") })
const script = scripts({ name: "types:sdk" })

const apis = [
  {
    name: "exposure-events-types.ts",
    url: "server/foreign-sdks/sdk-exposure-events/exposure-events.yaml",
    output: "server/foreign-sdks/sdk-exposure-events",
  },
]

// Application Architecture || Define Functions
// =======================================================================================
// =======================================================================================
async function main() {
  const email = process.env.CEREBRO_USERNAME
  const password = process.env.CEREBRO_PASSWORD

  if (!email || !password) {
    await script.log("Missing CEREBRO_USERNAME or CEREBRO_PASSWORD in .env")
    process.exit(1)
  }

  if (!process.env.NEXT_PUBLIC_DOMAIN_CEREBRO_GRAPHQL) {
    await script.log("Missing NEXT_PUBLIC_DOMAIN_CEREBRO_GRAPHQL in .env")
    process.exit(1)
  }

  await script.insight("Authenticating with Cerebro...")
  const authApi = new CerebroAuthApi()
  const { jwt } = await authApi.login(email, password)

  await script.insight("Generating types for cerebro-graphql-types.ts...")
  execSync("npx graphql-codegen --config apps-configs/sdk-graphql.ts", {
    stdio: "inherit",
    env: {
      ...process.env,
      CEREBRO_GRAPHQL_JWT: jwt,
    },
  })

  for (const api of apis) {
    await script.insight(`Generating types for ${api.name}...`)
    const command = [
      "npx swagger-typescript-api generate --extract-response-body --no-client",
      `-p "${api.url}"`,
      `-o "${api.output}"`,
      `-n "${api.name}"`,
      "--custom-config \"apps-configs/sdk-openapi.js\"",
    ].join(" ")
    execSync(command, { stdio: "inherit" })
  }

  await script.success("Types generated successfully.")
}

main().catch(async (err) => {
  await script.log(`Failed: ${err.message}`)
  process.exit(1)
})
