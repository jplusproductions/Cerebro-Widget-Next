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

  const standings = data?.standings ?? []

  return (
    <div className="space-y-4">
      {isLoading && <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading standings...</p>}
      {isError && <p className="text-sm text-red-500">Failed to load standings.</p>}
      {!isLoading && !isError && standings.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No standings found.</p>
      )}

      {standings.length > 0 && (
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">
                <th className="px-4 py-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Team</th>
                <th className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">W</th>
                <th className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">L</th>
                <th className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">T</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((standing, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-zinc-800 last:border-0">
                  <td className="px-4 py-2 text-zinc-800 dark:text-zinc-200">{standing.TeamId}</td>
                  <td className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">{String((standing as Record<string, unknown>).Wins ?? "-")}</td>
                  <td className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">{String((standing as Record<string, unknown>).Losses ?? "-")}</td>
                  <td className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">{String((standing as Record<string, unknown>).Ties ?? "-")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface WidgetStandingsProps {
  eventId: number
}
