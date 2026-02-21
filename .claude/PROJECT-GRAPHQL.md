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
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| name | text | |
| sport | text | e.g. "basketball" |

### seasons
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| competition_id | uuid | FK → competitions |
| name_local | text | |
| year | integer | |

### fixtures
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| season_id | uuid | FK → seasons |
| fixture_type | text | REGULAR, PLAYOFF, etc. |
| start_time_utc | timestamptz | |
| start_time_local | timestamp | |
| timezone | text | |
| status | text | SCHEDULED, IN_PROGRESS, FINISHED |
| status_label | text | nullable display label |
| venue | text | |
| venue_id | uuid | |

### competitors
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| fixture_id | uuid | FK → fixtures |
| entity_id | uuid | nullable (unknown teams) |
| name | text | |
| code | text | nullable abbreviation |
| is_home | boolean | |
| score | text | nullable |
| logo | text | nullable URL |
| color_primary | text | hex without # |
| color_secondary | text | hex without # |

## Example Queries

### Get fixtures with competitors
```graphql
query GetFixtures($seasonId: uuid!, $limit: Int, $offset: Int) {
  fixtures(
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
