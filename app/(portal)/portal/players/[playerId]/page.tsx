"use client"
import { useState } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import { IPagination } from "@AppTypes/commons"
import { GamesListColumns } from "@AppComps/table-columns/GamesListColumn"
import Table from "@AppComps/table/Table"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const tabs = ["Teams", "Games"] as const
type Tab = typeof tabs[number]

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalPlayerDetailPage() {
  const trpc = useTRPC()
  const router = useRouter()
  const { playerId } = useParams<{ playerId: string }>()
  const searchParams = useSearchParams()
  const backUrl = searchParams.get("back") ?? "/portal/players"
  const [activeTab, setActiveTab] = useState<Tab>("Teams")

  const { data: player, isLoading, isError } = useQuery(
    trpc.RouterCerebroPlayer.PlayerRead.queryOptions({ id: playerId }),
  )

  return (
    <div className="space-y-6">
      {/* Back */}
      <button
        onClick={() => router.push(backUrl)}
        className="flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Header */}
      <div className="space-y-4">
        {isLoading && (
          <div className="space-y-2">
            <div className="h-7 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="h-4 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
        )}

        {isError && <p className="text-sm text-red-500">Failed to load player.</p>}

        {player && (
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-lg font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
              {player.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{player.name}</h1>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                {player.teamName && <span>{player.teamName}</span>}
                {player.position && (
                  <>
                    <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                    <span>{player.position}</span>
                  </>
                )}
                {player.nationality && (
                  <>
                    <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                    <span>{player.nationality}</span>
                  </>
                )}
                {player.hometown && (
                  <>
                    <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                    <span>{player.hometown}</span>
                  </>
                )}
                {player.heightInches && (
                  <>
                    <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                    <span>{player.heightInches}&quot;</span>
                  </>
                )}
                {player.weightLb && (
                  <>
                    <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                    <span>{player.weightLb} lbs</span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="-mb-px flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                activeTab === tab
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
        {activeTab === "Teams" && <TeamsTab teamName={player?.teamName ?? null} />}
        {activeTab === "Games" && <GamesTab />}
      </div>
    </div>
  )
}

// Application Architecture || Define Tab Components
// =======================================================================================
// =======================================================================================
function TeamsTab({ teamName }: { teamName: string | null }) {
  if (!teamName) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <svg className="mx-auto h-10 w-10 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">No Teams</p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">This player is not currently assigned to a team.</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-sm font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
          {teamName.charAt(0)}
        </div>
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{teamName}</span>
      </div>
    </div>
  )
}

function GamesTab() {
  const trpc = useTRPC()
  const router = useRouter()
  const { playerId } = useParams<{ playerId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroGames.GamesList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      playerId,
    }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load games.</p>

  return (
    <Table
      name="Games"
      columns={GamesListColumns}
      data={data?.games ?? []}
      isLoading={isLoading}
      emptyMessage="No games found."
      pagination={{ ...pagination, total: data?.pagination.totalRecords }}
      setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
      onRowClick={(game) => router.push(`/portal/games/${game.id}?back=${encodeURIComponent(`/portal/players/${playerId}?tab=games`)}`)}
    />
  )
}
