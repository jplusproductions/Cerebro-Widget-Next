"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
export default function WidgetTeams({ pageSize = 10 }: WidgetTeamsProps) {
  const trpc = useTRPC()
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useQuery(
    trpc.RouterExposureTeams.TeamsList.queryOptions({
      page,
      pageSize,
    }),
  )

  const teams = data?.teams ?? []

  return (
    <div className="space-y-4">
      {isLoading && <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading teams...</p>}
      {isError && <p className="text-sm text-red-500">Failed to load teams.</p>}
      {!isLoading && !isError && teams.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No teams found.</p>
      )}

      <div className="space-y-2">
        {teams.map((team) => (
          <div
            key={team.Id}
            className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 shadow-sm"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white bg-zinc-500"
            >
              {team.Name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">{team.Name}</p>
            </div>
          </div>
        ))}
      </div>

      {data && (
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>{data.pagination.totalRecords} teams</span>
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
interface WidgetTeamsProps {
  pageSize: number
  eventId: number
}
