"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import WidgetPlayers from "@AppComps/widgets/WidgetPlayers"

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
function WidgetRouter() {
  const searchParams = useSearchParams()
  const view = searchParams.get("view")
  const pageSize = Number(searchParams.get("pageSize")) || 25
  const search = searchParams.get("search") || ""
  const theme = searchParams.get("theme") || "light"

  const isDark = theme === "dark"

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-zinc-950 p-4">
        {view === "players" && <WidgetPlayers pageSize={pageSize} search={search} />}
        {!view && (
          <p className="text-sm text-zinc-500">Missing <code>view</code> parameter. Try <code>?view=players</code></p>
        )}
        {view && view !== "players" && (
          <p className="text-sm text-zinc-500">Unknown view: <code>{view}</code></p>
        )}
      </div>
    </div>
  )
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function WidgetPage() {
  return (
    <Suspense>
      <WidgetRouter />
    </Suspense>
  )
}
