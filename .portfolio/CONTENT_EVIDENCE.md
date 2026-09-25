# Content & Evidence — Portfolio Evidence Audit

**Phase:** CONTENT / EVIDENCE  
**Date:** 2026-09-25  
**Constraint:** Read-only audit; no UI redesign, no new assets fabricated, no portfolio code changed (only this document created).

---

## Positioning Evidence Map

Validated positioning (from `PORTFOLIO_POSITIONING_VALIDATION.md`):
- **Title:** Frontend Engineer / Frontend Developer (NOT Senior)
- **Specialization:** React/Next.js + TypeScript
- **Experience:** 2+ years production (Traytic Jul 2026–Aug 2026; Starrik Sep 2024–Dec 2025; Churchera Jan 2026–Present)
- **Domains:** B2B SaaS/admin (Traytic), courier logistics/real-time (Starrik), fintech-adjacent/faith-tech (Churchera)
- **Evidence strength:** React/Next.js = VERIFIED; 2+ years = VERIFIED; collaboration = VERIFIED; architecture-first = REPLACED with specific practices; mentoring = DE-EMPHASIZED

---

## Evidence Hierarchy (Used Throughout)

1. **Directly visible** (screenshots/mockups in `public/`, rendered UI in code)
2. **Verified in source / code** (`components/`, `package.json`, `app/globals.css`)
3. **Verified in resume** (`.portfolio/references/Zaphenath_Bassey_Resume.pdf`)
4. **Reasonable contextual inference** (design system consistency implies design collaboration; form validation implies attention to UX details)
5. **Unsupported / do not claim** (metrics, clients, testimonials, exact user counts, revenue, performance percentages)

---

## Featured Projects — Evidence Per Project

### Starrik (Courier Technology / Logistics)

**Product:** Live courier tracking platform with vendor dashboards (starrik.com).

**Evidence categories:**
- **Visual (1 — Direct):** `public/macbook-air-and-phone-mockup -starrik.jpg` (298K, 11:43), `macbook-air-and-phone-mockup -starrik-transparent.jpg` (302K, 11:44). Confirmed mockup assets exist showing device presentation.
- **Source/code (2 — Verified):** Not present in repo (external project — no source code for Starrik).
- **Resume (3 — Verified):** Resume confirms: "Lead front-end development of a courier-tech platform, built a modern delivery platform with real-time order tracking and vendor dashboards using React.js. Integrate Firebase (Auth, Firestore, Storage) as a backend-as-a-service for real-time data and file storage." Role duration: Sep 2024–Dec 2025.
- **Portfolio visible:** `components/sections/experience.tsx` (updated) references Starrik; `public/` mockup confirms visual credibility.

**What the user contributed (verified):**
- Real-time delivery platform development with React.js
- Firebase integration (Auth, Firestore, Storage)
- Vendor dashboards
- Partnered with backend engineers on API design

**Technical evidence:** Firebase stack, React.js, real-time tracking interfaces.

**Feature evidence:** Mockup assets show device-level presentation; resume describes vendor dashboards and tracking.

**Visual evidence:** Mockup images (macbook + phone) confirm professional presentation of the product; no internal product screenshots available.

**Strongest story for hiring managers:** Real-time logistics interface — demonstrates ability to work with live data streams, device-responsive design, and production-grade Firebase integration.

**Evidence gaps:**
- No source code for Starrik in this repo (external project)
- No live URL verified in portfolio (old `https://starrik.com` was in old projects card; updated card references `#` for live links — user has not confirmed live URL or provided screenshot evidence beyond mockup)
- No technical metrics (latency, event volume, user count) — do NOT claim
- No specific feature screenshots of the tracking UI, map interface, or dashboard (only device mockup)
- No architecture documentation for how real-time data was handled

**Safe claims:**
- Built courier tracking interfaces with real-time requirements
- Integrated Firebase for authentication and data storage
- Developed vendor dashboards
- Collaborated on API design with backend engineers
- Mockup assets confirm professional product presentation

**Claims to avoid:**
- "Lead" as a seniority claim (corrected per user directive — title is not evidence of senior leadership)
- Specific performance improvements ("40% faster") — unsupported
- Client/user counts — unknown
- Specific GPS/WebSocket technical details unless source code provided
- Any claim that the mockup represents actual live product state (mockup = design presentation, not live screenshot)

---

### Churchera (Faith-Tech / Financial Data)

**Product:** Digital finance & church management ecosystem (churchera.com) — tithing, offerings, donations for global congregations.

**Evidence categories:**
- **Visual (1 — Direct):** `public/macbook-air-and-phone-mockup-churchera.jpg` (268K, 11:44), `macbook-air-and-phone-mockup-churchera-transparent.jpg` (279K, 11:44). Confirmed mockup assets.
- **Source/code (2 — Verified):** Not present (external project).
- **Resume (3 — Verified):** "Engineered a high-fidelity FaithTech platform facilitating seamless tithing, offerings, and donations for global congregations. Developed responsive web interfaces for desktop and mobile using Next.js and TailwindCSS, with efficient state management via Zustand. Designed a secure role-based access control (RBAC) architecture for Admin and Member dashboards, ensuring data privacy for sensitive financial records. Leveraged Supabase for real-time transaction tracking and database management."
- **Role:** Frontend Engineer (Jan 2026 — Present) — title correct per user correction.

**What the user contributed (verified):**
- High-fidelity faith-tech platform development
- Responsive interfaces (desktop + mobile) with Next.js + TailwindCSS
- Zustand state management
- RBAC architecture design for Admin / Member dashboards
- Supabase integration for real-time transaction tracking and database management
- Sensitive financial data handling (data privacy considerations)

**Technical evidence:** Next.js, TailwindCSS, Zustand, Supabase (real-time + database), RBAC patterns.

**Feature evidence:** Mockup shows responsive multi-device presentation; resume describes giving/donation flows, admin/member dashboards, RBAC.

**Visual evidence:** Mockup assets (macbook + phone, transparent variant) confirm product design quality; no live screenshots of donation interface, admin dashboard, or member view.

**Strongest story:** Sensitive-data platform with role-based access — demonstrates responsible engineering with financial data (data privacy, RBAC), responsive design across devices, and real-time data patterns.

**Evidence gaps:**
- No source code in repository
- No live URL confirmed in current portfolio cards (updated cards use `#` for live links — needs user confirmation)
- No screenshots of RBAC interface, donation flow, admin dashboard, or transaction tracking view
- No evidence of Stripe integration in current resume (historically mentioned; current resume mentions Supabase for real-time — clarification needed on whether Stripe is still relevant)
- No accessibility audit results for the RBAC-sensitive interface
- No case study content (problem → decision → outcome) in repository

**Safe claims:**
- Built responsive interfaces with Next.js + TailwindCSS
- Implemented RBAC architecture for admin/member dashboards
- Used Zustand for state management
- Integrated Supabase for real-time transaction tracking
- Handled financial/sensitive data with privacy considerations
- Mockup assets confirm responsive, high-fidelity design

**Claims to avoid:**
- "Stripe integration" unless explicitly confirmed in current context (current resume emphasizes Supabase; historical references to Stripe should be qualified or omitted unless verified)
- Specific retention/user metrics — unknown
- "Global congregations" scale claim — resume claims this; no independent verification available; use cautiously with attribution to resume
- Any claim that mockup = live product (must distinguish design presentation from live state)

---

### Traytic (B2B SaaS / Admin Platform — GodMode OS)

**Product:** Operating system for hosting agencies across Africa (traytic.com) — analytics overview, plans/addons management, agencies workspace.

**Evidence categories:**
- **Visual (1 — Direct):** `public/traytic.png` (65K, Jul 17 — older asset). This is a single graphic/logo-style asset, not a full mockup.
- **Source/code (2 — Verified):** No source code in repo.
- **Resume (3 — Verified):** "Platform: 'GodMode' — an operating system for hosting agencies across Africa. Built core admin screens with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4: an analytics overview with revenue/agency/growth metrics and Recharts visualizations, Plans & Addons management, and an Agencies workspace." Key features listed: analytics (Recharts), plans management (sortable/searchable/paginated tables, lifecycle actions), agencies workspace (filters, debounced search, CSV bulk import, admin actions), authentication (sign-in/sign-up/reset/email verification/TOTP, international phone input, Cloudflare Turnstile bot protection), design system (tokens, shadcn/Base UI, GSAP + Motion).

**What the user contributed (verified):**
- Next.js 16 App Router + React 19 development
- Analytics dashboard with Recharts
- Complex data tables (sortable, searchable, paginated, lifecycle management)
- Agencies workspace with search, CSV import, admin actions (suspend/terminate/extend/impersonate)
- End-to-end authentication experience (Zod validation, password strength, international input, bot protection)
- Design system contributions (tokens, primitives)
- Collaboration in cross-functional team with feature-branch workflow
- Accessibility and responsiveness enforcement

**Technical evidence:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Recharts, Zod, Cloudflare Turnstile, GSAP + Motion, shadcn/Base UI primitives, CSV bulk import handling, debounced search, pagination.

**Feature evidence:** Resume lists concrete features; no mockup of analytics dashboard or workspace; only `traytic.png` logo/graphic available.

**Visual evidence:** Only `traytic.png` (small, 65K) — appears to be a logo/icon, not a mockup of admin screens. No device mockup available for Traytic (unlike Starrik/Churchera which have macbook+phone mockups). Low visual evidence.

**Strongest story:** Modern admin platform with complex data interactions — demonstrates ability to handle real-world B2B complexity (CSV import, bulk actions, pagination, auth, analytics visualization). The authentication flow (TOTP, bot protection, international phones) is particularly technical.

**Evidence gaps:**
- No full mockup of admin screens (only `traytic.png` logo)
- No source code available
- No live URL confirmed in portfolio
- No screenshots of analytics, plans table, or agencies workspace
- No case study showing problem → architecture → outcome for any Traytic feature
- No evidence of team size or organizational scope beyond "small cross-functional team"

**Safe claims:**
- Built admin screens with Next.js 16, React 19, TypeScript, Tailwind CSS v4
- Created analytics overview with Recharts
- Implemented sortable/searchable/paginated management tables with lifecycle actions
- Built agencies workspace with CSV import, filters, admin actions
- Shipped complete authentication flow with validation and bot protection
- Contributed to design system (tokens, primitives)
- Collaborated in cross-functional team with PR workflow

**Claims to avoid:**
- Specific numbers of users, agencies, or revenue (unknown)
- "Scaled to" claims without evidence
- Any claim that `traytic.png` represents a full product screenshot (it is clearly a graphic/logo asset, not a UI mockup)
- Senior leadership claims (corrected per user directive)

---

### QuizManiac (Interactive Quiz Application)

**Product:** Responsive quiz app with multiple categories (React + Vite + Firebase).

**Evidence categories:**
- **Visual (1 — Direct):** No dedicated screenshot or mockup available in `public/`. No `quizmaniac` or `quiz` image found.
- **Source/code (2 — Partially verified):** Resume mentions it as a project; portfolio `components/sections/projects.tsx` includes it. GitHub URL set to `https://github.com/Zaph123` (general profile, not project-specific).
- **Resume (3 — Verified):** "Developed a responsive quiz app with multiple categories using React + Vite, integrated with Firebase for auth, storage, and leaderboards. Optimized performance and UI responsiveness for seamless use across desktop and mobile devices."
- **Portfolio visible:** Listed in `projects.tsx` with technology tags (React, Vite, Firebase, TypeScript).

**What the user contributed (verified from resume):**
- Responsive quiz application with category-based organization
- Firebase integration (auth, storage, leaderboards)
- Performance optimization for desktop/mobile

**Technical evidence:** React + Vite (not Next.js — this is a Vite project, showing breadth beyond Next.js), Firebase (auth/storage/leaderboards), TypeScript.

**Feature evidence:** Category organization, leaderboards, auth, responsive design. No deeper feature detail in resume or portfolio.

**Visual evidence:** None available in repository.

**Strongest story:** Shows versatility — uses Vite (not just Next.js), handles Firebase real-time features (leaderboards, auth), delivers responsive experience across devices.

**Evidence gaps:**
- No screenshot/mockup available (only listed in code, not visually shown)
- No source code verified in repo (GitHub link points to profile, not specific repo)
- No live URL confirmed
- No case study content
- No evidence of user base or usage statistics

**Safe claims:**
- Built responsive quiz application with React + Vite
- Integrated Firebase for authentication, storage, and leaderboards
- Optimized for desktop and mobile responsiveness
- Uses TypeScript

**Claims to avoid:**
- Specific user counts, engagement metrics
- Any claim of "popular" or "widely used" without evidence
- Any visual claim about the UI (since no screenshot exists)

---

### HustleLoop (Marketplace / Ecommerce / Affiliate)

**Product:** Ecommerce marketplace & affiliate platform — browsing, purchasing, referral tracking, KYC onboarding.

**Evidence categories:**
- **Visual (1 — Direct):** No dedicated screenshot/mockup for HustleLoop in `public/`. Only `traytic.png` (unrelated), Starrik/Churchera mockups.
- **Source/code (2 — Partially verified):** Resume confirms; portfolio `projects.tsx` lists it as featured with technologies (React, Vite, TailwindCSS, Paystack, Etegram) and description.
- **Resume (3 — Verified):** "Collaborated with a team to build a mobile-first, responsive marketplace architecture using React.js/Vite and TailwindCSS, enabling seamless browsing and purchasing of digital products with optimized search and filtering. Contributed to integration of a payment interface across multiple gateways including Paystack and Etegram, enabling real-time financial transparency and expanded purchasing options. Played a key role in building a Referral Dashboard featuring dynamic commission tracking and link generation, contributing to organic user growth and increased platform traffic. Supported implementation of secure KYC onboarding flows using modern validation patterns, ensuring merchants and affiliates meet platform trust requirements prior to withdrawal processing."

**What the user contributed (verified from resume):**
- Mobile-first responsive marketplace architecture (React/Vite + TailwindCSS)
- Search/filter optimization for product browsing
- Multi-gateway payment integration (Paystack + Etegram)
- Referral dashboard with dynamic commission tracking and link generation
- KYC onboarding flow with validation patterns
- Collaboration with a team (not solo)

**Technical evidence:** React.js/Vite, TailwindCSS, Paystack, Etegram, modern validation patterns (likely Zod, given Traytic work).

**Feature evidence:** Search/filter, multi-payment, referral/commission tracking, KYC/verification.

**Visual evidence:** None directly — no HustleLoop mockup. The project is featured in the portfolio grid but has no associated image asset.

**Strongest story:** Full marketplace feature set (search → payment → referral → verification) demonstrates breadth of frontend capabilities — from UI design to transaction flows to compliance patterns. The multi-gateway integration (Paystack + Etegram) is technically interesting.

**Evidence gaps:**
- No screenshot/mockup available
- No source code verified (GitHub link in old card was `https://github.com/icekidtech/hustleloop.git`; updated to `https://github.com/Zaph123` — needs clarification)
- No live URL confirmed (`#` in updated card)
- No case study content
- No metrics on "organic growth" or "increased platform traffic" (resume mentions this; no verification)
- Team contribution needs clarification — resume says "collaborated with a team"; portfolio implies individual work for featured card

**Safe claims:**
- Built responsive marketplace with React/Vite + TailwindCSS
- Integrated multi-gateway payments (Paystack, Etegram)
- Built referral/commission tracking dashboard
- Implemented KYC onboarding with validation
- Worked in team collaboration

**Claims to avoid:**
- "Organic user growth" / "increased platform traffic" — resume claims; no verification; use cautiously with attribution or omit
- Any claim of being the sole architect (resume explicitly states team collaboration)
- Specific transaction volumes or user counts
- Visual claims about UI without screenshot

---

## Experience Evidence — Mapping Resume to Portfolio

| Resume Claim | Portfolio Evidence | Strength |
|---|---|---|
| Traytic: Next.js 16, React 19, TypeScript, Tailwind v4, analytics, auth, design system, collaboration | `experience.tsx` (updated); `skills.tsx`; `about.tsx` (focus area); `public/traytic.png` (low visual) | Strong (code + resume match) |
| Starrik: Real-time tracking, Firebase, vendor dashboards, backend collaboration | `experience.tsx`; `public/` mockups (strong visual); resume confirmed | Strong (visual + resume) |
| Churchera: Next.js, TailwindCSS, Zustand, RBAC, Supabase, responsive | `experience.tsx`; `public/` mockups; `skills.tsx` | Strong (visual + resume) |
| QuizManiac: React + Vite, Firebase auth/storage/leaderboards | `projects.tsx` (listed); years = 2024 | Moderate (code referenced, no image) |
| HustleLoop: Marketplace, Paystack/Etegram, referral, KYC | `projects.tsx` (featured); technologies listed | Moderate (described but no image) |
| Education: University of Uyo (BSc CS, 2024-2028, GPA 4.8), SSCE (Shammah College) | `education.tsx` (new file); `about.tsx` references | Strong (new section added) |
| Contact info: Phone, email, GitHub (Zaph123), LinkedIn (zaphenath-bassey) | `contact.tsx`; `hero.tsx`; `footer.tsx`; `layout.tsx` metadata | Strong (verified updates) |

---

## Evidence Gaps (Critical — Cannot Claim Without New Evidence)

1. **No case study pages** (`/work/[slug]`) — BLUEPRINT.md proposes them; none exist. Without these, project depth is limited to card descriptions.
2. **No project screenshots** except mockups (Starrik/Churchera device mockups; Traytic only logo). QuizManiac and HustleLoop have zero visual evidence.
3. **No architecture documentation** — cannot support "architecture-first" claim.
4. **No metrics verification** — all performance/retention/user claims must be qualified or omitted.
5. **No live site verification** — portfolio cards use `#`; user must confirm live URLs or remove links.
6. **No testimonial/endorsement evidence** — BLUEPRINT.md notes none exist; do not fabricate.
7. **No open-source contribution evidence** — BLUEPRINT.md flags this; do not claim without links.
8. **No personal photo** — BLUEPRINT.md says optional; do not fabricate placeholder.
9. **Starrik GitHub repo** — old link `https://github.com/Atabang/starrik.git`; current resume does not confirm this URL; needs user verification.
10. **Churchera GitHub repo** — old link `https://github.com/Churchera/churchera.git`; needs verification.

---

## Content Recommendations (For Final Portfolio — No UI Design Yet)

Based on evidence hierarchy (only 1–3 should be factual claims):

1. **Hero / About:** Use resume-backed descriptions only (2+ years, B2B/real-time/fintech range, React/Next.js + TypeScript specialization). Do NOT claim seniority, architecture-first, or mentoring as headlines.
2. **Experience:** Keep updated timelines (Traytic first — newest; then Churchera; Starrik; Roothub). Include specific feature descriptions from resume (analytics, auth flow, RBAC, marketplace payments) rather than generic role summaries.
3. **Projects:**
   - **Starrik:** Use mockup assets prominently; describe real-time requirements and Firebase integration; mention collaboration with backend engineers.
   - **Churchera:** Use mockup assets; describe responsive RBAC design; mention Supabase real-time.
   - **Traytic:** Use `traytic.png` cautiously (label clearly as logo/brand asset, not UI screenshot); prioritize resume descriptions of analytics/auth/workspace features.
   - **QuizManiac / HustleLoop:** List with technology tags; note they are personal/development projects with Firebase/integration evidence; do NOT claim live usage without verification.
4. **Skills:** Already updated; keep current categories (Frontend/Styling/Backend & Database/Tools/Inclusive Design) with resume-matching items.
5. **Education:** Keep new section; include GPA, coursework, language skills (English professional / Ibibio native) per resume.
6. **Contact:** Already verified (phone, email, GitHub Zaph123, LinkedIn zaphenath-bassey).
7. **Case studies:** Recommend creating `/work/[slug]` with the structure from BLUEPRINT.md (§8), but only after collecting actual product screenshots and source references. Do NOT create empty case studies.

---

## Claims To Avoid (Unless New Evidence Supplied)

Explicitly recorded per AGENTS.md §8 (never fabricate) and BLUEPRINT.md §5 / §11:

- Any metric: "40% improvement", "35% retention", "50% faster", "50k+ live events" — all unsupported
- "Senior" / "Lead" implying strategic authority — corrected by user directive
- "6 years experience" — corrected to 2+
- "Mentored three junior engineers" — older claim; not emphasized; only mention if specifically relevant to role
- "Architecture-first" as headline — too broad; replace with specific practices
- "Real-time systems specialist" — supported partially; do not make primary identity
- Client names, testimonials, awards, partnerships, revenue — none exist
- Specific user counts for any project
- Performance benchmarks without measurement documentation
- Any claim that mockup = live product (must distinguish)
- Any claim that `traytic.png` is a product screenshot (it is clearly a graphic/logo)

---

## What The Design / Blueprint Phase Will Need

From this evidence audit, the final design/blueprint must account for:

1. **Image assets are partial:** Only Starrik and Churchera have device mockups; Traytic has only a logo graphic; QuizManiac/HustleLoop have none. Visual design must accommodate missing imagery gracefully (placeholder treatments, pattern/graphic options) without fabricating screenshots.
2. **Project descriptions are strong; images are weak:** Content can carry credibility if written specifically (feature-level descriptions from resume). Visual design should support text-heavy cards rather than relying solely on thumbnails.
3. **Evidence supports technical depth over leadership narrative:** Design should emphasize code-level sophistication (form validation patterns, state management, responsive accessibility) rather than team management or strategic ownership imagery.
4. **No case study pages exist:** If BLUEPRINT.md proposes `/work/[slug]`, design must either: (a) create minimal but honest case studies with available evidence, or (b) adjust information architecture to avoid empty routes.
5. **Accessibility and responsive design are verified strengths:** The portfolio itself demonstrates these (semantic HTML, responsive grids, reduced-motion support, focus rings, contrast-compliant colors). Design should highlight these as evidence of quality, not just aesthetic choices.
6. **Color/design tokens are finalized (DESIGN.md / globals.css):** The terminal lime system is the established visual anchor. No redesign of palette needed — only ensure content aligns with the darkened-lime, accessibility-first, border-over-shadow aesthetic.

---

## Final Evidence-Based Summary

The portfolio can be made credible and technically impressive with the current evidence if it:
- Uses the corrected positioning (Frontend Engineer, 2+ years, React/Next.js + TypeScript)
- Relies on resume-verified descriptions for experience and projects
- Uses available mockup assets for Starrik and Churchera prominently
- Labels Traytic's `traytic.png` correctly (brand asset, not UI screenshot)
- Does NOT claim case study depth for QuizManiac/HustleLoop until screenshots/links verified
- Keeps all claims at hierarchy levels 1–3 (visible / code / resume)
- Avoids any category 4–5 claims as factual portfolio text (inference / unsupported)

The evidence is sufficient for a strong, honest portfolio — but it is not sufficient for the more ambitious claims (seniority, architecture leadership, universal real-time specialization, mentoring) that appeared in earlier versions. The corrected version is stronger precisely because it is defensible.
