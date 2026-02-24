"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import Table from "@AppComps/table/Table"
import { PlayersListColumns } from "@AppComps/table-columns/PlayersListColumn"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function WidgetPlayers({ pageSize, search }: WidgetPlayersProps) {
  const trpc = useTRPC()
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useQuery(
    trpc.GraphQLPlayers.PlayersList.queryOptions({
      search: search || undefined,
      page,
      pageSize,
    }),
  )

  return (
    <div className="space-y-4">
      {isError && <p className="text-sm text-red-500">Failed to load players.</p>}

      <Table
        columns={PlayersListColumns}
        data={data?.players ?? []}
        isLoading={isLoading}
        emptyMessage="No players found."
      />

      {data && (
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>{data.pagination.totalRecords} players</span>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Prev
            </button>
            <span>Page {data.pagination.page} of {data.pagination.totalPages}</span>
            <button
              disabled={page >= data.pagination.totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface WidgetPlayersProps {
  pageSize: number
  search: string
}
