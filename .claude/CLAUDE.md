# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cerebro-Widget-Next is a Next.js 16 application using the App Router, React 19, TypeScript 5, and Tailwind CSS 4.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (flat config, ESLint 9)

No test framework is configured yet.

## Architecture

- **Routing**: Next.js App Router (`app/` directory). Components are Server Components by default; add `"use client"` directive for client components.
- **Styling**: Tailwind CSS v4 with `@import "tailwindcss"` syntax in `app/globals.css`. Dark mode via `prefers-color-scheme` media query. Theme colors defined as CSS custom properties.
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`, applied as CSS variables.
- **Path alias**: `@/*` maps to the project root (configured in `tsconfig.json`).

## TypeScript

Strict mode is enabled. TypeScript is used for type checking only (`noEmit: true`); Next.js handles transpilation.
