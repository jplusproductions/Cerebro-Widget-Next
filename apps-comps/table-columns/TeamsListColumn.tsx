import type { ColumnDef } from "@tanstack/react-table"
import type { Team } from "@/server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-types"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const TeamsListColumns: ColumnDef<Team>[] = [
  {
    accessorKey: "name",
    header: "Team",
    cell: ({ row: { original } }) => (
      <span className="font-medium text-zinc-900 dark:text-zinc-100">{original.name}</span>
    ),
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.city ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "home_arena",
    header: "Home Arena",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.home_arena ?? "\u2014"}</span>
    ),
  },
]
