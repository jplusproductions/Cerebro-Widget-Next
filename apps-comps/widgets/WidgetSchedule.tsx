"use client"
import { useState, useMemo } from "react"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import type { ExposureGame } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Helpers
// =======================================================================================
// =======================================================================================
function formatDateHeading(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function isGameCompleted(game: ExposureGame): boolean {
  return game.AwayTeam.Score != null && game.HomeTeam.Score != null
    && (game.AwayTeam.Score > 0 || game.HomeTeam.Score > 0)
}

function getGameStatus(game: ExposureGame): { label: string; color: string } | null {
  if (isGameCompleted(game)) return null
  // If game has a time and hasn't been played, show the time
  if (game.Time) {
    const [hours, minutes] = game.Time.split(":")
    const h = parseInt(hours, 10)
    const ampm = h >= 12 ? "PM" : "AM"
    const h12 = h % 12 || 12
    return { label: `${h12}:${minutes} ${ampm}`, color: "text-zinc-500 dark:text-zinc-400" }
  }
  return null
}

function getRoundLabel(game: ExposureGame): string {
  if (game.BracketName) return game.BracketName
  switch (game.Round) {
    case 1: return "Championship"
    case 2: return "Semifinal"
    case 3: return "Quarterfinal"
    default: return "Pool Play"
  }
}

function groupByDate(games: ExposureGame[]): Map<string, ExposureGame[]> {
  const map = new Map<string, ExposureGame[]>()
  for (const game of games) {
    const dateKey = game.Date.split("T")[0]
    const existing = map.get(dateKey)
    if (existing) existing.push(game)
    else map.set(dateKey, [game])
  }
  return map
}

function TeamLogo({ name, color }: { name: string; color?: string }) {
  const bg = color || "#6b7280"
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
      style={{ backgroundColor: bg }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  )
}

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
export default function WidgetSchedule({ eventId = 260104, pageSize = 10 }: WidgetFixturesProps) {
  const trpc = useTRPC()
  const [activeTab, setActiveTab] = useState<"schedule" | "results">("schedule")
  const [selectedRound, setSelectedRound] = useState("all")
  const [selectedTeam, setSelectedTeam] = useState("all")
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useQuery(
    trpc.RouterExposureGames.GamesList.queryOptions({
      eventId,
      page,
      pageSize,
    }),
  )

  const games = data?.games ?? []

  // Derive filter options
  const roundOptions = useMemo(() => {
    const rounds = new Set<string>()
    for (const g of games) rounds.add(getRoundLabel(g))
    return Array.from(rounds).sort()
  }, [games])

  const teamOptions = useMemo(() => {
    const teams = new Set<string>()
    for (const g of games) {
      if (g.AwayTeam.Name) teams.add(g.AwayTeam.Name)
      if (g.HomeTeam.Name) teams.add(g.HomeTeam.Name)
    }
    return Array.from(teams).sort()
  }, [games])

  // Filter games by tab + filters
  const filtered = useMemo(() => {
    let list = games
    // Tab filter
    if (activeTab === "results") {
      list = list.filter(isGameCompleted)
    } else {
      list = list.filter((g) => !isGameCompleted(g))
    }
    // Round filter
    if (selectedRound !== "all") {
      list = list.filter((g) => getRoundLabel(g) === selectedRound)
    }
    // Team filter
    if (selectedTeam !== "all") {
      list = list.filter((g) => g.AwayTeam.Name === selectedTeam || g.HomeTeam.Name === selectedTeam)
    }
    return list
  }, [games, activeTab, selectedRound, selectedTeam])

  const grouped = useMemo(() => groupByDate(filtered), [filtered])

  return (
    <div className="flex flex-col bg-gray-100 dark:bg-zinc-900 min-h-screen">
      {/* Header Bar */}
      <div className="flex items-center justify-center bg-white dark:bg-zinc-950 px-4 py-3 border-b border-gray-200 dark:border-zinc-800">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`pb-1 text-xs font-bold uppercase tracking-wide ${
              activeTab === "schedule"
                ? "border-b-2 border-brand text-brand"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Fixtures
          </button>
          <button
            onClick={() => setActiveTab("results")}
            className={`pb-1 text-xs font-bold uppercase tracking-wide ${
              activeTab === "results"
                ? "border-b-2 border-brand text-brand"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Results
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-3 bg-white dark:bg-zinc-950 px-4 py-2 border-b border-gray-200 dark:border-zinc-800">
        <select
          value={selectedRound}
          onChange={(e) => setSelectedRound(e.target.value)}
          className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300"
        >
          <option value="all">All Rounds</option>
          {roundOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300"
        >
          <option value="all">All Teams</option>
          {teamOptions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-4">
        {isLoading && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading games...</p>
        )}
        {isError && (
          <p className="text-sm text-red-500">Failed to load games.</p>
        )}
        {!isLoading && !isError && filtered.length === 0 && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">No games found.</p>
        )}

        {Array.from(grouped.entries()).map(([dateKey, dateGames]) => (
          <div key={dateKey}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {formatDateHeading(dateKey)}
            </h3>
            <div className="space-y-2">
              {dateGames.map((game) => {
                const status = getGameStatus(game)
                const venue = game.VenueCourt?.Court?.Abbr
                return (
                  <div
                    key={game.Id}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 shadow-sm"
                  >
                    {/* Away Team */}
                    <div className="flex flex-1 items-center justify-end gap-2">
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 text-right truncate">
                        {game.AwayTeam.Name}
                      </span>
                      <TeamLogo name={game.AwayTeam.Name} color={game.AwayTeam.Color} />
                    </div>

                    {/* Score / Status */}
                    <div className="flex flex-col items-center min-w-[72px]">
                      {status && (
                        <span className={`text-[10px] font-semibold uppercase ${status.color}`}>
                          {status.label}
                        </span>
                      )}
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {game.AwayTeam.Score ?? 0} - {game.HomeTeam.Score ?? 0}
                      </span>
                      {venue && (
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                          {venue}
                        </span>
                      )}
                    </div>

                    {/* Home Team */}
                    <div className="flex flex-1 items-center gap-2">
                      <TeamLogo name={game.HomeTeam.Name} color={game.HomeTeam.Color} />
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
                        {game.HomeTeam.Name}
                      </span>
                    </div>

                    {/* Chevron */}
                    <span className="text-zinc-300 dark:text-zinc-600">›</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {data && (
        <div className="flex items-center justify-between bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{data.pagination.totalRecords} games</span>
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
interface WidgetFixturesProps {
  eventId?: number
  pageSize?: number
}
