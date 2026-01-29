# LOCATION PAGE HERO STYLING REFERENCE
## Standardized Hero Section Template - Based on Del Mar

---

## **VISUAL REFERENCE**

**Source:** https://severincleaners.com/junk-removal-del-mar

This document defines the **exact** hero section styling that ALL 25 location pages must use for consistency.

---

## **COMPLETE HTML STRUCTURE**

```tsx
{/* Hero Section */}
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        #1 [Location Name] Junk Removal Service
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        [Location Name] Junk Removal
      </h1>

      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        [Unique Positioning Point 1] • [Unique Positioning Point 2] • [Unique Positioning Point 3]
      </p>

      <p className="text-lg mb-8">
        ✓ [Feature 1] ✓ [Feature 2] ✓ [Feature 3]
      </p>
    </div>
  </div>
</section>
```

---

## **ELEMENT-BY-ELEMENT BREAKDOWN**

### **1. Section Container**
```tsx
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
```

**Specifications:**
- `relative` - Positioning context
- `bg-gradient-to-br` - Diagonal gradient (bottom-right direction)
- `from-blue-600` - Start color (medium-dark blue)
- `via-blue-700` - Middle color (darker blue)
- `to-blue-900` - End color (darkest blue)
- `text-white` - All text white by default
- `py-16` - Padding top/bottom 4rem on mobile
- `md:py-24` - Padding top/bottom 6rem on tablet+

**Color Values:**
- `blue-600`: #2563eb
- `blue-700`: #1d4ed8
- `blue-900`: #1e3a8a

---

### **2. Container Wrapper**
```tsx
<div className="container mx-auto px-4">
```

**Specifications:**
- `container` - Max-width responsive container
- `mx-auto` - Center horizontally
- `px-4` - Horizontal padding 1rem

---

### **3. Content Wrapper**
```tsx
<div className="max-w-4xl mx-auto text-center">
```

**Specifications:**
- `max-w-4xl` - Maximum width 56rem (896px)
- `mx-auto` - Center horizontally
- `text-center` - All text centered

---

### **4. Orange Badge**
```tsx
<div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
  #1 [Location Name] Junk Removal Service
</div>
```

**Specifications:**
- `inline-block` - Inline element that accepts padding
- `bg-orange-500` - Orange background (#f97316)
- `text-white` - White text
- `px-4` - Horizontal padding 1rem
- `py-2` - Vertical padding 0.5rem
- `rounded-full` - Fully rounded pill shape
- `text-sm` - Font size 0.875rem
- `font-semibold` - Font weight 600
- `mb-6` - Margin bottom 1.5rem

**Content Format:**
- Always starts with "#1 "
- Followed by location name
- Ends with " Junk Removal Service"
- Example: "#1 Del Mar Junk Removal Service"

---

### **5. H1 Title**
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  [Location Name] Junk Removal
</h1>
```

**Specifications:**
- `text-4xl` - Font size 2.25rem on mobile
- `md:text-5xl` - Font size 3rem on tablet
- `lg:text-6xl` - Font size 3.75rem on desktop
- `font-bold` - Font weight 700
- `mb-6` - Margin bottom 1.5rem
- `leading-tight` - Line height 1.25

**Content Format:**
- Location name + " Junk Removal"
- Example: "Del Mar Junk Removal"
- Title case for location names

---

### **6. Subtitle (Triple Positioning)**
```tsx
<p className="text-xl md:text-2xl mb-8 text-blue-100">
  [Position 1] • [Position 2] • [Position 3]
</p>
```

**Specifications:**
- `text-xl` - Font size 1.25rem on mobile
- `md:text-2xl` - Font size 1.5rem on tablet+
- `mb-8` - Margin bottom 2rem
- `text-blue-100` - Light blue text (#dbeafe)

**Content Format:**
- Three unique positioning points separated by bullet character (•)
- Each point should be unique to that location
- Examples:
  - Del Mar: "Del Mar Village • Del Mar Heights • Coastal Luxury Service"
  - La Jolla: "Luxury Estate Specialists • White-Glove Service • Discreet & Professional"
  - Carlsbad: "La Costa Estates • Coastal Beachfront • Premium Service Standards"

---

### **7. Feature Checkmarks**
```tsx
<p className="text-lg mb-8">
  ✓ [Feature 1] ✓ [Feature 2] ✓ [Feature 3]
</p>
```

**Specifications:**
- `text-lg` - Font size 1.125rem
- `mb-8` - Margin bottom 2rem
- Text color: White (inherited from section)

**Content Format:**
- Three features separated by checkmark (✓) symbols
- Space after each checkmark
- Examples:
  - "✓ Transparent Pricing ✓ Eco-Friendly Disposal ✓ Coastal Property Experts"
  - "✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists"

---

## **IMPORTANT NOTES**

### **DO NOT Use:**
- ❌ OptimizedGradientHero component
- ❌ CTA buttons in hero section
- ❌ Different gradient colors
- ❌ Different spacing values
- ❌ Different text sizes

### **DO Use:**
- ✅ Inline `<section>` element
- ✅ Exact gradient: `from-blue-600 via-blue-700 to-blue-900`
- ✅ Exact spacing: `py-16 md:py-24`
- ✅ Orange badge at top
- ✅ Three-point positioning in subtitle
- ✅ Three features with checkmarks

### **Customization Per Location:**
Only these elements should be customized:
1. **Badge text**: "#1 [Location Name] Junk Removal Service"
2. **H1**: "[Location Name] Junk Removal"
3. **Subtitle**: Three unique positioning points specific to location
4. **Features**: Three relevant features (can be generic or location-specific)

---

## **LOCATION-SPECIFIC EXAMPLES**

### **Del Mar** (Reference Standard)
```tsx
Badge: "#1 Del Mar Junk Removal Service"
H1: "Del Mar Junk Removal"
Subtitle: "Del Mar Village • Del Mar Heights • Coastal Luxury Service"
Features: "✓ Transparent Pricing ✓ Eco-Friendly Disposal ✓ Coastal Property Experts"
```

### **La Jolla**
```tsx
Badge: "#1 La Jolla Junk Removal Service"
H1: "La Jolla Junk Removal"
Subtitle: "Luxury Estate Specialists • White-Glove Service • Discreet & Professional"
Features: "✓ Exclusive Communities ✓ Bird Rock to UTC ✓ Licensed & Insured"
```

### **Carlsbad**
```tsx
Badge: "#1 Carlsbad Junk Removal Service"
H1: "Carlsbad Junk Removal"
Subtitle: "La Costa Estates • Coastal Beachfront • Premium Service Standards"
Features: "✓ Luxury Property Experts ✓ Licensed & Insured ✓ Serving All of Carlsbad CA"
```

### **Santee**
```tsx
Badge: "#1 Santee Junk Removal Service"
H1: "Santee Junk Removal"
Subtitle: "Santee Lakes RV Specialists • Trolley Square Experts • Family Garages"
Features: "✓ Recreation Equipment ✓ Same-Day Service ✓ Licensed & Insured"
```

### **Vista**
```tsx
Badge: "#1 Vista Junk Removal Service"
H1: "Vista Junk Removal"
Subtitle: "Craft Brewery District • Business Park Industrial • Shadowridge Golf"
Features: "✓ Commercial Specialists ✓ Same-Day Service ✓ Licensed & Insured"
```

---

## **RESPONSIVE BEHAVIOR**

### **Mobile (< 768px)**
- Badge: `text-sm`, full width on small screens
- H1: `text-4xl` (2.25rem)
- Subtitle: `text-xl` (1.25rem)
- Features: `text-lg` (1.125rem)
- Section padding: `py-16` (4rem)

### **Tablet (768px - 1024px)**
- H1: `text-5xl` (3rem)
- Subtitle: `text-2xl` (1.5rem)
- Section padding: `py-24` (6rem)

### **Desktop (> 1024px)**
- H1: `text-6xl` (3.75rem)
- All other elements remain at tablet size

---

## **QUALITY CHECKLIST**

Before committing any location page, verify:

- [ ] Uses inline `<section>` (NOT OptimizedGradientHero)
- [ ] Gradient is exactly `bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900`
- [ ] Has orange badge with "#1 [Location] Junk Removal Service"
- [ ] H1 is "[Location] Junk Removal"
- [ ] Subtitle has three positioning points separated by •
- [ ] Features line has three items with ✓ checkmarks
- [ ] All class names match exactly
- [ ] Spacing values match exactly
- [ ] Text colors match (badge white, subtitle blue-100, features white)
- [ ] No CTA buttons in hero section

---

## **IMPLEMENTATION PRIORITY**

**ALL 25 location pages must be updated:**

1. Carlsbad
2. Carmel Valley
3. Chula Vista
4. Clairemont
5. Del Mar ✓ (Already correct - reference standard)
6. El Cajon
7. Escondido
8. Hillcrest
9. Kearny Mesa
10. La Jolla
11. La Mesa
12. Lakeside
13. Lemon Grove
14. Mira Mesa
15. North Park
16. Oceanside
17. Pacific Beach
18. Point Loma
19. Poway
20. Rancho Santa Fe
21. San Marcos
22. Santee
23. Spring Valley
24. Vista
25. Cost San Diego

---

## **VISUAL APPEARANCE**

When rendered, the hero should have:
- **Dark blue gradient background** flowing diagonally from top-left to bottom-right
- **Orange pill badge** at the very top, centered
- **Large white heading** below badge
- **Light blue subtitle** with bullet separators
- **White features** line with checkmarks
- **Generous white space** around all elements
- **Professional, clean, modern** appearance
- **100% identical** across all location pages

---

This is the definitive styling reference. Any deviation from this structure creates inconsistency and must be corrected.
