"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function LoginPage() {
  const trpc = useTRPC()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const login = useMutation(trpc.RouterAuth.AuthLogin.mutationOptions({
    onSuccess: () => router.push("/portal"),
    onError: () => setError("Invalid email or password."),
  }))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    login.mutate({ email, password })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image src="/cerebro-logo-symbol.png" alt="Cerebro" width={40} height={40} />
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Sign in to Cerebro
          </h1>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          {error && (
            <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </p>
          )}

          <label className="mb-4 block">
            <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
              required
            />
          </label>

          <label className="mb-6 block">
            <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
              required
            />
          </label>

          <button
            type="submit"
            disabled={login.isPending}
            className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {login.isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:underline">&larr; Back to home</Link>
        </p>
      </div>
    </div>
  )
}
