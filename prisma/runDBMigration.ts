/// ///////////////////////////////////////////////
// runDBMigrations.mjs
// This allows us to dynamically set the env vars
// based on the environment we want so we can
// deploy our migrations
/// ///////////////////////////////////////////////
import "dotenv/config"
import { exec } from "child_process"
import { scripts } from "chalk-scripts"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const script = scripts({ name: "db:migrate" })

// Application Architecture || Define Executions
// =======================================================================================
// =======================================================================================
void (async () => {
  const regex = /:.*?@/
  const databaseUrl = process.env.DATABASE_URL || ""
  const resultString = databaseUrl.replace(regex, ":@")
  await script.log(`Remote ${process.env.NEXT_PUBLIC_BUILD_ENV} - using migration script db: ${resultString}`)

  exec(
    "prisma migrate deploy",
    {
      env: { ...process.env, DATABASE_URL: databaseUrl },
    },
    async (error, stdout, stderr) => {
      if (error) {
        await script.log(`Remote ${process.env.NEXT_PUBLIC_BUILD_ENV} - error: ${error.message}`)
        process.exit(1)
      }

      if (stdout) {
        await script.log(`Remote ${process.env.NEXT_PUBLIC_BUILD_ENV} - stdout: ${stdout}`)
      }

      if (stderr) {
        await script.log(`Remote ${process.env.NEXT_PUBLIC_BUILD_ENV} - stderr: ${stderr}`)
      }
    },
  )
})()
