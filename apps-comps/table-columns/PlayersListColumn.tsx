import Image from "next/image"
import type { ColumnDef } from "@tanstack/react-table"
import type { TPlayersListItem } from "@/server/trpc-routers/router-graphql-players/PlayersListIO"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayersListColumns: ColumnDef<TPlayersListItem>[] = [
  {
    accessorKey: "name",
    header: "Player",
    cell: ({ row: { original } }) => (
      <div className="flex items-center gap-3">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
          {original.imageURL ? (
            <Image src={original.imageURL} alt={original.name} fill className="object-cover" sizes="32px" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {original.name.charAt(0)}
            </div>
          )}
        </div>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "teamName",
    header: "Team",
    cell: ({ row: { original } }) => (
      <div className="flex items-center gap-2">
        {original.teamImageURL && (
          <div className="relative h-5 w-5 shrink-0">
            <Image src={original.teamImageURL} alt={original.teamName} fill className="object-contain" sizes="20px" />
          </div>
        )}
        <span className="text-zinc-600 dark:text-zinc-400">{original.teamName}</span>
      </div>
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
    accessorKey: "age",
    header: "Age",
    meta: { align: "right" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.age ?? "\u2014"}</span>
    ),
  },
  {
    accessorKey: "height",
    header: "Height",
    meta: { align: "right" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.height ? `${original.height} cm` : "\u2014"}</span>
    ),
  },
  {
    accessorKey: "weight",
    header: "Weight",
    meta: { align: "right" },
    cell: ({ row: { original } }) => (
      <span className="text-zinc-600 dark:text-zinc-400">{original.weight ? `${original.weight} kg` : "\u2014"}</span>
    ),
  },
  {
    accessorKey: "bib",
    header: "No.",
    meta: { align: "right" },
    cell: ({ row: { original } }) => (
      <span className="font-mono text-zinc-600 dark:text-zinc-400">{original.bib ?? "\u2014"}</span>
    ),
  },
]
