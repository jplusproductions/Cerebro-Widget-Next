import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { ErrorCode, StatisticCategory } from "./exposure-events-enums"

// Application Architecture || Error Code to tRPC Code Mapping
// =======================================================================================
const ErrorCodeToTRPCCode: Record<ErrorCode, TRPCError["code"]> = {
  [ErrorCode.Other]:             "INTERNAL_SERVER_ERROR",
  [ErrorCode.NotFound]:          "NOT_FOUND",
  [ErrorCode.Invalid]:           "BAD_REQUEST",
  [ErrorCode.Required]:          "BAD_REQUEST",
  [ErrorCode.InvalidCredentials]:"UNAUTHORIZED",
  [ErrorCode.PermissionDenied]:  "FORBIDDEN",
  [ErrorCode.Duplicate]:         "CONFLICT",
  [ErrorCode.Maximum]:           "BAD_REQUEST",
  [ErrorCode.Minimum]:           "BAD_REQUEST",
  [ErrorCode.Inactive]:          "BAD_REQUEST",
  [ErrorCode.Range]:             "BAD_REQUEST",
  [ErrorCode.Unavailable]:       "INTERNAL_SERVER_ERROR",
  [ErrorCode.SecureConnection]:  "BAD_REQUEST",
  [ErrorCode.Exists]:            "CONFLICT",
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export function throwExposureError(errors: Array<{ Code: number; Message: string }>): never {
  const code = ErrorCodeToTRPCCode[errors[0]?.Code as ErrorCode] ?? "INTERNAL_SERVER_ERROR"
  throw new TRPCError({ code, message: errors.map((e) => e.Message).join("; ") })
}

export interface ExposureEventsPaginatedResponse<T> {
  results: T[]
  pagination: {
    page: number
    pageSize: number
    totalPages: number
    totalRecords: number
  }
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

export const ExposureGameParamsSchema = z.object({
  id: z.number().describe("The game id"),
})
export type ExposureGameParams = z.infer<typeof ExposureGameParamsSchema>

export const ExposureGamesParamsSchema = z.object({
  page: z.number().optional().describe("Page number (default: 1)"),
  pagesize: z.number().optional().describe("Page size (default: 50)"),
  eventid: z.number().describe("The event id"),
  divisionid: z.number().optional().describe("The division id"),
  teamid: z.number().optional().describe("The team id"),
  date: z.string().optional().describe("The date of the games in m/d/yyyy format"),
})
export type ExposureGamesParams = z.infer<typeof ExposureGamesParamsSchema>

export const ExposureUpdateGameParamsSchema = z.object({
  id: z.number().describe("The game id"),
  awayteamscore: z.number().optional().describe("The score of the away team"),
  hometeamscore: z.number().optional().describe("The score of the home team"),
  awayteamwonby: z.number().optional().describe("How the away team was declared the winner (7 = Forfeit)"),
  hometeamwonby: z.number().optional().describe("How the home team was declared the winner (7 = Forfeit)"),
  externalid: z.string().optional().describe("External vendor game id used for statistics"),
})
export type ExposureUpdateGameParams = z.infer<typeof ExposureUpdateGameParamsSchema>

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
  categories: StatisticCategory
  pagesize?: number
}

export interface ExposureVenuesParams {
  id?: number
  eventid?: number
}

// Resource Interfaces
// =====================================================================================
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

export const ExposureGameDivisionSchema = z.object({
  Id: z.number().describe("The division id"),
  Name: z.string().describe("The division name"),
  Event: z.object({
    Id: z.number().describe("The event id"),
    Name: z.string().describe("The event name"),
  }).passthrough(),
}).passthrough()
export type ExposureGameDivision = z.infer<typeof ExposureGameDivisionSchema>

export const ExposureGameVenueCourtSchema = z.object({
  Id: z.number().describe("The venue court id"),
  Court: z.object({
    Id: z.number().describe("The court id"),
    Name: z.string().describe("The court name"),
    Abbr: z.string().describe("The court abbreviation"),
  }).passthrough(),
  Venue: z.custom<ExposureVenue>().describe("The venue"),
}).passthrough()
export type ExposureGameVenueCourt = z.infer<typeof ExposureGameVenueCourtSchema>

export const ExposureGameTeamSchema = z.object({
  Name: z.string().describe("The team name"),
  TeamId: z.number().describe("The team id"),
  Score: z.number().optional().describe("The team score"),
  Pool: z.string().optional().describe("The pool name"),
  PoolNumber: z.number().optional().describe("The pool number"),
  TeamPoolId: z.number().optional().describe("The team pool id"),
  BracketName: z.string().optional().describe("The bracket name"),
  BracketId: z.number().optional().describe("The bracket id"),
  DivisionSeed: z.number().optional().describe("The division seed"),
  Seed: z.number().optional().describe("The overall seed"),
  PoolSeed: z.number().optional().describe("The pool seed"),
  DivisionId: z.number().optional().describe("The division id"),
  DivisionName: z.string().optional().describe("The division name"),
  WonBy: z.number().optional().describe("How the team was declared the winner (7 = Forfeit)"),
  Color: z.string().optional().describe("The team color"),
  Exhibition: z.boolean().optional().describe("Whether this is an exhibition game for the team"),
}).passthrough()
export type ExposureGameTeam = z.infer<typeof ExposureGameTeamSchema>

export const ExposureGameSchema = z.object({
  Id: z.number().describe("The game id"),
  Type: z.number().describe("The game type"),
  Date: z.string().describe("The game date"),
  Time: z.string().describe("The game time"),
  Division: ExposureGameDivisionSchema.describe("The game division"),
  VenueCourt: ExposureGameVenueCourtSchema.describe("The venue and court assignment"),
  AwayTeam: ExposureGameTeamSchema.describe("The away team"),
  HomeTeam: ExposureGameTeamSchema.describe("The home team"),
  BracketName: z.string().optional().describe("The bracket name"),
  Round: z.number().optional().describe("The bracket round type (0 = None, 1 = Championship, 2 = Semifinal, 3 = Quarterfinal)"),
}).passthrough()
export type ExposureGame = z.infer<typeof ExposureGameSchema>

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
