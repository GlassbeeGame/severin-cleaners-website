# Service Page SEO Optimization Workflow
## Agent Instructions for Severin Hauling Service Page Optimization

**Purpose:** Step-by-step process for optimizing any Severin Hauling service page to match the ranking performance of the emergency-junk-removal-san-diego benchmark page.

**Benchmark Page:** `/src/app/emergency-junk-removal-san-diego/page.tsx`
**Status:** ✅ RANKING (Only service page currently generating phone calls from organic search)

---

## CRITICAL CONTEXT

**What Makes Emergency Page Rank:**
1. Complete 6-schema @graph (lines 359) - Most pages only have 4 - **80% of ranking power**
2. localBusinessSchema with ALL required fields (lines 267-342) - **Schema completeness, not keyword density**
3. Situation-based colored content boxes (lines 612-671) - Not generic lists - **15% of ranking power**
4. 10+ neighborhood schema with zip codes (lines 119-265) - **Geo-targeting signals**
5. 3,500+ words of specific local content - **Natural language, not keyword stuffed**

**Emergency Page Keyword Frequency (Natural baseline):**
- "emergency junk removal San Diego" - 8-12 mentions across 3,500 words (~0.3% density)
- Written naturally for humans, optimized structurally for bots (schema)
- No unnatural repetition or keyword stuffing detected

**What Pages Are Missing:**
- paymentAccepted, currenciesAccepted, knowsAbout fields in localBusinessSchema
- neighborhoodSchema and howToSchema in @graph
- Situation-based content (colored scenario boxes)
- Complete FAQ arrays (8-10 questions)

**Goal:** Every service page should generate phone calls like emergency page does

---

## ⚠️ CRITICAL KEYWORD PHILOSOPHY

**The emergency page ranks because of SCHEMA (80%), not keywords (5%).**

**User's hard-learned lesson:**
- Keyword stuffing = Google penalty as AI-built content
- Over-optimized pages get pushed down in rankings
- Natural language + complete schema = rankings + phone calls

**Rules for ALL content work:**
1. ❌ **NEVER increase keyword frequency** - Current can stay same or go DOWN
2. ❌ **NEVER add keyword repetitions** - Write naturally for humans
3. ✅ **Fix schema completeness** - This is 80% of ranking power
4. ✅ **Add situation-based content** - Converts rankings to calls
5. ✅ **Natural language always wins** - Emergency page has ~0.3% keyword density

**When in doubt:** Fix schema first, leave keywords alone.

---

## WHEN TO USE THIS WORKFLOW

Use this workflow when the user asks you to:
- "Audit [service] page"
- "Optimize [service] page for SEO"
- "Fix [service] page rankings"
- "Make [service] page rank like emergency page"
- "Review [service] page against the audit file"

---

## REQUIRED SKILLS TO USE

You MUST use these uploaded skills during this workflow:

1. **keyword-research** - For validating search demand and finding keyword gaps
2. **seo-content** - For content quality audits and humanization checks
3. **positioning-angles** - For identifying unique service angles (if needed)

**Do NOT skip these skills** - They are part of the user's SEO methodology.

---

## STEP-BY-STEP WORKFLOW

### PHASE 1: PREPARATION & CONTEXT GATHERING

#### Step 1.1: Identify Target Page
When user requests optimization, identify the exact file path:
```
src/app/[service-name]/page.tsx
```

**Action:** Read the target page file completely

#### Step 1.2: Read Benchmark Page for Comparison
**Action:** Read `/src/app/emergency-junk-removal-san-diego/page.tsx` (lines 1-934)

**Key sections to note:**
- Lines 67-108: FAQ array structure (10 questions)
- Lines 119-265: neighborhoodSchema (10 neighborhoods with zip codes)
- Lines 267-342: Complete localBusinessSchema with all required fields
- Lines 344-347: howToSchema
- Lines 359: @graph with 6 schemas
- Lines 374-914: Content structure and situation-based boxes

#### Step 1.3: Create Audit Tracking
Create a TodoWrite list with these items:
1. Backend schema audit (compare against benchmark)
2. Metadata audit (title, description, keywords)
3. Content structure audit (headings, word count, situation boxes)
4. FAQ audit (count, quality, completeness)
5. Component audit (LocationSidebarCTA, etc.)
6. Implement fixes
7. Validate and report

---

### PHASE 2: BACKEND SCHEMA AUDIT

#### Step 2.1: Check @graph Schema Count
**Action:** Search for `"@graph"` in target page

**Compare:**
- **Benchmark:** 6 schemas (line 359)
  ```typescript
  "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  ```
- **Target:** Count how many schemas are in @graph

**If target has < 6 schemas:** Note which schemas are missing

#### Step 2.2: Audit localBusinessSchema Completeness
**Action:** Search for `localBusinessSchema` definition in target page

**Compare against benchmark (lines 267-342). Check for these fields:**

**CRITICAL MISSING FIELDS (most common):**
```typescript
// Line 291
"paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],

// Line 292
"currenciesAccepted": "USD",

// Line 293
"aggregateRating": generateAggregateRatingSchema(),

// Lines 294-303
"knowsAbout": [
  // 8 service-specific items
],

// Lines 304-341
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "[Service] Services",
  "itemListElement": [
    // Minimum 4 offer items
  ]
}
```

**Action:** Document exactly which fields are missing from target page's localBusinessSchema

#### Step 2.3: Check for neighborhoodSchema
**Action:** Search for `neighborhoodSchema` in target page

**If missing:**
Benchmark has this at lines 119-265 with structure:
```typescript
const neighborhoodSchema = {
  "@type": "ItemList",
  "name": "San Diego County [Service] Coverage",
  "description": "[Service description]",
  "itemListElement": [
    // 10 neighborhoods with Place type, addresses, zip codes
  ]
};
```

**Standard 10 neighborhoods to use:**
1. Downtown San Diego (92101)
2. La Jolla (92037)
3. Pacific Beach (92109)
4. Chula Vista (91910)
5. El Cajon (92020)
6. Oceanside (92054)
7. Escondido (92025)
8. Santee (92071)
9. National City (91950)
10. La Mesa (91942)

#### Step 2.4: Check for howToSchema
**Action:** Search for `howToSchema` in target page

**If missing:**
Benchmark calls `generateHowToSchema()` at lines 344-347:
```typescript
const howToSchema = generateHowToSchema({
  cityName: "San Diego (Emergency Service)",
  pageUrl: "https://www.severinhauling.com/emergency-junk-removal-san-diego"
});
```

#### Step 2.5: Validate FAQ Array
**Action:** Search for FAQ array in target page (usually named `[service]FAQs`)

**Compare:**
- **Benchmark:** 10 FAQs (lines 67-108)
- **Target:** Count FAQs

**Quality check:**
- All answers are complete sentences? (no colons at end)
- Each answer is 3-5 sentences minimum?
- Answers include service keyword + "San Diego"?
- First FAQ explains what qualifies for service?
- Second FAQ addresses response time?
- Third FAQ addresses pricing?

**If target has < 8 FAQs or quality issues:** Note for content phase

#### Step 2.6: Check Metadata Completeness
**Action:** Review metadata export (lines 14-65 in benchmark)

**Required fields:**
- title: Service + location + benefit/hook (under 60 chars)
- description: Service + location + CTA + phone (150-160 chars)
- keywords: Array of 8-10 keyword variations
- openGraph: All fields complete
- twitter: All fields complete
- alternates.canonical: Correct URL
- robots: All configured

**Document any missing or poorly optimized metadata**

---

### PHASE 3: FRONTEND CONTENT AUDIT

#### Step 3.1: Check Content Structure
**Action:** Read through main content section (between Header and Footer)

**Required sections (from benchmark lines 374-914):**

1. **Hero Section (OptimizedGradientHero)**
   - Lines 374-378 in benchmark
   - Must have: title, subtitle, description

2. **2-Column Layout**
   - Lines 381-863 in benchmark
   - Left: Main content (lg:col-span-2)
   - Right: Sidebar (lg:col-span-1)

3. **Opening Section**
   - Lines 391-437 in benchmark
   - Must have: H2, float-right image (desktop), stacked image (mobile), 2-3 intro paragraphs, callout box

4. **Three-Column Feature Cards**
   - Lines 441-471 in benchmark
   - 3 benefit cards with icons

5. **Main Content H2 Sections (minimum 4)**
   - "What [Service] We Handle" (lines 474-601)
   - "Situations/Use Cases" (lines 604-671) ⚠️ CRITICAL - Situation boxes
   - "Our Process" (lines 674-724)
   - "Why Choose Us" (lines 727-794)
   - "Service Areas" (lines 821-848)

**Document which sections are missing or incomplete**

#### Step 3.2: Audit Situation-Based Content (CRITICAL)
**Action:** Search for colored scenario/situation boxes in target page

**Benchmark has 6 colored scenario boxes (lines 612-671):**
- Red box: Eviction situations (bg-red-50 border-l-4 border-red-500)
- Blue box: Foreclosure situations
- Orange box: Fire damage situations
- Cyan box: Water damage situations
- Yellow box: HOA violations
- Purple box: Court orders

**Each box structure:**
```tsx
<div className="bg-[color]-50 border-l-4 border-[color]-500 p-6 rounded-lg">
  <h3 className="text-2xl font-bold text-[color]-900 mb-3">🔥 [Situation Name]</h3>
  <p className="text-gray-700 mb-3">[Detailed scenario with urgency/consequences]</p>
  <p className="text-gray-700">
    <strong>Common scenarios:</strong> [Specific use cases]
  </p>
</div>
```

**If target page has < 4 situation boxes:** This is a MAJOR ranking factor - must be added

#### Step 3.3: Count Word Count
**Action:** Estimate total word count of main content (excluding FAQs)

**Benchmark:** ~3,500 words
**Minimum required:** 2,500 words

**If target < 2,500 words:** Note content needs expansion

#### Step 3.4: Check Internal Links
**Action:** Count internal links to location pages in first 500 words

**Benchmark:** 4 location page links in lines 423-426
**Minimum required:** 4 internal links in opening content

#### Step 3.5: Validate Component Usage
**Action:** Check for required components at bottom of page

**Required (in order):**
1. LocationPricingSection (line 868-871)
2. TrustSignalsSection (line 874)
3. FAQSection (lines 877-884)
4. Optional: Final CTA section (lines 887-913)

**Check each component has service-specific props (not generic)**

---

### PHASE 4: USE UPLOADED SKILLS FOR VALIDATION

#### Step 4.1: Run keyword-research Skill (REQUIRED)
**Purpose:** Validate keyword targeting and find gaps

**Action:**
```
Use Skill tool with:
skill: "keyword-research"
args: "[service type] San Diego"
```

**Wait for skill output, then:**
- Compare skill's keyword recommendations against target page's current keywords array
- Note any high-value keywords the page is missing
- Identify if page is targeting the right primary keyword

**Example:**
```
Skill: keyword-research
Args: "furniture disposal San Diego"
```

Skill will return keyword clusters and priorities. Compare against furniture page's keywords array.

#### Step 4.2: Run seo-content Skill Audit (REQUIRED)
**Purpose:** Check content quality and AI-ism detection

**Action:**
```
Use Skill tool with:
skill: "seo-content"
args: "Audit the [service] page at src/app/[service]/page.tsx for AI-isms, voice quality, and content depth. Compare against seo-content skill humanization checklist."
```

**The skill will check:**
- AI-ism words (delve, comprehensive, leverage, etc.)
- AI-ism phrases (in today's world, it's important to note, etc.)
- Voice consistency
- Content depth vs competitors
- **Keyword stuffing detection** - Flag if service keyword appears 20+ times unnaturally

**Wait for skill output before proceeding**

#### Step 4.2b: Check for Keyword Stuffing (CRITICAL)
**Action:** Count primary service keyword frequency in target page

**Compare to benchmark:**
- Emergency page: "emergency junk removal San Diego" appears 8-12 times in 3,500 words (~0.3% density)
- Natural range: 8-15 mentions in 2,500-3,500 words

**If target page has 20+ keyword mentions:**
- This is keyword stuffing (signals AI content to Google)
- **DO NOT add more keywords during fixes**
- **Consider reducing** to natural frequency (8-15 mentions)
- Focus on schema fixes instead - this is what drives rankings

**If target page has < 8 keyword mentions:**
- This is fine - schema matters more than keyword frequency
- **DO NOT add keywords** - natural writing wins over optimization

#### Step 4.3: Optional - Run positioning-angles Skill
**Only if:** Service page needs unique angle/differentiation

**Action:**
```
Use Skill tool with:
skill: "positioning-angles"
args: "[service type] in San Diego - find positioning angles against competitors"
```

**Use output to inform situation-based content boxes**

---

### PHASE 5: COMPILE FINDINGS & PRIORITIZE FIXES

#### Step 5.1: Categorize Issues by Impact
**Action:** Organize all findings into 3 priority levels

**CRITICAL (Fix First - 80% of ranking impact):**
- Missing schemas in @graph (neighborhoodSchema, howToSchema)
- Missing fields in localBusinessSchema (paymentAccepted, currenciesAccepted, knowsAbout, hasOfferCatalog)
- Incomplete FAQ array (< 8 questions)
- Missing situation-based content boxes (< 4 boxes)

**HIGH (Fix Second - 15% of ranking impact):**
- Metadata optimization (title, description not optimized)
- Word count < 2,500
- Missing internal links in opening content
- Missing or misconfigured components

**MEDIUM (Fix Third - 5% of ranking impact):**
- Content voice/tone improvements
- Additional FAQ questions
- Image optimization
- Additional internal links

#### Step 5.2: Create Implementation Plan
**Action:** Write out exact fixes needed in priority order

**Format:**
```markdown
## CRITICAL FIXES:
1. Add neighborhoodSchema with 10 neighborhoods (copy from emergency page lines 119-265, customize service name)
2. Add howToSchema (copy from emergency page lines 344-347, customize)
3. Add to localBusinessSchema:
   - paymentAccepted array
   - currenciesAccepted: "USD"
   - aggregateRating
   - knowsAbout array (8 service-specific items)
   - 4th item to hasOfferCatalog
4. Update @graph to include all 6 schemas

## HIGH PRIORITY FIXES:
[List specific content additions needed]

## MEDIUM PRIORITY FIXES:
[List optimization improvements]
```

---

### PHASE 6: IMPLEMENT FIXES

#### Step 6.1: Backend Schema Fixes (DO NOT CHANGE KEYWORDS)
**Action:** Implement CRITICAL schema fixes only

**CRITICAL KEYWORD RULES:**
1. ❌ **NEVER add more keyword repetitions** - Keyword stuffing signals AI content to Google
2. ❌ **NEVER increase keyword frequency** - Current frequency can stay same or GO DOWN
3. ✅ **CAN reduce keyword stuffing** - If page repeats service keyword 20+ times unnaturally, reduce to 8-12
4. ✅ **Write naturally** - Emergency page ranks because of SCHEMA (80%), not keyword density (5%)
5. ✅ **Focus on schema completeness** - This is what drives rankings, not keyword repetition

**User's experience:** Over-optimized pages with high keyword frequency get penalized as AI-built content. Natural language wins.

**For each missing schema:**

1. **Add neighborhoodSchema:**
   - Copy lines 119-265 from emergency page
   - Change `"name"` to service-specific (e.g., "San Diego County Furniture Disposal Coverage")
   - Change `"description"` to service-specific
   - Keep same 10 neighborhoods with zip codes

2. **Add howToSchema:**
   - Copy lines 344-347 from emergency page
   - Update `cityName` to service-specific
   - Update `pageUrl` to correct canonical URL

3. **Update localBusinessSchema:**
   - Add missing fields exactly as shown in emergency page lines 291-341
   - Customize `knowsAbout` array with 8 service-specific items
   - Customize `hasOfferCatalog` name and service offerings
   - Keep minimum 4 items in hasOfferCatalog.itemListElement

4. **Update @graph:**
   - Add neighborhoodSchema and howToSchema to array
   - Order: [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]

**Use Edit tool for each change - do NOT rewrite entire file**

#### Step 6.2: FAQ Additions (If Needed)
**Action:** If page has < 8 FAQs, add service-specific questions

**Copy structure from emergency page lines 67-108:**
```javascript
{
  question: "[Service-specific question mentioning San Diego]",
  answer: "[3-5 sentence answer mentioning service + San Diego naturally, providing specific details, ending with complete sentence - no colon]"
}
```

**Keyword usage in FAQs:**
- Question: Include service keyword naturally (1 time per question)
- Answer: Mention service keyword 1-2 times naturally (not forced)
- Emergency page FAQs mention keyword ~1.5 times per FAQ on average
- Focus on ANSWERING the question thoroughly, not keyword optimization

**Standard FAQ types to include:**
1. What qualifies for this service?
2. How quickly can you respond?
3. What does it cost? (without specific prices)
4. Do you handle [specific scenario]?
5. What areas do you serve?
6. Do you provide documentation?
7. Can you handle [challenging situation]?
8. What happens to the [items]?

#### Step 6.3: Situation-Based Content Boxes (If Missing)
**Action:** If page has < 4 situation boxes, add them

**Copy structure from emergency page lines 612-671:**

**Color scheme pattern (rotate through):**
- Red (bg-red-50, border-red-500, text-red-900)
- Blue (bg-blue-50, border-blue-500, text-blue-900)
- Orange (bg-orange-50, border-orange-500, text-orange-900)
- Yellow (bg-yellow-50, border-yellow-500, text-yellow-900)
- Purple (bg-purple-50, border-purple-500, text-purple-900)
- Cyan (bg-cyan-50, border-cyan-500, text-cyan-900)

**Each box must:**
- Have emoji in H3 heading
- Describe specific situation with urgency/consequences
- Include "Common scenarios:" bullet list
- **Write naturally** - Mention service keyword 0-1 times per box (not in every sentence)

**Service-specific scenarios to create boxes for:**
- Different customer types (residential, commercial, property managers)
- Different urgency levels (same-day, emergency, scheduled)
- Different item conditions (damaged, working, oversized)
- Different locations (multi-story, storage units, businesses)

**Writing philosophy for situation boxes:**
- Emergency page boxes mention keyword naturally, not repetitively
- Focus on describing the SITUATION and customer pain point
- Schema drives SEO, content drives conversions (phone calls)
- Natural language = higher conversion rates

#### Step 6.4: Component Configuration (If Missing)
**Action:** Ensure all required components are present and configured

**Check and fix:**

1. **LocationSidebarCTA** - Must have service-specific `locationName`
2. **LocationPricingSection** - Must have service-specific `contextParagraph`
3. **TrustSignalsSection** - Must have service-specific `locationName`
4. **FAQSection** - Must have service-specific title, description, ctaTitle, ctaDescription

**Use Edit tool to update component props**

#### Step 6.5: Metadata Optimization (If Needed)
**Action:** If metadata is not optimized, fix title and description

**Format (from emergency page lines 14-16):**
```typescript
title: "[Service] San Diego - [Benefit/Hook]",
description: "[Service] San Diego [detailed benefit] - [situations handled] Licensed & insured. Call (619) 750-0114.",
```

**Keep under character limits:**
- Title: 60 characters max
- Description: 150-160 characters

---

### PHASE 7: VALIDATION & REPORTING

#### Step 7.1: Validate Schema
**Action:** After implementing fixes, validate schema structure

**Check:**
- @graph has 6 schemas
- localBusinessSchema has all required fields
- neighborhoodSchema has 10+ neighborhoods
- howToSchema is present
- No syntax errors in schema objects

#### Step 7.2: Count Final Stats
**Action:** Measure improvements

**Report:**
- Schemas before: X → Schemas after: 6
- localBusinessSchema fields before: X → after: [all required]
- FAQs before: X → after: [8-10]
- Situation boxes before: X → after: [4+]
- Word count before: X → after: [2,500+]

#### Step 7.3: Create Summary Report for User
**Action:** Write concise summary of changes made

**Format:**
```markdown
# [Service] Page SEO Optimization - Complete

## Critical Fixes Implemented:
✅ Added neighborhoodSchema (10 neighborhoods with zip codes)
✅ Added howToSchema
✅ Added to localBusinessSchema: paymentAccepted, currenciesAccepted, knowsAbout (8 items), aggregateRating, 4th hasOfferCatalog item
✅ Updated @graph from 4 schemas → 6 schemas

## High Priority Fixes Implemented:
✅ Added [X] situation-based content boxes
✅ Expanded FAQ from [X] → [10] questions
✅ [Other fixes]

## Page Now Matches Emergency Page Structure:
- ✅ 6/6 required schemas
- ✅ Complete localBusinessSchema
- ✅ 8-10 quality FAQs
- ✅ 4+ situation boxes
- ✅ 2,500+ words
- ✅ All required components

## Expected Impact:
- Current rank: ~80
- Expected rank after 3-4 weeks: 30-40
- Expected rank after 6-8 weeks: 20-30

## Next Steps:
1. Deploy changes to production
2. Submit sitemap to Google Search Console
3. Request indexing for this URL in GSC
4. Monitor rankings weekly

File modified: src/app/[service]/page.tsx
```

---

## COMMON MISTAKES TO AVOID

**DO NOT:**
1. ❌ **NEVER increase keyword frequency** - Keyword stuffing = Google penalty for AI content
2. ❌ **NEVER add more keyword repetitions** - Current frequency stays same or goes DOWN
3. ❌ **NEVER change existing keywords** in content (user explicitly does not want this)
4. ❌ Rewrite entire files - use Edit tool for surgical changes
5. ❌ Add AI-isms when writing new content (use seo-content skill to validate)
6. ❌ Skip the uploaded skills (keyword-research, seo-content are REQUIRED)
7. ❌ Add generic content - all additions must be service-specific
8. ❌ Forget to update @graph when adding schemas
9. ❌ End FAQ answers with colons
10. ❌ Use fewer than 8 items in knowsAbout array
11. ❌ Use fewer than 4 items in hasOfferCatalog
12. ❌ Skip situation-based content boxes (critical for rankings)

**DO:**
1. ✅ **Write naturally for humans** - Schema drives rankings, not keyword density
2. ✅ **Fix schema completeness first** - 80% of ranking power comes from complete @graph
3. ✅ Use Edit tool for all changes - Surgical fixes, not rewrites
4. ✅ Run keyword-research skill for validation
5. ✅ Run seo-content skill for content quality check
6. ✅ Copy emergency page structure exactly (lines 119-265, 267-342, 344-347)
7. ✅ Customize service names and descriptions
8. ✅ Validate schema has no syntax errors
9. ✅ Report changes clearly to user

---

## WORKFLOW QUICK REFERENCE

**For any service page optimization request:**

1. **Read** target page + emergency benchmark page
2. **Audit** backend schema (6 schemas? All fields in localBusinessSchema?)
3. **Audit** frontend content (situation boxes? FAQs? Word count?)
4. **Run** keyword-research skill
5. **Run** seo-content skill
6. **Prioritize** fixes (CRITICAL → HIGH → MEDIUM)
7. **Implement** CRITICAL schema fixes first (Edit tool, surgical changes)
8. **Implement** content fixes second (situation boxes, FAQs)
9. **Validate** all schemas present and correct
10. **Report** summary of changes and expected impact

**Total time per page:** 30-45 minutes
**Expected ranking improvement:** +30-50 positions within 6-8 weeks

---

## SESSION CONTINUITY

**If picking up mid-session:**
1. Check TodoWrite list for current status
2. Review what's been completed
3. Continue from next pending item
4. Maintain same prioritization (CRITICAL → HIGH → MEDIUM)

**If starting new session:**
1. Ask user which page to optimize
2. Start from Step 1.1 (Identify Target Page)
3. Follow workflow sequentially
4. Use uploaded skills as required

**If user asks "audit the furniture page":**
1. Run through PHASE 2 (Backend Schema Audit) completely
2. Run through PHASE 3 (Frontend Content Audit) completely
3. Run PHASE 4 (Skills) for validation
4. Report findings with prioritized fix list
5. Ask if they want fixes implemented or just the audit

---

## BENCHMARK PAGE REFERENCE

**Quick line number references for emergency-junk-removal-san-diego/page.tsx:**

- Lines 14-65: Metadata structure
- Lines 67-108: FAQ array (10 questions)
- Lines 111-117: serviceSchema
- Lines 119-265: neighborhoodSchema (10 neighborhoods)
- Lines 267-342: localBusinessSchema (COMPLETE - all required fields)
- Lines 344-347: howToSchema
- Lines 349-353: breadcrumbSchema
- Lines 355: faqSchema
- Lines 357-360: combinedSchema with @graph (6 schemas)
- Lines 362-367: relatedServices array
- Lines 374-378: OptimizedGradientHero
- Lines 391-437: Opening section with image + callout box
- Lines 441-471: Three feature cards
- Lines 474-601: "What We Handle" section
- Lines 604-671: Situation-based content boxes (6 colored boxes) ⚠️ CRITICAL
- Lines 674-724: Process section (5 numbered steps)
- Lines 727-794: "Why Choose Us" section
- Lines 797-818: Emergency availability section
- Lines 821-848: Service areas grid
- Lines 868-871: LocationPricingSection
- Lines 874: TrustSignalsSection
- Lines 877-884: FAQSection
- Lines 887-913: Final CTA section

**Use these line numbers to quickly reference the benchmark structure**

---

---

## 🎯 REMEMBER: SCHEMA > KEYWORDS

**What drives the emergency page rankings:**
- ✅ Complete 6-schema @graph (80% of ranking power)
- ✅ All required localBusinessSchema fields (paymentAccepted, knowsAbout, etc.)
- ✅ Situation-based content boxes (converts rankings to phone calls)
- ✅ Natural language (~0.3% keyword density)

**What DOESN'T drive rankings:**
- ❌ High keyword frequency (signals AI content = penalty)
- ❌ Keyword stuffing (over-optimization hurts rankings)
- ❌ Unnatural repetition (reduces conversion rates)

**The winning formula:**
1. Fix schema completeness (CRITICAL - do this first)
2. Add situation-based content (HIGH - drives calls)
3. Write naturally for humans (ALWAYS)
4. Let schema do the SEO heavy lifting

**User's mandate:** Never increase keyword frequency. Focus on schema and structure.

---

**Last Updated:** March 2026
**Benchmark Page:** emergency-junk-removal-san-diego/page.tsx (currently ranking, generating calls)
**Workflow Version:** 1.1 (Keyword Philosophy Added)
