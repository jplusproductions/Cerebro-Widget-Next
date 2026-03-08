"use client"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function PortalGameDetailPage() {
  const trpc = useTRPC()
  const router = useRouter()
  const { gameId } = useParams<{ gameId: string }>()
  const searchParams = useSearchParams()
  const backUrl = searchParams.get("back") ?? "/portal/games"

  const { data: game, isLoading, isError } = useQuery(
    trpc.RouterCerebroGame.GameRead.queryOptions({ id: gameId }),
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

        {isError && <p className="text-sm text-red-500">Failed to load game.</p>}

        {game && (
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Game — {new Date(game.game_date).toLocaleDateString()}
            </h1>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
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

      {/* Game Details */}
      {game && (
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Team 1</p>
            <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-100">{game.team_one_score}</p>
            <p className="mt-0.5 text-xs text-zinc-400">{game.team_one_id}</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Team 2</p>
            <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-100">{game.team_two_score}</p>
            <p className="mt-0.5 text-xs text-zinc-400">{game.team_two_id}</p>
          </div>
        </div>
      )}
    </div>
  )
}
