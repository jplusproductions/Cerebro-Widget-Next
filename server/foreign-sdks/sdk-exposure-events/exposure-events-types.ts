/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  /**
   * 0=Other, 1=NotFound, 2=Invalid, 3=Required, 5=InvalidCredentials,
   * 6=PermissionDenied, 7=Duplicate, 8=Maximum, 9=Minimum, 10=Inactive,
   * 11=Range, 12=Unavailable, 13=SecureConnection, 14=Exists
   */
  Code?: number;
  Message?: string;
}

export interface ErrorResponse {
  Errors?: Error[];
}

export interface Address {
  Location?: string;
  StreetAddress?: string;
  ExtendedAddress?: string;
  City?: string;
  StateRegion?: string;
  PostalCode?: string;
  Country?: string;
  /** @format double */
  Latitude?: number;
  /** @format double */
  Longitude?: number;
}

export interface Organization {
  Id?: number;
  Name?: string;
  Website?: string;
}

export interface Season {
  Id?: number;
  StartYear?: number;
  EndYear?: number;
  Session?: string;
  Name?: string;
}

export interface Asset {
  Id?: number;
  Name?: string;
  Description?: string;
  Url?: string;
  /** @format date-time */
  DateModified?: string;
  /** @format date-time */
  DateCreated?: string;
}

export interface Report {
  Name?: string;
  Description?: string;
  Url?: string;
  /** ReportOutput enum: HTML, PDF */
  Type?: "HTML" | "PDF";
  /** @format date-time */
  DateModified?: string;
}

export interface Price {
  Id?: number;
  /** PriceType enum: 1=EventFee, 2=Other, 3=CollegeCoach, 4=SanctionFee, 5=GateFee */
  Type?: 1 | 2 | 3 | 4 | 5;
  Name?: string;
  /** @format double */
  Amount?: number;
  Description?: string;
}

export interface Certification {
  /** EventCertification enum: AAU, IndiHoops, JrNBA, NationalSportsId, NCAACertified, NCAACertifiedPending, NTBA, USATournamentAlliance, USSSA */
  Type?:
    | "AAU"
    | "IndiHoops"
    | "JrNBA"
    | "NationalSportsId"
    | "NCAACertified"
    | "NCAACertifiedPending"
    | "NTBA"
    | "USATournamentAlliance"
    | "USSSA";
  Name?: string;
}

export interface MetaEntry {
  Name?: string;
  Value?: string;
}

export interface AuthRequest {
  /**
   * Event director account username
   * @maxLength 50
   */
  Username: string;
  /**
   * Event director account password
   * @maxLength 50
   */
  Password: string;
}

export interface AuthResponse {
  /** User account identifier */
  Id?: number;
  /** Base64-encoded API key (must be decoded before use) */
  ApiKey?: string;
  /** Base64-encoded secret key (must be decoded before use) */
  ApiSecretKey?: string;
  Email?: string;
}

export interface EventSettings {
  EnableRegistration?: boolean;
  RosterLimit?: number;
  /** RegistrationStatus enum: 1=All, 2=Active, 3=ActiveAndPaid, 4=ActivePaidAndTravel */
  RegistrationStatus?: 1 | 2 | 3 | 4;
  RegistrationStartDate?: string;
  RegistrationEndDate?: string;
  RegistrationStartTime?: string;
  RegistrationEndTime?: string;
  ScheduleAvailabilityDate?: string;
  ScheduleAvailabilityTime?: string;
  ShowSchedule?: boolean;
  ShowPools?: boolean;
  ShowBrackets?: boolean;
  ShowTeams?: boolean;
}

export interface Event {
  Id?: number;
  Sport?: number;
  ParentId?: number;
  /** Gender enum: 0=MaleAndFemale, 1=Male, 2=Female, 4=AllGenders */
  Gender?: 0 | 1 | 2 | 4;
  Name?: string;
  Organization?: Organization;
  Archive?: boolean;
  /** EventType enum: 0=Tournament, 1=League, 2=CampClinic, 3=Tryout, 4=Practice, 5=Training */
  Type?: 0 | 1 | 2 | 3 | 4 | 5;
  /** EventInviteType enum: 0=All, 3=Travel, 4=School, 9=InviteOnly, 10=JuniorVarsity, 11=Freshman, 12=HighSchool, 13=MiddleSchool, 14=ElementarySchool, 15=Varsity */
  InviteType?: 0 | 3 | 4 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  /** ParticipationType enum: 0=Team, 1=Individual */
  ParticipationType?: 0 | 1;
  /** Event image URL */
  Image?: string;
  /** M/D/YYYY format */
  StartDate?: string;
  /** M/D/YYYY format */
  EndDate?: string;
  TimeZone?: string;
  Address?: Address;
  ContactName?: string;
  ContactEmail?: string;
  ContactPhone?: string;
  InstagramHandle?: string;
  TwitterHandle?: string;
  Website?: string;
  FacebookPage?: string;
  TravelWebsite?: string;
  Settings?: EventSettings;
  Season?: Season;
  Divisions?: EventDivisionSummary[];
  Assets?: Asset[];
  Reports?: Report[];
  Venues?: Venue[];
  Prices?: Price[];
  Certifications?: Certification[];
}

export interface EventDivisionSummary {
  Id?: number;
  Name?: string;
  Description?: string;
  Gender?: number;
  Order?: number;
}

export interface EventSingleResponse {
  Event?: Event;
}

export interface EventListResponse {
  Events?: {
    Results?: Event[];
    Page?: number;
    PageSize?: number;
    Total?: number;
  };
}

export interface DivisionSettings {
  EnableRegistration?: boolean;
  RosterLimit?: number;
  /** RegistrationStatus enum: 1=All, 2=Active, 3=ActiveAndPaid, 4=ActivePaidAndTravel */
  RegistrationStatus?: 1 | 2 | 3 | 4;
  ShowStandings?: boolean;
  ShowSchedule?: boolean;
  ShowBrackets?: boolean;
  ShowParticipants?: boolean;
}

export interface DivisionEventSummary {
  Id?: number;
  Name?: string;
  StartDate?: string;
  EndDate?: string;
}

export interface DivisionTeamSummary {
  Id?: number;
  ExternalTeamId?: string;
  Name?: string;
  Gender?: number;
  Paid?: boolean;
  Status?: number;
  Address?: Address;
}

export interface Bracket {
  Id?: number;
  Name?: string;
  Results?: string;
  /** @format date-time */
  DateModified?: string;
}

export interface Division {
  Id?: number;
  Name?: string;
  Active?: boolean;
  Description?: string;
  Gender?: number;
  Order?: number;
  Event?: DivisionEventSummary;
  Settings?: DivisionSettings;
  Prices?: Price[];
  Teams?: DivisionTeamSummary[];
  Assets?: Asset[];
  Reports?: Report[];
  Brackets?: Bracket[];
}

export interface DivisionSingleResponse {
  Division?: Division;
}

export interface DivisionListResponse {
  Divisions?: {
    Results?: Division[];
    Page?: number;
    PageSize?: number;
    Total?: number;
  };
}

export interface DivisionCreateRequest {
  eventid: number;
  name: string;
  description?: string;
  order?: number;
  /** @default true */
  active?: boolean;
  externalid?: string;
}

export interface DivisionUpdateRequest {
  id: number;
  name?: string;
  description?: string;
  order?: number;
  /** @default true */
  active?: boolean;
  externalid?: string;
}

export interface DivisionCreateResponse {
  Id?: number;
}

export interface Coach {
  Id?: number;
  CoachId?: number;
  ParentId?: number;
  /** CoachType enum: 0=Other, 1=HeadCoach, 2=AssistantCoach, 3=Administrator, 4=AdministratorHeadCoach, 5=AdministratorCoach, 6=BenchCoach, 7=Coach, 8=Manager, 9=ParentGuardian, 10=Player */
  Type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  FirstName?: string;
  LastName?: string;
  Email?: string;
  HomePhone?: string;
  MobilePhone?: string;
  FaxPhone?: string;
  WorkPhone?: string;
  Address?: Address;
}

export interface TeamPlayer {
  Id?: number;
  ExternalPlayerId?: string;
  Number?: number;
  FirstName?: string;
  LastName?: string;
  /** M/D/YYYY */
  Birthdate?: string;
  BirthYear?: number;
  Grade?: string;
  School?: string;
  GraduationYear?: number;
  Height?: string;
  Weight?: number;
  Position?: string;
  TravelTeam?: string;
  HomePhone?: string;
  MobilePhone?: string;
  Email?: string;
  ACTScore?: number;
  SATScore?: number;
  /** @format double */
  GPA?: number;
  /** RosterStatus enum: 0=Active, 1=Inactive, 2=Archived */
  Status?: 0 | 1 | 2;
  Address?: Address;
  Meta?: MetaEntry[];
}

export interface TeamPool {
  Id?: number;
  Name?: string;
  DivisionId?: number;
}

export interface TeamDivisionSummary {
  Id?: number;
  Name?: string;
}

export interface Team {
  Id?: number;
  Sport?: number;
  ParentId?: number;
  Name?: string;
  /** Gender enum: 0=MaleAndFemale, 1=Male, 2=Female, 4=AllGenders */
  Gender?: 0 | 1 | 2 | 4;
  Paid?: boolean;
  /** EventStatus enum: 0=None, 1=Active, 2=Inactive, 3=WaitingList */
  Status?: 0 | 1 | 2 | 3;
  Division?: TeamDivisionSummary;
  Address?: Address;
  Players?: TeamPlayer[];
  Coaches?: Coach[];
  Pools?: TeamPool[];
}

export interface TeamSingleResponse {
  Team?: Team;
}

export interface TeamListResponse {
  Teams?: {
    Results?: Team[];
    Page?: number;
    PageSize?: number;
    Total?: number;
  };
}

export interface TeamCreatePlayerInput {
  /** @maxLength 100 */
  FirstName?: string;
  /** @maxLength 100 */
  LastName?: string;
  /** @maxLength 100 */
  Email?: string;
  /** @maxLength 100 */
  Phone?: string;
  Number?: number;
  Status?: number;
}

export interface TeamCreateRequest {
  DivisionId: number;
  Name: string;
  EventId?: number;
  /** Gender enum: 0=MaleAndFemale, 1=Male, 2=Female, 4=AllGenders */
  Gender?: 0 | 1 | 2 | 4;
  /** @default true */
  Paid?: boolean;
  /** EventStatus enum: 0=None, 1=Active, 2=Inactive, 3=WaitingList */
  Status?: 0 | 1 | 2 | 3;
  /** Age group */
  Age?: string;
  /** Grade level */
  Grade?: string;
  Address?: {
    City?: string;
    StateRegion?: string;
    PostalCode?: string;
  };
  ExternalTeamId?: string;
  Notes?: string;
  /** Must begin with http:// */
  Website?: string;
  /** Exclude @ symbol */
  TwitterHandle?: string;
  Abbreviation?: string;
  InstagramHandle?: string;
  FacebookPage?: string;
  /** @maxItems 20 */
  Players?: TeamCreatePlayerInput[];
}

export interface TeamUpdateRequest {
  /** Team identifier (or use ExternalTeamId) */
  Id: number;
  /** Alternative identifier */
  ExternalTeamId?: string;
  DivisionId?: number;
  Name?: string;
  Gender?: number;
  Paid?: boolean;
  Status?: number;
  Age?: string;
  Grade?: string;
  Address?: {
    City?: string;
    StateRegion?: string;
    PostalCode?: string;
  };
  Notes?: string;
  Website?: string;
  TwitterHandle?: string;
  Abbreviation?: string;
  InstagramHandle?: string;
  FacebookPage?: string;
  /** @maxItems 20 */
  Players?: TeamCreatePlayerInput[];
}

export interface TeamCreateResponse {
  Id?: number;
}

export interface GameDivision {
  Id?: number;
  Name?: string;
  Event?: {
    Id?: number;
    Name?: string;
  };
}

export interface VenueCourt {
  Id?: number;
  Court?: {
    Id?: number;
    Name?: string;
    Abbr?: string;
  };
  Venue?: Venue;
}

export interface GameTeam {
  Name?: string;
  Pool?: string;
  PoolNumber?: number;
  Score?: number;
  TeamId?: number;
  TeamPoolId?: number;
  BracketName?: string;
  BracketId?: number;
  DivisionSeed?: number;
  Seed?: number;
  PoolSeed?: number;
  DivisionId?: number;
  DivisionName?: string;
  /** WonByType enum: 7=Forfeit */
  WonBy?: 7;
  /** Hex color code */
  Color?: string;
  Exhibition?: boolean;
}

export interface Game {
  Id?: number;
  Type?: number;
  /** m/d/yyyy format */
  Date?: string;
  Time?: string;
  Division?: GameDivision;
  VenueCourt?: VenueCourt;
  AwayTeam?: GameTeam;
  HomeTeam?: GameTeam;
  BracketName?: string;
  /** BracketRoundType enum: 0=None, 1=Championship, 2=Semifinal, 3=Quarterfinal */
  Round?: 0 | 1 | 2 | 3;
}

export interface GameSingleResponse {
  Game?: Game;
}

export interface GameListResponse {
  Games?: {
    Results?: Game[];
    Page?: number;
    PageSize?: number;
    Total?: number;
  };
}

export interface GameUpdateRequest {
  id: number;
  awayteamscore?: number;
  hometeamscore?: number;
  /** WonByType enum: 7=Forfeit */
  awayteamwonby?: 7;
  /** WonByType enum: 7=Forfeit */
  hometeamwonby?: 7;
  /** External vendor game ID for statistics */
  externalid?: string;
}

export interface StandingsColumn {
  Name?: string;
  Abbr?: string;
}

export interface StandingsParticipant {
  Name?: string;
  Id?: number;
  ParticipantId?: number;
  Place?: number;
  Number?: number;
  ExternalId?: string;
  Columns?: StandingsColumn[];
}

export interface StandingsGroup {
  Name?: string;
  Id?: number;
  List?: {
    Name?: string;
    Id?: number;
    Participants?: StandingsParticipant[];
  }[];
}

export interface StandingsResponse {
  Groups?: StandingsGroup[];
  Columns?: StandingsColumn[];
}

export interface StandingsUpdateRequest {
  eventid: number;
  /** Required to update with team ID */
  teampoolid?: number;
  /** Team to assign to position */
  teamid?: number;
}

export interface PlayerStatistic {
  Started?: boolean;
  Minutes?: number;
  Points?: number;
  FieldGoalsMade?: number;
  FieldGoalsAttempted?: number;
  /** @format double */
  FieldGoalsPercent?: number;
  TwoPointersMade?: number;
  TwoPointersAttempted?: number;
  /** @format double */
  TwoPointersPercent?: number;
  ThreePointersMade?: number;
  ThreePointersAttempted?: number;
  /** @format double */
  ThreePointersPercent?: number;
  FreeThrowsMade?: number;
  FreeThrowsAttempted?: number;
  /** @format double */
  FreeThrowsPercent?: number;
  OffensiveRebounds?: number;
  DefensiveRebounds?: number;
  Rebounds?: number;
  Assists?: number;
  Steals?: number;
  Deflections?: number;
  Blocks?: number;
  Turnovers?: number;
  PersonalFouls?: number;
  TechnicalFouls?: number;
}

export interface PlayerGame {
  Id?: number;
  /** M/D/YYYY */
  Date?: string;
  Time?: string;
  Venue?: string;
  Court?: string;
  Statistic?: PlayerStatistic;
}

export interface PlayerTeam {
  Id?: number;
  ExternalTeamId?: string;
  Number?: number;
  Name?: string;
  DivisionId?: number;
  DivisionName?: string;
  ParentId?: number;
  Games?: PlayerGame[];
}

export interface PlayerProfile {
  /** M/D/YYYY */
  Birthdate?: string;
  BirthYear?: number;
  Height?: string;
  Weight?: number;
  School?: string;
  GraduationYear?: number;
  Grade?: string;
  Position?: string;
  TravelTeam?: string;
  ACTScore?: number;
  SATScore?: number;
  /** @format double */
  GPA?: number;
}

export interface Player {
  Id?: number;
  ParentId?: number;
  FirstName?: string;
  LastName?: string;
  Profile?: PlayerProfile;
  Teams?: PlayerTeam[];
}

export interface PlayerSingleResponse {
  Player?: Player;
}

export interface PlayerListResponse {
  Players?: {
    Results?: Player[];
    Page?: number;
    PageSize?: number;
    Total?: number;
  };
}

export interface StatisticParticipant {
  FirstName?: string;
  LastName?: string;
  /** @format double */
  Value?: number;
  PlayerId?: number;
}

export interface StatisticLeader {
  /** Category display name, e.g. 'Points Per Game' */
  Name?: string;
  Participants?: StatisticParticipant[];
}

export interface StatisticsResponse {
  Players?: {
    Statistics?: StatisticLeader[];
  };
}

export interface VenueLocation {
  Id?: number;
  Name?: string;
  Abbr?: string;
}

export interface Venue {
  Id?: number;
  Name?: string;
  Abbr?: string;
  Address?: Address;
  Locations?: VenueLocation[];
}

export interface VenueSingleResponse {
  Venue?: Venue;
}

export type VenueListResponse = Venue[];

export interface RegisterCoachInput {
  /**
   * One required per team
   * @default false
   */
  primarycontact?: boolean;
  /** @maxLength 100 */
  firstname?: string;
  /** @maxLength 100 */
  lastname?: string;
  /**
   * @format email
   * @maxLength 100
   */
  email?: string;
  /** CoachType enum, default Other (0) */
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /** @maxLength 100 */
  ncaacoachesapprovalnumber?: string;
  /** @maxLength 100 */
  mobilephone?: string;
  /** @maxLength 100 */
  homephone?: string;
  /** @maxLength 100 */
  workphone?: string;
  /** @maxLength 100 */
  faxphone?: string;
  address?: {
    /** @maxLength 100 */
    city?: string;
    /** @maxLength 100 */
    stateregion?: string;
    /** @maxLength 10 */
    postalcode?: string;
  };
  /** @maxItems 20 */
  meta?: MetaEntry[];
}

export interface RegisterPlayerInput {
  /** @maxLength 100 */
  firstname?: string;
  /** @maxLength 100 */
  lastname?: string;
  /** mm/dd/yyyy */
  birthdate?: string;
  /** @maxLength 100 */
  homephone?: string;
  /** @maxLength 100 */
  mobilephone?: string;
  /** @maxLength 100 */
  email?: string;
  address?: {
    /** @maxLength 100 */
    city?: string;
    /** @maxLength 100 */
    stateregion?: string;
    /** @maxLength 10 */
    postalcode?: string;
  };
  number?: number;
  /** @maxLength 100 */
  position?: string;
  /** @maxLength 100 */
  school?: string;
  graduationyear?: number;
  /** @maxItems 20 */
  meta?: MetaEntry[];
}

export interface RegisterPaymentInput {
  /** Required if no amount */
  priceid?: number;
  /**
   * Required if no priceid
   * @format double
   */
  amount?: number;
  /**
   * Required if no priceid
   * @maxLength 100
   */
  title?: string;
  /** Required if no priceid */
  description?: string;
  /** @maxLength 100 */
  firstname?: string;
  /** @maxLength 100 */
  lastname?: string;
  /**
   * @format email
   * @maxLength 100
   */
  email?: string;
  /** @maxLength 100 */
  phone?: string;
  /**
   * Visa, Mastercard, Discover, American Express
   * @maxLength 100
   */
  creditcardtype?: string;
  /** @maxLength 100 */
  creditcardnumber?: string;
  /** 2-digit year */
  creditcardexpireyear?: number;
  /** 2-digit month */
  creditcardexpiremonth?: number;
  /** @maxLength 100 */
  creditcardcvv2?: string;
  /** Required when credit card is provided */
  address?: {
    /** @maxLength 100 */
    streetaddress?: string;
    /** @maxLength 100 */
    extendedaddress?: string;
    /** @maxLength 100 */
    city?: string;
    /** @maxLength 100 */
    stateregion?: string;
    /** @maxLength 10 */
    postalcode?: string;
  };
}

export interface RegisterRequest {
  eventid: number;
  divisionid: number;
  /**
   * Team name
   * @maxLength 100
   */
  name: string;
  /**
   * Participation year
   * @default 2026
   */
  year?: number;
  /** Gender enum: 0=MaleAndFemale, 1=Male, 2=Female, 4=AllGenders */
  gender: 0 | 1 | 2 | 4;
  notes?: string;
  /** @default true */
  markaspaid?: boolean;
  /** @default true */
  enablecreditcard?: boolean;
  /** @default true */
  enablepaymentconfirmation?: boolean;
  address?: {
    /** @maxLength 100 */
    city?: string;
    /** @maxLength 100 */
    stateregion?: string;
    /** @maxLength 10 */
    postalcode?: string;
  };
  /** @maxItems 20 */
  meta?: MetaEntry[];
  /** @maxItems 20 */
  coaches?: RegisterCoachInput[];
  /** @maxItems 20 */
  players?: RegisterPlayerInput[];
  payment?: RegisterPaymentInput;
}

export interface RegisterResponse {
  TeamId?: number;
  Status?: number;
}

export interface PaymentObject {
  /** Required if no Amount */
  PriceId?: number;
  /**
   * Required if no PriceId
   * @format double
   */
  Amount?: number;
  /**
   * Required if no PriceId
   * @maxLength 100
   */
  Title?: string;
  /** Required if no PriceId */
  Description?: string;
  /** @maxLength 100 */
  FirstName?: string;
  /** @maxLength 100 */
  LastName?: string;
  /**
   * @format email
   * @maxLength 100
   */
  Email?: string;
  /** @maxLength 100 */
  Phone?: string;
  Organization?: string;
  /**
   * Visa, Mastercard, Discover, American Express
   * @maxLength 100
   */
  CreditCardType?: string;
  /** @maxLength 100 */
  CreditCardNumber?: string;
  /** 2-digit year */
  CreditCardExpireYear?: number;
  /** 2-digit month */
  CreditCardExpireMonth?: number;
  /** @maxLength 100 */
  CreditCardCvv2?: string;
  Redeemed?: boolean;
  /** Required when credit card is provided */
  Address?: {
    /** @maxLength 100 */
    StreetAddress?: string;
    /** @maxLength 100 */
    ExtendedAddress?: string;
    /** @maxLength 100 */
    City?: string;
    /** @maxLength 100 */
    StateRegion?: string;
    /** @maxLength 10 */
    PostalCode?: string;
  };
}

export interface PaymentRequest {
  /** Required if no divisionid/eventid */
  teamid?: number;
  /** Required if no teamid/eventid */
  divisionid?: number;
  /** Required if no teamid/divisionid */
  eventid?: number;
  /**
   * Only used with teamid
   * @default true
   */
  markaspaid?: boolean;
  /**
   * Creates payment and charges card
   * @default true
   */
  enablecreditcard?: boolean;
  /**
   * Sends confirmation email
   * @default true
   */
  enablepaymentconfirmation?: boolean;
  CollegeCoachId?: number;
  Payment?: PaymentObject;
}

export interface PaymentResponse {
  TransactionId?: string;
}

export type AuthenticateResponse = AuthResponse;

export type GetEventsResponse = EventSingleResponse | EventListResponse;

export type GetDivisionsResponse =
  | DivisionSingleResponse
  | DivisionListResponse;

export type CreateDivisionResponse = DivisionCreateResponse;

export type UpdateDivisionResponse = object;

export type GetTeamsResponse = TeamSingleResponse | TeamListResponse;

export type CreateTeamResponse = TeamCreateResponse;

export type UpdateTeamResponse = object;

export type GetGamesResponse = GameSingleResponse | GameListResponse;

export type UpdateGameResponse = object;

export type GetStandingsResponse = StandingsResponse;

export type UpdateStandingsResponse = object;

export type GetPlayersResponse = PlayerSingleResponse | PlayerListResponse;

export type GetStatisticsResponse = StatisticsResponse;

export type GetVenuesResponse = VenueSingleResponse | VenueListResponse;

export type RegisterResponse = RegisterResponse;

export type CreatePaymentResponse = PaymentResponse;
