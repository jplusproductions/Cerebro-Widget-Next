"use client"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"
import { IPagination } from "@AppTypes/commons"
import { GamesListColumns } from "@AppComps/table-columns/GamesListColumn"
import Table from "@AppComps/table/Table"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalGamesPage() {
  const trpc = useTRPC()
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [appliedSearch, setAppliedSearch] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    pageSize: 25,
  })

  function applySearch() {
    setAppliedSearch(search)
    setShowDropdown(false)
    setPagination((prev) => ({ ...prev, page: 1 }))
  }

  // Games autocomplete query — fetches top 3 results when user types
  const { data: suggestionsData } = useQuery({
    ...trpc.RouterCerebroGames.GamesList.queryOptions({
      page: 1,
      pageSize: 3,
      search,
    }),
    enabled: search.length > 0,
  })

  // Games list query — uses appliedSearch so it only re-fetches on Apply
  const { data, isLoading, isError } = useQuery(
    trpc.RouterCerebroGames.GamesList.queryOptions({
      page: pagination.page,
      pageSize: pagination.pageSize,
      ...(appliedSearch ? { search: appliedSearch } : {}),
    }),
  )

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

  const suggestions = suggestionsData?.games ?? []

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Games</h1>

        {/* Search with game autocomplete */}
        <div className="flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setShowDropdown(e.target.value.length > 0)
              }}
              onFocus={() => { if (search.length > 0) setShowDropdown(true) }}
              onKeyDown={(e) => { if (e.key === "Enter") applySearch() }}
              className="w-64 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
            />
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute right-0 z-50 mt-1 w-64 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
                {suggestions.map((game) => (
                  <li key={game.id}>
                    <button
                      type="button"
                      onClick={() => {
                        router.push(`/portal/games/${game.id}`)
                      }}
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
      </div>

      {isError && <p className="text-sm text-red-500">Failed to load games.</p>}

      <Table
        name="Games"
        columns={GamesListColumns}
        data={data?.games ?? []}
        isLoading={isLoading}
        emptyMessage="No games found."
        pagination={{ ...pagination, total: data?.pagination.totalRecords }}
        setPagination={(page) => setPagination((prev) => ({ ...prev, page }))}
        onRowClick={(game) => router.push(`/portal/games/${game.id}`)}
      />
    </div>
  )
}
