# Code Comment Conventions

---

## Rules

1. **Never use multiline comments** — no `/* */` or `/** */` blocks, ever.
2. **Every comment starts with a label** — either `// NOTE:` or `// TODO:`.
3. **Continuation lines** use `// ↪` followed by a transition word in ALL CAPS.
4. **Keep comments concise** — one to two lines is ideal; three is the practical max.
5. **Do not add comments to code you did not write or change** — no drive-by annotations.

---

## Labels

| Label      | Purpose                                      |
|------------|----------------------------------------------|
| `// NOTE:` | Explains *why* — intent, rationale, behavior |
| `// TODO:` | Marks outstanding work or known debt          |

---

## Continuation Transitions

When a comment needs a second line, prefix it with `// ↪` and a transition word:

| Transition    | Purpose                                          |
|---------------|--------------------------------------------------|
| `ERGO`        | Consequence — "therefore" / "as a result"         |
| `CONTEXT`     | Background info the reader may not know           |
| `HOWEVER`     | Exception, caveat, or contrast to the prior line  |

---

## Examples

### Single-line NOTE
```ts
// NOTE: Default timeout accounts for cold-start latency on the first request
const timeout = options.timeout ?? 30_000
```

### Multi-line NOTE with ERGO
```ts
// NOTE: Singleton map is keyed by clientId so each tenant gets its own connection pool
// ↪ ERGO: Passing an empty string falls back to the default admin credentials from the environment
if (!instances.has(clientId)) {
  instances.set(clientId, new ApiClient(clientId))
}
return instances.get(clientId)!
```

### TODO
```ts
// TODO: Replace with a batch insert once the ORM supports bulk operations with conflict handling
for (const item of items) {
  await db.record.upsert({ where: { id: item.id }, create: item, update: item })
}
```

### NOTE with HOWEVER
```ts
// NOTE: The caller's own tenant ID is used by default for scoping
// ↪ HOWEVER: Superadmin callers can override this by providing a target tenant ID in the input
const tenantId = input.tenantId ?? caller.tenantId
```

### NOTE with CONTEXT
```ts
// NOTE: We use the library's built-in compare rather than direct string equality
// ↪ CONTEXT: This function is constant-time by design so it is safe against timing attacks
const isValid = await compare(input.password, user.passwordHash)
```
