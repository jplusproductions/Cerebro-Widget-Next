# Cerebro GraphQL API Spec

Future API — currently using Sportradar REST. Will migrate to Hasura GraphQL with JWT auth via serverless proxy.

## Auth Flow

1. Widget requests JWT from serverless proxy (e.g. `/api/auth`)
2. Proxy validates widget origin, returns short-lived JWT
3. Widget sends JWT in `Authorization: Bearer <token>` header to Hasura
4. Hasura validates JWT claims, applies row-level permissions

## Endpoint

```
POST https://<hasura-host>/v1/graphql
Authorization: Bearer <jwt>
Content-Type: application/json
```

## Table Schemas

### competitions
| Column | Type | Notes             |
|--------|------|-------------------|
| id     | uuid | PK                |
| name   | text |                   |
| sport  | text | e.g. "basketball" |

### seasons
| Column         | Type    | Notes             |
|----------------|---------|-------------------|
| id             | uuid    | PK                |
| competition_id | uuid    | FK → competitions |
| name_local     | text    |                   |
| year           | integer |                   |

### schedules
| Column           | Type        | Notes                            |
|------------------|-------------|----------------------------------|
| id               | uuid        | PK                               |
| season_id        | uuid        | FK → seasons                     |
| fixture_type     | text        | REGULAR, PLAYOFF, etc.           |
| start_time_utc   | timestamptz |                                  |
| start_time_local | timestamp   |                                  |
| timezone         | text        |                                  |
| status           | text        | SCHEDULED, IN_PROGRESS, FINISHED |
| status_label     | text        | nullable display label           |
| venue            | text        |                                  |
| venue_id         | uuid        |                                  |

### competitors
| Column          | Type    | Notes                    |
|-----------------|---------|--------------------------|
| id              | uuid    | PK                       |
| fixture_id      | uuid    | FK → schedules            |
| entity_id       | uuid    | nullable (unknown teams) |
| name            | text    |                          |
| code            | text    | nullable abbreviation    |
| is_home         | boolean |                          |
| score           | text    | nullable                 |
| logo            | text    | nullable URL             |
| color_primary   | text    | hex without #            |
| color_secondary | text    | hex without #            |

### player
| Column        | Type                   | Notes                      |
|---------------|------------------------|----------------------------|
| id            | uuid                   | PK                         |
| name          | character varying      |                            |
| date_of_birth | date                   | nullable                   |
| position      | character varying      | nullable, e.g. "G"         |
| height_inches | integer                | nullable                   |
| weight_lb     | integer                | nullable                   |
| hometown      | character varying      | nullable                   |
| phone         | character varying      | nullable                   |
| grad_year     | integer                | nullable                   |
| alias         | array                  | nullable                   |
| highschool    | character varying      | nullable                   |
| nationality   | text                   | nullable                   |
| state         | text                   | nullable                   |
| created_date  | timestamptz            |                            |
| modified_date | timestamptz            |                            |

**Relationships:**
- `biodata` via `player_id`
- `player_event` via `player_id`
- `player_game` via `player_id`
- `player_team` via `player_id` (nested `team` for team details)

## Example Queries

### Get schedules with competitors
```graphql
query GetSchedules($seasonId: uuid!, $limit: Int, $offset: Int) {
  schedules(
    where: { season_id: { _eq: $seasonId } }
    order_by: { start_time_utc: asc }
    limit: $limit
    offset: $offset
  ) {
    id
    fixture_type
    start_time_utc
    start_time_local
    timezone
    status
    status_label
    venue
    competitors(order_by: { is_home: desc }) {
      id
      entity_id
      name
      code
      is_home
      score
      logo
      color_primary
    }
  }
}
```

### Get seasons for competition
```graphql
query GetSeasons($competitionId: uuid!) {
  seasons(
    where: { competition_id: { _eq: $competitionId } }
    order_by: { year: desc }
  ) {
    id
    name_local
    year
    competition { name }
  }
}
```

### Get players with team info
```graphql
query GetPlayers($limit: Int, $offset: Int) {
  player(limit: $limit, offset: $offset, order_by: { name: asc }) {
    id
    name
    date_of_birth
    position
    height_inches
    weight_lb
    nationality
    hometown
    player_team {
      team {
        name
      }
    }
  }
  player_aggregate {
    aggregate {
      count
    }
  }
}
```
