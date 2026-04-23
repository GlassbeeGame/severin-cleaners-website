# Severin Hauling — Website Project

> This Obsidian vault is the single source of truth for the Severin Hauling website. All project decisions, SEO standards, page blueprints, and implementation status live here.

---

## Quick Links

### Architecture (How to Build Pages)
- [[architecture/seo-standards]] — SEO rules: metadata, schema, geo tags, internal linking, pre-publishing checklist
- [[architecture/location-pages]] — Location page blueprint + step-by-step prompt
- [[architecture/service-pages]] — Service page blueprint + step-by-step prompt
- [[architecture/blog-posts]] — Blog post blueprint + step-by-step prompt
- [[architecture/content-strategy]] — Voice rules, keyword density, quality checklist, skill workflows
- [[architecture/nap-strategy]] — NAP consistency, SAB classification, citation checklist
- [[architecture/technical-specs]] — Tech stack, deployment, Core Web Vitals, config files

### Brand
- [[brand/voice-profile]] — Content voice, local writing style, banned words, CTA patterns

### Reference
- [[reference/page-inventory]] — All 55 pages mapped by type, URL, and demographic tier
- [[reference/component-inventory]] — All 26 React components with page type usage
- [[reference/implementation-status]] — Batch migration, internal linking, schema rollout progress

### Historical Documentation
- [[docs/audits/locations/]] — Per-city SEO audit reports
- [[docs/audits/site-wide/]] — Site-wide audit reports and diagnostics
- [[docs/audits/performance/]] — PageSpeed and Core Web Vitals reports
- [[docs/audits/services/]] — Service page audit reports
- [[docs/strategy/]] — Internal linking and NAP strategy docs
- [[docs/templates/]] — Original page blueprints (superseded by architecture/ files)

### Prompts
- `prompts/` — Saved prompts from work sessions (add after each major task)

---

## Project Status

| Work Stream | Status | Details |
|-------------|--------|---------|
| Site live and ranking | Active | severinhauling.com deployed on Vercel |
| Batch migration (location pages) | In progress | 6 batches, partially started |
| Internal linking (Phase 2) | In progress | 16 location pages need service cross-links |
| Schema rollout | In progress | ~39 pages need schema added/updated |
| Performance optimization | In progress | Per-page CWV optimization ongoing |

Full details: [[reference/implementation-status]]

---

## Page Type Quick Reference

**Before working on any page, identify its type and read the correct blueprint:**

| If the URL looks like... | It's a... | Read this |
|--------------------------|-----------|-----------|
| `/junk-removal-[city]` | Location page | [[architecture/location-pages]] |
| `/[service]-san-diego` | Service page | [[architecture/service-pages]] |
| `/blog/[slug]` | Blog post | [[architecture/blog-posts]] |
| Everything else | Utility page | [[architecture/technical-specs]] |

---

## Project Details

- **Business**: Severin Hauling LLC
- **Service**: Junk removal and hauling (San Diego County)
- **Framework**: Next.js 15.5.3 (App Router) + Tailwind CSS 3.4
- **Hosting**: Vercel (auto-deploys via GitHub)
- **Domain**: severinhauling.com
- **Phone**: (619) 750-0114

---

## Development

```bash
npm run dev          # Start dev server
npm run dev:clean    # Clear cache + restart (use when site won't load)
npm run build        # Production build
```
