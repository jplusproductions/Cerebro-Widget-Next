"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import { StatisticCategory } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-enums"

// Application Architecture || Define Constants
// =======================================================================================
// =======================================================================================
const CATEGORY_OPTIONS = Object.entries(StatisticCategory).map(([label, value]) => ({ label, value }))

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
export default function WidgetStatistics({ eventId }: WidgetStatisticsProps) {
  const trpc = useTRPC()
  const [category, setCategory] = useState<StatisticCategory>(StatisticCategory.Points)

  const { data, isLoading, isError } = useQuery(
    trpc.RouterExposureStatistics.StatisticsList.queryOptions({
      eventId,
      categories: category,
    }),
  )

  const statistics = data?.statistics ?? []

  return (
    <div className="space-y-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as StatisticCategory)}
        className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {CATEGORY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {isLoading && <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading statistics...</p>}
      {isError && <p className="text-sm text-red-500">Failed to load statistics.</p>}
      {!isLoading && !isError && statistics.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No statistics found.</p>
      )}

      {statistics.length > 0 && (
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">
                <th className="px-4 py-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Player</th>
                <th className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">Stats</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((stat, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-zinc-800 last:border-0">
                  <td className="px-4 py-2 text-zinc-800 dark:text-zinc-200">{stat.PlayerId}</td>
                  <td className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">-</td>
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
interface WidgetStatisticsProps {
  eventId: number
}
