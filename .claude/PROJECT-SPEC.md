# Cerebro Project Spec

## 1. Overview

Cerebro is an embeddable sports widget system designed for CMS platforms (SquareSpace, WordPress, Wix, etc.). It clones and replaces the Sportradar embed widget with a self-hosted, customizable alternative. Site owners drop a single `<script>` tag into their page and get live sports data rendered in isolated widget containers.

---

## 2. Integration Contract

Websites embed Cerebro widgets via a script tag and data-attribute-driven containers.

### Script Tag

```html
<script src="https://{host}/widget/cerebro.js" defer></script>
```

### Widget Container

```html
<div
  data-cerebro-widget="standings"
  data-cerebro-league="sr:tournament:17"
  data-cerebro-season="sr:season:118689"
  data-cerebro-theme="dark"
></div>
```

### Data Attributes

| Attribute                | Required | Description                          |
|--------------------------|----------|--------------------------------------|
| `data-cerebro-widget`    | Yes      | Widget type (e.g. `standings`)       |
| `data-cerebro-league`    | Yes      | Sportradar tournament ID             |
| `data-cerebro-season`    | Varies   | Sportradar season ID                 |
| `data-cerebro-theme`     | No       | `light` or `dark` (default: `light`) |
| `data-cerebro-locale`    | No       | Locale code (default: `en`)          |

---

## 3. Widget Types

| # | Widget Type       | Description                        | MVP |
|---|-------------------|------------------------------------|-----|
| 1 | `standings`       | League standings table             | Yes |
| 2 | `fixtures`        | Upcoming/past match list           | Yes |
| 3 | `live-score`      | Live match score ticker            | No  |
| 4 | `team-roster`     | Team player roster                 | No  |
| 5 | `player-stats`    | Individual player statistics       | No  |
| 6 | `match-detail`    | Single match detail view           | No  |
| 7 | `league-leaders`  | Top performers in a league         | No  |
| 8 | `head-to-head`    | H2H comparison between two teams   | No  |
| 9 | `season-stats`    | Aggregated season statistics       | No  |
| 10| `team-schedule`   | Single team's schedule             | No  |
| 11| `transfer-history`| Player/team transfer history       | No  |
| 12| `tournament-bracket`| Knockout stage bracket view      | No  |

**MVP scope**: `standings` and `fixtures` only.

---

## 4. Widget Loader Architecture

1. **Script Detection** — `cerebro.js` runs on load, scans DOM for `[data-cerebro-widget]` elements
2. **Container Creation** — For each element, creates an inner container
3. **Shadow DOM** — Attaches a shadow root to isolate styles from host page
4. **Font Injection** — Injects `BebasSemiExpanded` and `Roboto` via `@font-face` inside shadow root
5. **Dynamic Import** — Loads the matching widget component bundle (code-split per widget type)
6. **Render** — Mounts the React component tree inside the shadow root

---

## 5. Data Layer

### Current: Sportradar REST API

All widget data is sourced from Sportradar's REST endpoints. The Next.js server proxies requests to Sportradar, adding auth keys server-side.

### Future: GraphQL via Hasura

A Hasura instance backed by PostgreSQL will serve as a caching/aggregation layer. Sportradar data will be ingested on a schedule and served via GraphQL subscriptions for real-time updates.

---

## 6. UI & Design

- **Style Isolation** — Shadow DOM ensures widget styles do not leak into or inherit from the host page
- **Fonts** — `BebasSemiExpanded` for headings, `Roboto` for body text (loaded inside shadow root)
- **Responsive** — Widgets are fluid-width, adapting to container size
- **Dark Mode** — Controlled via `data-cerebro-theme` attribute; `light` is default
- **Design Reference** — Sportradar's existing embed widgets (match visual output)

---

## 7. App Routes

| Route        | Group      | Description                          |
|--------------|------------|--------------------------------------|
| `/`          | root       | Public landing / marketing page      |
| `/login`     | `(auth)`   | Admin login form                     |
| `/dashboard` | `(portal)` | Admin dashboard (widgets, API logs)  |
| `/widget/*`  | `(api)`    | Widget script + data endpoints       |

---

## 8. MVP Scope

### In Scope (v1)

- Landing page with embed instructions
- Admin login UI (no backend auth)
- Admin dashboard with mock data (API calls, tests, whitelisted sites)
- Widget loader script architecture (documented, not yet built)
- `standings` and `fixtures` widget types
- Sportradar REST as data source
- Shadow DOM isolation
- Dark/light theme support

### Out of Scope (v1)

- Functional authentication / session management
- GraphQL / Hasura data layer
- Widget types beyond standings & fixtures
- Payment / billing
- Multi-tenancy
- Real-time subscriptions
- CI/CD pipeline
