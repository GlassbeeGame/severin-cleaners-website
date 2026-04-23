# CLAUDE.md — Severin Hauling Website Project

> **This is a living document.** It is the project brain. Read it fully before every session. Update it at the end of every session.

---

## Project Overview

**Severin Hauling LLC** is a junk removal and hauling company based in La Mesa, CA, serving all of San Diego County. This is a Next.js website focused heavily on local SEO — every page, component, and schema pattern exists to rank in search results.

- **Domain**: severinhauling.com
- **Service**: Junk removal and hauling ONLY. Not cleaning, not moving, not organizing.
- **Phone**: (619) 750-0114
- **Address**: 8900 Grossmont Blvd, Suite 1, La Mesa, CA 91941
- **Email**: severinhauling@gmail.com
- **Hours**: 24/7
- **Pricing**: $69-$100 single item, $249 quarter-load, $349 half-load, $495 full load
- **Payment**: Cash, Credit Card, Check, Venmo, Zelle, Cash App

---

## Pre-Task Protocol

**Before doing ANY work in a session, read these files in order:**

1. **This file** (`CLAUDE.md`) — project rules, status, and established patterns
2. `severin-cleaners-vault/architecture/seo-standards.md` — the SEO rules that govern everything
3. `severin-cleaners-vault/architecture/content-strategy.md` — how to write content that ranks

**Before specific task types, also read:**

| Task                                        | Read First                                                         |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Creating or updating a **location page**    | `severin-cleaners-vault/architecture/location-pages.md` (standalone blueprint + prompt)   |
| Creating or updating a **service page**     | `severin-cleaners-vault/architecture/service-pages.md` (standalone blueprint + prompt)    |
| Creating or updating a **blog post**        | `severin-cleaners-vault/architecture/blog-posts.md` (standalone blueprint + prompt)       |
| Any NAP, citation, or business listing work | `severin-cleaners-vault/architecture/nap-strategy.md`                                     |
| Any content writing or rewriting            | `severin-cleaners-vault/architecture/content-strategy.md` + `severin-cleaners-vault/brand/voice-profile.md`      |
| Infrastructure or config changes            | `severin-cleaners-vault/architecture/technical-specs.md`                                  |
| Checking what pages/components exist        | `severin-cleaners-vault/reference/page-inventory.md` + `severin-cleaners-vault/reference/component-inventory.md` |
| Understanding what work is in progress      | `severin-cleaners-vault/reference/implementation-status.md`                               |
| Weekly SEO operations or ranking issues     | `severin-cleaners-vault/architecture/seo-standards.md` → Operational Workflows section    |
| Any SEO decision, content quality question, or Google policy question | `severin-cleaners-vault/architecture/google-quality-standards.md` |

**CRITICAL: Do not confuse page types.** Location pages, service pages, and blog posts have completely different blueprints, different schema, different geo tags, different sidebar components, and different internal linking rules. Each has its own standalone file in `severin-cleaners-vault/architecture/`. If you're unsure which type a page is, check `severin-cleaners-vault/reference/page-inventory.md`.

---

## SEO — The Core Rules

This project lives and dies by SEO. These rules are non-negotiable:

### Schema Requirements

Every location page `@graph` must include: localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema.

Every location page `localBusinessSchema` must include:
- `paymentAccepted`: ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"]
- `currenciesAccepted`: "USD"
- `knowsAbout`: 8 location-specific expertise signals
- `hasOfferCatalog`: 4 location-specific service offerings
- `neighborhoodSchema` (ItemList): 10+ local neighborhoods/zones

### FAQ Rules

- All FAQ answers must be **complete sentences** — never end an answer with a colon
- FAQs feed directly into structured data schema; incomplete answers hurt mobile rich results
- Location pages: 8-10 FAQs. Service pages: 6-8 FAQs. Blog posts: 10-13 FAQs.

### Content Voice

- Write like a knowledgeable San Diego local, not a content agency
- No AI-isms: no "delve," "comprehensive," "leverage," "streamline," "navigate," "landscape"
- Specific over generic: name actual streets, landmarks, zip codes
- Never describe services the business doesn't offer

Full voice guide: `severin-cleaners-vault/brand/voice-profile.md`

### Non-Negotiable Technical Rules

- **Never modify `src/` files during a docs-only session** — frontend code is live and ranking
- **Never add new npm dependencies without explicit approval**
- **Never change the deployment pipeline** (GitHub → Vercel auto-deploy on main)
- **Never remove or modify `public/robots.txt` or `src/app/sitemap.ts`** without understanding SEO impact
- **Always test locally before pushing** — `npm run build` must succeed
- **Never use La Mesa coordinates on service pages** — use San Diego metro (32.7157, -117.1611)
- **On service pages, pass related services to `nearbyLocations` prop and set `nearbyHeading="Services We Provide"`** — do not leave it showing the default "Nearby Areas We Serve" heading
- **Never use OptimizedGradientHero on location pages** — use inline `<section>` with exact gradient classes
- **Before writing ANY publicly-facing content** — check available skills and run every applicable one first. This includes section updates, paragraph additions, CTA copy, and any text that appears on the site. Never draft copy directly without running the required skill workflow (at minimum: `seo-content` with humanize phase + `brand-voice` check for content; `direct-response-copy` for CTAs). Skipping skills produces AI slop that hurts rankings.

---

## Auto-Update Rules

**This file and the `prompts/` folder must stay current without being asked.** These updates happen automatically — do not wait for the user to request them.

### CLAUDE.md updates automatically when:
- A design decision is made → add to **Established Design Patterns**
- A new component or layout pattern is used → add to **Component Patterns** table
- A page or task is completed → update **Project Status** and `severin-cleaners-vault/reference/implementation-status.md`
- A new issue surfaces → add to **Open Questions**
- A session ends → add a **Session Log** entry with: what was done, decisions made, issues found, what to start with next session
- A pattern from a previous entry is contradicted by something new → update the old entry, don't leave conflicts

### `prompts/` folder — save a prompt file when:
- A task involves building or significantly changing a full page
- A task involves a major component or section overhaul
- A multi-step workflow was used to complete a task (keyword research → content → build)
- A prompt took significant back-and-forth to refine before the final result

**How to save a prompt:**
1. After the task is complete and the result is approved, write the final refined prompt to `prompts/[descriptive-filename].md`
2. The file should contain the **best version of the prompt** — the version that would produce the approved result if run fresh, with all context and constraints already baked in
3. Strip out the back-and-forth iteration — save only the clean, final prompt
4. Include at the top: what the prompt is for, which page type it applies to, and the date it was finalized

**Prompt file naming:** `[page-type]-[city-or-service]-[action].md` — e.g. `location-carlsbad-migration.md`, `service-piano-removal-new.md`, `blog-dump-fees-guide.md`

---

## Skill Routing

**This section is mandatory.** Skills are not optional enhancements — they are required workflows for specific task types. Do not skip them. Do not summarize them. Run the full skill before producing output.

---

### Task → Skill Mapping

#### Creating or updating any location page
1. **`keyword-research`** — Required before writing. Confirms the target keywords have real search demand and identifies secondary keywords. Do not guess keywords.
2. **`seo-content`** — Required for all content writing. Run the full workflow including the humanize phase. Feed it the voice profile from `severin-cleaners-vault/brand/voice-profile.md`. No exceptions.
3. **Follow the step-by-step prompt in `severin-cleaners-vault/architecture/location-pages.md`** — This is the build checklist. It covers metadata, schema, layout, content sections, sidebar, internal links, and pre-publishing validation. Do not skip steps.

#### Creating or updating any service page
1. **`keyword-research`** — Same as above. Confirm demand before writing.
2. **`seo-content`** — Full workflow with humanize phase.
3. **Follow the step-by-step prompt in `severin-cleaners-vault/architecture/service-pages.md`** — Different schema, different sidebar component, different geo tags than location pages. Read the "How Service Pages Differ from Location Pages" table before starting.

#### Creating or updating any blog post
1. **`keyword-research`** — Confirm the topic has informational search demand. Check for cannibalization with existing pages.
2. **`seo-content`** — Full workflow with humanize phase.
3. **Follow the step-by-step prompt in `severin-cleaners-vault/architecture/blog-posts.md`** — Blog posts use the most complex schema (7-10 types). The Santee Dump Guide is the reference implementation.

#### Rewriting any existing page content
4. **`seo-content`** — Required. Run the full workflow with humanize phase.
5. **`brand-voice`** — Run as a check after content is drafted. Ensure the output matches the voice profile in `severin-cleaners-vault/brand/voice-profile.md`. No corporate speak, no AI-isms, no generic marketing language.

#### Adding a new content section to an existing page
6. **`keyword-research`** — Required before adding ANY new section. Confirms the topic has real search demand. Do not add sections based on assumptions or because they "seem useful."

#### Writing CTAs, headlines, or conversion copy
7. **`direct-response-copy`** — Required for any CTA buttons, hero subtitles, pricing section headers, or persuasive copy. Write to convert, not to inform.

#### Fixing mobile vs desktop ranking discrepancies
8. **No skill needed** — but follow this diagnostic checklist in order:
   (1) Check FAQ schema answers for incomplete sentences
   (2) Compare localBusinessSchema fields against a working location page
   (3) Check content depth — is the page thin compared to competitors?
   (4) Check heading hierarchy — H1 → H2 → H3, no skipping levels

#### Unclear or multi-step request
9. **`orchestrator`** — Let it diagnose the situation and route to the right skill sequence. Use this when a request doesn't clearly map to one of the above workflows.

---

### Quick Reference Table

| Task | Skills to Invoke (in order) |
|------|-----------------------------|
| New location page | `keyword-research` → `seo-content` (with humanize) → follow `severin-cleaners-vault/architecture/location-pages.md` prompt |
| New service page | `keyword-research` → `seo-content` (with humanize) → follow `severin-cleaners-vault/architecture/service-pages.md` prompt |
| New blog post | `keyword-research` → `seo-content` (with humanize) → follow `severin-cleaners-vault/architecture/blog-posts.md` prompt |
| Rewriting any page content | `seo-content` (with humanize) → `brand-voice` check |
| New content section on existing page | `keyword-research` first to confirm demand |
| CTAs and headlines | `direct-response-copy` |
| Mobile vs desktop ranking fix | Check FAQ schema → localBusinessSchema → content depth → headings |
| Unclear or multi-step request | `orchestrator` — let it route |

---

## Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 3.4
- **TypeScript**: 5.x
- **Hosting**: Vercel (auto-deploys on push to main)

Full specs: `severin-cleaners-vault/architecture/technical-specs.md`

---

## Site Statistics

| Metric | Count |
|--------|-------|
| Location pages | 25 |
| Service pages | 15 |
| Blog posts | 8 |
| Utility pages | 7 |
| **Total pages** | **55** |
| Components | 26 |

Full inventory: `severin-cleaners-vault/reference/page-inventory.md` + `severin-cleaners-vault/reference/component-inventory.md`

---

## Established Design Patterns

> **This section is a living log.** Every time a design decision is made — a component style, a layout pattern, a spacing convention — document it here so every future page stays consistent.

### Page Layout (All Content Pages)

- 2-column grid: `lg:grid-cols-3`
- Left column (`lg:col-span-2`): Content box — `bg-white rounded-lg shadow-md p-8`
- Right column (`lg:col-span-1`): Sticky sidebar CTA

### Component Patterns

| Component | Page Types | Pattern |
|-----------|-----------|---------|
| LocationSidebarCTA | All content pages (location, service, blog) | Sticky sidebar: phone CTA, get quote CTA, what we remove, nearby locations OR related services (prop-driven), trust badges, quick stats. Pass `nearbyLocations` + override `nearbyHeading="Services We Provide"` on service pages. |
| LocationPricingSection | All content pages (location, service) | 4-tier gradient cards ($69-100, $249, $349, $495). Pass city name or service name as `locationName` prop. |
| TrustSignalsSection | Location + Service pages | 4-stat grid with icons (years, reviews, jobs, eco commitment) |
| SchemaMarkup | All content pages | Wraps return statement, injects JSON-LD into `<head>` |
| Hero (location pages) | Location pages ONLY | Inline `<section>` — NOT OptimizedGradientHero component |

### Hero Section (Location Pages)

- Inline `<section>` with `bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900`
- **Do NOT use `<OptimizedGradientHero />` component**
- Orange badge (`bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold`): "#1 [City] Junk Removal Service"
- H1: `text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight`
- Subtitle: `text-xl md:text-2xl mb-8 text-blue-100` — 3 positioning points separated by •
- Features: `text-lg mb-8` — 3 checkmark features
- Full spec: `severin-cleaners-vault/architecture/location-pages.md` → Hero Specification

### Pricing Display

- 4-tier gradient cards
- Standard pricing (same everywhere): $69-100 single, $249 quarter, $349 half, $495 full
- All prices include labor, hauling, eco-friendly disposal

### Content Box Styles (Blog Posts)

| Box Type | Classes |
|----------|---------|
| Info (blue) | `bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8` |
| Warning (yellow) | `bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r` |
| Success (green) | `bg-green-50 border-l-4 border-green-500 p-5 rounded-r mb-8` |
| Pro Tip | `bg-blue-50 rounded-lg p-5 mb-6` |
| Mid-content CTA | `bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 my-12 text-center` |

---

## Project Status

### Current Phase

Ongoing SEO optimization and content refinement. Site is live and ranking.

### Active Work Streams

1. **Batch migration**: Migrating 25 location pages to enhanced template (6 batches, partially started)
2. **Internal linking**: Phase 2 in progress — 16 location pages need service cross-links
3. **Schema rollout**: ~39 pages still need schema added or updated
4. **Performance**: Per-page CWV optimization in progress

Full status: `severin-cleaners-vault/reference/implementation-status.md`

---

## Session Log

### Session 2026-04-06
**What was done:**
- Reorganized project file structure for Obsidian workflow
- Added `.obsidian/` to `.gitignore`
- Moved 47 loose markdown files from root into `severin-cleaners-vault/docs/audits/`, `severin-cleaners-vault/docs/templates/`, `severin-cleaners-vault/docs/strategy/`
- Moved 22 one-off scripts into `scripts/`
- Created new vault structure mirroring Naturally San Diego project:
  - `severin-cleaners-vault/architecture/` — technical-specs, seo-standards, nap-strategy, location-pages, service-pages, blog-posts, content-strategy
  - `severin-cleaners-vault/brand/` — voice-profile
  - `severin-cleaners-vault/reference/` — page-inventory, component-inventory, implementation-status
  - `prompts/` — empty, ready for future session prompts
- Rewrote CLAUDE.md as full project brain with pre-task protocol, mandatory skill routing, auto-update rules, prompts/ saving workflow
- Rewrote README.md as Obsidian vault hub with wikilinks
- Zero changes to `src/`, `public/`, or any build-affecting files

**Decisions made:**
- Separate blueprint files per page type (location, service, blog) to prevent confusion
- Each blueprint includes a step-by-step prompt workflow, not just reference material
- Old `severin-cleaners-vault/docs/templates/` files preserved as historical reference; new `severin-cleaners-vault/architecture/` files are the active standard
- Skills are mandatory workflows, not optional — documented with numbered steps and explanations for each task type
- Prompt saving workflow added: save clean, final prompts to `prompts/` after major tasks

**Next session should start with:**
1. Review the new architecture/ files and confirm they're working well with Claude Code
2. Pick up batch migration work (Batch 2: Urban Core — North Park, Hillcrest, Clairemont, Kearny Mesa)
3. Or continue schema rollout on remaining 39 pages

### Session 2026-04-06 (continued)
**What was done:**
- Added Operational Workflows section to `severin-cleaners-vault/architecture/seo-standards.md`: weekly execution rhythm (content day / optimization day / analysis day), GSC workflow, competitor analysis process, quick win protocols, Vercel redirect best practices
- Added routing entry in CLAUDE.md Pre-Task Protocol table for "Weekly SEO operations or ranking issues"
- Saved original SEO Optimization Guide and Local Domination Blueprint to `severin-cleaners-vault/docs/guides/` as historical reference
- Diagnosed emergency junk removal page ranking issue — identified intent mismatch, missing geo tags, weak areaServed schema, keyword density imbalance vs same-day page
- Diagnosed areas-we-serve hub page outranking individual location pages — identified keyword cannibalization in hub meta keywords, link equity imbalance, and hub content competing with children

**Issues identified (no code changes made — docs-only session):**
- Emergency page (`emergency-junk-removal-san-diego`): missing geo tags (geo.placename, geo.position, ICBM), areaServed missing @id, content optimizes for "crisis" language instead of target keyword "emergency junk removal san diego", yellow callout box sends users away to same-day page
- Same-day page (`same-day-junk-removal-san-diego`): also missing geo tags (only has geo.region)
- Areas-we-serve hub page: meta keywords include city-specific terms (e.g. "El Cajon junk removal") that compete directly with location pages, hub accumulates disproportionate link equity from nav/footer placement
- Both emergency and same-day pages use `LocationSidebarCTA` with default props — service pages should pass related services to `nearbyLocations` and set `nearbyHeading="Services We Provide"`

**Decisions made:**
- Emergency page needs a positioning decision: either lean into niche "crisis cleanout" (rename URL) or rewrite to compete for broad "emergency junk removal" keyword. User to decide.
- Areas-we-serve hub needs city-specific keywords removed from meta keywords to stop competing with location pages
- Internal linking Phase 2 (16 locations still need service cross-links) is high priority — location pages need more inbound links to outrank the hub

**Next session should start with:**
1. Fix missing geo tags on emergency and same-day pages (quick technical fix)
2. Fix areas-we-serve meta keywords — remove city-specific terms
3. Get user decision on emergency page positioning (crisis niche vs broad emergency keyword)
4. Continue internal linking Phase 2 to strengthen location pages
5. Or pick up batch migration work (Batch 2: Urban Core)

### Session 2026-04-23
**What was done:**
- Diagnosed root cause of couch removal page dropping out of top 100 and furniture disposal page dropping 36 positions (SEMrush report week of April 16-22, 2026)
- Added 3 missing geo meta tags to `couch-removal-san-diego` (`geo.placename`, `geo.position`, `ICBM`) — primary cause of collapse vs furniture page which still had all 4
- Consolidated two couch/sofa list items on `furniture-disposal-san-diego` "What We Remove" section into one, reducing keyword cannibalization signal (Google was routing "couch disposal san diego" to the furniture page, not the dedicated couch page)
- Added 9 targeted content freshness sentences across both pages (C1-C6 on couch page, F1-F3 on furniture page) — one sentence per section, San Diego-specific operational detail, written through `seo-content` + `brand-voice` skill workflow with Google Quality Standards as cornerstone evaluation framework
- Created `severin-cleaners-vault/architecture/google-quality-standards.md` — comprehensive research doc covering Helpful Content System, E-E-A-T, AI Content Policy, Core Updates 2024, Local SEO factors, Schema, CWV, Freshness, Cannibalization, Spam Policies. Referenced in both CLAUDE.md files.
- Added mandatory skills-before-writing rule to both CLAUDE.md files: no publicly-facing content without running applicable skills first
- Removed all em dashes (replaced with periods/commas) and all emojis from both service pages — h3 headings, hero subtitle, CTA buttons, FAQ answers, all body copy
- All changes pushed to GitHub (commit cbb0ad3 + e255551), Vercel deployed

**Decisions made:**
- `localBusinessSchema.geo` coordinates (La Mesa: 32.7736, -117.0228) correctly represent the physical office and should NOT be changed on service pages — the "never use La Mesa" rule in CLAUDE.md applies to meta geo tags only, not JSON-LD schema
- Content freshness additions: one sentence per section max, spaced months apart — Google detects bulk AI content sprints
- Em dashes and emojis are banned site-wide on Severin Hauling (added to voice rules)
- Skills are non-negotiable before any publicly-facing content: `seo-content` (with humanize) + `brand-voice` check minimum; `direct-response-copy` for CTAs

**Issues identified:**
- 26 other pages site-wide still missing full geo meta tags (only have `geo.region: 'US-CA'`) — needs batch fix
- Pre-existing TypeScript error `Cannot find module 'next/types.js'` — node_modules issue, fix with `npm install`, unrelated to content changes

**Next session should start with:**
1. Submit both URLs in Google Search Console → URL Inspection → Request Indexing (do immediately if not done)
2. Monitor SEMrush position tracking over 7-14 days for recovery signals on both pages
3. Add missing geo meta tags to the other 26 pages that only have `geo.region: 'US-CA'`
4. Fix emergency + same-day pages (missing geo tags + incorrect LocationSidebarCTA props)
5. Get user decision on emergency page positioning (crisis niche vs broad "emergency junk removal")

---

## Open Questions

- [ ] Verify all external citations (Yelp, GBP, directories) updated to "Severin Hauling" post-rebrand
- [ ] Keyword cannibalization on "junk removal san diego" — 8 competing pages, needs intent differentiation
- [ ] Blog expansion — seasonal content, service deep dives, comparison content
- [ ] Image WebP/AVIF full implementation on all pages
- [ ] Emergency page positioning decision: niche "crisis cleanout" vs broad "emergency junk removal" keyword
- [ ] Areas-we-serve hub competing with location pages — needs meta keyword cleanup and possibly leaner content
- [ ] Emergency + same-day pages both missing full geo tags
- [ ] Emergency + same-day pages using LocationSidebarCTA with default props — need `nearbyLocations` set to related services and `nearbyHeading="Services We Provide"`

---

## File Structure Reference

```
severin-cleaners-website/
├── CLAUDE.md                    ← YOU ARE HERE (project brain)
├── README.md                    ← Obsidian vault hub with [[wikilinks]]
├── architecture/
│   ├── technical-specs.md       ← Stack, deployment, CWV, config
│   ├── seo-standards.md         ← SEO rules: metadata, schema, geo tags, linking
│   ├── nap-strategy.md          ← NAP consistency, citations, SAB rules
│   ├── location-pages.md        ← Location page blueprint + step-by-step prompt
│   ├── service-pages.md         ← Service page blueprint + step-by-step prompt
│   ├── blog-posts.md            ← Blog post blueprint + step-by-step prompt
│   └── content-strategy.md      ← Voice rules, keyword density, quality checklist
├── brand/
│   └── voice-profile.md         ← Content voice, local writing style, banned words
├── reference/
│   ├── page-inventory.md        ← All 55 pages mapped with type and URL
│   ├── component-inventory.md   ← All 26 components with usage
│   └── implementation-status.md ← Batch migration, linking, schema progress
├── prompts/                     ← Saved prompts from sessions
├── docs/
│   ├── BLOG_POST_TEMPLATE.md    ← Historical blog template (reference)
│   ├── audits/                  ← SEO audit reports (historical reference)
│   │   ├── locations/           ← Per-city audit reports
│   │   ├── site-wide/           ← Site-wide audits and diagnostics
│   │   ├── performance/         ← PageSpeed and CWV reports
│   │   └── services/            ← Service page audits
│   ├── strategy/                ← Strategy docs (internal linking, NAP)
│   └── templates/               ← Original blueprints (superseded by architecture/)
├── scripts/                     ← One-off migration and optimization scripts
├── src/                         ← LIVE CODE — do not touch during docs work
├── public/                      ← Static assets — do not touch during docs work
└── [config files]               ← next.config.ts, tailwind.config.js, etc.
```
