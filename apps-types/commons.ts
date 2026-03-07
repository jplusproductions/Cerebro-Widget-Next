import { z } from "zod"

// Application Architecture || Define Components
// =======================================================================================
// =======================================================================================
export interface IPagination {
  page: number
  pageSize: number
  paginationName?: string
  isLoading?: boolean
  total?: number
}
