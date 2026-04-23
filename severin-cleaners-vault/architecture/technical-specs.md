# Technical Specifications — Severin Hauling

> This file covers the tech stack, deployment, performance optimization rules, and build configuration. Read this before making any infrastructure changes.

---

## Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 3.4
- **TypeScript**: 5.x
- **Deployment**: Vercel (auto-deploys on push to main)
- **Domain**: severinhauling.com
- **Version Control**: GitHub

---

## Project Structure

```
src/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx              # Root layout (header, footer, GTM, fonts)
│   ├── globals.css             # Global Tailwind styles
│   ├── sitemap.ts              # Dynamic sitemap generator
│   ├── not-found.tsx           # 404 page
│   ├── page.tsx                # Homepage
│   ├── junk-removal-[city]/    # 25 location pages
│   ├── [service-slug]/         # 15 service pages
│   ├── blog/                   # 8 blog posts + index
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   ├── areas-we-serve/         # Service area hub
│   └── services/               # Services hub
├── components/                  # 26 reusable React components
├── config/                      # Configuration (reviews.ts)
└── lib/                         # Utilities (schema.ts, gtm.ts)
```

---

## Development Commands

```bash
npm run dev          # Start dev server on localhost:3000
npm run dev:clean    # Kill zombies, clear cache, fresh start (use when site won't load)
npm run clean        # Full .next directory removal
npm run build        # Production build
```

### Troubleshooting

**"SyntaxError: Unexpected end of JSON input"** — Cache corruption. Run `npm run dev:clean`.

**Port 3000 in use** — Old server didn't terminate. Run `pkill -f "next dev"` then `npm run dev`.

**Blank page / 404s** — Webpack compilation failed. Check terminal for errors, then `npm run dev:clean`.

---

## Performance Optimization Rules

### Core Web Vitals Targets

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| LCP (Largest Contentful Paint) | < 2.5s | How fast the main content loads |
| TBT (Total Blocking Time) | < 200ms | How long the main thread is blocked |
| CLS (Cumulative Layout Shift) | < 0.1 | Visual stability during load |
| PageSpeed Score | 80+ | Overall performance grade |

### Image Optimization

- **Format**: WebP/AVIF via Next.js image optimization (configured in `next.config.ts`)
- **Hero images**: 5 responsive sizes — 640px (24KB), 768px (33KB), 1024px (50KB), 1280px (71KB), 1920px (128KB)
- **Quality**: 60 for hero images, default for others
- **Lazy loading**: All below-fold images must be lazy loaded
- **Blur placeholders**: Hero images use blur placeholder for perceived performance

### Font Loading

- **Font**: Inter (weights: 400, 600, 700, 900 only)
- **Strategy**: `font-display: swap` — text renders immediately with fallback, swaps when font loads
- **Preconnect**: Resource hints for Google Fonts in `<head>`

### Analytics & Third-Party Scripts

- **GTM/GA4**: DNS prefetch only, deferred loading
- **Ahrefs & analytics**: Loaded on first user interaction (click, scroll, touch, mousemove, keydown) OR after 8-second timeout
- **Why**: Synchronous script loading in `<head>` kills TBT and FCP
- **Files**: `src/app/layout.tsx`, `src/components/GoogleTagManager.tsx`

### Bundle Optimization

- **maxInitialRequests**: Set to 12 (down from 25) in `next.config.ts`
- **Impact**: Reduced initial HTTP requests by 52%
- **Why**: Fewer requests = faster Googlebot JavaScript rendering = better indexing

### Browser Support

- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Modern browsers only — no IE11 polyfills

---

## Configuration Files (Do Not Modify Without Reason)

| File | Purpose | SEO Impact |
|------|---------|-----------|
| `next.config.ts` | Image optimization, compression, build settings, bundle splitting | High — affects CWV |
| `tailwind.config.js` | Design system tokens | None directly |
| `tsconfig.json` | TypeScript paths and compilation | None |
| `vercel.json` | Deployment headers and redirects | Medium — affects caching |
| `postcss.config.mjs` | PostCSS/Tailwind processing | None |
| `eslint.config.mjs` | Code quality rules | None |
| `public/robots.txt` | Crawler directives | High — controls what Google indexes |
| `src/app/sitemap.ts` | Dynamic XML sitemap | High — tells Google what pages exist |

### robots.txt Rules (Current)

- Allow all crawling (no Crawl-delay — was removed because it added 48+ seconds to full site crawl)
- Block Next.js internal data files (`/_next/data/`) to save crawl budget
- Declare sitemap location

### Sitemap Priority Structure

| Page Type | Priority |
|-----------|----------|
| Homepage | 1.0 |
| Service pages | 0.9 |
| Location pages | 0.9 |
| Blog posts | 0.7 |
| Utility pages (about, contact) | 0.5 |

---

## Non-Negotiable Rules

1. **Never modify `src/` files during a docs-only restructuring** — frontend code is live and ranking
2. **Never add new npm dependencies without explicit approval**
3. **Never change the deployment pipeline** (GitHub → Vercel auto-deploy on main)
4. **Always test locally before pushing** — `npm run build` must succeed
5. **Never remove or modify `public/robots.txt` or `src/app/sitemap.ts`** without understanding SEO impact
