# PageSpeed Analysis - February 9, 2026 6:00 PM

## Current Score: 89/100 Mobile (Target: 95-100)

### Improvement from Previous: 81 → 89 (+8 points) ✅
But still not at target. Here's what's wrong:

---

## Critical Issue #1: Next.js Image Optimization Conflict 🔴

### Problem
Next.js Image component is **RE-OPTIMIZING** our already-optimized images at `q=75`, creating LARGER files than our manual optimizations.

### Evidence from PageSpeed:
```
/_next/image?url=%2Foptimized%2F5Q8A8965.webp&w=768&q=75
- Actual size: 66.9 KiB
- Our optimized file: 67KB (quality 45)
- Next.js is serving at q=75 instead of using our file!
```

### Root Cause
When using `<Image src="/optimized/image.webp" quality={65} />`:
- Next.js ignores our pre-optimized file
- Runs it through its own optimizer at quality=65-75
- Creates larger files than our aggressive optimization (quality 45-55)

### Solution Options
1. **Option A (Recommended):** Set `quality={50}` on all Image components
2. **Option B:** Use `unoptimized={true}` to serve our files directly
3. **Option C:** Use plain `<img>` tags (loses lazy loading benefits)

---

## Critical Issue #2: Wrong Image Dimensions 🔴

### Problem
Service card images are served at wrong aspect ratio:
- **Displayed:** 380px × 570px (portrait)
- **Served:** 750px × 379px (landscape)
- **Result:** Image stretched, extra bytes wasted

### Evidence from PageSpeed:
```
Hoarding Cleanup: needs 15.9 KiB savings from proper dimensions
Appliance: needs 14.8 KiB savings from proper dimensions
```

### Root Cause
Service cards are portrait (taller than wide) but images are landscape.
Next.js is scaling incorrectly.

### Solution
Create properly sized images at 400x600 (portrait) for service cards

---

## Critical Issue #3: CSS Still Render-Blocking 🔴

### Problem
Main CSS bundle still blocking despite critical CSS:
```
chunks/bea7f983bc57255b.css
- Size: 9.2 KiB
- Blocking: 150 ms
- Impact: 300ms total delay
```

### Root Cause
Critical CSS in `<head>` helps but doesn't make main CSS async.
Next.js loads CSS synchronously by default.

### Solution
Need to defer main CSS loading using:
1. Media query trick: `<link media="print" onload="this.media='all'">`
2. Or Next.js Script component with afterInteractive
3. Or custom _document.tsx to control CSS loading

---

## Critical Issue #4: Polyfills Still Present 🔴

### Problem
```
Legacy JavaScript: 13.8 KiB polyfills still present
- Array.prototype.at
- Array.prototype.flat
- Array.prototype.flatMap
- Object.fromEntries
- Object.hasOwn
- String.prototype.trimEnd
- String.prototype.trimStart
```

### Root Cause
Browserslist in package.json doesn't affect Next.js/SWC transpilation.
Next.js uses its own target configuration.

### Solution
Add to next.config.ts:
```typescript
swcMinify: true, // Already using SWC
compiler: {
  target: 'es2020', // Or higher
}
```

---

## Critical Issue #5: Accessibility Regression 🔴

### Problem
Accessibility DROPPED from 96% → 92% ❌

New issues:
- "Background and foreground colors do not have a sufficient contrast ratio"
- "Links rely on color to be distinguishable"

### Root Cause
Likely from our contrast "fixes":
- Changed text-blue-600 to text-blue-800
- May have created NEW contrast issues elsewhere

### Solution
Need to audit:
1. Check Services.tsx paragraph links
2. Check Footer links
3. Check any new color combinations introduced

---

## Critical Issue #6: Hero Image Needs More Compression 🔴

### Problem
```
landingpage-mobile.webp: 24.1 KiB
Needs: 9.2 KiB more savings
Target: ~15 KiB
```

### Solution
Re-optimize hero at quality 40-45 instead of 55

---

## Implementation Plan

### Phase 1: Fix Next.js Image Optimization (HIGHEST PRIORITY)
1. Set all service images to `quality={50}` or lower
2. Re-optimize hero to quality 40
3. This alone should save ~40-50KB

### Phase 2: Fix CSS Blocking
1. Make main CSS async load
2. Keep critical CSS inline
3. Should save 300ms

### Phase 3: Remove Polyfills
1. Add proper Next.js compiler config
2. Should save 14KB

### Phase 4: Fix Image Dimensions
1. Create portrait versions of service images (400x600)
2. Update Services.tsx to use correct images
3. Should save ~30KB

### Phase 5: Fix Accessibility
1. Audit all color combinations
2. Ensure WCAG AA contrast (4.5:1 minimum)
3. Should restore 100% accessibility

---

## Expected Results After Fixes

### Performance Gains:
- Images: -60KB (from quality + dimensions)
- CSS: -300ms (async loading)
- JS: -14KB (polyfills)
- Total: ~74KB + 300ms

### Projected Score:
- Mobile Performance: 95-98%
- Desktop Performance: 100%
- Accessibility: 100%
- LCP: ~2.5s (from 3.4s)
- Speed Index: ~3.5s (from 4.3s)

---

## Why Original Optimizations Didn't Work

1. **Next.js Override:** Next.js re-processes images regardless of pre-optimization
2. **Quality Settings:** We optimized to q=45-55, but Next.js serves at q=75
3. **Browserslist:** Only affects Babel/PostCSS, not Next.js/SWC
4. **CSS Loading:** Next.js loads CSS synchronously by default
5. **Image Dimensions:** Service cards need portrait images, not landscape

The fix requires **working WITH Next.js** rather than against it.
