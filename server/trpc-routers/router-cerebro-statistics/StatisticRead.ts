// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { CerebroGraphqlApi } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-api"
import { GraphQLPlayerGame, StatisticReadInputs, StatisticReadOutputs } from "./StatisticReadIO"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const graphql = new CerebroGraphqlApi()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface GraphQLPlayerGameResponse {
  player_game: GraphQLPlayerGame[]
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const StatisticRead = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      path: "/cerebro/statistics/read",
      summary: "StatisticRead() -> Returns player statistics for a specific game and team.",
      tags: ["Statistics"],
    },
  })
  .input(StatisticReadInputs)
  .output(StatisticReadOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Statistics Read query")
    await script.insight(`gameId: ${input.gameId}, teamId: ${input.teamId ?? "none"}`)

    const whereClause = input.teamId
      ? `{game_id: {_eq: $gameId}, team_id: {_eq: $teamId}}`
      : `{game_id: {_eq: $gameId}}`

    const queryVars = input.teamId
      ? `$gameId: uuid!, $teamId: uuid!`
      : `$gameId: uuid!`

    const variables: Record<string, unknown> = { gameId: input.gameId }
    if (input.teamId) variables.teamId = input.teamId

    const data = await graphql.query<GraphQLPlayerGameResponse>(
      `query GetPlayerGameStats(${queryVars}) {
        player_game(where: ${whereClause}) {
          id
          game_id
          team_id
          player_id
          opp_team_id
          position
          jersey_number
          minutes
          pts
          reb
          ast
          stl
          blk
          pf
          tov
          fga
          fgm
          fta
          ftm
          three_pa
          three_pm
          drb
          orb
          player {
            name
          }
        }
      }`,
      variables,
    )

    return (data.player_game ?? []).map((pg) => ({
      id: pg.id,
      gameId: pg.game_id,
      teamId: pg.team_id,
      playerId: pg.player_id,
      playerName: pg.player.name,
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
    }))
  })
