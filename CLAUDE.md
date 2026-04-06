# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Terminal-themed DevOps portfolio for Viram Shah. Visitors interact via a fake shell — typing commands like `help`, `about`, `skills`, `experience` to explore professional content. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Commands

```bash
npm run dev       # Dev server on localhost:3000
npm run build     # Static export to out/ (output: 'export' in next.config.mjs)
npm run lint      # ESLint
```

**Deployment:** Static export → copy `out/*` to `/var/www/html/` (nginx on WSL2). No Node.js server at runtime.

## Architecture

**Routing:** Next.js App Router with 6 routes — `/` (home), `/experience`, `/projects`, `/blog`, `/gallery`, `/term`. Terminal input only exists on home and `/term` pages; others are placeholder pages.

**Terminal state flow:**
1. `useTerminal` hook (`lib/useTerminal.ts`) manages all terminal state — output lines, command history, autocomplete, render queue
2. `commands.ts` contains 20+ command handlers as **pure functions** returning `CommandOutput[]` (arrays of `{html, cls, delay}`)
3. `renderOutput()` chains `setTimeout` calls to animate lines sequentially — timeout IDs stored in `renderQueueRef` for cleanup
4. `TerminalContext` (`lib/TerminalContext.tsx`) shares `entryCount` between `Terminal` and `StatusBar` components across the layout tree

**Why `dangerouslySetInnerHTML`:** Command output is raw HTML strings with inline color classes (`<span class="cg">...</span>`). All content is developer-authored, not user input. User-typed commands are escaped via `esc()` in `lib/commands.ts`.

## Color System

Tailwind theme extends `term.*` namespace (`tailwind.config.ts`). Terminal output uses short CSS classes in `globals.css` — `.cg` (green), `.cc` (cyan), `.cy` (yellow), `.cr` (red), `.cp` (purple), `.cm` (muted), `.cw` (white), `.cd` (dim). These exist as plain CSS because command handlers return HTML strings with these classes — converting 200+ strings to JSX is not practical.

## Key Conventions

- **Font:** JetBrains Mono via `next/font/google`, applied as CSS variable `--font-jetbrains`
- **Background:** `#0c0e0f` (term-bg), nav/statusbar `#111416` (term-navbg)
- **Static export:** `next.config.mjs` uses `output: 'export'` + `trailingSlash: true` (generates `experience/index.html` for nginx compatibility)
- **Special commands:** `clear` and `goto` are handled directly in `useTerminal` (not in command map). `rm`/`cat` are easter eggs caught before command lookup. `github`/`linkedin` are in `URL_COMMANDS` (exported from `commands.ts`) — `useTerminal` opens these via `window.open()` after rendering their output, separate from the main command map.
- **Adding a command:** Add the handler to `commands` in `lib/commands.ts` AND add the name to `ALL_CMDS` in `lib/constants.ts` (drives autocomplete/Tab completion).
- **`images: { unoptimized: true }`** in `next.config.mjs` — required for `next/image` in static export mode.
- **Responsive breakpoint:** `max-md:` (below 768px) — hides nav identity text, shrinks ASCII art, increases input font to 16px
