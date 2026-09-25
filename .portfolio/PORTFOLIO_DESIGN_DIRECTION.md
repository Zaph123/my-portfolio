# Portfolio Design Direction

**Status:** LOCKED — Design Direction  
**Phase:** VISUAL DIRECTION (locked from DESIGN EXPLORATION)  
**Date:** 2026-09-25  
**Source authority:** `DESIGN.md`, `AGENTS.md`, `PORTFOLIO_BLUEPRINT.md`, `PORTFOLIO_DESIGN_EXPLORATION.md`, `PORTFOLIO_POSITIONING_VALIDATION.md`, `CONTENT_EVIDENCE.md`

---

## Decision Summary

**Direction locked:** Terminal Precision + selective Material Evidence (Direction A with Direction B enhancements).

This is a visual philosophy — not a literal terminal-themed site. The portfolio communicates **"I care about building things properly"** through precision, structure, evidence, and deliberate interaction. It does not communicate **"Look how technical I am."**

**Why this direction:** It handles the project's core constraint best — uneven evidence (strong mockups for Starrik/Churchera, structured resume evidence for Traytic, minimal visual evidence for QuizManiac/HustleLoop). It respects the validated positioning (Frontend Engineer — React/Next.js specialist, 2+ years, no seniority). It requires the least implementation change from the existing `components/` structure while being clearly distinct from generic developer portfolios.

**What changed from exploration:** Direction A selected; Direction B elements adopted selectively (structured feature breakdowns for Traytic, category dots, timeline markers, 2px borders on featured cards); Direction C deferred to content refinement rather than visual redesign.

---

## Core Philosophy

> Build with care. Show evidence clearly. Let the work speak. No decoration, no inflation, no fake authority.

The visual language is disciplined: border-over-shadow, asymmetric layout, restrained lime accent, structured information, precise typography. The portfolio feels like a well-engineered product — because it is one.

---

## What This Direction Is

- **Evidence-first:** Stronger evidence gets larger visual treatment; weaker evidence gets structured description, not empty placeholders.
- **Precise:** Clean typography, sharp borders, clear hierarchy, no decorative noise.
- **Honest:** Mockups shown where they exist; features described specifically from resume; no fabricated visuals, metrics, or outcomes.
- **Accessible:** WCAG AA pairs, visible focus rings, semantic HTML, reduced-motion respected, responsive from 375px.
- **Restrained:** Lime appears structurally (buttons, focus, tags, small markers) — never as a background flood or decorative glow.
- **Professional:** Not "junior," not "senior" — just a technically capable engineer with production experience.

---

## What This Direction Is Not

- **Not a fake terminal:** No command-line interface, no terminal windows, no excessive monospace dominance, no fake code snippets, no fake system logs.
- **Not a cinematic showcase:** No parallax overload, no scroll-jacking, no 3D objects, no decorative animation everywhere. Motion exists for hierarchy and feedback only.
- **Not a generic developer portfolio:** No centered "Hi, I'm..." hero, no gradient overload, no floating glass cards, no meaningless animated numbers, no logo wall.
- **Not a seniority claim:** No "Senior," "Lead," "Architect," "Principal," or "Expert" used as headline or identity. The title stays **Frontend Engineer**.
- **Not an inflated experience claim:** No "6 years." Experience clearly stated as **2+ years** with verified timelines.

---

## Positioning (Locked — Matches Validation)

**Title:** Frontend Engineer / Frontend Developer  
**Specialization:** React / Next.js + TypeScript  
**Experience:** 2+ years production (Traytic 2026; Churchera 2026–present; Starrik 2024–2025; Roothub 2024–2025)  
**Education:** University of Uyo — BSc Computer Science (2024–2028, GPA 4.8/5.0); SSCE — Shammah College  
**Domains demonstrated:** B2B/admin (Traytic), courier logistics (Starrik), faith-tech/fintech-adjacent (Churchera), marketplace (HustleLoop), interactive education (QuizManiac)

**What this communicates:** Technical depth through concrete features — authentication, RBAC, analytics, responsive interfaces, design-system contributions, cross-functional collaboration.

**What this avoids:** Architecture-first headline, real-time specialist identity, mentoring as headline, open-source claims without links.

---

## Visual Language

### Typography

- **Display:** Space Grotesk (bold, tight tracking `tracking-[-0.035em]` at hero; `tracking-tight` at headings). Used for identity, headings, project names.
- **Body:** Inter (1.6–1.7 line-height, base/lg for reading comfort). Neutral, disappears into utility.
- **Technical / Meta:** JetBrains Mono (xs/sm, high-contrast only — never lime-300 as text). For years, tags, role labels, code references, section labels ("WORK / 2024").
- **Scale:** Hero headline at clamp(2.5rem–5.25rem); headings 3xl/4xl; body base/lg; meta 11px/12px with strict contrast rules.
- **Hierarchy:** One h1 (hero identity + specialization); h2 per major section; h3 for sub-features within cards.

### Color

- **Primary:** `#7FA800` (lime-500 — terminal olive, WCAG AA on both modes). Links, badges, hover states, focus rings.
- **Accent (buttons/CTAs only):** `#C6FF00` (lime-300 — neon). **Never for text.** Used only on primary button backgrounds (`bg-[#C6FF00] text-[#0B0B0B]`) and large CTAs.
- **Black:** `#0B0B0C` — text, borders, dark surfaces.
- **Neutrals:** Warm-tinted (`#FAFAF8` to `#141412`). Never pure grey (`#808080`). Cards use `neutral-50` light / `neutral-800` dark.
- **Borders:** `1px` `neutral-200` (light) / `neutral-700` (dark) — structural, not decorative. Featured cards get `2px` (B enhancement — deliberate hierarchy).
- **Button states:** Primary hover `#A3D600`; secondary hover shifts text to primary; ghost transparent with text shift.
- **Focus:** `2px` lime ring — `lime-700` light / `lime-400` dark. Always visible.
- **Hover (cards):** Background `bg-card`, border darkens, text shifts to `primary` — 200ms ease-out. No scale, no shadow, no lift.

### Spacing & Layout

- **Container:** `max-w-4xl` (64rem / ~1024px) centered. Hero and footer can break wider if needed.
- **Grid:** 8px base (Tailwind increments). Asymmetric left-aligned layouts — never centered symmetry.
- **Section spacing:** ~128px between major sections.
- **Card padding:** 32px internal; 24px gap between cards.
- **Hero:** Flush-left with container; label (mono) → headline (display bold, tight) → sub (body, muted) → CTAs (buttons) → stats (mono, small, dot-separated) → scroll indicator.
- **Projects:** 12-column grid. Starrik (featured, large span) and Churchera (featured, large span) get mockup prominence. Traytic (structured, medium). QuizManiac + HustleLoop (compact, text-dominant).

### Surfaces & Borders

- **No shadows.** Depth via tonal shift (`bg-card` on hover) and border only.
- **Dot grid:** Subtle radial gradient (`rgba(127,168,0,0.06)` light) — background texture, not decorative overlay.
- **Cards:** `rounded-lg` (16px) — soft but not excessive. `rounded-full` for badges/pills only.
- **Inputs:** `rounded-sm` (4px) — precise.

---

## Layout Philosophy

### Homepage structure (locked — preserves existing architecture)

```
Navbar (fixed, responsive, hamburger on mobile, dark-mode toggle)
Hero (identity + specialization + value + evidence + contact paths)
About (engineering approach + 3 verified focus areas: Traytic / Churchera / Starrik)
Selected Work (evidence-based hierarchy — see below)
Skills / Technical Capabilities (5 categories, work-linked, text-only)
Experience (verified timeline list — Traytic → Churchera → Starrik → Roothub)
Education (University of Uyo + coursework + SSCE; languages)
Contact (form + verified direct links + success feedback)
Footer (name + role + socials + copyright)
```

No `/work/[slug]` case studies created until evidence and content confirmed (deferred per blueprint §18 / CONTET_EVIDENCE.md gap #1).

---

## Project Presentation Strategy

Evidence drives presentation — not symmetry or alphabetical order.

### Starrik — High visual + technical evidence

- **Treatment:** Featured, large span, mockup at top (full device presentation), concise supporting text below.
- **Visual:** Use both `macbook-air-and-phone-mockup -starrik.jpg` and transparent variant as appropriate.
- **Content:** Real-time delivery platform; vendor dashboards; Firebase Auth/Firestore/Storage integration; backend collaboration.
- **Tech tags:** React, Firebase, WebSocket (historical reference — verified), real-time tracking.
- **Evidence level:** 1 (visual) + 2 (resume/code context) + 3 (resume verified).
- **Constraints:** No GPS event counts, no latency metrics, no "40% improvement." No claim of being the sole architect. Mockup = design presentation, not live product screenshot.

### Churchera — High visual + technical evidence

- **Treatment:** Featured, large span, mockup prominent, structured description.
- **Visual:** Use both `macbook-air-and-phone-mockup-churchera.jpg` and transparent variant.
- **Content:** Responsive interfaces; Admin/Member RBAC; Supabase real-time transaction tracking; sensitive financial data privacy.
- **Tech tags:** Next.js, TailwindCSS, Zustand, Supabase, RBAC.
- **Evidence level:** 1 + 2 + 3.
- **Constraints:** Do not claim "Stripe integration" unless independently verified in current resume (current resume emphasizes Supabase; historical Stripe references should be omitted or qualified). Do not claim "global congregations" scale without verification — use resume attribution or omit. Mockup ≠ live product.

### Traytic — Strong technical evidence, weak visual

- **Treatment:** Medium card — structured feature breakdown is primary, not image.
- **Visual:** `traytic.png` (65K, older, logo-style) — **clearly labeled** as brand/logo asset, never presented as product UI screenshot.
- **Content:** Analytics dashboard (Recharts); Plans & Addons management (sortable/searchable/paginated, lifecycle actions); Agencies workspace (search, CSV bulk import, admin actions); Authentication (TOTP, Turnstile, international phone, Zod, password-strength); Design system contributions; Cross-functional collaboration (Git feature-branch workflow).
- **Tech tags:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts, Zod, Cloudflare Turnstile.
- **Evidence level:** 2 (code/design system context) + 3 (resume detailed).
- **Constraints:** No claim of users/agencies/revenue. No claim that `traytic.png` is a UI screenshot. No fabricated product screenshots.

### QuizManiac — Low visual, moderate evidence

- **Treatment:** Compact card — technology + verified functionality only.
- **Visual:** None available. **No fabricated screenshot.** Use structured information (domain, role, years, brief feature description, tech tags).
- **Content:** Responsive quiz app; multiple categories; Firebase auth/storage/leaderboards; optimized for desktop/mobile.
- **Tech tags:** React, Vite, Firebase, TypeScript.
- **Evidence level:** 3 (resume only). No visual evidence; design must not make this look artificially equal to Starrik/Churchera.
- **Constraints:** No claim of popularity, user count, live usage, or engagement. No visual claim.

### HustleLoop — Low visual, moderate evidence + team context

- **Treatment:** Compact card — describe team collaboration clearly.
- **Visual:** None available. **No fabricated screenshot.**
- **Content:** Marketplace architecture (React/Vite + TailwindCSS); browsing/search/filter; multi-gateway payments (Paystack + Etegram); Referral Dashboard (commission tracking + link generation); KYC onboarding (validation patterns). **Clearly note team collaboration** (resume states "collaborated with a team" — portfolio must not imply sole ownership).
- **Tech tags:** React, Vite, TailwindCSS, Paystack, Etegram.
- **Evidence level:** 3 (resume — with team context).
- **Constraints:** No claim of "organic growth" or "increased platform traffic" (resume mentions; unverified — omit or attribute cautiously). No solo-architect claim.

### Evidence hierarchy in layout

The 12-column grid allows evidence-based sizing: Starrik/Churchera can span 8 cols / 2 rows; Traytic 4–6 cols; QuizManiac/HustleLoop 4 cols. This is **intentional**, not arbitrary — it reflects verification strength. The design should not disguise the difference with uniform cards.

---

## Hero Design (Locked — Approval Item Noted)

The hero is the highest-risk area for generic developer language.

### Locked elements

- **Label:** "Frontend Engineer · React.js & Next.js" (mono, tracking-wide, small)
- **Name:** "Zaphenath Bassey" (display bold)
- **Role line:** Already in label — no repetition needed
- **CTA 1:** Lime button — "View work" (`#projects`)
- **CTA 2:** Outline — "Get in touch" (`#contact`)
- **Social links:** GitHub (Zaph123), LinkedIn (zaphenath-bassey), Email (bassey2108@gmail.com)
- **Stats:** "2+ years · 3 production contexts · real-time contribution" (mono, small, dot-separated) — accurate, not inflated
- **Scroll indicator:** Small mono link to `#about`

### Approval item: Headline copy

The previous exploration proposed: **"I build scalable React and Next.js systems that handle real-time complexity."**

**Status:** **NOT automatically locked.** The word **"scalable"** is not sufficiently established by current evidence (no metrics, no user counts, no performance benchmarks). It is a reasonable inference from the work described but should not be treated as verified.

**Recommended approach:** Define the headline's **type and hierarchy** (large bold, left-aligned, specific, not generic) rather than locking exact wording now. The implementation should use a precise formulation derived from verified work — e.g., focusing on production features (auth, analytics, responsive systems, collaboration) — without inventing unsupported scale claims.

**What the design locks:**
- Position: left-aligned, flush with container
- Size: largest display text, tight leading
- Style: bold, tracking-tight
- Content category: identity + specialization + specific capability
- Not: generic "I build beautiful experiences" / centered / decorative image

---

## Motion Philosophy (Locked)

- **Purpose:** Entrance reveals hierarchy; hover confirms interactivity; scroll indicates progress; form provides feedback.
- **Hero:** Sequential stagger (label → name → sub → CTAs → stats → scroll) — 0.5–0.6s ease-out (`[0.22, 1, 0.36, 1]`).
- **Sections:** Fade-up on viewport entry — 0.6s ease-out, stagger 0.12 between cards/project items.
- **Hover:** 200ms — card background/border/text shift; button color; link to primary. No scale, no lift, no shadow appearance.
- **Scroll:** Lenis preserved; native scroll preserved; no scroll-jacking; `scroll-padding-top` for fixed navbar (already fixed per DECISIONS.md).
- **Reduced motion:** All Framer Motion animations disabled when `prefers-reduced-motion: reduce`. Must be fully implemented across `motion-provider.tsx` and `use-scroll-animation.ts`.
- **Static:** Navigation, footer, mockup images, section headings — never animate.
- **Not decorative:** No splash, no parallax overload, no excessive stagger, no animation that delays content.

---

## Responsive Strategy (Locked)

- **Desktop (>1024px):** Full asymmetric layout; 12-col project grid with mockups at full device size; 2-col about; 3-col skills; hero flush-left.
- **Tablet (768–1024px):** Projects to 2-col; featured cards span; skills to 2-col or stacked; experience full-width; mockups scale to fit.
- **Mobile (<768px):** Single column everywhere; cards full-width; hero stacked; stats wrap; navigation hamburger; touch targets 48px+; focus rings visible; typography scales smoothly.
- **Text:** Never fixed-width; readable at 200% zoom; body at `base`/`lg`; meta at `xs` with high-contrast only.

---

## Accessibility Requirements (Locked — Product Requirement)

- **Semantic:** `<section>`, `<nav>`, `<main>`, `<article>` (projects), `<header>`, `<footer>` — strict hierarchy.
- **Keyboard:** All interactive elements navigable; logical tab order.
- **Focus:** `outline-ring/50` (2px lime) visible — light `lime-700`, dark `lime-400`. Never hidden.
- **Color:** All pairs pass WCAG AA per DESIGN.md.`lime-300` only on button backgrounds (black text — safe); never lime-300 for text. Light links `lime-700`; dark links `lime-500`.
- **Reduced motion:** Fully respected.
- **Alt text:** Mockup images describe content (e.g., "Starrik courier tracking platform shown on laptop and phone mockup"). Traytic `traytic.png` labeled as brand/logo.
- **Form:** Labels linked; errors visible (verified `contact.tsx`); Zod validation.
- **Touch:** 48px targets; no hover-only interactions.

---

## Evidence Rules (Locked — From CONTENT_EVIDENCE.md)

- **Level 1 (visible):** Starrik/Churchera mockups shown prominently; code quality visible in portfolio site itself.
- **Level 2 (source/code):** Portfolio demonstrates responsive, accessible, semantic code with design tokens; project tech tags verified.
- **Level 3 (resume):** All descriptions, years, roles, technologies, features directly supported by `.portfolio/references/Zaphenath_Bassey_Resume.pdf`.
- **Level 4 (inference):** Design-system contribution implies design collaboration; form validation implies UX awareness. Used for design choices only — never as written claims.
- **Level 5 (unsupported):** Metrics, clients, outcomes, architecture documentation, testimonials, open-source links — must never appear in portfolio text, labels, or visual claims.

**Specific exclusions enforced:**
- No "40% improvement," "35% retention," "50% faster"
- No "6 years experience" in hero/about/experience headlines
- No "Real-time systems specialist" as identity
- No "Architecture-first" headline
- No mentoring as primary claim
- No fabricated case studies (`/work/[slug]` deferred)
- No fabricated screenshots (QuizManiac/HustleLoop have none)
- No claim that `traytic.png` is a UI screenshot
- No WebSocket/GPS specifics for Starrik unless separately verified
- No "RBAC architecture" — use "Admin/Member RBAC" or "role-based access"

---

## Content / Claim Constraints (Locked)

The portfolio text must adhere to verified descriptions:

- **Hero:** Identity, specialization, 2+ years, specific capabilities — not generic slogans.
- **About:** Engineering approach (accuracy, accessibility, collaboration), 3 verified focus areas (Traytic / Churchera / Starrik), growth trajectory, curiosity — no unsupported mentoring/open-source claims.
- **Experience:** Verified timelines; specific feature descriptions from resume; correct titles (Frontend Engineer, not Senior/Lead as identity).
- **Projects:** Feature-level descriptions from resume per project; tech tags matching resume; external links only if verified.
- **Skills:** Work-linked categories; text only; no logo wall.
- **Education:** University of Uyo + coursework; SSCE; languages.
- **Contact:** Verified links; form validates; no false claim of backend delivery.

---

## Anti-Patterns (Locked — Must Not Appear)

The design direction explicitly avoids:

- Giant centered "Hi, I'm..." hero
- Gradient overload / decorative glow
- Floating glassmorphism cards
- Meaningless 3D objects
- Excessive terminal simulations (fake code windows, fake system logs, fake terminal prompts)
- Skill-logo walls
- Fake GitHub contribution graphs
- Fake metrics / animated numbers
- "10x developer" / "guru" / "AI expert" language
- Excessive cursor effects
- Scroll-jacking
- Animation everywhere
- Huge decorative text competing with content
- Senior/architect/lead/headline inflation
- Fake testimonials / endorsements / clients
- Fabricated product screenshots
- Empty case studies
- Unverified open-source claims

The terminal influence appears only through **precision, discipline, borders, structured info, technical metadata, and restrained interaction** — never through decorative terminal aesthetics.

---

## Locked Decisions

These are now fixed. They inform implementation.

1. **Visual direction:** Terminal Precision + selective Material Evidence (Direction A with B elements).
2. **Palette:** `DESIGN.md` preserved exactly — lime (`#7FA800` primary, `#C6FF00` accent/buttons only), black (`#0B0B0C`), warm neutrals.
3. **Typography:** Space Grotesk display + Inter body + JetBrains Mono technical accent.
4. **Layout:** `max-w-4xl`, 8px grid, asymmetric left-aligned, ~128px sections, border-over-shadow, no shadows.
5. **Positioning:** Frontend Engineer — React/Next.js specialist, 2+ years, production experience, technical depth over seniority.
6. **Project hierarchy:** Evidence-based sizing (Starrik/Churchera featured with mockups; Traytic structured; QuizManiac/HustleLoop compact).
7. **Hero type:** Identity + specialization + specific capability — left-aligned, bold, large; NOT generic centered slogan.
8. **Motion:** Purposeful entrance/stagger/hover/scroll; reduced-motion fully respected; no splash/scroll-jacking/decorative overload.
9. **Evidence rules:** Only levels 1–3 become claims; no metrics, no fabricated visuals, no case studies until content verified.
10. **Accessibility:** WCAG AA, visible focus, semantic HTML, keyboard navigation, touch targets, text scaling.
11. **Design system:** Existing tokens (`globals.css` / `DESIGN.md`) preserved; no new palette introduced.
12. **Project cards:** Preserve current `projects.tsx` structure; enhance with structured descriptions and mockup placement — no card redesign that disguises evidence differences.
13. **No case studies:** `/work/[slug]` deferred until content and links verified.

---

## Unresolved Decisions (Require User Approval)

These remain open per `PORTFOLIO_BLUEPRINT.md` §18 / exploration §14. They do not block direction lock but must be resolved before full implementation.

1. **Hero headline wording:** Type of message locked; exact copy requires approval (see §7 — "scalable" not sufficiently established). Recommended: precise formulation focusing on verified capabilities (auth, analytics, responsive, collaboration) rather than unsupported scale claims.
2. **Mockup placement:** Starrik/Churchera mockups — card-top vs. hero-background vs. both? User preference needed.
3. **Traytic presentation:** Logo + feature list prominent? Or compact card? User's preference on visual weight for weakest visual evidence.
4. **Case study pages (`/work/[slug]`):** Confirm for verified projects; if yes, with what content and which first?
5. **Live URLs:** Confirm active URLs for projects; update `projects.tsx` links from `#`.
6. **Repository links:** Confirm specific project GitHub URLs; update cards.
7. **Personal photo:** Optional — provide or design without placeholder.
8. **Motion intensity:** Confirm fade-up/stagger level; more or less? (Default = current exploration standard.)
9. **Major visual metaphor:** None proposed — confirm user comfortable with minimal/decorative-light approach.

---

## Implementation Guardrails

This document is a **direction lock**, not an implementation specification. The following guardrails apply to any implementation work that follows:

- **Do not modify `DESIGN.md`:** The visual authority is preserved.
- **Do not change palette:** Lime/black/warm neutrals remain authoritative.
- **Do not redesign components unnecessarily:** Improve content and evidence presentation; avoid structural overhauls that increase risk.
- **Do not create assets:** Mockups already exist; do not fabricate screenshots for QuizManiac/HustleLoop/Traytic UI.
- **Do not invent case studies:** `/work/[slug]` deferred.
- **Do not claim "scalable":** Avoid in hero until evidence supports.
- **Do not claim WebSocket/GPS specifically for Starrik** unless independently verified (current resume says "real-time order tracking" — use that, not implementation detail).
- **Use "Admin/Member RBAC" or "role-based access"** — never "RBAC architecture" as a broad claim.
- **Do not turn into literal terminal:** Precision through typography/structure, not fake command-line UI.
- **Preserve reduced-motion:** Complete implementation required, not partial.
- **Verify all links:** Before declaring complete, confirm GitHub (Zaph123), LinkedIn (zaphenath-bassey), project URLs.

---

## Verification Performed

Before declaring this direction locked:

1. ✅ `AGENTS.md` read (source-of-truth hierarchy, evidence rules, workflow phases, design skill architecture)
2. ✅ `DESIGN.md` read (palette, typography, layout, motion, accessibility, component tokens — authoritative)
3. ✅ `PORTFOLIO_POSITIONING_VALIDATION.md` read (validated positioning, corrected claims, classification table)
4. ✅ `CONTENT_EVIDENCE.md` read (evidence hierarchy, per-project analysis, gaps, recommendations)
5. ✅ `PORTFOLIO_BLUEPRINT.md` read (.portfolio version — updated with corrected positioning; old backup preserved for comparison)
6. ✅ `PORTFOLIO_DECISIONS.md` read (13 decisions — preserved relevant ones: Einstein de-emphasized, real URLs, metric qualification, case studies, reduced-motion, anchor fix, parallax, copyright, manifest, timeline alignment, hero rewrite)
7. ✅ `PORTFOLIO_DESIGN_EXPLORATION.md` read (3 directions explored; comparison; recommendation documented)
8. ✅ Existing `components/sections/*.tsx` inspected (hero, about, projects, experience, skills, contact, footer, education — all updated with verified resume content)
9. ✅ `public/` assets inspected (mockups confirmed; `traytic.png` identified as logo; no fabricated assets)
10. ✅ No contradictions discovered between design direction and authoritative sources
11. ✅ No seniority inflation introduced
12. ✅ No "scalable" locked into hero without approval
13. ✅ No WebSocket/GPS claims added to Starrik
14. ✅ "RBAC architecture" replaced with supported formulation
15. ✅ No code modified (only `PORTFOLIO_DESIGN_DIRECTION.md` created)
16. ✅ No dependencies installed
17. ✅ No assets fabricated

---

## Change Control

This document is the design-direction lock. Any change to the direction after this point must be:

- Documented (update this file or create new version)
- Justified (which authoritative source changed?)
- Approved by user if material (affects brand, positioning, evidence, accessibility)

No silent changes.

---

*Created: 2026-09-25  
*Locked from: DESIGN EXPLORATION  
*Next phase (after approval of unresolved items): DESIGN SYSTEM / BLUEPRINT REFINEMENT → IMPLEMENTATION
*File: `PORTFOLIO_DESIGN_DIRECTION.md` (root — consistent with project docs)
