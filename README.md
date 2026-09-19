# Sakshi Gupta — Developer Portfolio

A premium, fully responsive developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui**-style components. Content is sourced entirely from Sakshi Gupta's resume via a single typed data file — nothing on the page is invented.

Design direction: dark-first, glassmorphic, Apple/Vercel/Linear-inspired, with a signature animated **circuit / network-trace background** in the hero and a **ladder-logic rail** motif on timelines — both direct nods to her real networking, embedded systems, and PLC/industrial-automation background.

---

## ✨ Features

- **Dark / Light mode** — class-based theme switch, persisted to `localStorage`, no flash-of-wrong-theme (inline blocking script)
- **Fully responsive** — mobile-first, tested down to 360px width
- **Sections**: Hero, About, Skills, Experience, Projects, Education, Certifications, Contact, Footer
- **Animations**: Framer Motion fade-ups, staggered reveals, hover scaling, 3D tilt on project cards, floating ambient gradient blobs, animated SVG signal pulses in the hero
- **Extras**: scroll progress bar, back-to-top button, hero typing animation, animated counters, custom cursor (desktop/fine-pointer only, respects `prefers-reduced-motion`), route loading state
- **Accessible**: visible focus rings, semantic headings, `prefers-reduced-motion` respected, keyboard-navigable nav & form
- **SEO**: metadata API (OpenGraph/Twitter cards), `robots.ts`, `sitemap.ts`

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── resume/
│       └── Sakshi_Gupta_Resume.pdf      # served by the "Download Resume" button
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # fonts, metadata, ThemeProvider, global chrome
│   │   ├── page.tsx                     # assembles all sections
│   │   ├── loading.tsx                  # route-level loading animation
│   │   ├── not-found.tsx                # custom 404
│   │   ├── robots.ts                    # SEO robots.txt
│   │   ├── sitemap.ts                   # SEO sitemap.xml
│   │   └── globals.css                  # design tokens (Tailwind v4 @theme), palette, utilities
│   ├── components/
│   │   ├── ui/                          # shadcn-style primitives
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   └── progress-bar.tsx
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   ├── scroll-progress.tsx
│   │   │   ├── back-to-top.tsx
│   │   │   └── custom-cursor.tsx
│   │   ├── motion/
│   │   │   ├── reveal.tsx               # Reveal / RevealGroup scroll-in wrappers
│   │   │   ├── animated-counter.tsx
│   │   │   └── typing-text.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── circuit-background.tsx   # signature animated SVG background
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── project-card.tsx         # tilt-hover project card
│   │   │   ├── education.tsx
│   │   │   ├── certifications.tsx
│   │   │   └── contact.tsx
│   │   ├── icons.tsx                    # Github/LinkedIn icon fallbacks
│   │   ├── section-heading.tsx          # shared eyebrow + title + description
│   │   └── theme-provider.tsx
│   ├── data/
│   │   └── resume.ts                    # 🔑 single source of truth for all content
│   └── lib/
│       └── utils.ts                     # `cn()` class-merge helper
├── package.json
├── tsconfig.json
└── README.md
```

### Why a separate `data/resume.ts`?
Every section imports typed data from this file — names, dates, skills, project descriptions, everything. To update the site's content (a new job, a new project, an updated CGPA), **you only ever need to edit this one file**. No JSX needs to change.

---

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Animation | Framer Motion |
| Icons | lucide-react (+ 2 custom brand-icon SVGs, see note below) |
| UI primitives | Hand-rolled shadcn/ui-style components (Radix UI under the hood) |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (data/labels) — via `next/font/google` |

> **Note on icons:** the pinned `lucide-react` version in this project ships without brand/logo glyphs (GitHub, LinkedIn, etc. were removed upstream). Two small equivalent outline icons are provided in `src/components/icons.tsx` so the UI doesn't depend on an unpinned icon set. If your `lucide-react` version does include `Github`/`Linkedin`, you can swap back to importing them directly.

---

## 🚀 Getting Started (Local Development)

**Requirements:** Node.js 18.18+ (Node 20 LTS recommended), npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint
```

### Updating content
Open `src/data/resume.ts` and edit the relevant export (`personal`, `education`, `skillCategories`, `experience`, `projects`, `certifications`, `stats`). Every section re-renders from this file automatically.

### Replacing the downloadable resume
Drop your PDF at `public/resume/Sakshi_Gupta_Resume.pdf` (same filename), or change `personal.resumeFile` in `src/data/resume.ts` to point at a different path.

### Wiring up the contact form to a real backend
The contact form currently opens the visitor's email client via a `mailto:` link (zero-backend, always works). To send messages server-side instead, swap the `handleSubmit` function in `src/components/sections/contact.tsx` for a call to your API route, or to a form service such as Formspree / Resend / EmailJS.

---

## ☁️ Deploying to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel            # first deploy, follow the prompts
vercel --prod     # promote to production
```

### Option B — Git + Vercel Dashboard (recommended)
1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: Vercel auto-detects **Next.js** — no config needed.
4. Build command: `next build` (default) · Output: `.next` (default) · Install command: `npm install` (default).
5. Click **Deploy**. Vercel builds and gives you a live `*.vercel.app` URL.
6. (Optional) Add a custom domain under **Project → Settings → Domains**.

Every subsequent push to your main branch triggers an automatic redeploy.

### Environment variables
None are required for the current build — everything is static/client-side. If you wire the contact form to an email API (Resend, SendGrid, etc.), add the API key under **Project → Settings → Environment Variables** in Vercel and reference it from a Route Handler (`src/app/api/contact/route.ts`).

---

## ♿ Accessibility & Performance Notes

- All interactive elements have visible focus states (`:focus-visible`).
- `prefers-reduced-motion` disables/shortens animations, including the custom cursor and hero pulses.
- The custom cursor only activates on fine-pointer (mouse/trackpad) devices — touch devices get the normal cursor and no `cursor: none`.
- Images use CSS-based placeholders (no external image requests) — swap the placeholder blocks in `project-card.tsx` for `next/image` once you have real project screenshots.
- Fonts load via `next/font/google`, which self-hosts and inlines font files at build time (no runtime request to Google Fonts, no layout shift).

---

## 📄 License

Personal portfolio project. Feel free to fork the structure for your own resume-driven portfolio — please swap out the content in `src/data/resume.ts` first.
