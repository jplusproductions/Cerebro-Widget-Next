"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import WidgetSchedules from "@AppComps/widgets/WidgetSchedules"
import WidgetStandings from "@AppComps/widgets/WidgetStandings"
import WidgetTeams from "@AppComps/widgets/WidgetTeams"
import WidgetPlayers from "@AppComps/widgets/WidgetPlayers"
import WidgetStatistics from "@AppComps/widgets/WidgetStatistics"

// Application Architecture || Define Component
// =======================================================================================
// =======================================================================================
function WidgetRouter() {
  const searchParams = useSearchParams()
  const view = searchParams.get("view") || "schedules"
  const search = searchParams.get("search") || ""
  const eventId = Number(searchParams.get("eventId")) || 260104
  const pageSize = Number(searchParams.get("pageSize")) || 10

  return (
    <>
      {view === "schedules" && <WidgetSchedules pageSize={pageSize} eventId={eventId} />}
      {view === "standings" && <WidgetStandings eventId={eventId} />}
      {view === "teams" && <WidgetTeams pageSize={pageSize} eventId={eventId} />}
      {view === "players" && <WidgetPlayers pageSize={pageSize} search={search} eventId={eventId} />}
      {view === "statistics" && <WidgetStatistics eventId={eventId} />}
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
