"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/app/components/theme-toggle"

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Websites", href: "/websites" },
  { label: "API Calls", href: "/api-calls" },
  { label: "Tests", href: "/tests" },
]

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="flex w-56 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <Image src="/cerebro-logo-symbol.png" alt="Cerebro" width={28} height={28} />
          <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Cerebro</span>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 pt-2">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Admin Portal</h2>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/"
              aria-label="Log out"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
