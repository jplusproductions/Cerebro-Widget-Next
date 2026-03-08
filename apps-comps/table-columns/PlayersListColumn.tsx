import type { ColumnDef } from "@tanstack/react-table"
import type { TPlayerReadOutputs } from "@/server/trpc-routers/router-cerebro-player/PlayerReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayersListColumns: ColumnDef<TPlayerReadOutputs>[] = [
  {
    accessorKey: "name",
    header: "Player",
    cell: ({ row: { original } }) => (
      <div className="flex items-center gap-3">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {original.name.charAt(0)}
          </span>
        </div>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{original.name}</span>
      </div>
    ),
  },

  {
    accessorKey: "teamName",
    header: "Team",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.teamName ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "position",
    header: "Pos",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.position ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "nationality",
    header: "Nationality",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.nationality ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "hometown",
    header: "Hometown",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.hometown ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "heightInches",
    header: "Height",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.heightInches ? `${original.heightInches}"` : "\u2014"}</span>
    ),
  },
  {
    accessorKey: "weightLb",
    header: "Weight",
    meta: { align: "center" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.weightLb ? `${original.weightLb} lbs` : "\u2014"}</span>
    ),
  },
]
