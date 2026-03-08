"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { useTRPC } from "@AppComps/@TRPCProvider"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function LogoutPage() {
  const trpc = useTRPC()
  const router = useRouter()

  const logout = useMutation(trpc.RouterAuth.AuthLogout.mutationOptions({
    onSuccess: () => router.replace("/login"),
    onError: () => router.replace("/login"),
  }))

  useEffect(() => {
    logout.mutate()
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Signing out…</p>
    </div>
  )
}
