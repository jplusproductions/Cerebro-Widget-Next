"use client"

import { useState } from "react"

/* ── Mock Data ── */
const mockApiCalls = [
  { endpoint: "/api/standings/sr:tournament:17", status: 200, timestamp: "2026-02-21 14:32:01" },
  { endpoint: "/api/fixtures/sr:tournament:17", status: 200, timestamp: "2026-02-21 14:31:45" },
  { endpoint: "/api/standings/sr:tournament:8", status: 500, timestamp: "2026-02-21 14:30:12" },
  { endpoint: "/api/fixtures/sr:tournament:8", status: 200, timestamp: "2026-02-21 14:29:58" },
  { endpoint: "/api/standings/sr:tournament:35", status: 200, timestamp: "2026-02-21 14:28:33" },
]

const mockTests = [
  { name: "Widget loader initializes", passed: true },
  { name: "Standings data renders", passed: true },
  { name: "Fixtures data renders", passed: true },
  { name: "Shadow DOM isolation", passed: false },
  { name: "Dark mode toggle", passed: true },
]

const mockWebsites = [
  { domain: "example-sports.com", status: "Active", dateAdded: "2026-01-15" },
  { domain: "my-football-blog.net", status: "Active", dateAdded: "2026-02-01" },
  { domain: "local-league.org", status: "Pending", dateAdded: "2026-02-18" },
]

/* ── Components ── */
function SectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      {action}
    </div>
  )
}

function Badge({ passed }: { passed: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
        passed
          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      }`}
    >
      {passed ? "Pass" : "Fail"}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const isActive = status === "Active"
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isActive
          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      }`}
    >
      {status}
    </span>
  )
}

function HttpStatus({ code }: { code: number }) {
  const ok = code >= 200 && code < 300
  return (
    <span className={`font-mono text-sm ${ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
      {code}
    </span>
  )
}

/* ── Page ── */
export default function DashboardPage() {
  const [testResults, setTestResults] = useState(mockTests)

  function runTests() {
    // Simulate re-running tests with random pass/fail
    setTestResults((prev) =>
      prev.map((t) => ({ ...t, passed: Math.random() > 0.2 }))
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Dashboard</h1>

      {/* API Calls */}
      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <SectionHeader title="API Calls" />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                <th className="pb-2 pr-4">Endpoint</th>
                <th className="pb-2 pr-4">Status</th>
                <th className="pb-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {mockApiCalls.map((call, i) => (
                <tr key={i} className="border-b border-zinc-50 last:border-0 dark:border-zinc-800/50">
                  <td className="py-2.5 pr-4 font-mono text-sm text-zinc-700 dark:text-zinc-300">{call.endpoint}</td>
                  <td className="py-2.5 pr-4"><HttpStatus code={call.status} /></td>
                  <td className="py-2.5 text-sm text-zinc-500 dark:text-zinc-400">{call.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tests */}
      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <SectionHeader
          title="Tests"
          action={
            <button
              onClick={runTests}
              className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Run Tests
            </button>
          }
        />
        <ul className="space-y-2">
          {testResults.map((t, i) => (
            <li key={i} className="flex items-center justify-between rounded-lg bg-zinc-50 px-4 py-2.5 dark:bg-zinc-800/50">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">{t.name}</span>
              <Badge passed={t.passed} />
            </li>
          ))}
        </ul>
      </section>

      {/* Whitelisted Websites */}
      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <SectionHeader
          title="Whitelisted Websites"
          action={
            <button className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
              Add Website
            </button>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                <th className="pb-2 pr-4">Domain</th>
                <th className="pb-2 pr-4">Status</th>
                <th className="pb-2">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {mockWebsites.map((site, i) => (
                <tr key={i} className="border-b border-zinc-50 last:border-0 dark:border-zinc-800/50">
                  <td className="py-2.5 pr-4 text-sm text-zinc-700 dark:text-zinc-300">{site.domain}</td>
                  <td className="py-2.5 pr-4"><StatusBadge status={site.status} /></td>
                  <td className="py-2.5 text-sm text-zinc-500 dark:text-zinc-400">{site.dateAdded}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
