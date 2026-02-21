#  Next.js Project Structure Spec

Reusable blueprint for enterprise Next.js applications.

---

## Stack

| Layer              | Technology                                            |
|--------------------|-------------------------------------------------------|
| Framework          | Next.js (App Router)                                  |
| Language           | TypeScript                                            |
| Package Manager    | Yarn                                                  |
| API Layer          | tRPC v11                                              |
| Database           | PostgreSQL                                            |
| ORM                | Prisma                                                |
| Validation         | Zod (auto-generated from Prisma via zod-prisma-types) |
| Forms              | React Hook Form + @hookform/resolvers (Zod)           |
| Auth               | Better-Auth (Prisma adapter, cookie-based sessions)   |
| Testing            | vitest                                                |
| Serialization      | SuperJSON                                             |
| Legacy API Layer   | Sportradar REST (current data source)                 |
| API Layer (Future) | GraphQL via Hasura                                    |

---

## Root Directory Layout

```
project-root/
├── app/                  # Next.js App Router (pages, layouts, API routes, server actions)
├── apps-comps/           # Shared UI components and custom component library
├── apps-configs/         # Configuration builders (env-builder, runtime config)
├── apps-modules/         # Modular utilities split by runtime target
│   ├── client/           #   Client safe modules
│   ├── server/           #   Server only modules
│   └── cross/            #   Isomorphic modules
├── apps-states/          # Application State Tree stores and schemas
├── apps-types/           # Shared TypeScript types and enumerations
├── apps-utils/           # Utility functions split by runtime target
│   ├── client/           #   Client safe utils (hooks, inputs, images)
│   ├── server/           #   Server only utils (token, encryption, scripting)
│   └── cross/            #   Isomorphic utils (formatters, commons)
├── server/               # tRPC routers, middleware, context, and external SDK integrations
├── prisma/               # Database schema, migrations, and auto-generated Zod types
├── public/               # Static assets (images, patterns, favicon)
├── tests/                # Test suites (unit, integration, load)
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript config with path aliases
├── eslint.config.mjs     # ESLint flat config
└── package.json          # Dependencies and scripts
```

---

## Path Aliases (tsconfig.json)

```json
{
  "paths": {
    "@/*":           ["*"],
    "@AppComps/*":   ["apps-comps/*"],
    "@AppConfigs/*": ["apps-configs/*"],
    "@AppModules/*": ["apps-modules/*"],
    "@AppStates/*":  ["apps-states/*"],
    "@AppTypes/*":   ["apps-types/*"],
    "@AppUtils/*":   ["apps-utils/*"]
  }
}
```

---

## App Router Structure

Uses **Route Groups** to organize layouts without affecting URL paths.

```
app/
├── (api)/                        # API route group
├── (app)/                        # Public route group
├── (auth)/                       # Authentication route group
├── (portal)/                     # Authenticated route group
├── actions/                      # Server Actions
├── layout.tsx                   # Root layout (providers, theme, global state)
├── page.tsx                     # Root page (auth check)
└── globals.scss                 # Global styles
```

---

## Server / tRPC

### Procedure Types

- `publicProcedure` - No authentication required
- `protectedProcedure` - JWT validation required
- `permissionedProcedure` - JWT validation + permission matrix required
