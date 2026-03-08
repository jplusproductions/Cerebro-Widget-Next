import { z } from "zod"
import type { StatisticsResponse } from "@/server/foreign-sdks/sdk-exposure-events/exposure-events-types"

// Application Architecture || Define Inputs
// =======================================================================================
// =======================================================================================
export const StatisticsListInputs = z.object({
  eventId: z.number()
    .describe("The event ID"),
  divisionId: z.number().optional()
    .describe("Filter statistics by division ID"),
  categories: z.enum(["pts","ppg","fgm","fg%","2pm","3pm","3fg%","ftm","ft%","reb","rpg","dreb","oreb","ast","apg","stl","spg","blk","bpg","to","tpg"])
    .describe("Statistic category"),
  pageSize: z.number().optional()
    .describe("Page size"),
})

// Application Architecture || Define Outputs
// =======================================================================================
// =======================================================================================
export const StatisticsListOutputs = z.custom<StatisticsResponse>()

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export type TStatisticsListInputs = z.TypeOf<typeof StatisticsListInputs>
export type TStatisticsListOutputs = z.TypeOf<typeof StatisticsListOutputs>
