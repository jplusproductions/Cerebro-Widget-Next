import fs from "fs"
import path from "path"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { scripts } from "chalk-scripts"

// Application Architecture || Define Variables
// =======================================================================================
// Reconstruct __dirname for ESM =========================================================
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(process.cwd(), ".env") })
const BUILD_ENV = process.env.NEXT_PUBLIC_BUILD_ENV
const script = scripts({ name: `env:${BUILD_ENV || "unknown"}` })

// Application Architecture || Define Functions
// =======================================================================================
// =======================================================================================
const loadConfig = () => {
  // NOTE: Load and parse the environment configuration from .env.local
  const configFile = path.resolve(__dirname, "env-builder.json")

  if (!fs.existsSync(configFile)) {
    throw new Error(`Configuration file not found: ${configFile}`)
  }
  const configData = fs.readFileSync(configFile, "utf8")
  return JSON.parse(configData)
}

const generateEnvContent = async () => {
  await script.log("Generator Initialize")
  if (!BUILD_ENV || typeof BUILD_ENV !== "string") {
    throw new Error("`NEXT_PUBLIC_BUILD_ENV` was not included in your start script")
  }

  await script.log(`Running Build: ${BUILD_ENV}`)

  const config = loadConfig()
  const commonSettings = config.common
  let content = `NEXT_PUBLIC_BUILD_ENV="${process.env.NEXT_PUBLIC_BUILD_ENV}"\n`

  for (const key in commonSettings) {
    content += `${key}="${commonSettings[key]}"\n`
  }

  // load the env-specific properties
  const envSettings = config[BUILD_ENV]
  if (envSettings) {
    for (const key in envSettings) {
      content += `${key}="${envSettings[key]}"\n`
    }
  }

  return content
}

// Application Architecture || Define Executions
// =======================================================================================
// =======================================================================================
void (async () => {
  try {
    const envContent = await generateEnvContent()
    fs.writeFileSync("./.env", `${envContent?.trim()}\n`, "utf8")
    await script.success("File `.env` has been created successfully.")
  } catch (error: unknown) {
    const message = typeof error === "object" && error !== null && "message" in error
      ? String((error as { message: unknown }).message)
      : "❌ Failed to write .env file"
    await script.error(message)
  }
})()
