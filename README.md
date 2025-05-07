# Gy Sohn – Portfolio Website (v2)

Welcome to the version 2 of my personal developer portfolio website. This project is a ground-up rebuild focused on improving visual design, interactivity, and showcasing my growth as a full-stack developer.

## Project Purpose

The goal of this portfolio is to:
- Present my technical skills and personal projects.
- Share a short bio and my career transition journey.
- Create an interactive, well-designed digital space that reflects who I am as a developer.
- Optionally include a blog or insights section in the future.

---

## Design & Inspiration

This portfolio draws inspiration from several developer portfolios and templates, combining the best of each to reflect my own style:

- **[DeveloperFolio](https://developerfolio.js.org/)** – Functionality, React structure, and customisability.
- **[Josh Comeau](https://www.joshwcomeau.com/)** – Interactivity, playful design, and narrative-driven content.
- **[Brittany Chiang](https://v4.brittanychiang.com/)** – Layout structure and clean professional aesthetic.
- **[Harnish Design – Callum Template](https://harnishdesign.net/demo/react/callum/demo/)** – Full-screen menu, transitions, and skill display features.

---

## Tech Stack

Planned tools and technologies:
- **React (Vite or CRA)**
- **CSS Modules or Tailwind CSS**
- **React Router**
- **Netlify or Vercel** for deployment
- **Optional:** Animation libraries (Framer Motion / AOS), custom cursor, blog markdown setup

---

## 🔧 Features
- Fully responsive layout (mobile-first)
- Global theming using CSS variables
- Clean typography and consistent spacing system
- Modular component structure with React
- Planned blog integration (Markdown or JSX)
- Styled buttons and interactive hover states

## Colour Scheme

I've implemented a global theme using CSS variables. Here's the palette currently in use:

![Colour Palette](./ColourScheme.png)

```css
:root {
  --background-colour: #FDFFFC;     /* Ivory White */
  --text-primary: #2E2E2E;          /* Charcoal Soft Black */
  --text-secondary: #5A4EBA;        /* Indigo Light */
  --accent-button: #FFB20F;         /* Amber Gold */
  --hover-colour: #B5A9E9;          /* Soft Purple */
  --font-family: 'Inter', sans-serif;
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
├── utils/
└── App.jsx

```

## Planned Content

### 1. Hero Section
- Brief introduction with name and role
- Tagline: *“Ok! Let's do this”*
- GitHub API box showing contributions
- Timeline or short “About Me”
- Highlight 2–3 key projects
- Skillset section: icons or progress bars

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

#### Disabled Button

- **Background:** `#E0E0E0`  
- **Text Colour:** `#A0A0A0`  
- **Cursor:** `not-allowed`  

#### Transitions

- **Hover:** `all 0.2s ease-in-out`  
- **Active:** `transform: scale(0.98)`  


## Development Plan

### Completed
- Set up Vite + React project
- Created and structured routes with React Router (Home, Blog, Contact)
- Designed reusable Header and Footer components
- Created theme.css for global colours and font
- Created and applied buttons.css styles
- Set up typography and spacing system
- Wrote README with full documentation
- Tested local routing and layout
- Set up dev branch for version control
- Created custom 404 page with lighthearted error message
- Added SEO meta tags (title, description, author)
- Added Open Graph and Twitter Card meta tags for social previews

### In Progress / Next
- Wireframe design for website
- Finalise visual design and layout implementation
- Write and refine content for each section
- Style each page with responsive layout
- Add navigation highlights for current route
- Build the blog page to display post previews
- Optimise for mobile and tablet devices
- Finalise animations and transitions (optional)
- Prepare and push to GitHub
- Deploy to Netlify

## 🚀 Live Demo

Coming soon – will be deployed to [Netlify](https://www.netlify.com/)

---

## Notes to Self

- Add credit line:  
  "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React and deployed with Netlify. Typeface: Inter."

- Save the retro link/TARDIS easter egg idea for version 2.1
- Consider blog posts as markdown or hardcoded components for now
