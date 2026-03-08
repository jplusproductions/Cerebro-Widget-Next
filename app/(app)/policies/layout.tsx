import Link from "next/link"

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <header className="border-b border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link href="/" className="text-base font-bold tracking-wide text-zinc-800 dark:text-zinc-100">
            Cerebro Sports
          </Link>
          <nav className="flex gap-4 text-sm font-medium">
            <Link href="/policies/terms" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/policies/privacy" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-10">
        {children}
      </main>
    </div>
  )
}
