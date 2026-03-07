"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import { IPagination } from "@AppTypes/commons"
import { PlayersListColumns } from "@AppComps/table-columns/PlayersListColumn"
import Table from "@AppComps/table/Table"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalPlayersPage() {
  const trpc = useTRPC()
  const [search, setSearch] = useState("")
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    pageSize: 25,
  })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroPlayers.PlayersList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
    }),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Players</h1>
        <input
          type="text"
          placeholder="Search players..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPagination((prev) => ({ ...prev, page: 1 })) }}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
        />
      </div>

      {isError && <p className="text-sm text-red-500">Failed to load players.</p>}

      <Table
        name="Players"
        columns={PlayersListColumns}
        data={data?.players ?? []}
        isLoading={isLoading}
        emptyMessage="No players found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        onPageChange={(page) => setPagination((prev) => ({ ...prev, page }))}
      />
    </div>
  )
}
