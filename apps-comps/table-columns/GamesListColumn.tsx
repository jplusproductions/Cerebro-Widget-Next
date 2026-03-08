import type { ColumnDef } from "@tanstack/react-table"
import type { Game } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-types"

// Application Architecture || Define Helpers
// =======================================================================================
// =======================================================================================
function getTeamName(game: Game, teamId: string): string {
  const entry = game.team_game?.find((tg) => tg.team_id === teamId)
  return entry?.team?.name ?? teamId.slice(0, 8)
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const GamesListColumns: ColumnDef<Game>[] = [
  {
    accessorKey: "game_date",
    header: "Date",
    cell: ({ row: { original } }) => (
      <span className="font-medium text-zinc-900 dark:text-zinc-100">
        {new Date(original.game_date).toLocaleDateString()}
      </span>
    ),
  },
  {
    id: "team_one",
    header: "Team 1",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-900 dark:text-zinc-100">{getTeamName(original, original.team_one_id)}</span>
    ),
  },
  {
    accessorKey: "team_one_score",
    header: "Score",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.team_one_score}</span>
    ),
  },
  {
    id: "team_two",
    header: "Team 2",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-900 dark:text-zinc-100">{getTeamName(original, original.team_two_id)}</span>
    ),
  },
  {
    accessorKey: "team_two_score",
    header: "Score",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.team_two_score}</span>
    ),
  },
  {
    accessorKey: "playoff",
    header: "Playoff",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.playoff ?? "\u2014"}</span>
    ),
  },
]
