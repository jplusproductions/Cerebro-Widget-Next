// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { IPagination } from "@AppTypes/commons"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function TablePagination({ name, pagination, setPagination, isLoading, className }: ITablePaginationProps) {
  if (pagination.total == null && !isLoading) return null

  const totalPages = pagination.total ? Math.ceil(pagination.total / pagination.pageSize) || 1 : 1

  if (isLoading) {
    return (
      <div className={`flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 ${className ?? ""}`}>
        <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="flex items-center gap-2">
          <div className="h-8 w-14 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-8 w-14 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 ${className ?? ""}`}>
      <span>{(pagination.page - 1) * pagination.pageSize + 1} - {Math.min(pagination.page * pagination.pageSize, pagination.total!)} of {pagination.total} {name}</span>
      <div className="flex items-center gap-2">
        <button
          disabled={pagination.page <= 1}
          onClick={() => setPagination?.(pagination.page - 1)}
          className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          Prev
        </button>
        <span>Page {pagination.page} of {totalPages}</span>
        <button
          disabled={pagination.page >= totalPages}
          onClick={() => setPagination?.(pagination.page + 1)}
          className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          Next
        </button>
      </div>
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface ITablePaginationProps {
  name: string
  pagination: IPagination
  isLoading?: boolean
  setPagination?: (page: number) => void
  className?: string
}
