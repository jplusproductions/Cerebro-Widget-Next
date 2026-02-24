# File Header & Section Ordering Convention

All files follow a consistent section-based structure using comment headers.
Headers visually separate concerns and enforce a predictable reading order.

---

## Header Format

Each section is delimited by a two-line comment block:

```ts
// Application Architecture || <Section Name>
// =======================================================================================
// =======================================================================================
```

The prefix alternates between **"Application Component"** and **"Application Architecture"**
depending on what the section represents:

| Prefix                       | Used For                                         |
|------------------------------|--------------------------------------------------|
| `Application Component`      | Imports, state, configs, exports, typologies      |
| `Application Architecture`   | Functions, logic, helpers                          |

---

## Section Order

Sections appear in this exact order. Omit any section that is not needed for a given file.

### 1. Node Module Imports (no header)
Bare imports from `node_modules`. No comment header — these sit at the very top.

```ts
import React from "react"
import { useForm } from "react-hook-form"
```

### 2. Define Imports
Local / project imports using path aliases (`@AppComps/*`, `@AppUtils/*`, etc.) or relative paths.

```ts
// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { Button } from "@AppComps/Button"
import { formatDate } from "@AppUtils/cross/formatters"
```

### 3. Define States
State management imports and store references (Zustand stores, context providers, etc.).

```ts
// Application Architecture || Define States
// =======================================================================================
// =======================================================================================
import { useAuthStore } from "@AppStates/auth"
```

### 4. Define Configs
One-off configuration values, constants derived from node module imports, or static config objects.

```ts
// Application Architecture || Define Configs
// =======================================================================================
// =======================================================================================
const schema = z.object({ name: z.string().min(1) })
```

### 5. Define Functions
Helper functions, utility logic, and any non-exported business logic used within the file.

```ts
// Application Architecture || Define Functions
// =======================================================================================
// =======================================================================================
function calculateTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price, 0)
}
```

### 6. Define Exports
The primary export of the file — the component, page, API handler, or module default.

```ts
// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function AboutPage() {
  return (
    <>
      About
    </>
  )
}
```

### 7. Define Typologies
TypeScript interfaces, types, and type aliases used within the file. Placed last so the
exported component/function reads cleanly without type noise above it.

```ts
// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface CartItem {
  id: string
  name: string
  price: number
}
```

---

## Complete Example

```tsx
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { Button } from "@AppComps/Button"
import { useAuthStore } from "@AppStates/auth"

// Application Architecture || Define States
// =======================================================================================
// =======================================================================================
import { useCartStore } from "@AppStates/cart"

// Application Architecture || Define Configs
// =======================================================================================
// =======================================================================================
const formSchema = z.object({ quantity: z.number().min(1) })

// Application Architecture || Define Functions
// =======================================================================================
// =======================================================================================
function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function CheckoutPage() {
  const { items } = useCartStore()
  const { register, handleSubmit } = useForm()

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name} — {formatPrice(item.price)}</div>
      ))}
      <Button type="submit">Pay</Button>
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
interface CartItem {
  id: string
  name: string
  price: number
}
```

---

## Naming Conventions

All type-level constructs use a single-letter prefix to distinguish them from runtime values:

| Prefix | Construct   | Example                          |
|--------|-------------|----------------------------------|
| `T`    | Type alias  | `type TAppRouter = typeof AppRouter` |
| `I`    | Interface   | `interface IPermissionMatrix { ... }` |
| `E`    | Enum        | `enum EUserRole { Admin, User }`  |

This means exported **values** use plain PascalCase (e.g. `AppRouter`, `AuthLogin`) while their corresponding **types** are prefixed (e.g. `TAppRouter`, `TAuthLoginInputs`).

```ts
// value
export const AppRouter = router({ ... })

// type
export type TAppRouter = typeof AppRouter
```

---

## Rules

1. **Order is fixed** — always follow the sequence above, even if some sections are empty (omit empty sections entirely, don't leave blank headers).
2. **Node module imports have no header** — they are always the first lines of the file.
3. **One header per section** — do not duplicate headers.
4. **Typologies go last** — keeps the primary export readable without scrolling past type definitions.
5. **Functions use "Application Architecture"** — all other sections use "Application Component".
6. **Prefix type constructs** — types use `T`, interfaces use `I`, enums use `E` (e.g. `TAppRouter`, `ICartItem`, `EUserRole`).
