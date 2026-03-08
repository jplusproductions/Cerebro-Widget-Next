import { createHmac } from "crypto"
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import type { Event, Division, Team, Game, GameUpdateRequest, Player, StandingsResponse, StandingsUpdateRequest, StatisticsResponse, Venue, RegisterRequest, RegisterResponse, PaymentRequest, PaymentResponse, DivisionCreateRequest, DivisionCreateResponse, DivisionUpdateRequest, TeamCreateRequest, TeamCreateResponse, TeamUpdateRequest } from "./exposure-events-types"
import { throwExposureError } from "./exposure-events-utils"

// Application Architecture || Define Local Types
// =======================================================================================
type ExposureEventsPaginatedResponse<T> = {
  results: T[]
  pagination: { page: number; pageSize: number; totalPages: number; totalRecords: number }
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export class ExposureEventsApi {
  private client: AxiosInstance
  private apiKey: string
  private apiSecret: string

  constructor() {
    this.apiKey = process.env.EXPOSURE_EVENTS_API_KEY!
    this.apiSecret = process.env.EXPOSURE_EVENTS_API_SECRET!
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_DOMAIN_EXPOSURE_EVENTS,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })

    this.client.interceptors.request.use(
      (config) => {
        this.signRequest(config)
        const params = config.params ? `?${ new URLSearchParams(config.params).toString()}` : ""
        const headers = [`-H "Authentication: ${config.headers.get("Authentication")}"`, `-H "Timestamp: ${config.headers.get("Timestamp")}"`].join(" ")
        // console.log(`[ExposureEventsApi] curl -X ${(config.method ?? "GET").toUpperCase()} "${config.baseURL}${config.url}${params}" ${headers}`)
        return config
      },
    )

    this.client.interceptors.response.use(
      (res) => {
        if (res.data?.Errors?.length) throwExposureError(res.data.Errors)
        return res
      },
      (err) => {
        const data = err.response?.data
        console.error(`[ExposureEventsApi] ${err.response?.status} ${err.response?.statusText}`, data)
        if (data?.Errors?.length) throwExposureError(data.Errors)
        throw err
      },
    )
  }

  // Application Architecture || HMAC-SHA256 Request Signing
  // =====================================================================================
  private signRequest(config: InternalAxiosRequestConfig) {
    const timestamp = new Date().toISOString()
    const verb = (config.method ?? "GET").toUpperCase()
    const path = config.url ?? "/"
    const message = `${this.apiKey}&${verb}&${timestamp}&${path}`.toUpperCase()
    const signature = createHmac("sha256", this.apiSecret)
      .update(message)
      .digest("base64")

    config.headers.set("Timestamp", timestamp)
    config.headers.set("Authentication", `${this.apiKey}.${signature}`)
    return config
  }

  // Application Architecture || Strip Undefined Params
  // =====================================================================================
  private stripUndefined(obj: object): Record<string, unknown> {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined))
  }

  // Application Architecture || Pagination Helper
  // =====================================================================================
  private unwrapList<T>(data: Record<string, unknown>, resourceKey: string): ExposureEventsPaginatedResponse<T> {
    const wrapper = data[resourceKey] as { Results: T[]; Page: number; PageSize: number; Total: number } | null
    if (!wrapper) return { results: [], pagination: { page: 1, pageSize: 1, totalPages: 0, totalRecords: 0 } }
    return {
      results: wrapper.Results,
      pagination: {
        page: wrapper.Page,
        pageSize: wrapper.PageSize,
        totalPages: Math.ceil(wrapper.Total / wrapper.PageSize),
        totalRecords: wrapper.Total,
      },
    }
  }

  // Application Architecture || Events
  // =====================================================================================
  async getEvent({ id, includes }: { id: number; includes?: string }) {
    const params: Record<string, unknown> = { id }
    if (includes) params.includes = includes
    const { data } = await this.client.get("/api/v1/events", { params })
    return data.Event as Event
  }

  async getEvents(params?: Record<string, unknown>) {
    const cleaned = params ? this.stripUndefined(params) : undefined
    const { data } = await this.client.get("/api/v1/events", { params: cleaned })
    return this.unwrapList<Event>(data, "Events")
  }

  // Application Architecture || Divisions
  // =====================================================================================
  async getDivision({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/divisions", { params })
    return data.Division as Division
  }

  async getDivisions(params?: Record<string, unknown>) {
    const { data } = await this.client.get("/api/v1/divisions", { params })
    return this.unwrapList<Division>(data, "Divisions")
  }

  async createDivision(body: DivisionCreateRequest) {
    const { data } = await this.client.post("/api/v1/divisions", body)
    return data as DivisionCreateResponse
  }

  async updateDivision(body: DivisionUpdateRequest) {
    const { data } = await this.client.put("/api/v1/divisions", body)
    return data as Division
  }

  // Application Architecture || Teams
  // =====================================================================================
  async getTeam({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/teams", { params })
    return data.Team as Team
  }

  async getTeams(params?: Record<string, unknown>) {
    const { data } = await this.client.get("/api/v1/teams", { params })
    return this.unwrapList<Team>(data, "Teams")
  }

  async createTeam(body: TeamCreateRequest) {
    const { data } = await this.client.post("/api/v1/teams", body)
    return data as TeamCreateResponse
  }

  async updateTeam(body: TeamUpdateRequest) {
    const { data } = await this.client.put("/api/v1/teams", body)
    return data as Team
  }

  // Application Architecture || Games
  // =====================================================================================
  async getGame({ id, includes }: { id: number; includes?: string }) {
    const params: Record<string, unknown> = { id }
    if (includes) params.includes = includes
    const { data } = await this.client.get("/api/v1/games", { params })
    return data.Game as Game
  }

  async getGames(params?: Record<string, unknown>) {
    const cleaned = params ? this.stripUndefined(params) : undefined
    const { data } = await this.client.get("/api/v1/games", { params: cleaned })
    return this.unwrapList<Game>(data, "Games")
  }

  async updateGame(params: GameUpdateRequest) {
    const { data } = await this.client.put("/api/v1/games", params)
    return data as Game
  }

  // Application Architecture || Standings
  // =====================================================================================
  async getStanding({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/standings", { params })
    return data as StandingsResponse
  }

  async getStandings(params: Record<string, unknown>) {
    const { data } = await this.client.get("/api/v1/standings", { params })
    return data as StandingsResponse
  }

  async updateStandings(body: StandingsUpdateRequest) {
    const { data } = await this.client.put("/api/v1/standings", body)
    return data as StandingsResponse
  }

  // Application Architecture || Players
  // =====================================================================================
  async getPlayer({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/players", { params })
    return data.Player as Player
  }

  async getPlayers(params?: Record<string, unknown>) {
    const { data } = await this.client.get("/api/v1/players", { params })
    return this.unwrapList<Player>(data, "Players")
  }

  // Application Architecture || Statistics
  // =====================================================================================
  async getStatistics(params: Record<string, unknown>) {
    const { data } = await this.client.get("/api/v1/statistics", { params })
    return data as StatisticsResponse
  }

  // Application Architecture || Venues
  // =====================================================================================
  async getVenue({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/venues", { params })
    return data.Venue as Venue
  }

  async getVenues(params?: Record<string, unknown>) {
    const { data } = await this.client.get("/api/v1/venues", { params })
    return this.unwrapList<Venue>(data, "Venues")
  }

  // Application Architecture || Registration & Payments
  // =====================================================================================
  async register(body: RegisterRequest) {
    const { data } = await this.client.post("/api/v1/register", body)
    return data as RegisterResponse
  }

  async createPayment(body: PaymentRequest) {
    const { data } = await this.client.post("/api/v1/payments", body)
    return data as PaymentResponse
  }
}

// Application Architecture || Define Singleton
// =======================================================================================
// =======================================================================================
export const ExposureClient = new ExposureEventsApi()
