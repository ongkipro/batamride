# Master Execution Tasks & Verification Matrix: BatamRide

**Project:** BatamRide (Premium Private Transport & Curated Tours)  
**Target WhatsApp:** +62 812-7003-708  
**Architecture:** Astro Multi-Page Application (MPA), TypeScript, Tailwind CSS, Lucide Icons (`@lucide/astro`)  
**Deployment Platform:** Vercel (Static Output / Edge Compatible)  
**Strict Design Invariants:** Zero Emojis, Zero Hash Anchors (`#`), Exactly 1 WhatsApp CTA Button Per Page, Text-Only Wordmark Logo, Clean Global Travel Modern Aesthetic  

---

## Phase 1: Repository Scaffold, Design Tokens & Media Assets
- [x] **Task 1.1: Project Bootstrap via project-init**
  - Executed `project-init batamride --stack astro --from-docs /Users/ongki/Documents/work/prd/batamride --package-manager pnpm`.
  - Promoted `PRD.md`, `PLAN.md`, and `TASKS.md` to repository root.
  - Initialized `.delivery/` ledger and delivery contract documents.

- [x] **Task 1.2: Media Asset Staging & Standardization**
  - Staged all 10 verified high-resolution images to `public/images/`:
    - `public/images/hero-zenix.jpg`
    - `public/images/zenix-interior.jpg`
    - `public/images/driver-uniform.jpg`
    - `public/images/barelang-sunset.jpg`
    - `public/images/grand-batam-mall.jpg`
    - `public/images/indonesian-spa.jpg`
    - `public/images/kelong-seafood.jpg`
    - `public/images/maitreya-temple.jpg`
    - `public/images/montigo-resort.jpg`
    - `public/images/ranoh-island.jpg`

- [x] **Task 1.3: Styling System & Design Tokens**
  - Configured Tailwind CSS v4 via `@tailwindcss/vite` in `astro.config.mjs`.
  - Defined custom design tokens in `src/styles/global.css` (Navy `#0B2348`, Gold `#B88A3B`, Champagne `#D2AD68`, Slate neutrals).
  - Integrated `@lucide/astro` for crisp vector SVG iconography.

- [x] **Task 1.4: Vercel Static Deployment Configuration**
  - Configured `output: 'static'` in `astro.config.mjs`.

## Phase 2: Data Collections, Structured Schema & Utilities (Zero Emojis)
- [x] **Task 2.1: Destinations Dataset (`src/data/destinations.ts`)**
  - Type-safe dataset for 7 Batam attractions with descriptions, ratings, tags, highlights, duration, and traveler type (zero emojis).

- [x] **Task 2.2: Tour Packages & Charter Rates Dataset (`src/data/packages.ts`)**
  - Type-safe dataset for 4 curated day tours + hourly charter rates in SGD, MYR, IDR (zero emojis).

- [x] **Task 2.3: Ferry Terminals Dataset (`src/data/terminals.ts`)**
  - Type-safe dataset for 5 arrival points (Batam Centre, Harbour Bay, Sekupang, Nongsapura, Hang Nadim Airport).

- [x] **Task 2.4: Logistics FAQs Dataset (`src/data/faqs.ts`)**
  - 6 comprehensive Q&A items covering driver meet & greet, delays, payments, luggage, and itinerary customization (zero emojis).

- [x] **Task 2.5: WhatsApp Dynamic URI Generator (`src/utils/whatsapp.ts`)**
  - Plain-text dynamic link generator targeting `+62 812-7003-708` (zero emojis).

## Phase 3: Global Shell & Shared Layout Components
- [x] **Task 3.1: Global HTML Shell (`src/layouts/Layout.astro`)**
  - Semantic HTML structure with SEO meta tags, canonical URL, OpenGraph tags, and Schema.org `LocalBusiness` JSON-LD.

- [x] **Task 3.2: Clean Minimalist Header (`src/components/Header.astro`)**
  - Text-only wordmark logo (`BATAMRIDE - Private Transport & Tours`), navigation links (`Home`, `Services`, `Tours`, `Attractions`, `Fleet & Driver`, `FAQ`, `Contact`), zero buttons in header.

- [x] **Task 3.3: Reusable Page Hero Header (`src/components/PageHeader.astro`)**
  - Reusable dark navy header for sub-pages with breadcrumbs, title, and badge.

- [x] **Task 3.4: Reusable Bottom Conversion Banner (`src/components/WhatsAppCtaBanner.astro`)**
  - Single prominent WhatsApp conversion section for page bottoms.

- [x] **Task 3.5: Comprehensive Footer (`src/components/Footer.astro`)**
  - Multi-page directory navigation, terminal list, and payment badges.

## Phase 4: Multi-Page Route Implementation (Page by Page)
- [x] **Task 4.1: Home Page (`src/pages/index.astro`)**
- [x] **Task 4.2: Services & Charters Page (`src/pages/services.astro`)**
- [x] **Task 4.3: Curated Tour Packages Directory (`src/pages/tours/index.astro`)**
- [x] **Task 4.4: Dedicated Tour Detail Pages (`src/pages/tours/[slug].astro`)**
- [x] **Task 4.5: Batam Attractions Directory (`src/pages/destinations/index.astro`)**
- [x] **Task 4.6: Dedicated Destination Detail Pages (`src/pages/destinations/[slug].astro`)**
- [x] **Task 4.7: Fleet & Driver Standards Page (`src/pages/fleet.astro`)**
- [x] **Task 4.8: Travel Logistics FAQ Page (`src/pages/faq.astro`)**
- [x] **Task 4.9: Reservation Hub & Estimator Page (`src/pages/contact.astro`)**

## Phase 5: Design Invariants & Strict Constraints Audit
- [x] **Task 5.1: Zero Emoji Audit:** Verified 0 emojis across all source files.
- [x] **Task 5.2: Zero Hash Anchor Audit:** Verified 0 hash links across all templates.
- [x] **Task 5.3: Single WhatsApp CTA Audit:** Verified exactly 1 WhatsApp CTA button per static page.
- [x] **Task 5.4: Text-Only Wordmark Logo Audit:** Verified clean typographical logo without icon box in header.

## Phase 6: Responsive Viewport Screening & Performance Verification
- [x] **Task 6.1: Responsive Viewport Screening:** Tested layouts across mobile (320px–430px), tablet (768px–1024px), and desktop (1280px+).
- [x] **Task 6.2: Static Production Build Verification:** Generated all 18 static HTML pages in 1.33 seconds with 0 errors.
- [x] **Task 6.3: Schema.org Validation:** Validated 21 Schema.org JSON-LD blocks across all pages.
- [x] **Task 6.4: Full Delivery Contract Audit:** `project-check --full` verified successfully.
