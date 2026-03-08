"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"

// Application Architecture || Define Constants
// =======================================================================================
// =======================================================================================
const STATISTIC_CATEGORIES = {
  Points: "pts", PointsPerGame: "ppg", FieldGoalsMade: "fgm", FieldGoalPct: "fg%",
  TwoPointersMade: "2pm", ThreePointersMade: "3pm", ThreePointPct: "3fg%",
  FreeThrowsMade: "ftm", FreeThrowPct: "ft%", Rebounds: "reb", ReboundsPerGame: "rpg",
  DefensiveRebounds: "dreb", OffensiveRebounds: "oreb", Assists: "ast", AssistsPerGame: "apg",
  Steals: "stl", StealsPerGame: "spg", Blocks: "blk", BlocksPerGame: "bpg",
  Turnovers: "to", TurnoversPerGame: "tpg",
} as const

type StatisticCategory = typeof STATISTIC_CATEGORIES[keyof typeof STATISTIC_CATEGORIES]
const CATEGORY_OPTIONS = Object.entries(STATISTIC_CATEGORIES).map(([label, value]) => ({ label, value }))

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
export default function WidgetStatistics({ eventId }: WidgetStatisticsProps) {
  const trpc = useTRPC()
  const [category, setCategory] = useState<StatisticCategory>("pts")

  const { data, isLoading, isError } = useQuery(
    trpc.RouterExposureStatistics.StatisticsList.queryOptions({
      eventId,
      categories: category,
    }),
  )

  const leaders = data?.Players?.Statistics ?? []

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
      {!isLoading && !isError && leaders.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No statistics found.</p>
      )}

      {leaders.map((leader, li) => (
        <div key={li} className="rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden">
          {leader.Name && <div className="px-4 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700">{leader.Name}</div>}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">
                <th className="px-4 py-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Player</th>
                <th className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">Value</th>
              </tr>
            </thead>
            <tbody>
              {(leader.Participants ?? []).map((p, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-zinc-800 last:border-0">
                  <td className="px-4 py-2 text-zinc-800 dark:text-zinc-200">{p.FirstName} {p.LastName}</td>
                  <td className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">{p.Value ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface WidgetStatisticsProps {
  eventId: number
}
