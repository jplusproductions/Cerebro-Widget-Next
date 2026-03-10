// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroClient } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GameXStatisticsListInputs, GameXStatisticsListOutputs } from "./GameXStatisticsListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GameXStatisticsList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/cerebro/game/statistics/list",
      summary: "GameXStatisticsList() -> Returns statistics for a specific game.",
      tags: ["Games"],
    },
  })
  .input(GameXStatisticsListInputs)
  .output(GameXStatisticsListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Game Statistics List query")

    const { player_game, total } = await CerebroClient.getStatisticsByGameId(input.gameId, input.teamId)


    return {
      statistics: player_game.map((pg) => ({
        id: pg.id,
        gameId: pg.game_id,
        teamId: pg.team_id,
        playerId: pg.player_id,
        playerName: pg.player?.name ?? "Unknown",
        oppTeamId: pg.opp_team_id,
        position: pg.position,
        jerseyNumber: pg.jersey_number,
        minutes: pg.minutes,
        pts: pg.pts,
        reb: pg.reb,
        ast: pg.ast,
        stl: pg.stl,
        blk: pg.blk,
        pf: pg.pf,
        tov: pg.tov,
        fga: pg.fga,
        fgm: pg.fgm,
        fta: pg.fta,
        ftm: pg.ftm,
        threePa: pg.three_pa,
        threePm: pg.three_pm,
        drb: pg.drb,
        orb: pg.orb,
      })),
      total,
    }
  })
