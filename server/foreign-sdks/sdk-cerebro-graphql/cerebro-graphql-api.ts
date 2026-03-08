import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { CerebroAuthApi, CerebroAuthTokens } from "../sdk-cerebro-auth/cerebro-auth-api"
import type { Event, Event_Aggregate, Query_RootEvent_By_PkArgs, Query_RootEventArgs, Query_RootEvent_AggregateArgs, Game, Game_Aggregate, Query_RootGame_By_PkArgs, Query_RootGameArgs, Query_RootGame_AggregateArgs, Team, Team_Aggregate, Query_RootTeam_By_PkArgs, Query_RootTeamArgs, Query_RootTeam_AggregateArgs } from "./cerebro-graphql-types"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export class CerebroGraphqlApi {
  private client: AxiosInstance
  private auth: CerebroAuthApi
  private tokens: CerebroAuthTokens | null = null
  private pendingAuth: Promise<CerebroAuthTokens> | null = null

  constructor() {
    this.auth = new CerebroAuthApi()
    this.client = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_DOMAIN_CEREBRO_GRAPHQL}/v1/graphql`,
      headers: { "Content-Type": "application/json" },
    })

    // NOTE: Attach JWT to every request, acquiring/refreshing as needed
    this.client.interceptors.request.use(
      (config) => this.attachToken(config),
    )

    // NOTE: On 401, refresh token and retry once
    this.client.interceptors.response.use(
      (res) => res,
      async (error) => {
        const original = error.config
        if (error.response?.status === 401 && !original._retried) {
          original._retried = true
          await this.refreshToken()
          original.headers.Authorization = `Bearer ${this.tokens!.jwt}`
          return this.client(original)
        }
        return Promise.reject(error)
      },
    )
  }

  // Application Architecture || API Authentication
  // =====================================================================================
  private async attachToken(config: InternalAxiosRequestConfig) {
    if (!this.tokens) await this.authenticate()
    config.headers.Authorization = `Bearer ${this.tokens!.jwt}`
    return config
  }

  private async authenticate(): Promise<CerebroAuthTokens> {
    // Deduplicate concurrent auth calls
    if (this.pendingAuth) return this.pendingAuth
    this.pendingAuth = this.auth
      .login(process.env.CEREBRO_USERNAME!, process.env.CEREBRO_PASSWORD!)
      .finally(() => { this.pendingAuth = null })
    this.tokens = await this.pendingAuth
    return this.tokens
  }

  private async refreshToken(): Promise<CerebroAuthTokens> {
    if (!this.tokens) return this.authenticate()
    if (this.pendingAuth) return this.pendingAuth
    this.pendingAuth = this.auth
      .refresh(this.tokens.refreshToken)
      .catch(() => this.auth.login(process.env.CEREBRO_USERNAME!, process.env.CEREBRO_PASSWORD!))
      .finally(() => { this.pendingAuth = null })
    this.tokens = await this.pendingAuth
    return this.tokens
  }

  // Application Architecture || API Query
  // =====================================================================================
  async query<T = unknown>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const { data } = await this.client.post("", { query, variables })
    if (data.errors?.length) throw new CerebroGraphqlError(data.errors)
    return data.data as T
  }

  // Application Architecture || Teams
  // =====================================================================================
  async getTeam(args: Query_RootTeam_By_PkArgs) {
    const data = await this.query<{ team_by_pk: Team | null }>(
      `query GetTeam($id: uuid!) {
        team_by_pk(id: $id) {
          id
          name
          city
          home_arena
          league_id
          alias
          created_date
          modified_date
        }
      }`,
      args,
    )
    return data.team_by_pk
  }

  async getTeams(args?: Query_RootTeamArgs & Query_RootTeam_AggregateArgs) {
    const data = await this.query<{ team: Team[]; team_aggregate: Team_Aggregate }>(
      `query GetTeams($limit: Int, $offset: Int, $where: team_bool_exp, $order_by: [team_order_by!]) {
        team(limit: $limit, offset: $offset, where: $where, order_by: $order_by) {
          id
          name
          city
          home_arena
          league_id
          alias
          created_date
          modified_date
        }
        team_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }`,
      args as Record<string, unknown>,
    )
    return data
  }

  // Application Architecture || Games
  // =====================================================================================
  async getGame(args: Query_RootGame_By_PkArgs) {
    const data = await this.query<{ game_by_pk: Game | null }>(
      `query GetGame($id: uuid!) {
        game_by_pk(id: $id) {
          id
          event_id
          game_date
          start_time
          team_one_id
          team_one_score
          team_two_id
          team_two_score
          playoff
          result
          venue_id
          full_boxscore
          game_video_link
          created_date
          modified_date
          team_game { team_id team { name } }
        }
      }`,
      args,
    )
    return data.game_by_pk
  }

  async getGames(args?: Query_RootGameArgs & Query_RootGame_AggregateArgs) {
    const data = await this.query<{ game: Game[]; game_aggregate: Game_Aggregate }>(
      `query GetGames($limit: Int, $offset: Int, $where: game_bool_exp, $order_by: [game_order_by!]) {
        game(limit: $limit, offset: $offset, where: $where, order_by: $order_by) {
          id
          event_id
          game_date
          start_time
          team_one_id
          team_one_score
          team_two_id
          team_two_score
          playoff
          result
          venue_id
          full_boxscore
          game_video_link
          created_date
          modified_date
          team_game { team_id team { name } }
        }
        game_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }`,
      args as Record<string, unknown>,
    )
    return data
  }

  // Application Architecture || Events
  // =====================================================================================
  async getEvent(args: Query_RootEvent_By_PkArgs) {
    const data = await this.query<{ event_by_pk: Event | null }>(
      `query GetEvent($id: uuid!) {
        event_by_pk(id: $id) {
          id
          name
          gender
          level
          location
          region
          start_date
          end_date
          created_date
          modified_date
        }
      }`,
      args,
    )
    return data.event_by_pk
  }

  async getEvents(args?: Query_RootEventArgs & Query_RootEvent_AggregateArgs) {
    const data = await this.query<{ event: Event[]; event_aggregate: Event_Aggregate }>(
      `query GetEvents($limit: Int, $offset: Int, $where: event_bool_exp, $order_by: [event_order_by!]) {
        event(limit: $limit, offset: $offset, where: $where, order_by: $order_by) {
          id
          name
          gender
          level
          location
          region
          start_date
          end_date
          created_date
          modified_date
        }
        event_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }`,
      args as Record<string, unknown>,
    )
    return data
  }
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export class CerebroGraphqlError extends Error {
  errors: Array<{ message: string; [key: string]: unknown }>
  constructor(errors: Array<{ message: string }>) {
    super(errors.map((e) => e.message).join("; "))
    this.name = "CerebroGraphqlError"
    this.errors = errors
  }
}

// Application Architecture || Define Singleton
// =======================================================================================
// =======================================================================================
export const CerebroClient = new CerebroGraphqlApi()
