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
export default function WidgetPlayers({ pageSize }: WidgetPlayersProps) {
  const trpc = useTRPC()
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    pageSize,
  })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroPlayers.PlayersList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
    }),
  )

  return (
    <div className="space-y-4">
      {isError && <p className="text-sm text-red-500">Failed to load players.</p>}

      <Table
        name="Players"
        columns={PlayersListColumns}
        data={data?.players ?? []}
        isLoading={isLoading}
        rowHeight={"h-8"}
        emptyMessage="No players found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
      />
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface WidgetPlayersProps {
  pageSize: number
  search: string
  eventId: number
}
