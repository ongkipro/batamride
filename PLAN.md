# Master Multi-Page Architecture, Mobile UI/UX & Vercel Plan: BatamRide

**Target WhatsApp:** +62 812-7003-708  
**Framework:** Astro (Multi-Page Application), TypeScript, Tailwind CSS, Lucide Icons (`@lucide/astro`)  
**Deployment Platform:** Vercel (Static Output / Zero-Config Edge Delivery)  
**Color System:** Luxury Deep Navy (`#0B2348`), Muted Warm Gold (`#B88A3B`), Champagne (`#D2AD68`), Slate Neutrals (`#0F172A`, `#334155`, `#64748B`, `#F8FAFC`), Pure White (`#FFFFFF`)  

---

## 1. Mobile UI/UX Engineering & Behavioral Standards

### 1.1 Mobile Ergonomics & Viewport Rules
Based on tourist usage patterns (cross-border travelers using iPhone Safari & Android Chrome on 4G roaming):
1. **Touch Targets:**
   - Minimum 48px height on primary conversion elements.
   - Generous 12px-16px padding on text links and interactive filters.
2. **Thumb Zone Strategy:**
   - The single WhatsApp CTA button is placed in the lower ergonomic thumb zone at the end of each content flow.
   - Easy thumb-reach back buttons at the top-left of every detail page.
3. **Typography & Readability:**
   - Minimum 16px input font size to prevent iOS Safari auto-zooming.
   - High contrast ratios (WCAG AAA compliant text on `#0B2348` and `#FFFFFF` backgrounds).
   - Zero emojis anywhere in the layout or copy.

---

## 2. Clean Global Travel Design Standards (Zero AI Tropes)

### 2.1 Typography & Text Wordmark Logo
- **Header Logo:** Pure typographical wordmark without icons or logo boxes:
  ```html
  <a href="/" class="text-xl font-bold tracking-tight text-[#0B2348]">
    BATAM<span class="text-[#B88A3B]">RIDE</span>
  </a>
  ```
- **Font Stack:** Clean, human-crafted geometric sans-serif (Inter / Geist Sans / System UI).
- **Zero Emojis Policy:** No emojis anywhere in the user interface, headings, bullet points, tags, metadata, or WhatsApp message templates. All accents use Lucide SVG icons (`MapPin`, `Clock`, `Star`, `ShieldCheck`, `Car`, `ArrowRight`, `Check`).

### 2.2 Layout & Spacing
- Restrained, editorial luxury design with generous whitespace (`py-16` / `py-24`).
- Subtle 1px borders (`border-slate-200/80`) and soft, natural shadows (`shadow-xs` / `shadow-sm`).
- No tacky rainbow gradients, no badge spamming, and no conversion fatigue.

---

## 3. Vercel Deployment Configuration

### 3.1 Static Build Architecture
Astro's static output mode (`output: "static"`) generates pure HTML, CSS, and optimized media directly into `dist/`.
- In `astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

---

## 4. Multi-Page Structure & Route Matrix

1. `src/pages/index.astro` -> Home Page
2. `src/pages/services.astro` -> Services & Hourly Charters
3. `src/pages/tours/index.astro` -> Curated Tour Packages Directory
4. `src/pages/tours/[slug].astro` -> Tour Detail Pages (4 packages)
5. `src/pages/destinations/index.astro` -> Batam Tourist Attractions Directory
6. `src/pages/destinations/[slug].astro` -> Destination Detail Pages (7 attractions)
7. `src/pages/fleet.astro` -> Innova Zenix Specifications & Chauffeur Code
8. `src/pages/faq.astro` -> Travel Logistics FAQs
9. `src/pages/contact.astro` -> Reservation Hub & Trip Estimator

---

## 5. Strict UI/UX Invariants
1. **Zero Hash Anchors (`#`):** Every link navigates to a real page route.
2. **One WhatsApp Button Rule:** Exactly 1 primary WhatsApp conversion button per page.
3. **No Header Clutter:** Header contains only clean text navigation links and the text wordmark logo.
