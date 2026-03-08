import dotenv from "dotenv"
import { execSync } from "child_process"
import { scripts } from "chalk-scripts"
import { CerebroAuthApi } from "@/server/foreign-sdks/sdk-cerebro-auth/cerebro-auth-api"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
dotenv.config()
const script = scripts({ id: "Codegen", name: "SdkBuilder()" })

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

  await script.insight("Running graphql-codegen...")
  execSync("npx graphql-codegen --config apps-configs/sdk-graphql.ts", {
    stdio: "inherit",
    env: {
      ...process.env,
      CEREBRO_GRAPHQL_JWT: jwt,
    },
  })

  await script.success("Types generated successfully.")
}

main().catch(async (err) => {
  await script.log(`Failed: ${err.message}`)
  process.exit(1)
})
