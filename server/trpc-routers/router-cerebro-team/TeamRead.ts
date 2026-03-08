import { TRPCError } from "@trpc/server"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { TeamReadInputs, TeamReadOutputs } from "./TeamReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const TeamRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/team/read",
      summary: "TeamRead() -> Returns a specific team.",
      tags: ["Teams"],
    },
  })
  .input(TeamReadInputs)
  .output(TeamReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Team Read query")

    const targetTeam = await CerebroClient.getTeam({ id: input.id })
    if (!targetTeam) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `Team not found: ${input.id}`
      })
    }

    return targetTeam
  })
