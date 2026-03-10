"use client"
import type { CSSProperties } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { IPagination } from "@AppTypes/commons"
import TablePagination from "@AppComps/table/TablePagination"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
type TextAlign = CSSProperties["textAlign"]
const getAlign = (meta: unknown): TextAlign => (meta as { align?: TextAlign })?.align ?? "left"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function Table<T>({ columns, data, name, isLoading, rowHeight = "h-4", pagination, setPagination, onRowClick, emptyMessage = "No results found." }: ITableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className={`min-h-75 flex-1 rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 ${isLoading ? "overflow-y-auto overflow-x-hidden" : "overflow-auto"}`}>
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400"
                    style={{ textAlign: getAlign(header.column.columnDef.meta) }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {isLoading && Array.from({ length: Math.min(pagination.pageSize, 10) }).map((_, i) => (
              <tr key={`skeleton-${i}`} className="bg-white dark:bg-zinc-900/50">
                {columns.map((col, j) => (
                  <td key={j} className="px-4 py-3" style={{ textAlign: getAlign(col.meta) }}>
                    <div className={`${rowHeight} w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700 ${getAlign(col.meta) === "center" ? "mx-auto" : ""}`} />
                  </td>
                ))}
              </tr>
            ))}
            {!isLoading && table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                className={`bg-white dark:bg-zinc-900/50${onRowClick ? " cursor-pointer transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50" : ""}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-3"
                    style={{ textAlign: getAlign(cell.column.columnDef.meta) }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            {!isLoading && data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-6 text-center text-zinc-400">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <TablePagination name={name} pagination={pagination} setPagination={setPagination} isLoading={isLoading} />
    </div>
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface ITableProps<T> {
  data: T[]
  name: string
  columns: ColumnDef<T, unknown>[]
  isLoading?: boolean
  pagination: IPagination
  rowHeight?: string
  setPagination?: (page: number) => void
  onRowClick?: (row: T) => void
  emptyMessage?: string
}
