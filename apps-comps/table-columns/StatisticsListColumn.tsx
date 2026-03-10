import type { ColumnDef } from "@tanstack/react-table"
import type { TStatisticItem } from "@/server/trpc-routers/router-cerebro-statistics/StatisticReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const StatisticsListColumns: ColumnDef<TStatisticItem>[] = [
  {
    accessorKey: "playerName",
    header: "Player",
    cell: ({ row: { original } }) => (
      <div className="flex items-center gap-3">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {original.playerName.charAt(0)}
          </span>
        </div>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{original.playerName}</span>
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.position ?? "—"}</span>
    ),
  },
  {
    accessorKey: "minutes",
    header: "Minutes",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.minutes ?? "—"}</span>
    ),
  },
  {
    accessorKey: "pts",
    header: "Points",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="font-medium text-zinc-900 dark:text-zinc-100">{original.pts ?? "—"}</span>
    ),
  },
  {
    accessorKey: "reb",
    header: "Rebounds",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.reb ?? "—"}</span>
    ),
  },
  {
    accessorKey: "ast",
    header: "Assists",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.ast ?? "—"}</span>
    ),
  },
  {
    accessorKey: "stl",
    header: "Steals",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.stl ?? "—"}</span>
    ),
  },
  {
    accessorKey: "blk",
    header: "Blocks",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.blk ?? "—"}</span>
    ),
  },
  {
    accessorKey: "tov",
    header: "Turnovers",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.tov ?? "—"}</span>
    ),
  },
  {
    accessorKey: "fgm",
    header: "2PT",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">
        {original.fgm != null && original.fga != null ? `${original.fgm}/${original.fga}` : "—"}
      </span>
    ),
  },
  {
    accessorKey: "threePm",
    header: "3PT",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">
        {original.threePm != null && original.threePa != null ? `${original.threePm}/${original.threePa}` : "—"}
      </span>
    ),
  },
  {
    accessorKey: "ftm",
    header: "Free Throws",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">
        {original.ftm != null && original.fta != null ? `${original.ftm}/${original.fta}` : "—"}
      </span>
    ),
  },
]
