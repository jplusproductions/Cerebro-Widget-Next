import type { ColumnDef } from "@tanstack/react-table"
import type { TEventReadOutputs } from "@/server/trpc-routers/router-cerebro-event/EventReadIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const EventsListColumns: ColumnDef<TEventReadOutputs>[] = [
  {
    accessorKey: "name",
    header: "Event",
    cell: ({ row: { original } }) => (
      <span className="font-medium text-zinc-900 dark:text-zinc-100">{original.name}</span>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.gender ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.level ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.location ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "region",
    header: "Region",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.region ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "startDate",
    header: "Start",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">
        {original.startDate ? new Date(original.startDate).toLocaleDateString() : "\u2014"}
      </span>
    ),
  },
  {
    accessorKey: "endDate",
    header: "End",
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">
        {original.endDate ? new Date(original.endDate).toLocaleDateString() : "\u2014"}
      </span>
    ),
  },
]
