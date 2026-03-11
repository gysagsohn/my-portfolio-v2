# Gy Sohn – Portfolio Website (v2)

[![Netlify Status](https://api.netlify.com/api/v1/badges/39d67db6-2134-498c-bccc-e47a789786d2/deploy-status)](https://app.netlify.com/projects/gysohn/deploys)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![GA4 Enabled](https://img.shields.io/badge/Analytics-GA4%20%2B%20Clarity-informational)](#-tracking--analytics)

Welcome to version 2 of my personal developer portfolio website. This project is a ground-up rebuild focused on improving visual design, interactivity, and showcasing my growth as a full-stack developer. This site is a fully client-rendered React SPA using React Router, modular components, and a global theme layer built in CSS.

## TL;DR

Built with React 19 + Vite, styled with a global CSS variable theming system, and animated with care. Features a terminal-style hero, responsive timeline, three-way theme toggle (light/dark/retro), and a custom blog. Live at [gysohn.com](https://gysohn.com). GA4 + Clarity integrated.

---

## Live Site

https://gysohn.com/

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + Vite | UI framework and dev/build tooling |
| React Router v7 | Client-side routing |
| CSS Variables + Global theming | Design system (light / dark / retro) |
| Netlify | Deployment and hosting |
| Google Analytics 4 + Microsoft Clarity | Traffic tracking and session replays |
| ESLint | Code linting |

---

## Project Structure

```
src/
├── assets/           # Images and static files
├── components/       # Reusable UI components (Header, Footer, PostCard, etc.)
│   └── ui/           # Sub-components (Button, TimelineItem)
├── data/             # All content data (blogData, skillsData, timelineData, socialLinks)
│   └── blogPosts/    # Individual blog post files
├── functions/        # Utility functions (formatDate)
├── pages/            # Route-level page components (Home, Blog, Contact, etc.)
├── styles/           # CSS files (Theme.css, Global-media.css, per-component files)
└── App.jsx           # Route definitions
```

---

## Features

- Fully responsive layout with mobile-first breakpoints
- Three theme modes via CSS variables applied as a `<body>` class:
  - 🌞 **Light** — clean, neutral, default
  - 🌙 **Dark** — dark background with gold accents
  - 👾 **Retro** — neon pixel font, 8-bit nostalgia
- Theme persists across page loads via `localStorage`
- Terminal-style VS Code hero animation with syntax highlighting
- Responsive career timeline: vertical on desktop, horizontal scroll on mobile
- Blog with tab filtering (All / Blog / Projects) and date sorting
- Sticky share bar on blog posts with GA4 event tracking
- Copy-to-clipboard on contact page with animated confirmation
- TARDIS footer easter egg linking back to v1 portfolio
- Law skill icon easter egg — hover over Git to reveal it
- Custom 404 page (666 – Internal Hellfire)
- SEO meta tags, Open Graph, and Twitter Card configured

---

## Theme Modes

### 🌞 Light Mode (Default)
Clean, modern, neutral colours for readability.

### 🌙 Dark Mode
Dark background, soft text, warm gold accents.

### 👾 Retro Mode
Bright neon colours, pixel font, flashing buttons, 8-bit nostalgia.
> Just a bit of fun — don't take this one too seriously.

---

## Colour Scheme

```css
:root {
  --background-colour: #FDFFFC;     /* Ivory White */
  --text-primary: #2E2E2E;          /* Charcoal Soft Black */
  --text-secondary: #5A4EBA;        /* Indigo Light */
  --accent-button: #FFB20F;         /* Amber Gold */
  --hover-colour: #B5A9E9;          /* Soft Purple */
}

body.dark {
  --background-colour: #121212;
  --text-primary: #f0f0f0;
  --text-secondary: #FFD700;
  --accent-button: #FF8C00;
  --hover-colour: #333333;
}

body.retro {
  --background-colour: #1A1A1A;
  --text-primary: #FFFFFF;
  --text-secondary: #00FFFF;
  --accent-button: #FF00FF;
  --hover-colour: #FFEE00;
}
```

---

## Typography & Spacing System

### Fonts
- **Headings:** Poppins (600–700 weight)
- **Body Text:** Inter (400 weight)
- **Code / Terminal:** Fira Code (monospace)
- **Retro Mode:** Press Start 2P

### Type Scale
| Element    | Size    |
|------------|---------|
| H1         | 48px    |
| H2         | 32px    |
| H3         | 24px    |
| Body       | 16px    |
| Small Text | 14px    |

### Spacing (4px Scale)
```css
--space-xs:   4px;
--space-sm:   8px;
--space-md:   16px;
--space-lg:   32px;
--space-xl:   64px;
--space-xxl:  96px;
--space-xxxl: 128px;
```

---

## Tracking & Analytics

- **Google Analytics 4 (GA4):** Page views, device usage, and custom events (share clicks, copy clicks)
- **Microsoft Clarity:** Heatmaps and full session replays

---

## Terminal-Style Typing Animation

The hero section features a custom-built code animation mimicking a VS Code terminal. Each line is displayed line-by-line with a typing effect, syntax-coloured spans for keywords, strings, and methods, and a blinking cursor.

Inspired by a suggestion from Ben — thanks for the idea!

---

## My First Portfolio (v1)

Built with plain HTML and CSS as a bootcamp assignment. Simple, nostalgic, and a good reminder of how far things have come.

- [Live Site (v1)](https://gysohn-v1.netlify.app/)
- [Source Code](https://github.com/gysagsohn/gysohn_T1A2)

---

## Design Inspiration

- **[DeveloperFolio](https://developerfolio.js.org/)** – React structure and component approach
- **[Josh Comeau](https://www.joshwcomeau.com/)** – Interactivity and narrative-driven content
- **[Brittany Chiang](https://v4.brittanychiang.com/)** – Layout and clean professional aesthetic
- **[Harnish Design – Callum Template](https://harnishdesign.net/demo/react/callum/demo/)** – Full-screen menu and transitions

---

## Running Locally

```bash
git clone https://github.com/gysagsohn/gysohn-portfolio-v2.git
cd gysohn-portfolio-v2
npm install
npm run dev
```

---

## Contributing & Code Standards

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch strategy, commit message format, comment standards, CSS conventions, and DRY principles.

---

## Future Plans

- Full-stack blog CMS (MERN stack) to replace hardcoded post files
- Contact form with validation
- Expanded markdown support for blog posts
- Ready Group Employee Handbook v2
