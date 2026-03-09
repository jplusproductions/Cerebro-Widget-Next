"use client"
import { useState } from "react"
import Link from "next/link"
import { useParams, useSearchParams, useRouter } from "next/navigation"
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
export default function PortalGameDetailPage() {
  const trpc = useTRPC()
  const { gameId } = useParams<{ gameId: string }>()
  const searchParams = useSearchParams()
  const backUrl = searchParams.get("back") ?? "/portal/games"
  const initialTab = searchParams.get("tab") === "team2" ? 1 : 0
  const [activeTab, setActiveTab] = useState(initialTab)

  const { data: game, isLoading, isError } = useQuery(
    trpc.RouterCerebroGame.GameRead.queryOptions({ id: gameId }),
  )

  const { data: team1 } = useQuery({
    ...trpc.RouterCerebroTeam.TeamRead.queryOptions({ id: game?.team_one_id ?? "" }),
    enabled: !!game?.team_one_id,
  })

  const { data: team2 } = useQuery({
    ...trpc.RouterCerebroTeam.TeamRead.queryOptions({ id: game?.team_two_id ?? "" }),
    enabled: !!game?.team_two_id,
  })

  const team1Name = team1?.name ?? "Team 1"
  const team2Name = team2?.name ?? "Team 2"
  const tabs = [team1Name, team2Name]

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href={backUrl} className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
          Games
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">View Game</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        {isLoading && (
          <div className="space-y-2">
            <div className="h-7 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="h-4 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
        )}

        {isError && <p className="text-sm text-red-500">Failed to load game.</p>}

        {game && (
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {team1Name} vs {team2Name}
            </h1>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{new Date(game.game_date).toLocaleDateString()}</span>
              <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
              <span>Score: {game.team_one_score} - {game.team_two_score}</span>
              {game.start_time && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>{game.start_time}</span>
                </>
              )}
              {game.playoff && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>{game.playoff}</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="-mb-px flex gap-6">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                activeTab === i
                  ? "border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
                  : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 0 && game && <TeamPlayersTab teamId={game.team_one_id} teamName={team1Name} />}
        {activeTab === 1 && game && <TeamPlayersTab teamId={game.team_two_id} teamName={team2Name} />}
      </div>
    </div>
  )
}

// Application Architecture || Define Tab Components
// =======================================================================================
// =======================================================================================
function TeamPlayersTab({ teamId, teamName }: { teamId: string; teamName: string }) {
  const trpc = useTRPC()
  const router = useRouter()
  const { gameId } = useParams<{ gameId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroPlayers.PlayersList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      teamId,
    }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load players.</p>

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-sm font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
          {teamName.charAt(0)}
        </div>
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{teamName}</span>
      </div>
      <Table
        name="Players"
        columns={PlayersListColumns}
        data={data?.players ?? []}
        isLoading={isLoading}
        emptyMessage="No players found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
        onRowClick={(player) => router.push(`/portal/players/${player.id}?back=${encodeURIComponent(`/portal/games/${gameId}`)}`)}
      />
    </div>
  )
}
