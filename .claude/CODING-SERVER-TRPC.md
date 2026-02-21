# tRPC Server Architecture

All server-side API logic lives under the `server/` directory and is powered by tRPC v11.

---

## Server Directory Layout

```
server/
├── index.ts                    # tRPC initialization, procedure definitions (public, protected, permissioned)
└── foreign-sdks/              # External vendor SDK integrations
├── trpc-middlewares/           # Middleware functions (JWT, password, env guards)
├── trpc-routers/              # All route definitions (see Route Architecture below)
│   ├── index.ts               # Root router — composes all sub-routers into AppRouter
│   ├── router-{resource}/     # Singular CRUD routers
│   ├── router-{resources}/    # Plural listing/search routers
├── trpc-utils/                # Shared server utilities (context, error handling, audit, query helpers)

```

---

## tRPC Initialization (`server/trpc.ts`)

The tRPC instance is created with OpenAPI metadata support and SuperJSON serialization:

```ts
export const { procedure, router, middleware } = initTRPC
  .meta<OpenApiMeta>()
  .context<TCreateContext>()
  .create({
    transformer: SuperJSON,
    errorFormatter: ({ shape, error }) => ({
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }),
  })
```

### Procedure Types

| Procedure              | Auth Required | Use Case                                             |
|------------------------|---------------|------------------------------------------------------|
| `publicProcedure`      | No            | Login, register, public webhooks/sockets              |
| `protectedProcedure`   | JWT           | Personal user operations without entity scope         |
| `permissionedProcedure`| JWT + Matrix  | Majority of routes — role-based access with scoping   |

- `publicProcedure` — No auth check; adds scripting context only.
- `protectedProcedure` — Validates JWT and injects `token` + `script` into context.
- `permissionedProcedure(matrix)` — Takes a permission matrix config. Validates JWT, evaluates permission rules, and resolves scoped database records into `ctx.scope`. See the codebase for current matrix fields and scope resolution logic.

> Use `permissionedProcedure` for any route requiring auth. Only use `publicProcedure` for truly unauthenticated endpoints.

---

## Route Architecture

### Router Folder Naming

Routers follow a **singular/plural** convention:

| Pattern             | Contains                                  | Example                          |
|---------------------|-------------------------------------------|----------------------------------|
| `router-{resource}` | Singular CRUD (Create/Read/Update/Delete) | `EmployeeCreate`, `EmployeeRead` |
| `router-{resources}`| Plural listing/search                     | `EmployeesList`                  |

### The Three-File Pattern

Every route consists of up to **three files**:

```
router-employee/
├── @index.ts               # Router aggregator — wires all routes into one router
├── EmployeeCreate.ts       # Route handler — procedure chain + business logic
├── EmployeeCreateIO.ts     # Input/Output — Zod schemas for type-safe validation
└── EmployeeCreateTest.ts   # Tests — input, output, and permission matrix validation
```

#### 1. Route Handler (`{RouteName}.ts`)

Contains the tRPC procedure chain and all business logic for a single operation.

**Procedure chain order:**
```ts
export const EmployeeCreate = permissionedProcedure({ rules: [...] })
  .meta({ openapi: { method, protect, path, summary, tags } })
  .input(EmployeeCreateInputs)
  .output(EmployeeCreateOutputs)
  .mutation(async ({ input, ctx: { scope, script, token } }) => {
    // Business logic
    return result
  })
```

- `.meta()` — OpenAPI/Swagger metadata for every route
- `.input()` / `.output()` — References Zod schemas from the IO file
- `.mutation()` for writes, `.query()` for reads
- Context destructures to `{ scope, script, token }`
  - `scope` — resolved database records from permission matrix
  - `script` — structured logger (`.log()`, `.insight()`, `.success()`, `.warn()`, `.error()`)
  - `token` — decoded JWT payload

#### 2. Input/Output File (`{RouteName}IO.ts`)

Defines Zod schemas for request validation and response shaping.

```ts
import { z, TypeOf } from "zod"

export const EmployeeCreateInputs = z.object({
  entityId: z.string().uuid().optional(),
  phone: z.string().trim().min(1).max(10).regex(/^\d{10}$/),
  email: z.union([z.literal(""), z.string().trim().email()]).optional(),
  tempNameFirst: z.string().trim().min(1),
  tempNameLast: z.string().trim().min(1),
})

export const EmployeeCreateOutputs = EmployeeSchema

export type TEmployeeCreateInputs = TypeOf<typeof EmployeeCreateInputs>
export type TEmployeeCreateOutputs = TypeOf<typeof EmployeeCreateOutputs>
```

**IO File Conventions:**
- Named exports: `{RouteName}Inputs`, `{RouteName}Outputs`
- Type exports: `T{RouteName}Inputs`, `T{RouteName}Outputs`
- Uses `.describe()` for OpenAPI field documentation
- Output schemas often reference Prisma-generated Zod schemas from `@/prisma/zod`

#### 3. Test File (`{RouteName}Test.ts`)

Validates input schemas, output schemas, and permission matrix using vitest.

**Test File Sections:**
1. **Define Tests (Input Validation)** — `.safeParse()` against valid/invalid inputs
2. **Define Tests (Output Validation)** — Verify output schema shape and nullable fields
3. **Define Tests (Permission Matrix)** — Assert allowed entity/employee type combinations
4. **Define Tests (Mock Context)** — Verify test helpers produce valid auth contexts

---

### The `@index.ts` File

Every router folder has an `@index.ts` that aggregates all routes into a single `router()` export.
The `@` prefix keeps it sorted to the top of the directory listing.

```ts
import { router } from "@/server/trpc"

import { EmployeeCreate } from "./EmployeeCreate"
import { EmployeeDelete } from "./EmployeeDelete"
import { EmployeeRead } from "./EmployeeRead"
import { EmployeeUpdate } from "./EmployeeUpdate"

export const RouterEmployee = router({
  EmployeeCreate,
  EmployeeDelete,
  EmployeeRead,
  EmployeeUpdate,
})
```

**Naming convention:** `Router{ResourceName}` — matches the folder name without the `router-` prefix.

### Root Router (`server/trpc-routers/index.ts`)

Composes all sub-routers into the final `AppRouter` and exports the type for client-side inference:

```ts
export const AppRouter = router({ RouterAuth, ... })
export type TAppRouter = typeof AppRouter
```

---

## Error Handling

The centralized `TRPCErrorHandler` in `trpc-utils/trpc-handlers.ts` normalizes errors:

| Error Source        | Mapped tRPC Code          |
|---------------------|---------------------------|
| `ZodError`          | `BAD_REQUEST`             |
| `AxiosError`        | `BAD_REQUEST`             |
| Prisma P2002        | `CONFLICT`                |
| `TokenExpiredError` | Session expired msg       |
| Generic `Error`     | `INTERNAL_SERVER_ERROR`   |

**Usage pattern in route handlers:**
```ts
try {
  // operation
} catch (error: unknown) {
  const err = await TRPCErrorHandler(error, script)
  throw new TRPCError(err)
}
```

---

## API Entry Point

The tRPC router is exposed via a Next.js App Router catch-all at:

```
app/(api)/api/trpc/[trpc]/route.ts
```

---

## Rules

1. **Every route gets an IO file** — never define Zod schemas inline in the handler.
2. **Every route gets a Test file** — covers input validation, output validation, and permission matrix.
3. **Every router folder has `@index.ts`** — aggregates routes into a single `router()` export.
4. **Use `protectedProcedure`** for any route requiring auth — only use `publicProcedure` for truly unauthenticated endpoints. `permissionedProcedure`, if present, extends `protectedProcedure` with permission-based access control.
5. **OpenAPI metadata on every route** — method, path, summary, tags via `.meta()`.
6. **Destructure context** as `{ scope, script, token }` — use `script` for structured logging.
7. **IO type exports** follow the pattern `T{RouteName}Inputs` and `T{RouteName}Outputs`.
8. **Router names** follow the pattern `Router{ResourceName}` matching the folder suffix.
9. **Test sections** use `"Application Architecture || Define Tests (Section Name)"` headers.
10. **Always use shorthand property names** in routers — the export name, filename, and router key must all match exactly. Never alias keys.
11. **Never omit `.input()` or `.output()`** — every procedure must include both, even if the input is `z.void()`. The trpc-swagger package requires this structure. Every IO file must export both `{RouteName}Inputs` and `{RouteName}Outputs` with their corresponding `T`-prefixed types.

```ts
// ✅ Correct — shorthand keeps names aligned everywhere
export const RouterAuth = router({
  AuthLogin,
  AuthLogout,
  AuthRegisterLocal,
})

export const AppRouter = router({
  RouterAuth,
  RouterEmployee,
})

// ❌ Wrong — aliased keys break the name chain
export const RouterAuth = router({
  login: AuthLogin,
  logout: AuthLogout,
})
```

This means the client call path mirrors the codebase: `trpc.RouterAuth.AuthLogin.useMutation(...)` maps directly to the `AuthLogin` export in the `router-auth/` folder.
