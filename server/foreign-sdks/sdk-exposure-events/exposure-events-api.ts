import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { createHmac } from "crypto"
import {
  throwExposureError,
  type ExposureEventsPaginatedResponse,
  type ExposureEventParams,
  type ExposureEventsParams,
  type ExposureDivisionsParams,
  type ExposureTeamsParams,
  type ExposureGameParams,
  type ExposureGamesParams,
  type ExposureUpdateGameParams,
  type ExposureStandingsParams,
  type ExposurePlayersParams,
  type ExposureStatisticsParams,
  type ExposureVenuesParams,
  type ExposureEvent,
  type ExposureDivision,
  type ExposureTeam,
  type ExposureGame,
  type ExposureStanding,
  type ExposurePlayer,
  type ExposureStatistic,
  type ExposureVenue,
  type ExposureRegisterPayload,
  type ExposureRegisterResponse,
  type ExposurePaymentPayload,
  type ExposurePaymentResponse,
} from "./exposure-events-types"

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
        const params = config.params ? "?" + new URLSearchParams(config.params).toString() : ""
        const headers = [`-H "Authentication: ${config.headers.get("Authentication")}"`, `-H "Timestamp: ${config.headers.get("Timestamp")}"`].join(" ")
        console.log(`[ExposureEventsApi] curl -X ${(config.method ?? "GET").toUpperCase()} "${config.baseURL}${config.url}${params}" ${headers}`)
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
  async getEvent({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/events", { params })
    return data.Event as ExposureEvent
  }

  async getEvents(params?: ExposureEventsParams) {
    const cleaned = params ? this.stripUndefined(params) : undefined
    const { data } = await this.client.get("/api/v1/events", { params: cleaned })
    return this.unwrapList<ExposureEvent>(data, "Events")
  }

  // Application Architecture || Divisions
  // =====================================================================================
  async getDivisions(params?: ExposureDivisionsParams) {
    const { data } = await this.client.get("/api/v1/divisions", { params })
    return this.unwrapList<ExposureDivision>(data, "Divisions")
  }

  async createDivision(body: Partial<ExposureDivision>) {
    const { data } = await this.client.post("/api/v1/divisions", body)
    return data as ExposureDivision
  }

  async updateDivision(body: Partial<ExposureDivision>) {
    const { data } = await this.client.put("/api/v1/divisions", body)
    return data as ExposureDivision
  }

  // Application Architecture || Teams
  // =====================================================================================
  async getTeam({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/teams", { params })
    return data.Team as ExposureTeam
  }

  async getTeams(params?: ExposureTeamsParams) {
    const { data } = await this.client.get("/api/v1/teams", { params })
    return this.unwrapList<ExposureTeam>(data, "Teams")
  }

  async createTeam(body: Partial<ExposureTeam>) {
    const { data } = await this.client.post("/api/v1/teams", body)
    return data as ExposureTeam
  }

  async updateTeam(body: Partial<ExposureTeam>) {
    const { data } = await this.client.put("/api/v1/teams", body)
    return data as ExposureTeam
  }

  // Application Architecture || Games
  // =====================================================================================
  async getGame({ id }: { id: number }) {
    const params: Record<string, unknown> = { id }
    const { data } = await this.client.get("/api/v1/games", { params })
    return data.Game as ExposureGame
  }

  async getGames(params?: ExposureGamesParams) {
    const cleaned = params ? this.stripUndefined(params) : undefined
    const { data } = await this.client.get("/api/v1/games", { params: cleaned })
    return this.unwrapList<ExposureGame>(data, "Games")
  }

  async updateGame(params: ExposureUpdateGameParams) {
    const { data } = await this.client.put("/api/v1/games", params)
    return data as ExposureGame
  }

  // Application Architecture || Standings
  // =====================================================================================
  async getStandings(params: ExposureStandingsParams) {
    const { data } = await this.client.get("/api/v1/standings", { params })
    return this.unwrapList<ExposureStanding>(data, "Standings")
  }

  async updateStandings(body: Partial<ExposureStanding>) {
    const { data } = await this.client.put("/api/v1/standings", body)
    return data as ExposureStanding
  }

  // Application Architecture || Players
  // =====================================================================================
  async getPlayers(params?: ExposurePlayersParams) {
    const { data } = await this.client.get("/api/v1/players", { params })
    return this.unwrapList<ExposurePlayer>(data, "Players")
  }

  // Application Architecture || Statistics
  // =====================================================================================
  async getStatistics(params: ExposureStatisticsParams) {
    const { data } = await this.client.get("/api/v1/statistics", { params })
    return this.unwrapList<ExposureStatistic>(data, "Statistics")
  }

  // Application Architecture || Venues
  // =====================================================================================
  async getVenues(params?: ExposureVenuesParams) {
    const { data } = await this.client.get("/api/v1/venues", { params })
    return this.unwrapList<ExposureVenue>(data, "Venues")
  }

  // Application Architecture || Registration & Payments
  // =====================================================================================
  async register(body: ExposureRegisterPayload) {
    const { data } = await this.client.post("/api/v1/register", body)
    return data as ExposureRegisterResponse
  }

  async createPayment(body: ExposurePaymentPayload) {
    const { data } = await this.client.post("/api/v1/payments", body)
    return data as ExposurePaymentResponse
  }
}

// Application Architecture || Define Singleton
// =======================================================================================
// =======================================================================================
export const ExposureClient = new ExposureEventsApi()
