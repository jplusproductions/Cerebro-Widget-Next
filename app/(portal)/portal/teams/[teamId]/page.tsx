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
import { GamesListColumns } from "@AppComps/table-columns/GamesListColumn"
import { PlayersListColumns } from "@AppComps/table-columns/PlayersListColumn"
import { EventsListColumns } from "@AppComps/table-columns/EventsListColumn"
import Table from "@AppComps/table/Table"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const tabs = ["Players", "Games", "Events"] as const
type Tab = typeof tabs[number]

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalTeamDetailPage() {
  const trpc = useTRPC()
  const { teamId } = useParams<{ teamId: string }>()
  const searchParams = useSearchParams()
  const initialTab = tabs.find((t) => t.toLowerCase() === searchParams.get("tab")) ?? "Players"
  const [activeTab, setActiveTab] = useState<Tab>(initialTab)

  const { data: team, isLoading, isError } = useQuery(
    trpc.RouterCerebroTeam.TeamRead.queryOptions({ id: teamId }),
  )

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/portal/teams" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
          Teams
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">View Team</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        {isLoading && (
          <div className="space-y-2">
            <div className="h-7 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="h-4 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
        )}

        {isError && <p className="text-sm text-red-500">Failed to load team.</p>}

        {team && (
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{team.name}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              {team.city && <span>{team.city}</span>}
              {team.home_arena && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>{team.home_arena}</span>
                </>
              )}
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
        {activeTab === "Players" && <PlayersTab />}
        {activeTab === "Games" && <GamesTab />}
        {activeTab === "Events" && <EventsTab />}
      </div>
    </div>
  )
}

// Application Architecture || Define Tab Components
// =======================================================================================
// =======================================================================================
function PlayersTab() {
  const trpc = useTRPC()
  const router = useRouter()
  const { teamId } = useParams<{ teamId: string }>()
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
    <Table
      name="Players"
      columns={PlayersListColumns}
      data={data?.players ?? []}
      isLoading={isLoading}
      emptyMessage="No players found."
      pagination={{ ...pagination, total: data?.pagination.totalRecords }}
      setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
      onRowClick={(player) => router.push(`/portal/players/${player.id}?back=${encodeURIComponent(`/portal/teams/${teamId}?tab=players`)}`)}
    />
  )
}

function EventsTab() {
  const trpc = useTRPC()
  const router = useRouter()
  const { teamId } = useParams<{ teamId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroEvents.EventsList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
    }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load events.</p>

  return (
    <Table
      name="Events"
      columns={EventsListColumns}
      data={data?.events ?? []}
      isLoading={isLoading}
      emptyMessage="No events found."
      pagination={{ ...pagination, total: data?.pagination.totalRecords }}
      setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
      onRowClick={(event) => router.push(`/portal/events/${event.id}?back=${encodeURIComponent(`/portal/teams/${teamId}?tab=events`)}`)}
    />
  )
}

function GamesTab() {
  const trpc = useTRPC()
  const router = useRouter()
  const { teamId } = useParams<{ teamId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroGames.GamesList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      teamId,
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
      onRowClick={(game) => router.push(`/portal/games/${game.id}?back=${encodeURIComponent(`/portal/teams/${teamId}?tab=games`)}`)}
    />
  )
}
