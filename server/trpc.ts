import { initTRPC, TRPCError } from "@trpc/server"
import type { OpenApiMeta } from "trpc-swagger"
import superjson from "superjson"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { TAuthContext } from "@/server/trpc-contexts/context-auth"

// Application Architecture || Define Configs
// =======================================================================================
// =======================================================================================
// NOTE: Normally we use `const t = initTRPC.create()` but this adjustment adds Swagger/OpenAPI support
export const { middleware, procedure, router } = initTRPC.meta<OpenApiMeta>().context<TAuthContext>().create({
  transformer: superjson,
})

// Application Architecture || Define Public Procedures
// =======================================================================================
// =======================================================================================
export const publicProcedure = procedure.use(async ({ next }) => {
  return next()
})

// Application Architecture || Define Protected Procedures
// =======================================================================================
// =======================================================================================
export const protectedProcedure = procedure.use(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" })
  }
  return next({
    ctx: {
      session: ctx.session,
    },
  })
})

// Application Architecture || Define Protected Procedures
// =======================================================================================
// =======================================================================================
export const permissionedProcedure = procedure.use(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" })
  }
  return next({
    ctx: {
      session: ctx.session,
    },
  })
})
