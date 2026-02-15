# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/blog site for Jack LaFond (lafond.id). Built with Astro 4, deployed as a static site to Vercel.

## Commands

- `bun dev` — Start dev server (localhost:4321)
- `bun run build` — Type-check with `astro check` then build to `./dist/`
- `bun run preview` — Preview production build locally

## Architecture

- **Framework**: Astro 4 with MDX integration, static output, Vercel adapter
- **Styling**: Tailwind CSS 3 with `@tailwindcss/typography` (for prose in blog posts) and `tailwindcss-animate`. Base styles are NOT applied by Astro's Tailwind integration; custom base styles live in `src/styles/app.css`
- **Font**: Berkeley Mono (loaded from `/fonts/BerkeleyMono-Regular.woff2`)
- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)

### Content

Blog posts are MDX files in `src/content/blog/`. The collection schema (`src/content/config.ts`) defines: `title`, `description`, `pubDate`, and optional `homeIcon`, `heroImage`, `updatedDate`, `hidden`, `link`.

Posts with `link` set redirect to an external URL from the homepage. Posts with `hidden: true` show a "not public yet" banner.

### Pages

- `src/pages/index.astro` — Homepage with work experience, projects, experiments, and blog posts (all data is inline)
- `src/pages/blog/[slug].astro` — Blog post template using `getStaticPaths`

### Components

- `src/components/date.astro` — Date formatter used in blog posts
