# Portfolio Design Exploration

**Phase:** DESIGN EXPLORATION  
**Date:** 2026-09-25  
**Status:** Exploratory — NO IMPLEMENTATION YET  
**Constraint:** Read-only exploration; no code changed, no dependencies installed, no assets created.

---

## 1. Design Exploration Objective

Explore three genuinely distinct visual directions for the portfolio that communicate the validated position: **Frontend Engineer — React/Next.js specialist, 2+ years, production experience across B2B admin, courier logistics, and fintech-adjacent platforms**.

The visual system must:
- Answer "Who is this engineer, what can he build, and why should I keep looking?"
- Handle uneven evidence honestly (Starrik/Churchera mockups strong; Traytic only logo; QuizManiac/HustleLoop none)
- Communicate technical depth through specific work (auth, RBAC, analytics, tables, responsive, accessibility)
- Avoid generic developer patterns (giant centered "Hi, I'm...", gradient overload, fake metrics, logo walls)
- Respect `DESIGN.md` terminal-lime / black / border-over-shadow authority
- Not imply seniority, architecture leadership, or inflated experience

---

## 2. Existing Constraints (From Source Documents)

From `DESIGN.md` (authoritative visual authority):
- Palette: lime (`#7FA800` primary, `#C6FF00` accent for buttons only — never text), black `#0B0B0C`, warm neutrals (`#FAFAF8` to `#141412`)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- Layout: `max-w-4xl`, 8px grid, asymmetric left-aligned, 128px section spacing, border-over-shadow
- Shape: button 8px, card 16px, input 4px, badges full-round
- Motion: purposeful, reduced-motion respected, fade-up / stagger on viewport
- Dot grid: subtle radial gradient (`rgba(127,168,0,0.06)` light)
- Accessibility: WCAG AA pairs verified in DESIGN.md, custom focus rings (`--ring`)
- No gradients / 3D / decorative overload

From `PORTFOLIO_BLUEPRINT.md` (updated):
- Single-page structure preserved; `/work/[slug]` case studies deferred (evidence-dependent)
- Evidence hierarchy: only levels 1–3 become claims
- Mockup assets: Starrik/Churchera device mockups available; Traytic only `traytic.png`; others absent
- No invented screenshots, metrics, testimonials

From `CONTENT_EVIDENCE.md`:
- Strong evidence: Starrik (mockup + resume + real-time), Churchera (mockup + resume + RBAC), Traytic (resume detail + design system + auth/analytics/workspace)
- Weak/none: QuizManiac, HustleLoop (listed only)
- Must design for partial evidence without making weak projects look artificially equal

From `AGENTS.md`:
- Skill hierarchy: `design-taste-frontend` (primary direction), `build-awwwards-quality-sites` (art/cinematic — use selectively), `interaction-polish` (motion), `impeccable` (quality layer — not independent redefinition)

---

## 3. Design Principles (Shared Across All Directions)

1. **Evidence-first layout:** Stronger evidence gets more visual weight; weaker evidence gets structured information, not empty placeholders.
2. **Border-over-shadow, always:** No floating glass cards, no elevation shadows. Cards use `border-border` with `hover:bg-card`.
3. **Lime as structural accent, not wallpaper:** Lime appears in focus rings, button backgrounds, small tags — never floods a background.
4. **Typography carries credibility:** Strong headings, readable body, clear technical tags. No decorative text.
5. **Accessibility is non-negotiable:** Semantic HTML, visible focus, contrast verified, reduced-motion respected.
6. **No seniority signals:** No "architect", "lead" as headline, "10x", "guru", mock authority.
7. **Motion reinforces, never decorates:** Entrance for hierarchy, hover for feedback, scroll for progress — never animation for animation's sake.

---

## 4. Direction A — Terminal Precision

**Concept:** The portfolio behaves like well-engineered software — precise, structured, efficient. The terminal-lime identity is expressed through disciplined typography, sharp borders, clear information architecture, and restrained color. Visual noise is treated as a bug.

**Emotional impression:** Calm, precise, technically credible. A visitor should feel they've arrived at something built with care — not decorated for attention.

### Typography
- Space Grotesk (display) at tight tracking (`tracking-[-0.035em]` for hero), bold weights for headings only
- Inter at 1.6–1.7 line-height for body; 1.5 for meta
- JetBrains Mono for technical tags, years, code references
- Scale: hero at clamp(2.5rem–5.25rem); section headings 3xl/4xl; body lg/base; meta xs/font-mono
- Heading hierarchy strict: one h1 (hero name/specialization), h2 per section, h3 for sub-features

### Color
- Black (`#0B0B0B`) surface with lime (`#C6FF00`) buttons only — light/dark handled via current CSS variables
- Neutral surfaces (`#FAFAF8` light / darker dark) for cards; border (`#E5E5E0` light / neutral-700 dark) defines boundaries
- Lime appears structurally (focus ring `--ring`, button `bg-[#C6FF00]`, accent dots) — never as a background wash on large surfaces
- Hover: border darkens, text shifts to `primary` (`#7FA800`); no shadow appears

### Layout
- `max-w-4xl` container center; 128px section spacing
- Hero: left-aligned, flush with container; no centered symmetry
- Projects: 12-column asymmetric grid (Starrik/Churchera take large spans; QuizManiac/HustleLoop compact)
- Experience: timeline list with left-aligned dates and right-aligned descriptions (as current `experience.tsx`)
- Skills: 3-column grid with category headings in mono
- About: 2-column (text + focus areas) at desktop

### Hero
- Label: "Frontend Engineer · React.js & Next.js" (mono, small, tracking-wide)
- Headline: "I build scalable React and Next.js systems that handle real-time complexity." (bold, tight, left)
- Subtext: 2+ years, B2B/real-time/fintech-adjacent — specific, not generic
- Stats row: "2+ years · 3 production contexts · real-time contribution" (mono, small, separated by dots)
- CTAs: lime button "View work" + outline "Get in touch"
- Social links in bottom row (small, mono labels)
- No decorative elements; no glowing borders; no 3D

### Selected Work
- Starrik featured (large card with mockup at top or side); Churchera featured (mockup); Traytic medium (logo + feature list); QuizManiac/HustleLoop compact
- Each card: domain (mono), years (mono), role (small), title (display bold), 2-line feature description (specific from resume), 3–5 tech tags (mono border), external link if verified
- Mockups shown at full device size where available; Traytic shown with logo and structured feature breakdown
- No fake thumbnails; empty cards avoided via text-dominant layout

### Experience
- Timeline list (current format preserved): company left, role/date, specific contribution description, tech highlights
- No generic "Senior Frontend Engineer" — correct to "Frontend Engineer" per validated positioning
- Timeline reflects actual dates (Traytic Jul 2026, Churchera Jan 2026, Starrik Sep 2024–Dec 2025, Roothub Dec 2024–2025)

### Skills
- 5 categories (Frontend / Styling / Backend & Database / Tools / Inclusive Design)
- Each category: label in `font-mono`, skills in list with space-y-2
- No logo wall; no colorful icons; just text
- Emphasis on work-linked skills (React, Next.js, TypeScript, Firebase, Supabase, Zustand, Tailwind, accessibility)

### Motion
- Entrance: fade-up (0.6s ease-out) on scroll entry; stagger 0.12 between cards
- Hero: sequential stagger (label → h1 → body → CTAs → stats → scroll) with custom easing
- Hover: 200ms color transition (card background, button background, link text); no scale or lift
- Scroll: Lenis smooth scroll preserved; no scroll-jacking
- Reduced motion: all animations disabled when `prefers-reduced-motion: reduce`

### Responsive
- Mobile: single-column, full-width cards, hamburger nav, touch targets 48px+
- Tablet: 2-col for projects/skills; experience full-width
- Desktop: full asymmetric grid; hero flush-left
- Typography scales down smoothly; no brittle fixed-width layouts

### Accessibility
- All interactive elements keyboard-accessible; focus ring visible (`outline-ring/50`)
- All images with alt text describing mockup/content
- Contrast verified per DESIGN.md (lime-300 button with black text = safe; never lime-300 as text)
- Reduced-motion respected globally
- Semantic HTML preserved (section/article/nav/header/footer)

### Risks
- Could feel too sparse if mockups are not well-integrated — needs careful typography weight to carry visual interest
- Risk of being perceived as "too minimal" by audiences expecting more decoration — mitigated by accurate content depth and mockup prominence
- No visual differentiation between strong/weak projects if card design is too uniform — addressed by grid spanning (Starrik/Churchera take larger spans)

---

## 5. Direction B — Technical Craft / Material Evidence

**Concept:** The portfolio is a material object — surfaces, borders, and structure feel physical. Evidence is presented not just as images but as structured technical artifacts: feature breakdowns, technology lists, interaction patterns, and design-system awareness. The design celebrates the craft of building.

**Emotional impression:** Interested, impressed by detail. A visitor feels they're reading a well-built product specification — precise, documented, thoughtful.

### Typography
- Space Grotesk display at slightly more contrast (tighter line-height `leading-[0.95]` on hero); body at `leading-relaxed` (1.7+)
- JetBrains Mono used more prominently — code references, feature tags, technical labels at slightly larger size
- Section headings with subtle tracking (`tracking-tight` for large, `tracking-[0.16em]` for mono labels)
- Scale slightly more generous — section headings 4xl/5xl; body at lg for reading comfort

### Color
- Same palette (terminal lime + black + warm neutrals) but with slightly more structural lime: lime-tinted borders (`border-lime-200/30`) on cards to indicate technical category, not decorative color
- Card backgrounds slightly differentiated by category (Interface / Systems / Craft) — subtle tonal shift, not color shift
- Lime dots as category markers (small, structural)
- Black/dark sections used sparingly — only where they create rhythm (hero can remain light for readability; a dark section for skills or experience can provide contrast if needed)

### Layout
- Container same (`max-w-4xl`) but with slightly more internal padding on cards (32px → 40px) to emphasize material quality
- Grid: 12-column with more deliberate asymmetry — some cards offset, some spanning more rows to show hierarchy
- Sections slightly closer (96px instead of 128px) to create more continuity — but still generous whitespace
- Cards use slightly more structured internal layout: title at top, description, feature list with bullets/marks, technology tags at bottom
- Experience: could use a left-line / timeline visual (vertical line with dots) rather than pure list — communicates progression

### Hero
- Same headline/content as Direction A; difference is visual weight: headline possibly larger, more dominant; supporting copy slightly shorter; stats row with more visual separation (icons or markers)
- Could include a small technical signal near headline (e.g., "Next.js 16 · React 19 · TypeScript" in mono, small, below name or beside it)
- CTA buttons slightly more prominent (larger size, stronger contrast)

### Selected Work
- Starrik card: mockup at top (full-width within card), then text below — image-driven for strong evidence
- Churchera: same — mockup prominent
- Traytic: structured feature list (not image-driven) with clear category markers (Analytics, Auth, Workspace, Design System) — demonstrates technical depth without fake visuals
- QuizManiac / HustleLoop: concise cards with technology tags and one-line feature descriptions — no attempt to match image-heavy cards
- Card hierarchy by evidence strength (not arbitrary importance)

### Experience
- Timeline with visual markers (left vertical line with dots at each entry)
- Each entry: date/company (mono, small), role/title (bold), specific contribution (text), tech tags (mono, small border)
- Could include a brief "Growth" note linking education to first role to second role
- No generic "Senior" titles; correct titles maintained

### Skills
- 5 categories with visual markers (small lime dots or lines beside category names)
- Skills listed with more detail (e.g., not just "React" but "React 19, App Router, TypeScript integration")
- Could show grouping by work domain: what was used at Traytic, Churchera, Starrik — but only if accurate
- No logo wall; structured text only

### Motion
- Slightly more structured stagger: cards enter with consistent delay based on hierarchy (featured first, then standard)
- Hover: card border shifts to lime (subtle — `border-lime-400/50`) rather than just background change — signals interactivity structurally
- Scroll: sections enter with slightly more pronounced fade-up (0.7s) — reinforces material feel
- Reduced motion: same — disable all

### Responsive
- Same as Direction A; cards stack naturally; mockups scale down; text stays readable
- Timeline section may need vertical simplification — line and dots scale to mobile without crowding

### Accessibility
- Focus states visible; reduced-motion respected; contrast maintained
- Timeline markers must not interfere with reading (line remains subtle)
- Card markers (dots, borders) must not reduce text contrast

### Risks
- Could become too structured / dry if material details overwhelm content — must keep descriptions concise
- Timeline visual requires careful implementation to avoid clutter on small screens
- Slightly more design effort on internal card layout; risk of scope creep if not carefully bounded

---

## 6. Direction C — Editorial / Story-First

**Concept:** The portfolio reads like a high-quality editorial feature — not a resume, not a product page, but a well-told story of someone who builds things thoughtfully. Visual elements serve the narrative rather than decorating it.

**Emotional impression:** Curious, impressed by thinking, interested in the work. Not overwhelmed — the visitor should feel they understand both the engineer and the problems solved.

### Typography
- Same fonts (Space Grotesk / Inter / JetBrains Mono) but with more editorial variation: larger display headings for section openings; slightly wider body line-height (1.7–1.75) for reading comfort
- Headings could use slightly more generous tracking (`tracking-tight` to `tracking-normal`) for editorial feel
- Section headings could include small mono subtitles (like a magazine section label: "WORK / TRAFFIC • 2024")
- Mono used for all meta (years, roles, tech) — creates consistent editorial language

### Color
- Same palette; slightly more dramatic use of black/dark sections — possibly a dark section between hero and work (contrast section) or a dark experience list — to create editorial rhythm
- Lime remains accent-only; never fills surfaces at large scale
- Card backgrounds could vary slightly by section (very subtle — warm light vs slightly darker light) to distinguish work from experience from skills — but always within same palette
- Border treatment slightly more prominent: 2px borders on featured cards, 1px on standard — creates hierarchy

### Layout
- Asymmetric more deliberately: hero could have a slight right-alignment of stats or a side element (without becoming centered); work section could have offset cards (some indented, some flush)
- White space more generous; sections could be closer together (96px) but with more internal breathing room
- Could include a narrow side column in some sections (e.g., a persistent "Technologies" or "Years" sidebar with scroll) — but only if it improves clarity, not for decoration
- Featured cards (Starrik, Churchera) could have more dominant presence — larger, with mockups full-width — while others stay compact

### Hero
- Could include a brief introductory paragraph with more personality — what drives the work (e.g., curiosity about real-time systems, commitment to accessibility, interest in authentication complexity)
- Could include a small technical signal (Next.js 16, TypeScript, design system contributions) in mono below headline
- CTAs same; could include a subtle secondary link ("Read about my approach → #about") for editorial flow
- No decorative images; rely on typography + structure + evidence

### Selected Work
- Largest visual treatment for Starrik and Churchera (mockups prominent, cards larger)
- Traytic described with structured feature list, possibly with a small technical detail highlight (auth flow, CSV import, pagination)
- QuizManiac / HustleLoop listed clearly but without artificial elevation — honest about evidence limits
- Could include brief "What this demonstrates" sub-label on each card: e.g., "Real-time interfaces + Firebase integration" (Starrik); "Responsive RBAC + financial data privacy" (Churchera); "Modern B2B admin + authentication + design system" (Traytic)
- No fabricated case studies; cards remain the deepest evidence level

### Experience
- Editorial formatting: each entry as a mini-article with bold company, role, dates, then 2–3 paragraphs of specific contribution (not bullet list)
- Could include brief reflection notes (not unsupported — only what can be inferred from resume): e.g., "Progressed from program-based development to production roles across three domains"
- Timeline visual optional — could use vertical line or simple chronological layout
- Education could be presented as part of growth narrative (education → first role → production roles)

### Skills
- Could present as a structured list with brief context linking skills to work: "Used at Traytic and Churchera" — but only if accurate
- Could skip category cards and use a more editorial list format (single column, bold category names, skills listed with brief descriptions)
- Emphasis on capability over inventory — explain which skills were applied to which problems

### Motion
- Slightly more editorial: sections could reveal with slightly longer duration (0.7s) and more noticeable easing — creates a sense of unfolding
- Hero entrance could be slightly more deliberate (longer stagger between elements — 0.15s delay between label, headline, subtext, CTAs, stats)
- Scroll reveals gentle and consistent; no abrupt jumps
- Reduced motion fully respected

### Responsive
- Same; editorial layout scales naturally to mobile (simpler: single column, full-width cards, stacked meta)
- Could include a sticky or floating navigation element at mobile (simpler — just navbar)

### Accessibility
- Editorial format must not sacrifice readability for style — body text must remain comfortable
- Section labels (mono, small) must maintain sufficient contrast
- No decorative elements that reduce text clarity

### Risks
- Could become too narrative / too long if sections expand — must maintain concise structure
- Editorial style requires very high-quality writing — if descriptions are weak, style amplifies weakness
- Dark section for rhythm must be carefully executed to maintain accessibility (must pass contrast tests)
- Risk of seeming "trying too hard" if editorial language feels performative — must stay honest

---

## 7. Comparative Analysis

| Dimension | Direction A (Terminal Precision) | Direction B (Material Evidence) | Direction C (Editorial / Story-First) |
|---|---|---|---|
| **Clarity** | High — direct, structured, no ambiguity | High — structured with material cues | Medium-High — depends on writing quality |
| **Technical credibility** | High — evidence-focused, precise tags, clear descriptions | High — feature breakdowns and technical details emphasized | High — if writing is specific; risk if generic |
| **Memorability** | Medium — clean, professional, restrained | High — distinctive material treatment; more unique | High — editorial voice stands out |
| **Evidence handling (uneven assets)** | Excellent — structured text carries weak projects honestly | Excellent — feature lists and technical markers provide evidence without fake visuals | Good — editorial writing can explain evidence gaps clearly |
| **Visual sophistication** | High — disciplined, minimal, refined | High — structured, intentional, craft-focused | High — depends on execution of editorial voice |
| **Recruiter usability** | Excellent — fast scan: identity → projects → experience → contact | Excellent — structured categories make scanning easy | Good — requires reading; may be slower for quick reviewers |
| **Engineering-lead usability** | Excellent — technical details visible immediately | Excellent — feature-level descriptions prominent | Good — details embedded in narrative |
| **Accessibility** | Excellent — minimal decorative elements, clear hierarchy | Excellent — structure maintained; markers must not interfere | Good — requires careful typography choices |
| **Implementation complexity** | Low — uses existing components with minimal change | Medium — requires structured card internals, timeline visuals, category markers | Medium — requires editorial writing quality; optional dark sections |
| **Risk of gimmickry** | Very low | Low | Medium — editorial voice can become performative if not authentic |
| **Evidence preservation** | Best — no invented visuals; text-dominant treatment for weak evidence | Best — structured evidence presentation | Good — writing can explain gaps honestly |

**Tradeoffs:**
- A is the safest — least risk, most direct, most aligned with current codebase. Best if goal is credibility and conversion without design risk.
- B is the most distinctive — creates a memorable visual identity around material/craft. Slightly more design effort (structured cards, timeline markers) but significantly more unique.
- C is the most ambitious — highest reward if writing and execution are exceptional; highest risk if they are mediocre. Requires the strongest content writing.

---

## 8. Recommended Direction — Direction A (Terminal Precision) with Direction B elements

**Recommendation:** **Direction A as base, with selective Direction B enhancements for evidence presentation.**

**Reasoning:**
- Direction A best supports the validated portfolio strategy: credible, technically focused, evidence-first, no seniority claims, minimal risk of gimmickry.
- It respects `DESIGN.md` directly (terminal lime, border-over-shadow, minimal, accessible).
- It handles uneven evidence best — structured text carries weak projects honestly without pretending visual equality.
- It requires least implementation change from current `components/` structure.
- Direction B's material-evidence elements (structured feature lists, timeline markers, category dots) can be adopted selectively without changing the overall philosophy.
- Direction C's editorial voice is valuable but requires writing quality that is outside the scope of current phase — can be adopted gradually through content refinement rather than visual direction change.

**Specific recommendation:**
- Use Direction A for overall philosophy (clean, precise, evidence-first)
- Incorporate Direction B's structured feature breakdowns for Traytic (and where useful for others) — not as a design overhaul but as card content enhancement
- Keep hero and layout exactly as Direction A describes
- Defer Direction C elements (editorial voice, dark rhythm sections, wider line-height) to content refinement rather than visual redesign

---

## 9. Proposed Visual Language (Direction A + B Enhancements)

### Typography direction
- Space Grotesk display (bold, tight tracking) for headings; Inter body (1.6 line-height); JetBrains Mono for meta, tags, years
- Hero: large bold headline left-aligned; subtext at lg; stats at xs mono
- Section headings: 3xl/4xl, tracking-tight, left-aligned
- Body: base/lg, comfortable reading

### Spacing philosophy
- 128px between major sections; 32–40px inside cards; 24px gaps
- Generous whitespace; no crowding
- Asymmetric in layout (not centered)

### Grid & container
- `max-w-4xl` container center
- 12-column grid for projects; 3-col for skills; 2-col for about
- Mobile: single column

### Color behavior
- Lime (`#C6FF00`) for buttons and focus only; never background at large scale
- Black/dark surfaces for hero or sections if rhythm demands; light default
- Neutral surfaces for cards; border defines separation
- Hover: border/text color shift; no shadow

### Border treatment
- `1px` border on cards and sections; 2px only on featured cards (B-inspired enhancement)
- Focus: 2px lime ring (`outline-ring/50`)
- Category dots: small lime dots beside feature categories (B-inspired)

### Surface / card treatment
- Background: `bg-background`; hover: `hover:bg-card` (subtle tonal shift)
- No shadow; border defines form
- Featured cards (Starrik, Churchera): slightly larger span, mockup at top
- Traytic: structured feature list with category markers — not mockup-driven
- QuizManiac/HustleLoop: concise cards with tech tags — no attempt to match visual weight of featured

### Imagery
- Starrik: mockup at top of card, full device presentation, with alt text
- Churchera: mockup at top, full device, with alt text
- Traytic: logo/brand graphic labeled clearly; feature list primary
- Others: no fabricated visuals; structured information primary

### Iconography
- Lucide icons (already in use) for social links, contact links, feature markers
- No decorative icon sets; no colorful icon walls
- Small lime dots for category markers (B enhancement)

### Button language
- Primary: `bg-[#C6FF00] text-[#0B0B0B] hover:bg-[#A3D600] font-semibold` — verified
- Secondary: outline with border; hover text shifts to primary
- Ghost/transparent with text shift
- Focus ring always visible

### Card language
- Domain (mono, small, lime-tinted or primary)
- Years (mono, small, muted)
- Title (display bold, tracking-tight)
- Description (2 lines, specific from resume)
- Role (small, muted)
- Tech tags (mono border, muted)
- External link (arrow, hover primary)
- For strong-evidence cards: mockup image at top; for structured cards: feature breakdown

---

## 10. Motion Language

### Principles (not implementation code)

- **Purpose-driven:** Entrance creates hierarchy; hover provides feedback; scroll indicates progress. No decoration.
- **Progressive disclosure:** Content reveals as user scrolls; no forced sequences.
- **Respect reduced motion:** All entrance and scroll animations disabled when `prefers-reduced-motion: reduce`.
- **Consistent easing:** `[0.22, 1, 0.36, 1]` for hero; ease-out for scroll; 200ms for hover.

### Entrance
- Hero: sequential stagger (label, headline, sub, CTAs, stats, scroll indicator) — 0.5–0.6s duration
- Sections: fade-up on viewport entry, 0.6s, stagger 0.12 between cards
- No splash / intro sequence

### Hover
- Cards: background `bg-card`, border darkens, text to primary — 200ms
- Buttons: background color shift — 200ms
- Links: color to primary — 200ms
- No scale/translate on cards (avoids layout shift)

### Scroll
- Lenis smooth scroll preserved; `scroll-padding-top` for fixed navbar (verified fix from DECISIONS.md)
- Sections fade in; no parallax overload (subtle on headings only if used)
- No scroll-jacking; native scroll preserved

### Interaction feedback
- Form validation: inline error messages (verified in `contact.tsx`)
- Submit: button state change, toast confirmation, reset
- Navigation: active state on current section (optional — not critical)

### Static elements
- Navigation, footer, contact links — always visible
- Section headings — static; only content reveals
- Mockup images — static; no animation on images

---

## 11. Evidence Presentation Strategy

### Per project (from CONTENT_EVIDENCE.md)

**Starrik (strong evidence):**
- Featured card with mockup at top
- Description: real-time delivery platform, vendor dashboards, Firebase integration
- Tech tags: React, Firebase, WebSocket (historical reference — verified), real-time tracking
- No metrics; no user counts; no "GPS events/day" without verification
- Safe: mockup + resume + collaboration note

**Churchera (strong evidence):**
- Featured card with mockup at top
- Description: responsive interfaces, RBAC architecture, Supabase real-time, financial data privacy
- Tech tags: Next.js, TailwindCSS, Zustand, Supabase, RBAC
- Note: Stripe historically mentioned but not in current resume — do not claim unless verified
- Safe: mockup + resume + responsible data handling

**Traytic (strong resume, weak visual):**
- Medium card; `traytic.png` clearly labeled; feature breakdown primary
- Features listed specifically: analytics (Recharts), plans management (sortable/searchable/paginated), agencies workspace (search/CSV/admin actions), authentication (TOTP/bot protection/international phone), design system contributions
- Tech: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts, Zod, Cloudflare Turnstile
- No claim of scale, users, or revenue

**QuizManiac (weak evidence):**
- Compact card; technology tags only (React, Vite, Firebase, TypeScript)
- Description: responsive quiz app with categories, Firebase auth/storage/leaderboards, desktop/mobile optimization
- No claim of popularity, users, or live usage
- No fabricated screenshot

**HustleLoop (weak evidence + team contribution):**
- Compact card; technology tags (React, Vite, TailwindCSS, Paystack, Etegram)
- Description: marketplace architecture with search/filter, multi-gateway payments, referral/commission dashboard, KYC onboarding — team collaboration noted
- No claim of solo ownership; no claim of growth metrics
- No fabricated screenshot

---

## 12. Responsive Strategy

### Desktop (>1024px)
- Full asymmetric layout: hero flush-left; 12-col project grid; 2-col about; 3-col skills; full-width experience
- Mockups displayed at full device size within cards
- Navigation horizontal with all links visible

### Tablet (768–1024px)
- Project cards stack to 2 columns; featured cards span more
- Skills: 2-col or stacked
- Experience: full-width; timeline line scales
- Navigation: horizontal if space; hamburger if needed
- Mockups scale to fit card width

### Mobile (<768px)
- All sections single-column; cards full-width
- Hero: stacked vertically; stats row wraps
- Mockups scale to full card width or become secondary (if space is tight)
- Navigation: hamburger menu (existing `navbar` component)
- Fonts scale smoothly; no fixed-width text blocks
- Touch targets: 48px+ for all interactive; form inputs touch-friendly
- Focus rings visible; no hidden focus

---

## 13. Accessibility Strategy

### Verified from code + DESIGN.md

- **Semantic:** `<section>`, `<nav>`, `<main>`, `<article>` (projects), `<header>`, `<footer>`, heading hierarchy strict
- **Keyboard:** All interactive elements navigable; tab order logical
- **Focus:** `outline-ring/50` (2px lime ring) visible on all interactive elements — verified in `globals.css`
- **Color:** All pairs pass WCAG AA per DESIGN.md; lime-300 only for button backgrounds with black text; never lime-300 as text
- **Reduced motion:** All Framer Motion animations must respect `prefers-reduced-motion`; implement fully across `motion-provider` and scroll hooks
- **Text scaling:** No fixed pixel sizes for body text; `rem`-based; readable at 200% zoom
- **Touch:** 48px touch targets; no small click areas
- **Alt text:** All mockup images get descriptive alt (e.g., "Starrik courier tracking platform shown on laptop and phone mockup")
- **Form:** Labels linked to inputs; error messages visible (verified in `contact.tsx`); validation with Zod

---

## 14. Decisions Requiring User Approval

Clearly separated — these should NOT be made autonomously:

1. **Final direction selection:** A / B-enhanced / C — recommendation is A with B elements, but user must confirm.
2. **Hero headline copy:** Current "I build scalable React and Next.js systems..." — confirm or refine.
3. **Whether to use large mockups for Starrik/Churchera:** Confirm placement (card top, hero background, or both).
4. **Traytic presentation:** Whether to feature with logo + feature list or keep compact — user's preference on visual weight for weakest visual evidence.
5. **Case study pages (`/work/[slug]`):** Confirm whether to create for verified projects; if yes, which and with what content.
6. **Live URL confirmation:** Confirm which project URLs are active; set in `projects.tsx`.
7. **Personal photo:** Optional; if provided, add to About; if not, design without.
8. **Major visual metaphor:** None proposed — no 3D, no decorative geometry — but confirm user is comfortable with minimal/no decorative elements.
9. **Motion intensity:** Confirm current fade-up / stagger level is acceptable; if more or less desired, adjust.

---

## 15. Deferred Decisions (From Blueprint)

Preserved from `PORTFOLIO_BLUEPRINT.md` §18 — not solved prematurely:

- Confirmed live URLs (Starrik, Churchera, Traytic, QuizManiac, HustleLoop)
- Confirmed project repository links (Starrik, Churchera, QuizManiac, HustleLoop)
- Case study creation (evidence-dependent)
- Additional project screenshots
- Personal photo (optional)
- Open-source links (unverified)
- Form backend delivery (existing toast + console — adequate for now)

---

## 16. Design Exploration Exit Criteria

Before moving to **DESIGN DIRECTION LOCK** (not implementation), the following must be true:

1. ✅ Three genuinely distinct directions documented (A, B, C — not surface variations)
2. ✅ All three respect `DESIGN.md` (palette, typography, layout, motion, accessibility)
3. ✅ All three align with validated positioning (Frontend Engineer, 2+ years, React/Next.js, no seniority inflation)
4. ✅ All claims verified against `CONTENT_EVIDENCE.md` (no fabricated screenshots, metrics, or outcomes)
5. ✅ Evidence handled honestly (Starrik/Churchera prominent; Traytic structured; others concise)
6. ✅ No seniority claims introduced (no "Senior", "Lead" headline, "Architect", "Architecture-first")
7. ✅ No implementation code modified (verified)
8. ✅ No dependencies installed (verified)
9. ✅ Decisions requiring approval clearly identified (§14)
10. ✅ Displacement documented: recommendation made (A + B), reasons stated, tradeoffs explained

---

## Final Verification Check

1. **Three directions genuinely distinct?** Yes — A (terminal precision/minimal), B (material craft/structured), C (editorial/story-first). Different philosophies, not color/spacing swaps.
2. **Respect `DESIGN.md`?** Yes — all use terminal lime, black/dark, border-over-shadow, Space Grotesk/Inter/JetBrains, reduced motion, WCAG pairs.
3. **Positioning verified?** Yes — all assume "Frontend Engineer — React/Next.js" with 2+ years, no seniority.
4. **Evidence verified?** Yes — references CONTENT_EVIDENCE.md for project evidence; no invented claims.
5. **No unsupported claims?** Yes — all descriptions reference resume or visible code; no metrics, clients, outcomes invented.
6. **No seniority inflation?** Yes — explicitly excluded in all three directions.
7. **No code changed?** Confirmed — document only.
8. **No dependencies?** Confirmed.
9. **No assets fabricated?** Confirmed — mockups referenced as existing; no new assets created.
10. **Approval decisions clear?** Yes — §14 lists 9 decisions requiring user input.

---

## Summary — Directions at a Glance

| | Direction A (Recommended) | Direction B (Material Craft) | Direction C (Editorial) |
|---|---|---|---|
| **Philosophy** | Terminal precision / evidence-first | Craft-focused / structured detail | Story-led / editorial voice |
| **Hero** | Clean typography, left-aligned, specific | Same content, larger visual weight | More personality, structured flow |
| **Work** | Mockups prominent (Starrik/Churchera); text for others | Mockups + structured feature lists + timeline markers | Editorial cards, descriptive writing |
| **Experience** | Timeline list (current) | Timeline with visual markers | Mini-articles with growth notes |
| **Motion** | Fade-up + stagger, restrained | Slightly more structured / marked | Longer unfold, more deliberate |
| **Risk** | Could feel too sparse | Could become too structured | Could feel performative if writing weak |
| **Best for** | Credibility, conversion, lowest risk | Memorability, craft identity | Distinction, editorial voice |

**Recommendation:** Direction A with selective Direction B enhancements (structured feature lists, timeline markers, category dots). This balances credibility with distinctiveness and minimizes implementation risk.

---

*Document created: 2026-09-25  
*No application code modified  
*No dependencies installed  
*No assets created  
*References: AGENTS.md, DESIGN.md, PORTFOLIO_BLUEPRINT.md, PORTFOLIO_POSITIONING_VALIDATION.md, CONTENT_EVIDENCE.md*
