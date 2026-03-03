import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { createHmac } from "crypto"

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
        if (res.data?.Errors?.length) throw new ExposureEventsError(res.data.Errors)
        return res
      },
      (err) => {
        console.error(`[ExposureEventsApi] ${err.response?.status} ${err.response?.statusText}`, err.response?.data)
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

  // Application Architecture || Pagination Helper
  // =====================================================================================
  private unwrapList<T>(data: Record<string, unknown>, resourceKey: string): ExposureEventsPaginatedResponse<T> {
    const wrapper = data[resourceKey] as { Results: T[]; Page: number; PageSize: number; Total: number }
    return {
      results: wrapper.Results,
      page: wrapper.Page,
      pageSize: wrapper.PageSize,
      total: wrapper.Total,
    }
  }

  // Application Architecture || Events
  // =====================================================================================
  async getEvents(params?: ExposureEventsParams) {
    const { data } = await this.client.get("/api/v1/events", { params })
    return this.unwrapList<ExposureEvent>(data, "Events")
  }

  async getEvent({ id, includes }: ExposureEventParams) {
    const params: Record<string, unknown> = { id }
    if (includes) params.includes = includes
    const { data } = await this.client.get("/api/v1/events", { params })
    return data.Event as ExposureEvent
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
  async getGames(params?: ExposureGamesParams) {
    const { data } = await this.client.get("/api/v1/games", { params })
    return this.unwrapList<ExposureGame>(data, "Games")
  }

  async updateGame(body: Partial<ExposureGame>) {
    const { data } = await this.client.put("/api/v1/games", body)
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

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export class ExposureEventsError extends Error {
  errors: Array<{ Code: number; Message: string }>
  constructor(errors: Array<{ Code: number; Message: string }>) {
    super(errors.map((e) => e.Message).join("; "))
    this.name = "ExposureEventsError"
    this.errors = errors
  }
}

export interface ExposureEventsPaginatedResponse<T> {
  results: T[]
  page: number
  pageSize: number
  total: number
}

// Query Param Interfaces
// =====================================================================================
export interface ExposureEventParams {
  id: number
  includes?: string
}

export interface ExposureEventsParams {
  id?: number
  page?: number
  pagesize?: number
  organizationid?: number
  parentid?: number
  startdate?: string
  enddate?: string
  type?: string
  archive?: boolean
  includes?: string
}

export interface ExposureDivisionsParams {
  id?: number
  eventid?: number
  page?: number
  pagesize?: number
}

export interface ExposureTeamsParams {
  id?: number
  eventid?: number
  divisionid?: number
  page?: number
  pagesize?: number
  status?: string
  paid?: boolean
}

export interface ExposureGamesParams {
  id?: number
  eventid?: number
  divisionid?: number
  teamid?: number
  date?: string
  page?: number
  pagesize?: number
}

export interface ExposureStandingsParams {
  eventid: number
  divisionid?: number
  bracketid?: number
  display?: string
}

export interface ExposurePlayersParams {
  id?: number
  eventid?: number
  divisionid?: number
  teamids?: string
  playerids?: string
  page?: number
  pagesize?: number
}

export interface ExposureStatisticsParams {
  eventid: number
  divisionid?: number
  categories?: string
  pagesize?: number
}

export interface ExposureVenuesParams {
  id?: number
  eventid?: number
}

export interface ExposureEvent {
  Id: number
  Sport: number
  ParentId: number
  Gender: number
  Name: string
  Archive: boolean
  Type: number
  InviteType: number
  ParticipationType: number
  Image: string
  StartDate: string
  TimeZone: string
  EndDate: string
  ContactName: string
  ContactEmail: string
  ContactPhone: string
  InstagramHandle: string
  TwitterHandle: string
  Website: string
  FacebookPage: string
  TravelWebsite: string
  Organization: ExposureOrganization
  Address: ExposureAddress
  Settings: ExposureSettings
  Season: ExposureSeason
  Divisions: ExposureDivision[]
  Assets: ExposureAsset[]
  Reports: ExposureReport[]
  Venues: ExposureVenue[]
  Prices: ExposurePrice[]
  Certifications: ExposureCertification[]
  [key: string]: unknown
}

export interface ExposureOrganization {
  Id: number
  Name: string
  [key: string]: unknown
}

export interface ExposureAddress {
  City: string
  StateRegion: string
  Country: string
  [key: string]: unknown
}

export interface ExposureSettings {
  [key: string]: unknown
}

export interface ExposureSeason {
  Id: number
  Name: string
  [key: string]: unknown
}

export interface ExposureAsset {
  Id: number
  [key: string]: unknown
}

export interface ExposureReport {
  Id: number
  [key: string]: unknown
}

export interface ExposurePrice {
  Id: number
  [key: string]: unknown
}

export interface ExposureCertification {
  Id: number
  [key: string]: unknown
}

export interface ExposureDivision {
  Id: number
  EventId: number
  Name: string
  [key: string]: unknown
}

export interface ExposureTeam {
  Id: number
  EventId: number
  DivisionId: number
  Name: string
  [key: string]: unknown
}

export interface ExposureGame {
  Id: number
  EventId: number
  DivisionId: number
  [key: string]: unknown
}

export interface ExposureStanding {
  TeamId: number
  EventId: number
  DivisionId: number
  [key: string]: unknown
}

export interface ExposurePlayer {
  Id: number
  TeamId: number
  FirstName: string
  LastName: string
  [key: string]: unknown
}

export interface ExposureStatistic {
  PlayerId: number
  [key: string]: unknown
}

export interface ExposureVenue {
  Id: number
  Name: string
  Address: ExposureAddress
  [key: string]: unknown
}

export interface ExposureRegisterPayload {
  [key: string]: unknown
}

export interface ExposureRegisterResponse {
  [key: string]: unknown
}

export interface ExposurePaymentPayload {
  [key: string]: unknown
}

export interface ExposurePaymentResponse {
  [key: string]: unknown
}
