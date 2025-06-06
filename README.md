# Gy Sohn – Portfolio Website (v2)

[![Netlify Status](https://api.netlify.com/api/v1/badges/39d67db6-2134-498c-bccc-e47a789786d2/deploy-status)](https://app.netlify.com/projects/gysohn/deploys)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![GA4 Enabled](https://img.shields.io/badge/Analytics-GA4%20%2B%20Clarity-informational)](#-tracking--analytics)

Welcome to the version 2 of my personal developer portfolio website. This project is a ground-up rebuild focused on improving visual design, interactivity, and showcasing my growth as a full-stack developer. This site is a fully client-rendered React SPA using React Router, modular components, and a global theme layer built in CSS.

## TL;DR

This is my second portfolio site: built with React + Vite, styled with global theming, and animated with care. It features a terminal-style hero, responsive timeline, full theme toggle (dark/retro), and a custom blog. You can visit it live at [gysohn.com](https://gysohn.com). GA4 + Clarity integrated. Still growing.

## Live Site
You can visit the live version of this portfolio at
https://gysohn.com/

## Future Plans

- Full-stack blog CMS (MERN stack)
- Expand blog markdown support
- Add contact form + validation + change contact form


## Project Purpose

The goal of this portfolio is to:
- Present my technical skills and personal projects.
- Share a short bio and my career transition journey.
- Create an interactive, well-designed digital space that reflects who I am as a developer.
- Optionally include a blog or insights section in the future.

## My First-Ever Portfolio Website
Built with just HTML and CSS, this was my introduction to web dev—and my attempt to make Comic Sans cool again (don’t worry, I didn’t actually use it).

Live Site (v1) (https://gysohn-v1.netlify.app/)
Source Code (https://github.com/gysagsohn/gysohn_T1A2)

It’s simple, nostalgic, and a reminder of how far things have come (and how many divs I’ve closed since). This version will never be taken down, as I am proud of what I did and it is a reminder of how far I have come. 

---

## Design & Inspiration

This portfolio draws inspiration from several developer portfolios and templates, combining the best of each to reflect my own style:

- **[DeveloperFolio](https://developerfolio.js.org/)** – Functionality, React structure, and customisability.
- **[Josh Comeau](https://www.joshwcomeau.com/)** – Interactivity, playful design, and narrative-driven content.
- **[Brittany Chiang](https://v4.brittanychiang.com/)** – Layout structure and clean professional aesthetic.
  > The TARDIS easter egg in my footer is inspired by the fun link on her site — a brilliant touch of personality.
- **[Harnish Design – Callum Template](https://harnishdesign.net/demo/react/callum/demo/)** – Full-screen menu, transitions, and skill display features.

---

## Tech Stack

Planned tools and technologies:
- **React (with Vite)**
- **CSS Modules and Global CSS Variables**
- **React Router**
- **Netlify** for deployment
- **Google Analytics + Microsoft Clarity** for tracking

---

## 🔧 Features
- Fully responsive layout (mobile-first)
- Global theming using CSS variables (light and dark mode supported)
- Clean typography and consistent spacing system
- Modular component structure with React
- Planned blog integration (hardcoded)
- Styled buttons and interactive hover states
- Dynamic city detection using IP (via `ipapi.co`)
- Social icon links (email, LinkedIn, Instagram)
- Responsive timeline: vertical on desktop, horizontal scroll on mobile
- Scroll buttons with dynamic positioning (inline or top row)
- Year, title, and description styled per theme
- Custom breakpoints used for tablet and mobile views:
  - `max-width: 1500px`, `1200px`, `1000px`, `800px`, `500px`
- Global-media.css manages responsive layout overrides for all pages
- Sticky share menu repositions for mobile (right side under header)
- Blog tabs stack vertically on small screens (<500px)
- Terminal box and heading scale on mobile (max-width: 80–75%)
-  **TARDIS Footer Link:** Click the TARDIS icon in the footer to travel back to my v1 portfolio.
- 👾 **Retro Mode:** Cycle the theme toggle to unlock a neon pixel world.
-  **Terminal Greeting:** Custom-coded VS Code-style typing effect greets you at the top.

## 📊 Tracking & Analytics

- **Google Analytics 4 (GA4):** Tracks visitor traffic, device usage, and page views.
- **Microsoft Clarity:** Provides heatmaps and full session replays — see how people actually use the site.

## 🎨 Theme Modes

### 🌞 Light Mode (Default)  
Clean, modern, neutral colours for readability.

### 🌙 Dark Mode  
Dark background, soft text, warm gold accents.

### 👾 Retro Mode (Experimental)  
Bright colours, pixel fonts, flashing buttons, 8-bit nostalgia.  
> Just a bit of fun—don’t take this one too seriously.

### Timeline Scroll (Mobile/Tablet)

- Desktop: vertical milestone timeline with "Show Full" toggle
- Mobile/Tablet: horizontal scroll with left/right navigation buttons
- Responsive layout: buttons move to top row on narrow screens

## Colour Scheme

I've implemented a global theme using CSS variables. Here's the palette currently in use:

![Colour Palette](./readme-assets/ColourScheme.png)

```css
:root {
  --background-colour: #FDFFFC;     /* Ivory White */
  --text-primary: #2E2E2E;          /* Charcoal Soft Black */
  --text-secondary: #5A4EBA;        /* Indigo Light */
  --accent-button: #FFB20F;         /* Amber Gold */
  --hover-colour: #B5A9E9;          /* Soft Purple */
  --font-family: 'Inter', sans-serif;
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

## ✍️ Typography & Spacing System

I'm using a custom typography and spacing system based on a 4px scale and Google Fonts for better consistency and control across the layout.

### Fonts
- **Headings:** Poppins (600–700 weight)
- **Body Text:** Inter (400 weight)

### Type Scale
| Element     | Size     |
|-------------|----------|
| H1          | 36–48px  |
| H2          | 28–32px  |
| H3          | 22–24px  |
| Body        | 16–18px  |
| Small Text  | 14px     |

- **Letter Spacing (Headings):** 0.5px  
- **Line Height:** 1.2 (headings), 1.5 (body)

### Spacing (4px System)
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 32px;
--space-xl: 64px;
```

## Project Structure (planned)

```txt
src/
├── assets/
├── components/
├── pages/
├── styles/
├── data/
├── functions/
└── App.jsx

```

## Planned Content

### 1. Hero Section
- Bold tagline: *“Ok! Let's do this”*
- Static intro line: *“Hi, I'm a Full Stack Developer”*
- Typing animation featuring phrases like:
  - "I'm Gy Sohn"
  - "Based in Sydney"
  - "React, Node & Beyond"
  - "Let’s build something cool"
  - "Ex-Lawyer Turned Coder"
- IP-based city greeting (e.g. “You’re visiting from Brisbane”)
- Clean buttons for work/contact

### 2. Blog Page
- Overview of my career: Law → Construction → Software
- Thoughts on motivation, learning, and project work
- Personal touch: photo or fun fact
- Deeper dive into key projects

### 3. Contact
- Email, LinkedIn, Instagram (also shown in footer)
- Possibly a contact form or message area

### 4. 404 Page
- Humorous "Internal Hellfire – Error 666" custom page for unmatched routes

### Button Styles

#### Primary Button

- **Background:** `#FFB20F` (Amber Gold)  
- **Text Colour:** `#2E2E2E` (Charcoal)  
- **Hover State:** `#B5A9E9` (Soft Purple)  
- **Padding:** 12px 24px  
- **Border Radius:** 8px  
- **Font:** 16px, Bold  

#### Secondary Button

- **Background:** `#FDFFFC` (Ivory)  
- **Text Colour:** `#5A4EBA` (Indigo)  
- **Border:** `1px solid #5A4EBA`  
- **Hover State:** Text colour changes to `#B5A9E9`  
- **Font:** 16px, Regular  
- **Padding:** 12px 24px  


#### Transitions

- **Hover:** `all 0.2s ease-in-out`  
- **Active:** `transform: scale(0.98)`  

## 📐 Wireframes

Wireframes created in Figma to guide responsive layout:

#### Homepage (All Devices)
- ![Wireframe Home Page](./readme-assets/wireframes/Home/HomePage_Desktop.png)
- ![Wireframe Home Page - Phone](./readme-assets/wireframes/Home/HomePage_Phone.png)
- ![Wireframe Home page - Tablet](./readme-assets/wireframes/Home/HomePage_Tablet.png)

#### Blog Page
- ![Wireframe Blog Page - Desktop](./readme-assets/wireframes/Blog/BlogPage_Desktop.png)
- ![Wireframe Blog Page - Tablet](./readme-assets/wireframes/Blog/BlogPage_Tablet.png)
- ![Wireframe Blog Page - Phone](./readme-assets/wireframes/Blog/BlogPage_Phone.png)

#### Contact Page
- ![Wireframe Contact Page - Desktop](./readme-assets/wireframes/Contact/ContactPage_Desktop.png)
- ![Wireframe Contact Page - Phone](./readme-assets/wireframes/Contact/ContactPage_Phone.png)
- ![Wireframe Contact Page - Tablet](./readme-assets/wireframes/Contact/ContactPage_Tablet.png)
---

## 🖱 Hover / Interactive Behaviour (To Code)

### Global Navigation
- On hover:
  - Text: `#5A4EBA → #B5A9E9` with fade transition
  - Underline appears (`transition: all 0.2s ease`)
- “Back to Top” scrolls smoothly to the top

### Homepage

#### Blog + Project Cards
- `transform: scale(1.03)`
- Slight darken background on hover
- Box shadow: `0px 4px 10px rgba(90, 78, 186, 0.1)`

#### Skills Grid
- Tooltip with technology label
- Light border or subtle shadow highlight

#### Timeline Scroll Box (Mobile)
- Enable vertical scroll: `overflow-y: scroll`
- Optional: `scroll-snap-type: y mandatory`

### Blog Page

#### Filter Tabs
- On hover:
  - Text: white
  - Background: `#B5A9E9`
- On click (active):
  - Animate underline with `transform: scaleX(1)`
  - Transition: `0.3s background, 0.3s color`

#### Blog Grid Cards
- Title + description fade in on hover
- Background tint overlay
- `cursor: pointer`

### Contact Page

#### Icon Links
- Hover:
  - `transform: scale(1.05)`
  - Colour fades Indigo → Soft Purple
  - Underline text
- Click:
  - `mailto:` for email
  - `target="_blank"` for LinkedIn and Instagram

### Footer
- “Back to Top”:
  - Hover: Indigo → Gold
  - `cursor: pointer`

---

## 🎨 Bold Card Styling Idea (Experimental)

An optional enhancement idea for visual punch:

- Use bold colour fills instead of light outlines
- Remove borders and use shadows + spacing
- On hover:
  - `filter: brightness(1.05)`
  - Slight background lift using `transform: translateY(-2px)`
  - `mix-blend-mode: screen` (optional for glow-like effect)
- Consider using this style for:
  - Blog/Project cards
  - Timeline entries
  - Contact buttons

## Development Plan

### Completed

- ✅ Set up Vite + React project
- ✅ Created and structured routes with React Router (Home, Blog, Contact)
- ✅ Designed reusable Header and Footer components
- ✅ Built global theming system using `theme.css` (colour palette, font stack, spacing)
- ✅ Created reusable button components and styles
- ✅ Implemented typography and spacing system using CSS variables
- ✅ Integrated city detection using `ipapi.co`
- ✅ Added SEO meta tags and Open Graph previews
- ✅ Styled the homepage with responsive layout and component-based sections
- ✅ Deployed site to Netlify
- ✅ Set up `404` custom page with humour-driven messaging
- ✅ Created a **terminal-style code animation** in the Hero section:
- ✅ Styled to mimic VS Code with syntax-highlighted tokens (`const`, `string`, `method`)
- ✅ Fades each line in with typing animation and blinking cursor
- ✅ Originally built with react-simple-typewriter, later replaced with a custom JSX parser + animation approach
- ✅ Loop resets for continuous animation
- ✅ Idea credit: **Ben** — thanks for the inspiration!
- ✅ Finalised visual styling for dark mode theme
- ✅ Finalised responsive spacing and layout for phone and tablet (Global-media.css)
- ✅ Built responsive mobile/touch-friendly sticky share menu in blog posts
- ✅ Improved mobile blog card grid and blog tab layout
- ✅ Added conditional styling for blog post title/subheading and terminal box on smaller screens
- ✅ Fully mobile-audited the homepage layout, hero section, and CTA button spacing

- ✅ Built the **Contact Page**:
  - Minimal, theme-aligned layout with:
    - Click-to-open social links (`mailto`, LinkedIn, Instagram)
    - Copy-to-clipboard with animated checkmark ✅
    - Keyboard accessible (`tabIndex`, `Enter` key support)
    - Leveraging shared `socialLinks.js` data for easy reuse and updates

- ✅ Added logo and dark mode toggle to header:
  - Logo (`~GySohn`) links to home
  - Toggle persists theme in `localStorage` and updates DOM class (`dark`)
  - Colour logic to be styled later (dark hover/focus effects planned)

- ✅ README upgraded with:
  - Full feature documentation
  - Code animation breakdown
  - Notes on alternate `Typewriter` styles (multi-line greeting variant)


## 🧠 Terminal-Style Typing Animation (Hero Section)

The hero section now features a custom-built **code-style typing animation**, mimicking a VS Code terminal experience. Each line is:

- Displayed line-by-line with a simulated typing effect
- Highlighted using syntax-coloured spans for keywords, strings, and methods
- Styled with a dark terminal background and a blinking cursor at the end

💡 **This idea was inspired by a conversation with [Ben]**, who suggested making the hero section look like you're actively coding. It's since become one of the defining interactive elements of the site. Thanks, Ben!

---

## 🧪 Past Experiments

Before building the terminal-style code animation, I originally used [`react-simple-typewriter`](https://www.npmjs.com/package/react-simple-typewriter) with pre-defined phrases like:

```js
"I'm Gy Sohn"
"Based in Sydney"
"React, Node & Beyond"
"Ex-Lawyer Turned Coder"

```
Although I moved away from that for the hero section, I still plan to reuse that style elsewhere in future projects (e.g. blog intros, testimonial banners, or contact animations).