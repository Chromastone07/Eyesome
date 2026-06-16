# Eyesome Tech

Structured 30/45-day learning challenges for developers. Built with
Next.js 14, Tailwind CSS, and MDX.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a New Day

1. Create `content/<challenge-slug>/day-NN.mdx` (e.g. `day-03.mdx`)
2. Add frontmatter:
   ```yaml
   ---
   title: "Load Balancers"
   day: 3
   topic: "The Traffic Director"
   ---
   ```
3. Write content using standard Markdown plus these components:
   - `<Analogy>...</Analogy>`   yellow callout
   - `<Mistake>...</Mistake>`   red warning
   - `<Trivia>...</Trivia>`   fun fact card
   - `<Recap items={["...", "..."]} />`   green checklist
   - `<VSCard left="" right="" leftDesc="" rightDesc="" />`   comparison
4. The day automatically appears on the challenge page and is reachable
   at `/<challenge-slug>/day-NN`.

## Adding a New Challenge

1. Create `content/<new-challenge-slug>/index.json`:
   ```json
   {
     "title": "30 Days of DSA Patterns",
     "description": "...",
     "totalDays": 30,
     "icon": "🧩",
     "accent": "blue",
     "level": "Intermediate"
   }
   ```
2. Add `day-01.mdx`, `day-02.mdx`, etc. following the same format.
3. It automatically appears on the homepage.

## Project Structure

```
content/                  ← all written content (MDX + JSON metadata)
src/
  app/                     ← pages (routes)
  components/              ← reusable UI + MDX components
  lib/content.ts           ← reads content files
```

## Deployment

Push to GitHub and import the repo on [Vercel](https://vercel.com). No
environment variables or database required.
