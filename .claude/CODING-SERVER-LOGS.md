# Project Logging — `chalk-scripts`

All structured logging in this project uses the `chalk-scripts` package, which provides
colored, timestamped terminal output with user/module context.

---

## Creating a Script Instance

Import `scripts` from `chalk-scripts` and create an instance with a `name` and optional `id`:

```ts
import { scripts } from "chalk-scripts"

const script = scripts({ name: "functionName" })
```

**Parameters:**

| Field  | Type     | Required | Description                                       |
|--------|----------|----------|---------------------------------------------------|
| `name` | `string` | Yes      | Label for the log source (function, module, task)  |
| `id`   | `string` | No       | Caller identifier (user phone, entity ID, etc.)    |

---

## Available Methods

All methods are **async** and accept a single `string` message.

| Method       | Purpose                              | When to Use                                      |
|--------------|--------------------------------------|--------------------------------------------------|
| `.log()`     | General informational output         | Database queries, initialization steps, flow info |
| `.insight()` | Detailed step-by-step trace          | Conditional branches, middleware steps, SDK calls |
| `.success()` | Operation completed successfully     | After a write/create/send completes               |
| `.warn()`    | Non-fatal but noteworthy condition   | Duplicate data, skipped steps, edge cases         |
| `.error()`   | Failure or problem                   | Failed lookups, invalid state, caught exceptions  |

```ts
await script.log("Prisma Querying For User: 'phone'")
await script.insight("Updating JWT `allowSecurityChange` value")
await script.success("CookieStore - User Logged in Successfully")
await script.warn("Registration request already has an account")
await script.error("User does not exist")
```

---

## Usage in tRPC Routes

Inside tRPC route handlers, the `script` object is **already available on context** — you do not
create it manually. It is injected by `TRPCScripting()` in the procedure middleware.

```ts
// apps-utils/server/scriptings.ts
export const TRPCScripting = ({ ctx, path }: { ctx: TCreateContext, path: string }): IScript => {
  const functionName = `${path.split(".").pop()}()`
  const script = scripts({ id: ctx?.token?.user?.phone || "xxxxxxxxxx", name: functionName })
  script.log("Route Initialize")
  return script
}
```

Every route automatically logs `"Route Initialize"` on entry. The `id` is set to the
authenticated user's phone number (or `"xxxxxxxxxx"` for unauthenticated calls).

**Destructure from context in your handler:**

```ts
export const EmployeeCreate = permissionedProcedure({ rules: [...] })
  .input(EmployeeCreateInputs)
  .output(EmployeeCreateOutputs)
  .mutation(async ({ input, ctx: { scope, script, token } }) => {
    await script.log(`Prisma Querying For Employee in Entity: '${scope.entity?.name}'`)

    const employee = await prisma.employee.create({ data: { ... } })

    await script.success("Employee created successfully")
    return employee
  })
```

---

## Passing `script` to Services and Middleware

When calling shared services or middleware that need logging, pass the `script` instance
as a parameter. Import the `IScript` type for the function signature.

```ts
import { IScript } from "chalk-scripts"

export const TwilioServicer = async ({
  phone,
  body,
  script,
}: {
  phone: string
  body: string
  script: IScript
}): Promise<boolean> => {
  await script.insight("Twilio Servicer Sending SMS message")

  return TwilioService.messages.create({ body, to: `+1${phone}`, from: SenderPhone })
    .then(async () => {
      await script.success("Twilio Servicer Completed SMS request")
      return true
    })
    .catch(async () => {
      await script.error("Twilio Servicer Failed SMS request")
      return false
    })
}
```

This pattern is used across:
- **Middleware** — `jwtConstruction({ script })`, `passwordComparison({ script })`
- **Modules** — `TwilioServicer({ script })`, `EmailServicer({ script })`
- **Error handlers** — `TRPCErrorHandler(error, script)`

---

## Usage in Standalone Scripts

For non-tRPC code (config builders, database migrations, CLI tools), create the script
instance directly at the module level. No `id` is needed since there is no user context.

```ts
import { scripts } from "chalk-scripts"

const script = scripts({ name: "db:migrate" })

void (async () => {
  await script.log("Running migration...")
  // ... migration logic ...
  await script.success("Migration complete")
})()
```

**Existing standalone scripts:**

| Script               | Name                | Location                      |
|----------------------|---------------------|-------------------------------|
| Environment builder  | `env:{BUILD_ENV}`   | `apps-configs/env-builder.ts` |
| SDK generator        | `sdk:{BUILD_ENV}`   | `apps-configs/sdk-builder.ts` |
| Database migration   | `db:migrate`        | `prisma/runDBMigration.ts`    |
| Database init        | `db:initialize`     | `prisma/runDBInitialization.ts`|
| Database testing     | `db:testing`        | `prisma/runDBtesting.ts`      |

---

## Error Handler Integration

The centralized `TRPCErrorHandler` accepts an optional `script` and logs a categorized
error message before returning the normalized error object.

```ts
import { TRPCError } from "@trpc/server"
import { TRPCErrorHandler } from "@/server/trpc-utils/trpc-handlers"

try {
  // operation
} catch (error: unknown) {
  const err = await TRPCErrorHandler(error, script)
  throw new TRPCError(err)
}
```

The handler prefixes the error message with its source type (`TRPCError`, `ZodError`,
`AxiosError`, `PrismaError (P2002)`, `Error`, or `Unknown`) so the log output
immediately identifies the failure origin.

---

## API Route Error Logging

The tRPC catch-all route handler creates a one-off script for unhandled errors that
escape the procedure chain:

```ts
// app/(api)/api/trpc/[trpc]/route.ts
onError: ({ ctx, path, error }) => {
  const functionName = path ? `${path.split(".").pop()}()` : "Unknown()"
  const script = scripts({ id: ctx?.token?.user?.phone || "xxxxxxxxxx", name: functionName })
  script.error(error.message)
}
```

---

## Rules

1. **Always `await` script methods** — they are async.
2. **Never create scripts manually inside tRPC routes** — use `ctx.script` from the procedure context.
3. **Pass `script` to services** — type the parameter as `IScript` from `chalk-scripts`.
4. **Use the right level** — `log` for flow, `insight` for detail, `success`/`warn`/`error` for outcomes.
5. **Standalone scripts use module-level instances** — `scripts({ name: "task:name" })`.
