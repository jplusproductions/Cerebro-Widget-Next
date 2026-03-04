import { z } from "zod"
import type { ExposureStatistic } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"
import { StatisticCategory } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-enums"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { paginationOutputs } from "@/prisma/validators/filters"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const StatisticsListInputs = z.object({
  eventId: z.number()
    .describe("The event ID"),
  divisionId: z.number().optional()
    .describe("Filter statistics by division ID"),
  categories: z.nativeEnum(StatisticCategory)
    .describe("Statistic category"),
  pageSize: z.number().optional()
    .describe("Page size"),
})

// Application Architecture || Define Singletons
// =======================================================================================
// =======================================================================================
export const StatisticsListItem = z.custom<ExposureStatistic>()

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const StatisticsListOutputs = z.object({
  statistics: z.array(StatisticsListItem),
  pagination: paginationOutputs,
})

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TStatisticsListItem = z.TypeOf<typeof StatisticsListItem>
export type TStatisticsListInputs = z.TypeOf<typeof StatisticsListInputs>
export type TStatisticsListOutputs = z.TypeOf<typeof StatisticsListOutputs>
