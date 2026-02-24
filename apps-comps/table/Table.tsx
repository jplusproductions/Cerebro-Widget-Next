"use client"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import type { CSSProperties } from "react"
import type { ColumnDef } from "@tanstack/react-table"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
type TextAlign = CSSProperties["textAlign"]
const getAlign = (meta: unknown): TextAlign => (meta as { align?: TextAlign })?.align ?? "left"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function Table<T>({ columns, data, isLoading, emptyMessage = "No results found." }: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
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
          {isLoading && Array.from({ length: 5 }).map((_, i) => (
            <tr key={`skeleton-${i}`} className="bg-white dark:bg-zinc-900/50">
              {columns.map((_, j) => (
                <td key={j} className="px-4 py-3">
                  <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
                </td>
              ))}
            </tr>
          ))}
          {!isLoading && table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white dark:bg-zinc-900/50">
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
  )
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface TableProps<T> {
  columns: ColumnDef<T, unknown>[]
  data: T[]
  isLoading?: boolean
  emptyMessage?: string
}
