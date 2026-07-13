# Nutpawee Kawee Portfolio

A personal portfolio website for Nutpawee Kawee, built with Next.js, TypeScript, and Three.js. The site presents frontend, mobile, ML, and XR experience through a responsive dark interface with an interactive 3D hero scene.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Three.js

## Features

- Responsive portfolio layout for desktop and mobile
- Interactive Three.js spatial hero visual
- Resume-based sections for profile, skills, projects, experience, and contact
- Viewable and downloadable resume PDF
- Single-page client router with clean, directly loadable URLs
- Browser back/forward support and route-specific document titles
- Portfolio, project index, project detail, and fallback views in one app shell
- Accessible semantic sections and navigation links

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run typecheck
```

Runs TypeScript checks without emitting files.

```bash
npm run build
```

Creates an optimized production build.

## Project Structure

```text
app/
  [[...route]]/
    page.tsx             # Single server entry point for every app URL
  components/
    ClientRouter.tsx     # History API navigation and internal links
    PortfolioRouter.tsx  # Route matching and view selection
    HomeView.tsx         # Main portfolio view
    ProjectsView.tsx     # Project index view
    ProjectDetailView.tsx # Project detail view
    ExperienceTimeline.tsx
    SpatialField.tsx     # Client-side Three.js hero scene
  data/
    portfolio.ts      # Portfolio content and navigation data
  globals.css         # Tailwind CSS entry and base styles
  layout.tsx          # Root layout and metadata
postcss.config.mjs    # Tailwind PostCSS setup
public/
  resume.pdf          # Downloadable resume
```

## Contact

- Email: nutpraweekawee@gmail.com
- GitHub: [github.com/nammeyyy](https://github.com/nammeyyy)
