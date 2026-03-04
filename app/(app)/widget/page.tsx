"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import WidgetPlayers from "@AppComps/widgets/WidgetPlayers"
import WidgetSchedule from "@AppComps/widgets/WidgetSchedule"

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
function WidgetRouter() {
  const searchParams = useSearchParams()
  const view = searchParams.get("view") || "schedule"
  const search = searchParams.get("search") || ""
  const eventId = Number(searchParams.get("eventId")) || 260104
  const pageSize = Number(searchParams.get("pageSize")) || 10

  return (
    <>
      {view === "players" && <WidgetPlayers pageSize={pageSize} search={search} />}
      {view === "schedule" && <WidgetSchedule pageSize={pageSize} eventId={eventId} />}
    </>
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
