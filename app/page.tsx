import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "@/app/components/theme-toggle"

const features = [
  {
    title: "Plug & Play Widgets",
    description: "Standings, fixtures, live scores — rendered inside any page with zero framework dependencies.",
    icon: (
      <svg className="h-6 w-6 text-[#fac421]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Any CMS. Anywhere.",
    description: "SquareSpace, WordPress, Wix, Webflow, custom HTML — if it takes a script tag, it runs Cerebro.",
    icon: (
      <svg className="h-6 w-6 text-[#fac421]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.732-3.558" />
      </svg>
    ),
  },
  {
    title: "Live Data Feeds",
    description: "Professional-grade sports data piped straight into your widgets. Always current, always accurate.",
    icon: (
      <svg className="h-6 w-6 text-[#fac421]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "One Script. Done.",
    description: "No build step, no npm install, no config files. Paste the snippet, set your attributes, ship it.",
    icon: (
      <svg className="h-6 w-6 text-[#fac421]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
]

const widgetTypes = [
  { name: "Standings", mvp: true },
  { name: "Fixtures", mvp: true },
  { name: "Live Score", mvp: false },
  { name: "Team Roster", mvp: false },
  { name: "Player Stats", mvp: false },
  { name: "Match Detail", mvp: false },
  { name: "League Leaders", mvp: false },
  { name: "Head-to-Head", mvp: false },
  { name: "Season Stats", mvp: false },
  { name: "Team Schedule", mvp: false },
  { name: "Transfers", mvp: false },
  { name: "Bracket", mvp: false },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-grid dark:bg-[#050507]">
      {/* Hero glow backdrop */}
      <div className="bg-hero-glow">
        {/* Nav */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image src="/cerebro-logo-symbol.png" alt="Cerebro" width={30} height={30} />
            <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">Cerebro</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition-all hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
            >
              Sign In
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center md:pt-36 md:pb-28">
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            <span className="text-zinc-900 dark:text-white">Sports widgets</span>
            <br />
            <span className="text-gradient">that just work.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            Embed live standings, fixtures, and scores into any website.
            One script tag. No dependencies. No headaches.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/login"
              className="glow-brand rounded-lg bg-[#fac421] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[#ffe066]"
            >
              Get Early Access
            </Link>
            <a
              href="#how-it-works"
              className="rounded-lg border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-600 transition-all hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
            >
              See How It Works
            </a>
          </div>
        </section>
      </div>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-glow rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur transition-colors hover:bg-zinc-100/60 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/70"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800/80">{f.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Widget Types */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-2 text-center text-2xl font-bold text-zinc-900 dark:text-white">12 Widget Types</h2>
        <p className="mb-10 text-center text-sm text-zinc-500">MVP ships with Standings &amp; Fixtures. More coming soon.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {widgetTypes.map((w) => (
            <div
              key={w.name}
              className={`rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${
                w.mvp
                  ? "border-[#fac421]/30 bg-[#fac421]/10 text-[#b8960a] dark:text-[#fac421]"
                  : "border-zinc-200 bg-zinc-50 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-600"
              }`}
            >
              {w.name}
              {w.mvp && <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#d4a50e] dark:text-[#fac421]">MVP</span>}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-2 text-center text-2xl font-bold text-zinc-900 dark:text-white">Two Lines of HTML</h2>
        <p className="mb-10 text-center text-sm text-zinc-500">Paste this into any page. That&apos;s the entire integration.</p>

        <div className="glow-brand rounded-2xl border border-zinc-200 bg-zinc-50 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
          {/* Fake terminal bar */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="ml-3 text-xs text-zinc-400 dark:text-zinc-600">index.html</span>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-[13px] leading-relaxed dark:bg-zinc-950">
            <code>
              <span className="code-comment">{"<!-- 1. Add the script -->"}</span>{"\n"}
              <span className="code-tag">{"<script"}</span>{" "}
              <span className="code-attr">src</span>=<span className="code-val">{"\"https://cdn.cerebro.dev/widget.js\""}</span>{" "}
              <span className="code-attr">defer</span>
              <span className="code-tag">{">"}</span>
              <span className="code-tag">{"</script>"}</span>{"\n\n"}
              <span className="code-comment">{"<!-- 2. Drop in a widget -->"}</span>{"\n"}
              <span className="code-tag">{"<div"}</span>{"\n"}
              {"  "}<span className="code-attr">data-cerebro-widget</span>=<span className="code-val">{"\"standings\""}</span>{"\n"}
              {"  "}<span className="code-attr">data-cerebro-league</span>=<span className="code-val">{"\"sr:tournament:17\""}</span>{"\n"}
              {"  "}<span className="code-attr">data-cerebro-theme</span>=<span className="code-val">{"\"dark\""}</span>{"\n"}
              <span className="code-tag">{">"}</span>
              <span className="code-tag">{"</div>"}</span>
            </code>
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">
          Ready to <span className="text-gradient-cta">ship widgets</span>?
        </h2>
        <p className="mt-4 text-zinc-500">Sign up for early access and start embedding in minutes.</p>
        <Link
          href="/login"
          className="glow-brand mt-8 inline-block rounded-lg bg-[#fac421] px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-[#ffe066]"
        >
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-xs text-zinc-400 dark:border-zinc-800/60 dark:text-zinc-600">
        Cerebro &mdash; Embeddable Sports Widgets
      </footer>
    </div>
  )
}
