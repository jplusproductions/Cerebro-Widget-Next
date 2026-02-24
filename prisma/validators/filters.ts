import z from "zod"

// Application Architecture || Generic Search Option
// =======================================================================================
// =======================================================================================
export const optionalSearch = z.object({
  search: z.string()
    .optional()
    .describe("Optional search term field"),
})

// Application Architecture || Generic Segment
// =======================================================================================
// =======================================================================================
export const segmentInputs = z.object({
  take: z.number()
    .default(25)
    .describe("Number or records you wish to take"),
  skip: z.number()
    .default(0)
    .describe("Number or records you wish per skip"),
})

export const segmentOutputs = z.object({
  take: z.number()
    .describe("Number or records you wish to take"),
  skip: z.number()
    .describe("Number or records you wish per skip"),
  totalRecords: z.number()
    .describe("The total number of records in the list"),
})

// Application Architecture || Generic Pagination
// =======================================================================================
// =======================================================================================
export const paginationInputs = z.object({
  page: z.number()
    .default(1)
    .describe("the page number of the response or records you wish to take"),
  pageSize: z.number()
    .default(25)
    .describe("The number of records on the response page"),
})

export const paginationOutputs = z.object({
  page: z.number()
    .describe("the page number of the response or records you wish to take"),
  pageSize: z.number()
    .describe("The number of records on the response page"),
  totalPages: z.number()
    .describe("the total number of pages inside the list based on pageSize"),
  totalRecords: z.number()
    .describe("The total number of records in the list"),
})

// Application Architecture || Generic Date(s)
// =======================================================================================
// =======================================================================================
export const optionalSpecificDate = z.object({
  date: z.date()
    .optional()
    .describe("Optional date you wish to query"),
})

export const requiredSpecificDate = z.object({
  date: z.date()
    .describe("Required date you wish to query"),
})

export const optionalDateRange = z.object({
  startDate: z.date()
    .optional()
    .describe("Optional start date you wish to query"),
  endDate: z.date()
    .optional()
    .describe("Optional end date you wish to query"),
})

export const requiredDateRange = z.object({
  startDate: z.date()
    .describe("Required start date you wish to query"),
  endDate: z.date()
    .describe("Required end date you wish to query"),
})
