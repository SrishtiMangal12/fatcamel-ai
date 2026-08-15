# Fatcamel AI — Marketing Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS (dark glassmorphism) + Framer Motion + lucide-react.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. The build requires internet access on first run so `next/font/google` can fetch
Space Grotesk, Inter, and JetBrains Mono.

## Structure

- `src/data/servicesData.ts` — 14 services, each with pain points, before/after matrix, blueprint, stats
- `src/data/productsData.ts` — 7 products, each with features, stats, integrations
- `src/data/industryData.ts` — 8 industry verticals, each with bottleneck mapping, use cases, stats
- `src/data/blogData.ts` — blog posts backing `/blog` and `/blog/[slug]`
- `src/components/Navbar.tsx` — sticky glassmorphic navbar with mega-menus
- `src/components/Footer.tsx` — footer with newsletter signup and full sitemap links
- `src/components/HeroTerminal.tsx` — simulated live agent execution terminal
- `src/components/RoiCalculator.tsx` — interactive ROI calculator with live sliders
- `src/app/*` — all routes (home, about, contact, services/products/industry dynamic routes, blog, case studies, legal)

## Notes

- All service/product/industry pages are data-driven from the three files in `src/data/` — add a new
  entry to the array and a new route is generated automatically via `generateStaticParams`.
- Verified with `next build` — all 43 routes compile and statically generate successfully.
- Contact form does client-side validation only; wire `handleSubmit` in `src/app/contact/page.tsx` to your
  backend or a service like Resend/Formspree to actually send submissions.
