"use client"
import { useState } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import { StatisticsListColumns } from "@AppComps/table-columns/StatisticsListColumn"
import Table from "@AppComps/table/Table"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalGameDetailPage() {
  const trpc = useTRPC()
  const { gameId } = useParams<{ gameId: string }>()
  const searchParams = useSearchParams()
  const backUrl = searchParams.get("back") ?? "/portal/games"
  const [activeTeamTab, setActiveTeamTab] = useState(0)

  const { data: game, isLoading, isError } = useQuery(
    trpc.RouterCerebroGame.GameRead.queryOptions({ id: gameId }),
  )

  const team1Name = game?.team_game?.find((t) => t.team_id === game.team_one_id)?.team?.name ?? "Team 1"
  const team2Name = game?.team_game?.find((t) => t.team_id === game.team_two_id)?.team?.name ?? "Team 2"
  const teamTabs = [team1Name, team2Name]

  return (
    <div className="space-y-6">
      {/* Title Card */}
      {isLoading && (
        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div className="h-6 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-3 w-36 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
            </div>
            <div className="h-6 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
        </div>
      )}

      {isError && <p className="text-sm text-red-500">Failed to load game.</p>}

      {game && (
        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{team1Name}</span>
              <CopyButton value={game.team_one_id} />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {game.team_one_score} - {game.team_two_score}
              </span>
              <span className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {new Date(game.game_date).toLocaleDateString()}
                {game.start_time && ` \u00B7 ${game.start_time}`}
                {game.playoff && ` \u00B7 ${game.playoff}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton value={game.team_two_id} />
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{team2Name}</span>
            </div>
          </div>
        </div>
      )}

      {/* Team Sub-Tabs */}
      <div className="flex gap-2">
        {teamTabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTeamTab(i)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activeTeamTab === i
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {game && (
        <div>
          {activeTeamTab === 0 && <TeamStatsTab gameId={gameId} teamId={game.team_one_id} />}
          {activeTeamTab === 1 && <TeamStatsTab gameId={gameId} teamId={game.team_two_id} />}
        </div>
      )}
    </div>
  )
}

// Application Architecture || Define Tab Components
// =======================================================================================
// =======================================================================================
function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      title={`Copy ID: ${value}`}
      className="rounded p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
    >
      {copied ? (
        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  )
}

function TeamStatsTab({ gameId, teamId }: { gameId: string; teamId: string }) {
  const trpc = useTRPC()
  const router = useRouter()

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroGame.GameXStatisticsList.queryOptions({ gameId, teamId }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load statistics.</p>

  return (
    <Table
      name="Statistics"
      columns={StatisticsListColumns}
      data={data?.statistics ?? []}
      isLoading={isLoading}
      emptyMessage="No statistics found."
      pagination={{ page: 1, pageSize: 50, total: data?.total ?? 0 }}
      onRowClick={(stat) => router.push(`/portal/players/${stat.playerId}?back=${encodeURIComponent(`/portal/games/${gameId}`)}`)}
    />
  )
}
