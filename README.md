# Personal Website

Source for my personal portfolio site: home, about, gallery, and project pages.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion/) for scroll-reveal animations

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
app/
  page.tsx              Home
  about/page.tsx         About
  gallery/page.tsx        Gallery
  projects/page.tsx        Projects listing
  projects/[slug]/page.tsx  Project detail (generated from lib/projects.ts)
  components/             Header, Footer, ProjectCard, Reveal, QuoteOfTheDay
lib/
  projects.ts            Project data (source of truth for listing + detail pages)
  site.ts                Site-wide constants (email, LinkedIn, resume link, nav links)
public/
  images/, documents/, audio/   Static assets
```

## Legacy static site

`index.html`, `styles.css`, `scripts.js`, and `sites/` are the original hand-written
static pages this project was rebuilt from. They're kept for reference and aren't
linked from the Next.js app — safe to delete once the rebuild is fully signed off.
