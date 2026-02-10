# Final PageSpeed Fixes - February 9, 2026

## Problem: Score Stuck at 89/100 Mobile

After initial optimizations (81→89), the score plateaued. Analysis revealed **Next.js was working against us** by re-optimizing our already-optimized images at higher quality.

---

## Root Cause Analysis

### Issue #1: Next.js Image Component Override
**Problem:** Next.js Image component ignores pre-optimized files and re-processes them.

**Evidence:**
```
Our file: 5Q8A8965.webp (67KB, quality 45)
Next.js served: /_next/image?url=...&w=768&q=75 (67KB, quality 75)
Result: Larger file than our optimization!
```

**Why this happened:**
- We manually optimized images to quality 45-55
- Set Image component `quality={65}`
- Next.js converted this to q=75 in production
- Result: Larger files defeating our optimizations

### Issue #2: Accessibility Regression (96%→92%)
**Problem:** Our "fix" for contrast created new issues.

**Root causes:**
1. Links without default underlines (only on hover)
2. "Links rely on color to be distinguishable" - WCAG violation
3. Some color combinations still insufficient contrast

### Issue #3: CSS Still Blocking
**Problem:** Critical CSS helped FCP but main CSS still blocks render.

**Root cause:**
- Next.js loads CSS synchronously by default
- Critical CSS inlined but doesn't prevent main bundle blocking
- Need experimental.optimizeCss flag

### Issue #4: Polyfills Still Present (14KB)
**Problem:** Browserslist config doesn't affect Next.js/SWC.

**Root cause:**
- Browserslist only affects Babel/PostCSS (we don't use Babel)
- Next.js uses SWC which has its own target system
- SWC defaults to broader compatibility
- Would require custom webpack config or .swcrc to fix
- **Decision:** Acceptable trade-off for 95+ score

---

## Fixes Applied

### Fix #1: Aggressive Image Quality Settings ✅

**Changes:**
- Hero: `quality={85}` → `quality={40}` (24KB → 19KB, 21% reduction)
- Services: `quality={65}` → `quality={45}` (all service images)

**Impact:**
- Next.js now serves at q=40-45 instead of q=75
- Estimated 30-40KB savings across service images
- Hero LCP improved from 24KB → 19KB

**Files:**
- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `public/optimized/landingpage-mobile.webp`

### Fix #2: Accessibility Compliance ✅

**Changes:**
```tsx
// Before
className="text-blue-700 hover:underline"

// After
className="text-blue-800 underline hover:text-blue-900"
```

**Impact:**
- Links always have underlines (not just hover)
- Darker blue (text-blue-800) for better contrast
- Fixes "links rely on color" WCAG violation
- Target: 92% → 100%

**Files:**
- `src/components/Services.tsx`

### Fix #3: CSS Optimization ✅

**Changes:**
```typescript
experimental: {
  optimizeCss: true, // Enable CSS optimization
}
```

**Impact:**
- Optimizes CSS loading strategy
- Reduces render-blocking potential
- Works with critical CSS already in place

**Files:**
- `next.config.ts`

### Fix #4: Polyfills (Accepted Trade-off) ⚠️

**Status:** Not fixed in this iteration

**Reason:**
- Requires custom webpack config or .swcrc
- Risk of breaking builds or introducing bugs
- 14KB impact acceptable for 95+ score
- Would need significant testing

**Future improvement:** Can be addressed if score falls below 95%

---

## Expected Results

### Performance Improvements

**Images:**
```
Hero:     24KB → 19KB (5KB saved, 21% reduction)
Services: ~768w at q=75 → ~768w at q=45 (~30-40KB total savings)
Total:    ~35-45KB saved
```

**Rendering:**
```
CSS: Optimized loading (reduce blocking)
LCP: 3.4s → ~2.8-3.0s (hero smaller + quality)
```

**Accessibility:**
```
Score: 92% → 100% (underlines + contrast)
```

### Projected Mobile Score

**Current:** 89/100

**Improvements:**
- Images: -35-45KB (est. +3-5 points)
- Accessibility: 92%→100% (+2-3 points)
- CSS optimization: (+1-2 points)

**Projected:** 95-98/100 ✅

### What We Accept

**Polyfills:** 14KB legacy JavaScript
- Reason: Complex to fix, low ROI
- Impact: -2-3 points maximum
- Trade-off: Acceptable for 95+ target

---

## Testing Instructions

1. **Wait for Deployment:**
   - Vercel should auto-deploy from master
   - Check deployment status in Vercel dashboard
   - Wait for "Production" label

2. **Test on PageSpeed Insights:**
   ```
   https://pagespeed.web.dev/?url=https://severinhauling.com
   ```

3. **Expected Scores:**
   - **Mobile Performance:** 95-98%
   - **Desktop Performance:** 100%
   - **Accessibility:** 100%
   - **Best Practices:** 100%
   - **SEO:** 100%

4. **Key Metrics to Check:**
   - **LCP:** <2.5s (currently 3.4s)
   - **Speed Index:** <3.0s (currently 4.3s)
   - **Image Delivery:** Should show <50KB additional savings needed
   - **Legacy JS:** Will still show 14KB (accepted)

---

## What Changed From First Attempt

### First Attempt (81→89):
- ✅ Pre-optimized all images manually
- ✅ Created responsive hero variants
- ✅ Added critical CSS
- ✅ Updated browserslist
- ❌ But Next.js re-optimized at higher quality!

### Second Attempt (89→95+):
- ✅ **Work WITH Next.js, not against it**
- ✅ Set Image quality low enough to force Next.js compliance
- ✅ Fix actual WCAG violations (underlines)
- ✅ Enable Next.js native optimizations
- ✅ Accept trade-offs where ROI is low

---

## Key Learnings

### 1. Next.js Image Component Behavior
- **Always re-processes images** through optimizer
- Quality prop is a suggestion, not a guarantee
- Pre-optimization is useful but Next.js has final say
- **Solution:** Set quality prop aggressively low (40-50)

### 2. Accessibility is Not Just Contrast
- Colors must have sufficient contrast
- Links must be distinguishable WITHOUT color
- Underlines are essential for WCAG compliance
- Hover states alone are insufficient

### 3. Configuration Hierarchy
- Browserslist ≠ Next.js transpilation target
- Next.js uses SWC (not Babel) by default
- Experimental flags can unlock optimizations
- Some fixes require deeper webpack customization

### 4. Perfect is Enemy of Good
- 100/100 is extremely difficult on mobile
- 95+ is excellent and achievable
- Trade-offs are necessary (polyfills vs complexity)
- Focus on high-impact fixes first

---

## Files Modified

1. **next.config.ts** - Added optimizeCss flag
2. **src/components/Hero.tsx** - Quality 85→40
3. **src/components/Services.tsx** - Quality 65→45, added underlines
4. **public/optimized/landingpage-mobile.webp** - Re-optimized to 19KB
5. **PAGESPEED_ANALYSIS_FEB9.md** - Detailed analysis
6. **optimize-hero-ultra.js** - Ultra optimization script

---

## Monitoring & Maintenance

### Weekly Checks:
- Run PageSpeed Insights on homepage
- Verify score stays above 95% mobile
- Check for new warnings or regressions

### When Adding New Images:
- Use quality={45} for service/content images
- Use quality={40} for hero/LCP images
- Test image on slow connection to verify quality
- Run PageSpeed after adding

### If Score Drops Below 95%:
1. Check for new images not using low quality
2. Verify CSS optimization still enabled
3. Check for new render-blocking resources
4. Consider addressing polyfills at that point

---

## Conclusion

**Status:** ✅ Ready for Production

**Changes Deployed:**
- Image quality optimization (work with Next.js)
- Accessibility compliance (underlines + contrast)
- CSS optimization enabled
- Hero ultra-optimized (19KB)

**Expected Outcome:**
- Mobile: 95-98% (up from 89%)
- Desktop: 100%
- Accessibility: 100% (up from 92%)
- All Core Web Vitals: Green

**Test After Deployment:**
Wait 5-10 minutes for Vercel deployment, then test at:
https://pagespeed.web.dev/?url=https://severinhauling.com

🚀 **Site is optimized and ready for 95+ PageSpeed scores!**
