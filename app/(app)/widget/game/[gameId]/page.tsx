"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
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
export default function WidgetGameDetailPage() {
  const trpc = useTRPC()
  const { gameId } = useParams<{ gameId: string }>()
  const [activeTeamTab, setActiveTeamTab] = useState(0)

  const { data: game, isError } = useQuery(
    trpc.RouterCerebroGame.GameRead.queryOptions({ id: gameId }),
  )

  const team1Name = game?.team_game?.find((t) => t.team_id === game.team_one_id)?.team?.name ?? "Team 1"
  const team2Name = game?.team_game?.find((t) => t.team_id === game.team_two_id)?.team?.name ?? "Team 2"
  const teamTabs = [team1Name, team2Name]

  return (
    <div className="space-y-6">
      {/* Title Card */}
      {isError && <p className="text-sm text-red-500">Failed to load game.</p>}

      {!isError && (
        <div className="flex min-h-[112px] items-center p-6 bg-white rounded-lg border border-gray-200 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex w-full items-center justify-between">
            {game ? (
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{team1Name}</span>
            ) : (
              <div className="flex">
                <div className="h-7 w-8 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
              </div>
            )}
            <div className="flex flex-col items-center">
              {game ? (
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {game.team_one_score} - {game.team_two_score}
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="h-7 w-8 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
                  <div className="h-3 w-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
                  <div className="h-7 w-8 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
                </div>
              )}
              {game ? (
                <span className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {new Date(game.game_date).toLocaleDateString()}
                  {game.start_time && ` \u00B7 ${game.start_time}`}
                  {game.playoff && ` \u00B7 ${game.playoff}`}
                </span>
              ) : (
                <div className="mt-1 flex">
                  <div className="h-3 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
                </div>
              )}
            </div>
            {game ? (
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{team2Name}</span>
            ) : (
              <div className="flex">
                <div className="h-7 w-8 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
              </div>
            )}
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
function TeamStatsTab({ gameId, teamId }: { gameId: string; teamId: string }) {
  const trpc = useTRPC()

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
      pagination={{ page: 1, pageSize: 25, total: data?.total ?? 0 }}
    />
  )
}
