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
export default function WidgetStandings({ eventId = 260104 }: WidgetStandingsProps) {
  const trpc = useTRPC()
  const [divisionId] = useState<number | undefined>(undefined)

  const { data, isLoading, isError } = useQuery(
    trpc.RouterExposureStandings.StandingsList.queryOptions({
      eventId,
      divisionId,
    }),
  )

  const groups = data?.Groups ?? []
  const columns = data?.Columns ?? []

  return (
    <div className="space-y-4">
      {isLoading && <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading standings...</p>}
      {isError && <p className="text-sm text-red-500">Failed to load standings.</p>}
      {!isLoading && !isError && groups.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No standings found.</p>
      )}

      {groups.map((group, gi) => (
        <div key={gi}>
          {group.Name && <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">{group.Name}</h3>}
          {(group.List ?? []).map((pool, pi) => (
            <div key={pi} className="mb-4 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden">
              {pool.Name && <div className="px-4 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700">{pool.Name}</div>}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">
                    <th className="px-4 py-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Team</th>
                    {columns.map((col, ci) => (
                      <th key={ci} className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">{col.Abbr ?? col.Name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(pool.Participants ?? []).map((participant, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-zinc-800 last:border-0">
                      <td className="px-4 py-2 text-zinc-800 dark:text-zinc-200">{participant.Name}</td>
                      {(participant.Columns ?? []).map((col, ci) => (
                        <td key={ci} className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">{col.Name ?? "-"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface WidgetStandingsProps {
  eventId: number
}
