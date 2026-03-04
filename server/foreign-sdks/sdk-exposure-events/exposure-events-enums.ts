// Application Architecture || Exposure Events Enumerations
// =======================================================================================
// Contains enumerations used in the Exposure Events API requests and responses.
// =======================================================================================

// Report Output
// =====================================================================================
export enum ReportOutput {
  HTML = "HTML",
  PDF = "PDF",
}

// Gender
// =====================================================================================
export enum Gender {
  MaleAndFemale = 0,
  Male = 1,
  Female = 2,
  AllGenders = 4,
}

// Registration Status — used to publicly show teams
// =====================================================================================
export enum RegistrationStatus {
  All = 1,
  Active = 2,
  ActiveAndPaid = 3,
  ActivePaidAndTravel = 4,
}

// Event Status — status of the division or team in a division
// =====================================================================================
export enum EventStatus {
  None = 0,
  Active = 1,
  Inactive = 2,
  WaitingList = 3,
}

// Roster Status — status of a coach or player on a roster
// =====================================================================================
export enum RosterStatus {
  Active = 0,
  Inactive = 1,
  Archived = 2,
}

// Price Type
// =====================================================================================
export enum PriceType {
  EventFee = 1,
  Other = 2,
  CollegeCoach = 3,
  SanctionFee = 4,
  GateFee = 5,
}

// Coach Type
// =====================================================================================
export enum CoachType {
  Other = 0,
  HeadCoach = 1,
  AssistantCoach = 2,
  Administrator = 3,
  AdministratorHeadCoach = 4,
  AdministratorCoach = 5,
  BenchCoach = 6,
  Coach = 7,
  Manager = 8,
  ParentGuardian = 9,
  Player = 10,
}

// Event Type
// =====================================================================================
export enum EventType {
  Tournament = 0,
  League = 1,
  CampClinic = 2,
  Tryout = 3,
  Practice = 4,
  Training = 5,
}

// Event Sub-Type
// =====================================================================================
export enum EventSubType {
  OneDayPlay = 1,
  ThreeVThree = 2,
  ThreeVThreeOneDayPlay = 10,
  Ladder = 21,
  Showcase = 23,
  StateQualifier = 24,
}

// Participation Type
// =====================================================================================
export enum ParticipationType {
  Team = 0,
  Individual = 1,
}

// Age Group Type
// =====================================================================================
export enum AgeGroupType {
  Youth = 0,
  Adult = 1,
  AdultYouth = 2,
  Collegiate = 3,
}

// Travel/Lodging Vendor Type
// =====================================================================================
export enum TravelVendorType {
  Other = 0,
  LucidTravel = 1,
}

// Standings Display
// =====================================================================================
export enum StandingsDisplay {
  Pool = 0,
  Division = 1,
  Event = 2,
  Bracket = 3,
}

// Participant Won By Types
// =====================================================================================
export enum WonByType {
  Forfeit = 7,
}

// Streaming Types
// =====================================================================================
export enum StreamingType {
  BallerTV = 2,
  AthleteVisionSports = 3,
  Vidflex = 4,
  BeTheBeast = 5,
  YouTubeLive = 7,
  SportsEnginePlay = 8,
  Vimeo = 9,
  NCRTV = 10,
  AAUPlus = 11,
}

// Event Invite Type
// =====================================================================================
export enum EventInviteType {
  All = 0,
  Travel = 3,
  School = 4,
  InviteOnly = 9,
  JuniorVarsity = 10,
  Freshman = 11,
  HighSchool = 12,
  MiddleSchool = 13,
  ElementarySchool = 14,
  Varsity = 15,
}

// Event Includes
// =====================================================================================
export enum EventIncludes {
  Assets = "Assets",
  Divisions = "Divisions",
  Venues = "Venues",
  Organizations = "Organizations",
  Prices = "Prices",
  Reports = "Reports",
  Settings = "Settings",
  Season = "Season",
  AgeGrades = "AgeGrades",
}

// Division Includes
// =====================================================================================
export enum DivisionIncludes {
  Assets = "Assets",
  Brackets = "Brackets",
  Prices = "Prices",
  Reports = "Reports",
  Results = "Results",
  Settings = "Settings",
  Teams = "Teams",
}

// Team Includes
// =====================================================================================
export enum TeamIncludes {
  Players = "Players",
  Coaches = "Coaches",
  Pools = "Pools",
}

// Player Includes
// =====================================================================================
export enum PlayerIncludes {
  Profile = "Profile",
  Teams = "Teams",
  Statistics = "Statistics",
}

// Game Includes
// =====================================================================================
export enum GameIncludes {
  Season = "Season",
}

// Bracket Round Types
// =====================================================================================
export enum BracketRoundType {
  None = 0,
  Championship = 1,
  Semifinal = 2,
  Quarterfinal = 3,
}

// Guardian Types
// =====================================================================================
export enum GuardianType {
  Other = "Other",
  Father = "Father",
  Mother = "Mother",
  Grandparent = "Grandparent",
  Aunt = "Aunt",
  Uncle = "Uncle",
}

// Statistic Categories
// =====================================================================================
export enum StatisticCategory {
  Points = "pts",
  PointsPerGame = "ppg",
  FieldGoalsMade = "fgm",
  FieldGoalPct = "fg%",
  TwoPointersMade = "2pm",
  ThreePointersMade = "3pm",
  ThreePointPct = "3fg%",
  FreeThrowsMade = "ftm",
  FreeThrowPct = "ft%",
  Rebounds = "reb",
  ReboundsPerGame = "rpg",
  DefensiveRebounds = "dreb",
  OffensiveRebounds = "oreb",
  Assists = "ast",
  AssistsPerGame = "apg",
  Steals = "stl",
  StealsPerGame = "spg",
  Blocks = "blk",
  BlocksPerGame = "bpg",
  Turnovers = "to",
  TurnoversPerGame = "tpg",
}

// Error Code — API error response codes
// =====================================================================================
export enum ErrorCode {
  Other = 0,
  NotFound = 1,
  Invalid = 2,
  Required = 3,
  InvalidCredentials = 5,
  PermissionDenied = 6,
  Duplicate = 7,
  Maximum = 8,
  Minimum = 9,
  Inactive = 10,
  Range = 11,
  Unavailable = 12,
  SecureConnection = 13,
  Exists = 14,
}

// Event Certifications
// =====================================================================================
export enum EventCertification {
  AAU = "AAU",
  IndiHoops = "IndiHoops",
  JrNBA = "JrNBA",
  NationalSportsId = "NationalSportsId",
  NCAACertified = "NCAACertified",
  NCAACertifiedPending = "NCAACertifiedPending",
  NTBA = "NTBA",
  USATournamentAlliance = "USATournamentAlliance",
  USSSA = "USSSA",
}
