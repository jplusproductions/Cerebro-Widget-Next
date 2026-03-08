"use client"
import { useState, useRef, useEffect } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import { IPagination } from "@AppTypes/commons"
import { GamesListColumns } from "@AppComps/table-columns/GamesListColumn"
import { PlayersListColumns } from "@AppComps/table-columns/PlayersListColumn"
import { TeamsListColumns } from "@AppComps/table-columns/TeamsListColumn"
import Table from "@AppComps/table/Table"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const tabs = ["Schedule", "Games", "Teams", "Players"] as const
type Tab = typeof tabs[number]

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalEventDetailPage() {
  const trpc = useTRPC()
  const router = useRouter()
  const { eventId } = useParams<{ eventId: string }>()
  const searchParams = useSearchParams()
  const backUrl = searchParams.get("back") ?? "/portal/events"
  const initialTab = tabs.find((t) => t.toLowerCase() === searchParams.get("tab")) ?? "Schedule"
  const [activeTab, setActiveTab] = useState<Tab>(initialTab)
  const [search, setSearch] = useState("")
  const [appliedSearch, setAppliedSearch] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  function applySearch() {
    setAppliedSearch(search)
    setShowDropdown(false)
  }

  function handleTabChange(tab: Tab) {
    setActiveTab(tab)
    setSearch("")
    setAppliedSearch("")
    setShowDropdown(false)
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const { data: event, isLoading, isError } = useQuery(
    trpc.RouterCerebroEvent.EventRead.queryOptions({ id: eventId }),
  )

  return (
    <div className="flex h-full flex-col gap-6">
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

        {isError && <p className="text-sm text-red-500">Failed to load event.</p>}

        {event && (
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{event.name}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              {event.location && <span>{event.location}</span>}
              {event.region && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>{event.region}</span>
                </>
              )}
              {event.gender && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>{event.gender}</span>
                </>
              )}
              {event.level && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>{event.level}</span>
                </>
              )}
              {event.startDate && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
                  <span>
                    {new Date(event.startDate).toLocaleDateString()}
                    {event.endDate && ` – ${new Date(event.endDate).toLocaleDateString()}`}
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tabs + Search */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-end justify-between">
          <nav className="-mb-px flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
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

          {activeTab !== "Schedule" && (
            <div className="mb-2 flex items-center gap-2">
              <div className="relative" ref={dropdownRef}>
                <input
                  type="text"
                  placeholder={`Search ${activeTab.toLowerCase()}...`}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setShowDropdown(e.target.value.length > 0)
                  }}
                  onFocus={() => { if (search.length > 0) setShowDropdown(true) }}
                  onKeyDown={(e) => { if (e.key === "Enter") applySearch() }}
                  className="w-64 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
                />
                {showDropdown && (
                  <>
                    {activeTab === "Games" && <GamesDropdown search={search} eventId={eventId} />}
                    {activeTab === "Teams" && <TeamsDropdown search={search} />}
                    {activeTab === "Players" && <PlayersDropdown search={search} eventId={eventId} />}
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={applySearch}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex min-h-0 flex-1 flex-col">
        {activeTab === "Schedule" && <ScheduleTab />}
        {activeTab === "Games" && <GamesTab appliedSearch={appliedSearch} />}
        {activeTab === "Teams" && <TeamsTab appliedSearch={appliedSearch} />}
        {activeTab === "Players" && <PlayersTab appliedSearch={appliedSearch} />}
      </div>
    </div>
  )
}

// Application Architecture || Define Tab Components
// =======================================================================================
// =======================================================================================
function ScheduleTab() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
      <svg className="mx-auto h-10 w-10 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
      <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">Schedule</p>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Games and results for this event will appear here.</p>
    </div>
  )
}

function GamesDropdown({ search, eventId }: { search: string; eventId: string }) {
  const trpc = useTRPC()
  const router = useRouter()

  const { data } = useQuery({
    ...trpc.RouterCerebroGames.GamesList.queryOptions({
      page: 1,
      pageSize: 3,
      search,
      eventId,
    }),
    enabled: search.length > 0,
  })

  const suggestions = data?.games ?? []
  if (suggestions.length === 0) return null

  return (
    <ul className="absolute right-0 z-50 mt-1 w-64 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
      {suggestions.map((game) => (
        <li key={game.id}>
          <button
            type="button"
            onClick={() => router.push(`/portal/games/${game.id}?back=${encodeURIComponent(`/portal/events/${eventId}?tab=games`)}`)}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <span className="truncate">{new Date(game.game_date).toLocaleDateString()}</span>
            <span className="ml-auto shrink-0 text-xs text-zinc-400">
              {game.team_one_score} - {game.team_two_score}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

function TeamsDropdown({ search }: { search: string }) {
  const trpc = useTRPC()
  const router = useRouter()
  const { eventId } = useParams<{ eventId: string }>()

  const { data } = useQuery({
    ...trpc.RouterCerebroTeams.TeamsList.queryOptions({
      page: 1,
      pageSize: 3,
      search,
      eventId,
    }),
    enabled: search.length > 0,
  })

  const suggestions = data?.teams ?? []
  if (suggestions.length === 0) return null

  return (
    <ul className="absolute right-0 z-50 mt-1 w-64 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
      {suggestions.map((team) => (
        <li key={team.id}>
          <button
            type="button"
            onClick={() => router.push(`/portal/teams/${team.id}?back=${encodeURIComponent(`/portal/events/${eventId}?tab=teams`)}`)}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-600 dark:bg-zinc-600 dark:text-zinc-300">
              {team.name.charAt(0)}
            </div>
            <span className="truncate">{team.name}</span>
            {team.city && <span className="ml-auto shrink-0 text-xs text-zinc-400">{team.city}</span>}
          </button>
        </li>
      ))}
    </ul>
  )
}

function PlayersDropdown({ search, eventId }: { search: string; eventId: string }) {
  const trpc = useTRPC()
  const router = useRouter()

  const { data } = useQuery({
    ...trpc.RouterCerebroPlayers.PlayersList.queryOptions({
      page: 1,
      pageSize: 3,
      search,
      eventId,
    }),
    enabled: search.length > 0,
  })

  const suggestions = data?.players ?? []
  if (suggestions.length === 0) return null

  return (
    <ul className="absolute right-0 z-50 mt-1 w-64 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
      {suggestions.map((player) => (
        <li key={player.id}>
          <button
            type="button"
            onClick={() => router.push(`/portal/players/${player.id}?back=${encodeURIComponent(`/portal/events/${eventId}?tab=players`)}`)}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-600 dark:bg-zinc-600 dark:text-zinc-300">
              {player.name.charAt(0)}
            </div>
            <span className="truncate">{player.name}</span>
            {player.teamName && <span className="ml-auto shrink-0 text-xs text-zinc-400">{player.teamName}</span>}
          </button>
        </li>
      ))}
    </ul>
  )
}

function GamesTab({ appliedSearch }: { appliedSearch: string }) {
  const trpc = useTRPC()
  const router = useRouter()
  const { eventId } = useParams<{ eventId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroGames.GamesList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      eventId,
      ...(appliedSearch ? { search: appliedSearch } : {}),
    }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load games.</p>

  return (
    <div className="flex h-full flex-col">
      <Table
        name="Games"
        columns={GamesListColumns}
        data={data?.games ?? []}
        isLoading={isLoading}
        emptyMessage="No games found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
        onRowClick={(game) => router.push(`/portal/games/${game.id}?back=${encodeURIComponent(`/portal/events/${eventId}?tab=games`)}`)}
      />
    </div>
  )
}

function TeamsTab({ appliedSearch }: { appliedSearch: string }) {
  const trpc = useTRPC()
  const router = useRouter()
  const { eventId } = useParams<{ eventId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroTeams.TeamsList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      eventId,
      ...(appliedSearch ? { search: appliedSearch } : {}),
    }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load teams.</p>

  return (
    <div className="flex h-full flex-col">
      <Table
        name="Teams"
        columns={TeamsListColumns}
        data={data?.teams ?? []}
        isLoading={isLoading}
        emptyMessage="No teams found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
        onRowClick={(team) => router.push(`/portal/teams/${team.id}?back=${encodeURIComponent(`/portal/events/${eventId}?tab=teams`)}`)}
      />
    </div>
  )
}

function PlayersTab({ appliedSearch }: { appliedSearch: string }) {
  const trpc = useTRPC()
  const router = useRouter()
  const { eventId } = useParams<{ eventId: string }>()
  const [pagination, setPagination] = useState<IPagination>({ page: 1, pageSize: 25 })

  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroPlayers.PlayersList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      eventId,
      ...(appliedSearch ? { search: appliedSearch } : {}),
    }),
  )

  if (isError) return <p className="text-sm text-red-500">Failed to load players.</p>

  return (
    <div className="flex h-full flex-col">
      <Table
        name="Players"
        columns={PlayersListColumns}
        data={data?.players ?? []}
        isLoading={isLoading}
        emptyMessage="No players found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
        onRowClick={(player) => router.push(`/portal/players/${player.id}?back=${encodeURIComponent(`/portal/events/${eventId}?tab=players`)}`)}
      />
    </div>
  )
}
