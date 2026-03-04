"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Suspense, useCallback, useState } from "react"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import ThemeToggle from "@/app/components/theme-toggle"

// Application Architecture || Define Constants
// =======================================================================================
// =======================================================================================
const VIEW_OPTIONS = [
  { value: "schedule", label: "Schedule" },
  { value: "players", label: "Players" },
] as const

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const view = searchParams.get("view") || "schedule"
  const initialTheme = searchParams.get("theme") || "light"
  const banner = searchParams.get("banner") !== "false"
  const themeToggle = true

  const [isDark, setIsDark] = useState(initialTheme === "dark")

  const handleViewChange = useCallback((newView: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("view", newView)
    router.push(`${pathname}?${params.toString()}`)
  }, [searchParams, router, pathname])

  return (
    <Suspense>
      <div className={isDark ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-zinc-950">
          {/* Banner */}
          {banner && (
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 px-5 py-4">
              <h1 className="text-base font-bold text-zinc-800 dark:text-zinc-100 tracking-wide">
                Cerebro Sports Framework
              </h1>
              <div className="flex items-center gap-3">
                {themeToggle && (
                  <ThemeToggle isDark={isDark} />
                )}
                <select
                  value={view}
                  onChange={(e) => handleViewChange(e.target.value)}
                  className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {VIEW_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* View Content */}
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </Suspense>
  )
}
