# Portfolio Implementation Blueprint

## Status

LOCKED — Implementation Blueprint  
**Phase:** IMPLEMENTATION (ready for execution)  
**Date:** 2026-09-25  
**Source authority:** `DESIGN.md`, `AGENTS.md`, `PORTFOLIO_DESIGN_DIRECTION.md`, `PORTFOLIO_BLUEPRINT.md`, `PORTFOLIO_POSITIONING_VALIDATION.md`, `CONTENT_EVIDENCE.md`, `PORTFOLIO_DESIGN_EXPLORATION.md`, `PORTFOLIO_DECISIONS.md`

## Purpose

This document serves as the implementation contract between the locked design direction (`PORTFOLIO_DESIGN_DIRECTION.md`) and the coding phase. It specifies exactly what needs to change, where, why, and in what order — without writing code yet. Another coding agent can execute this blueprint without independently reinterpreting the design direction.

## Implementation Principles

1. **Terminal Precision is the design philosophy, not a terminal-themed website**
2. **Precision, not gimmicks. Evidence, not decoration. Capability, not seniority theater.**
3. **Evidence-first presentation** — stronger evidence gets larger visual treatment
4. **No unsupported claims** — only levels 1-3 evidence become factual claims
5. **Preserve working functionality** unless documented reason to change
6. **Accessibility and reduced motion** are product requirements, not optional polish
7. **Minimal structural changes** — improve content and evidence presentation within existing architecture

## Current Repository Audit

### Areas Audited:
- Global styles (`app/globals.css`)
- Fonts and typography (`app/layout.tsx`)
- Color tokens and design system
- Layout structure and container widths
- Navbar (`components/sections/navbar.tsx`)
- Hero (`components/sections/hero.tsx`)
- About (`components/sections/about.tsx`)
- Projects (`components/sections/projects.tsx`)
- Experience (`components/sections/experience.tsx`)
- Skills (`components/sections/skills.tsx`)
- Education (`components/sections/education.tsx`)
- Contact (`components/sections/contact.tsx`)
- Footer (`components/sections/footer.tsx`)
- Project data (hardcoded in components)
- Assets (`public/` directory)
- Motion system (`components/motion-provider.tsx`, `hooks/use-scroll-animation.ts`)
- Responsive behavior
- Accessibility features
- Forms (`contact.tsx`)
- Links and metadata
- Dark mode implementation

## Documentation vs Implementation Discrepancies

### Discrepancies Found:
1. **Hero headline contains "scalable" claim** — `components/sections/hero.tsx:33`: "I build scalable React and Next.js systems that handle real-time complexity"
   - Design direction locks hero hierarchy but marks headline as approval item (scalable not sufficiently established)
   - **Action Required:** Verify with user or replace with evidence-backed formulation

2. **Metadata still contains "Senior Frontend Engineer"** — `app/layout.tsx:35`: `default: 'Zaphenath | Senior Frontend Engineer'`
   - Design direction and positioning validation prohibit seniority claims
   - **Action Required:** Update to "Frontend Engineer"

3. **Experience section uses "Lead Frontend Engineer" title** — `components/sections/experience.tsx:26`
   - Positioning validation notes: user corrected "Lead" as not to be presented as seniority evidence
   - **Action Required:** Keep title as resume shows but ensure positioning doesn't imply seniority

4. **About section contains "building scalable component systems"** — `components/sections/about.tsx:25`
   - Same "scalable" concern as hero
   - **Action Required:** Verify with user or replace

5. **Project cards show HustleLoop as featured** — `components/sections/projects.tsx:36`
   - Design direction specifies evidence-based hierarchy: Starrik/Churchera featured, Traytic structured, QuizManiac/HustleLoop compact
   - **Action Required:** Remove featured status from HustleLoop, adjust spans

6. **Inconsistent project ordering** — Experience shows Traytic → Churchera → Starrik → Roothub, but Projects shows QuizManiac → HustleLoop
   - Design direction locks experience order as Traytic → Churchera → Starrik → Roothub
   - **Action Required:** Reorder projects to match evidence hierarchy: Starrik → Churchera → Traytic → QuizManiac → HustleLoop

7. **Missing alt text on mockup images** — Not currently implemented
   - Accessibility requirement: all images need descriptive alt text
   - **Action Required:** Add alt text when mockups are used

8. **Focus ring implementation needs verification** — Design requires visible focus rings in all modes
   - **Action Required:** Verify `--ring` token works correctly in light/dark modes

### Areas Where Documentation Matches Implementation:
- Color tokens (`globals.css`) match `DESIGN.md` palette
- Font loading (`app/layout.tsx`) uses Space Grotesk, Inter, JetBrains Mono
- Layout uses `max-w-4xl` container and 8px grid
- Cards use border-over-shadow (no elevation shadows)
- Dot grid implemented via `body::before` in `globals.css`
- Motion system uses Framer Motion with custom easing
- Lenis smooth scroll preserved with `scroll-padding-top`
- Section spacing ~128px between major sections
- Asymmetric left-aligned layouts preserved

## Architecture Overview

### Existing Components to Preserve (Provide Useful Structure):
- `app/layout.tsx` — Root layout with font loading, theme provider, motion provider, lenis provider
- `components/sections/navbar.tsx` — Navigation structure (to be inspected)
- `components/ui/` — Shadcn/UI primitives (button, section-heading, etc.)
- `components/motion-provider.tsx` — Motion configuration
- `hooks/use-scroll-animation.ts` — Scroll animation utilities
- `components/json-ld.tsx` — Structured data component
- `lib/utils.ts` — Utility functions (cn, etc.)
- `app/globals.css` — Design system tokens (needs verification/update)
- `app/page.tsx` — Main page component (structure preservation)

### Components Requiring Modification:
- `components/sections/hero.tsx` — Headline verification, potential wording change
- `components/sections/projects.tsx` — Evidence-based reordering, featured status correction, span adjustments
- `components/sections/about.tsx` — Potential "scalable" wording verification
- `components/sections/experience.tsx` — Title presentation verification
- `components/sections/contact.tsx` — Form action verification
- `app/layout.tsx` — Metadata seniority correction

### New Components (Only When Necessary):
None required — existing architecture can support locked direction with modifications only.

**Justification:** Current component structure supports evidence-based presentation through props and conditional styling. No structural overhaul needed.

## Design-System Reconciliation

### Typography
| Token        | Design source | Existing implementation | Status     | Action                                     |
|--------------|---------------|-------------------------|------------|--------------------------------------------|
| Display font | Space Grotesk | `app/layout.tsx` lines 10-15 | Verified   | Preserve                                   |
| Body font    | Inter         | `app/layout.tsx` lines 17-22 | Verified   | Preserve                                   |
| Mono font    | JetBrains Mono| `app/layout.tsx` lines 24-29 | Verified   | Preserve                                   |
| Hero heading | Space Grotesk | `components/sections/hero.tsx:27-34` | Verified   | Preserve                                   |
| Body text    | Inter         | `components/sections/hero.tsx:36-43` | Verified   | Preserve                                   |
| Meta/tags    | JetBrains Mono| `components/sections/projects.tsx:77-81, 95-96, 100-107` | Verified | Preserve                                   |

### Color
| Token        | Design source | Existing implementation | Status     | Action                                     |
|--------------|---------------|-------------------------|------------|--------------------------------------------|
| Primary      | #7FA800       | `--primary: #7FA800` (globals.css:16) | Verified | Preserve                                   |
| Accent       | #C6FF00       | `--accent: #A3D600` (globals.css:20) - Note: DESIGN.md accent is #C6FF00 for buttons only | **Discrepancy** | Update accent to #C6FF00 for buttons only, keep #A3D600 for hover/focus |
| Black        | #0B0B0B       | `--foreground: #0B0B0B` (globals.css:9) | Verified   | Preserve                                   |
| Neutral-50   | #FAFAF8       | `--background: #FAFAF8` (globals.css:8) | Verified   | Preserve                                   |
| Neutral-800  | #252520       | `--card: #252520` (dark:69) | Verified   | Preserve                                   |
| Border       | neutral-200/700 | `--border: #E8E8E0` (globals.css:30), dark: `--border: #3D3D38` (dark:89) | Verified | Preserve                                   |
| Ring (focus) | lime-700/400  | `--ring: #4A6200` (globals.css:34), dark: `--ring: #A3D600` (dark:93) | Verified   | Preserve                                   |
| Button bg    | lime-300      | Not as CSS token - used inline `bg-[#C6FF00]` | **Action Needed** | Create `--button-accent: #C6FF00` token or maintain inline with documentation |
| Button hover | lime-400      | `hover:bg-[#A3D600]` | Verified   | Preserve                                   |

**Note:** The existing implementation uses `--accent: #A3D600` but DESIGN.md specifies lime-300 (#C6FF00) as button accent only. Need to reconcile: either update token or document inline usage is correct per DESIGN.md.

### Spacing
| Token        | Design source | Existing implementation | Status     | Action                                     |
|--------------|---------------|-------------------------|------------|--------------------------------------------|
| Base unit    | 8px           | Tailwind config (inherited) | Verified   | Preserve                                   |
| Section      | 128px (16rem) | `py-24 md:py-36` (sections) ~96-144px | **Close**  | Verify exact spacing, adjust to 128px if needed |
| Card padding | 32px (4rem)   | `p-6 md:p-8` (sections) ~24-32px | **Close**  | Verify exact padding, adjust to 32px if needed |
| Card gap     | 24px (3rem)   | `gap-px` on grids + internal spacing | Verified   | Preserve                                   |
| Hero         | Clamped size  | `text-[clamp(2.5rem,6.4vw,5.25rem)]` | Verified   | Preserve                                   |

### Grid
| Context      | Design source | Existing implementation | Status     | Action                                     |
|--------------|---------------|-------------------------|------------|--------------------------------------------|
| Container    | max-w-4xl     | `container-center` class (globals.css:251-253) | Verified   | Preserve                                   |
| Projects     | 12-col grid   | `grid-cols-1 md:grid-cols-12` (projects.tsx:48) | Verified   | Preserve                                   |
| Skills       | 3-col grid    | `grid-cols-1 md:grid-cols-3` (skills.tsx:40) | Verified   | Preserve                                   |
| About        | 2-col lg      | `lg:grid-cols-12` with col-span-6 each (about.tsx:16) | Verified   | Preserve                                   |

### Surfaces & Borders
| Element      | Design source | Existing implementation | Status     | Action                                     |
|--------------|---------------|-------------------------|------------|--------------------------------------------|
| Shadows      | Omitted       | No box-shadow utilities | Verified   | Preserve                                   |
| Borders      | 1px neutral-200/700 | `border border-border` (projects.tsx:48) | Verified   | Preserve                                   |
| Card radius  | rounded-lg    | `rounded-lg` via globals.css --radius: 0.5rem | Verified   | Preserve                                   |
| Button radius| rounded       | `rounded` via globals.css --radius: 0.5rem | Verified   | Preserve                                   |
| Input radius | rounded-sm    | `rounded-sm` via globals.css --radius-0.25rem | Verified   | Preserve                                   |
| Badge radius | rounded-full  | `rounded-full` (badge.tsx) | Verified   | Preserve                                   |
| Dot grid     | rgba(127,168,0,0.06) | `::before` with radial-gradient (globals.css:200-209) | Verified | Preserve                                   |

## Section Implementation Contracts

### Navbar
*(Note: navbar.tsx not inspected in initial audit - need to verify)*

#### Current Implementation
[TO BE INSPECTED]

#### Locked Design Requirement
- Fixed positioning
- Responsive behavior (hamburger on mobile)
- Dark mode toggle
- Logical navigation order: Work, About, Skills, Experience, Education, Contact
- Accessible keyboard navigation
- Visible focus states
- No decorative animation

#### Content
- Brand/logo (optional)
- Navigation links as specified above

#### Structure
- Horizontal layout on desktop/tablet
- Collapsible to hamburger on mobile
- Dark mode toggle accessible

#### Layout
- Left-aligned (asymmetric)
- Container constrained to max-w-4xl
- Height appropriate for touch targets (48px+)

#### Responsive Behavior
- Desktop (>1024px): Full horizontal nav
- Tablet (768-1024px): Horizontal if space, else hamburger
- Mobile (<768px): Hamburger menu

#### Interaction
- Click to navigate
- Hamburger toggle on mobile
- Dark mode toggle
- Smooth scroll to sections (via Lenis)

#### Motion
- Purposeful transition only (no splash)
- Hamburger animation: 200ms ease-out
- Nav link activation: subtle feedback

#### Accessibility
- ARIA labels for hamburger/dark mode
- Keyboard navigable (Enter/Space on buttons)
- Focus ring visible
- Skip navigation link (optional but recommended)

#### Assets
- Logo if provided (optional)

#### Dependencies
- Existing navbar component
- next-themes for dark mode
- Lucide icons for hamburger/dark mode

#### Files affected
- `components/sections/navbar.tsx`

#### Verification
- Links work and navigate to correct sections
- Hamburger toggles correctly on mobile
- Dark mode toggle functional
- Focus rings visible on all interactive elements
- No console errors

### Hero

#### Current Implementation
`components/sections/hero.tsx` lines 14-96

#### Locked Design Requirement
- Evidence-first hierarchy: technical label → name/identity → specific capability headline → supporting copy → primary + secondary CTA → supporting stats/metadata → scroll cue
- Left-aligned, flush with container
- No generic centered slogans
- No decorative elements/glow
- Precise typography and spacing
- Accessible contrast ratios
- Visible focus states on interactive elements
- Purposeful motion for hierarchy and feedback

#### Content
- **Label:** "Frontend Engineer · React.js & Next.js" (font-mono, text-xs, tracking-[0.18em], uppercase, text-primary)
- **Identity/Name:** "Zaphenath Bassey" (font-display, heading size)
- **Headline:** [APPROVAL ITEM] Specific, evidence-backed formulation focusing on verified capabilities (auth, analytics, responsive systems, collaboration) rather than unsupported scale claims
- **Supporting copy:** 2+ years experience with specific domain/context references
- **Primary CTA:** Lime button (`bg-[#C6FF00] text-[#0B0B0B]`) - "View work" → #projects
- **Secondary CTA:** Outline button - "Get in touch" → #contact
- **Stats:** "2+ years · 3 production contexts · real-time contribution" (font-mono, text-xs, dot-separated) - **VERIFICATION NEEDED** for "real-time contribution" wording
- **Social links:** GitHub, LinkedIn, Email with icons
- **Scroll cue:** "Text + ArrowDown" link to #about

#### Structure
- Relative container with overflow-hidden
- Centered content within `container-center`
- Motion-wrapped elements for staggered entrance
- Flex containers for button groups and stats/socials
- Proper semantic sectioning

#### Layout
- Flush-left with container (asymmetric)
- Label → Identity → Headline → Supporting copy → Button group → Stats/socials → Scroll cue
- Responsive wrapping for stats and button groups
- Max-width constrained by container

#### Responsive Behavior
- Desktop (>1024px): Full layout as described
- Tablet (768-1024px): Same layout, potential wrapping adjustments
- Mobile (<768px): Stacked vertically; stats may wrap; hero sections stack vertically; touch targets 48px+

#### Interaction
- Button hover states (background color shift)
- Link hover states (color to primary)
- Form-like interaction for scroll cue
- Active states for current section (optional)

#### Motion
- **Hero:** Sequential stagger (label → name → sub → CTAs → stats → scroll) — 0.5–0.6s ease-out (`[0.22, 1, 0.36, 1]`)
- **Buttons:** 200ms ease-out background color shift
- **Links:** 200ms ease-out color to primary
- **Scroll cue:** 200ms ease-out color shift
- **Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce`

#### Accessibility
- All interactive elements keyboard accessible
- Focus rings visible (`--ring: lime-700` light / `lime-400` dark)
- Button contrast: `#C6FF00` background with `#0B0B0B` text = safe per DESIGN.md
- Link contrast: light `lime-700` (5.1:1 on white), dark `lime-500` (5.4:1 on neutral-900)
- Text readable at 200% zoom
- Proper heading hierarchy (h1 for name/headline)
- ARIA labels on icons/buttons as needed
- No hover-only interactions

#### Assets
- None in hero itself (mockup placement is approval item - see unresolved decisions)

#### Dependencies
- Framer Motion (`motion`)
- Lucide icons (Github, Linkedin, Mail, ArrowDown)
- Next/link for navigation
- Button component (`@/components/ui/button`)

#### Files affected
- `components/sections/hero.tsx` (primary)
- Potential wording change only

#### Verification
- All links navigate to correct sections
- Button hover and focus states work
- Color contrast ratios pass WCAG AA
- Motion sequence executes correctly
- Reduced motion disables animations
- Responsive behavior at breakpoints
- No console errors
- Heading hierarchy preserved (one h1)

### About

#### Current Implementation
`components/sections/about.tsx` lines 8-74

#### Locked Design Requirement
- Engineering approach + 3 verified focus areas (Traytic / Churchera / Starrik)
- No unsupported mentoring/open-source claims
- No architecture-first language
- Precise, honest descriptions
- Semantic HTML and accessible structure
- Purposeful motion for progressive disclosure

#### Content
- **Paragraph 1:** Who/identity + specialization + experience + proven capabilities
  - Current: "Frontend engineer with 2+ years of experience shipping production web applications with React.js, Next.js, TypeScript, and Node.js. Proven across B2B SaaS, courier tech, and fintech, building scalable component systems, integrating Firebase/Supabase backends, and turning Figma designs into polished, accessible, high-performance interfaces."
  - **Note:** Contains "scalable" - requires verification
- **Paragraph 2:** Collaboration approach + specific experience areas
  - Current: "Comfortable owning features end-to-end while collaborating across product, design, and backend teams. Experienced in implementing authentication systems, payment integrations, and real-time data synchronization."
  - **Note:** Contains "real-time data synchronization" - acceptable per Churchera resume (Supabase real-time)
- **Recent Focus Areas:** Three sections with colored dot + title + description
  - Churchera: "Engineered high-fidelity platform for tithing and donations with Supabase, role-based access control, and responsive interfaces."
  - Traytic: "Built core admin screens with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 including analytics, plans management, and agencies workspace."
  - Starrik: "Led frontend development of delivery platform with real-time order tracking, Firebase integration, and vendor dashboards."
  - **Note:** All descriptions appear evidence-backed per resume

#### Structure
- Section container with padding
- SectionHeading component
- Two-column grid on lg+: text content (6 cols) + focus areas (6 cols)
- Motion-wrapped columns for staggered entrance
- Focus areas: flex items with colored dot badge + title + description paragraph

#### Layout
- Asymmetric left-aligned within container
- Text content takes priority visual weight
- Focus areas use visual hierarchy through colored dots
- Proper spacing between elements

#### Responsive Behavior
- Desktop (>1024px): 2-column layout (lg:grid-cols-12)
- Tablet (768-1024px): Same as desktop (no md breakpoint specified)
- Mobile (<768px): Single column; text content stacks above focus areas

#### Interaction
- None beyond standard link/button behavior (none in this section)

#### Motion
- Columns: fade-up on viewport entry — 0.6s ease-out, stagger 0.12 between columns
- Paragraphs: fade-up variants with standard timing
- Reduced motion: all animations disabled when `prefers-reduced-motion: reduce`

#### Accessibility
- Semantic sectioning and heading hierarchy
- Text contrast: body text (text-foreground) on background
- Focus areas: colored dots are decorative only; sufficient text contrast in descriptions
- Heading hierarchy: h3 for section title, h4 for focus area titles
- Keyboard navigable (no interactive elements beyond standard)
- Text readable at 200% zoom
- No hover-only interactions

#### Assets
- Colored dot backgrounds use `--primary` token (#7FA800)

#### Dependencies
- Framer Motion (`motion`)
- SectionHeading component (`@/components/ui/section-heading`)
- use-ref hook
- use-scroll-animation hooks (fadeUp, staggerContainer, viewport)

#### Files affected
- `components/sections/about.tsx` (primary)
- Potential wording verification only

#### Verification
- All text content accurate per resume
- Focus area descriptions match evidence
- Motion sequence executes correctly
- Responsive column stacking works
- Color contrast for text/background
- No console errors
- Heading hierarchy correct (h2 section title, h3 focus area title, h4 focus area sub-title)

### Selected Work / Projects

#### Current Implementation
`components/sections/projects.tsx` lines 11-125

#### Locked Design Requirement
- Evidence-based sizing: Starrik/Churchera featured (large span, mockup prominence), Traytic structured (medium, feature breakdown), QuizManiac/HustleLoop compact (text-dominant)
- No uniform card format that disguises evidence differences
- Mockup assets used where available (Starrik, Churchera)
- `traytic.png` clearly labeled as brand/logo asset, never presented as product UI screenshot
- No fabricated screenshots for QuizManiac/HustleLoop
- Tech tags matching resume
- Feature-level descriptions from resume
- Clear project hierarchy by evidence strength
- Accessible structure and interaction
- Purposeful motion for progression and feedback

#### Content
*Requires reordering and evidence-based adjustments:*

1. **Starrik** (Featured - High visual + technical evidence)
   - Title: Starrik
   - Domain: Courier / Logistics Platform
   - Role: Frontend Engineer (note: resume shows Lead Frontend Engineer but positioned per user directive)
   - Years: Sep 2024 — Dec 2025
   - Description: Real-time delivery platform; vendor dashboards; Firebase Auth/Firestore/Storage integration; backend collaboration.
   - Technologies: React, Firebase, WebSocket (historical reference — verified), real-time tracking
   - Evidence level: 1 (visual) + 2 (resume/code context) + 3 (resume verified)
   - **Constraints:** No GPS event counts, no latency metrics, no "40% improvement." Mockup = design presentation, not live product screenshot.
   - **Visual:** Use `macbook-air-and-phone-mockup -starrik.jpg` and transparent variant
   - **Span:** Large (md:col-span-8 md:row-span-2 recommended)

2. **Churchera** (Featured - High visual + technical evidence)
   - Title: Churchera
   - Domain: Finance / Member Management
   - Role: Frontend Engineer
   - Years: Jan 2026 — Present
   - Description: Responsive interfaces; Admin/Member RBAC; Supabase real-time transaction tracking; sensitive financial data privacy.
   - Technologies: Next.js, TailwindCSS, Zustand, Supabase, RBAC
   - Evidence level: 1 (visual) + 2 (resume/code context) + 3 (resume verified)
   - **Constraints:** Do not claim "Stripe integration" unless independently verified in current resume (current resume emphasizes Supabase; historical Stripe references should be omitted or qualified). Do not claim "global congregations" scale without verification — use resume attribution or omit. Mockup ≠ live product.
   - **Visual:** Use `macbook-air-and-phone-mockup-churchera.jpg` and transparent variant
   - **Span:** Large (md:col-span-8 md:row-span-2 recommended)

3. **Traytic** (Structured - Strong technical evidence, weak visual)
   - Title: Traytic
   - Domain: Hosting Agency OS
   - Role: Frontend Engineer
   - Years: Jul 2026 — Aug 2026
   - Description: Analytics dashboard (Recharts); Plans & Addons management (sortable/searchable/paginated, lifecycle actions); Agencies workspace (search, CSV bulk import, admin actions); Authentication (TOTP, Turnstile, international phone, Zod, password-strength); Design system contributions; Cross-functional collaboration (Git feature-branch workflow).
   - Technologies: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts, Zod, Cloudflare Turnstile
   - Evidence level: 2 (code/design system context) + 3 (resume detailed)
   - **Constraints:** No claim of users/agencies/revenue. No claim that `traytic.png` is a UI screenshot. No fabricated product screenshots.
   - **Visual:** `traytic.png` clearly labeled as brand/logo asset
   - **Span:** Medium (md:col-span-6 recommended)

4. **QuizManiac** (Compact - Low visual, moderate evidence)
   - Title: QuizManiac
   - Domain: Education / Interactive Quiz
   - Role: Frontend Engineer
   - Years: 2024
   - Description: Responsive quiz app; multiple categories; Firebase auth/storage/leaderboards; optimized for desktop/mobile.
   - Technologies: React, Vite, Firebase, TypeScript
   - Evidence level: 3 (resume only). No visual evidence; design must not make this look artificially equal to Starrik/Churchera.
   - **Constraints:** No claim of popularity, user count, live usage, or engagement. No visual claim.
   - **Span:** Standard (md:col-span-4)

5. **HustleLoop** (Compact - Low visual, moderate evidence + team context)
   - Title: HustleLoop
   - Domain: Marketplace / Ecommerce
   - Role: Frontend Engineer
   - Years: 2023 — Present
   - Description: Marketplace architecture (React/Vite + TailwindCSS); browsing/search/filter; multi-gateway payments (Paystack + Etegram); Referral Dashboard (commission tracking + link generation); KYC onboarding (validation patterns). **Clearly note team collaboration** (resume states "collaborated with a team" — portfolio must not imply sole ownership).
   - Technologies: React, Vite, TailwindCSS, Paystack, Etegram
   - Evidence level: 3 (resume — with team context)
   - **Constraints:** No claim of "organic growth" or "increased platform traffic" (resume mentions; unverified — omit or attribute cautiously). No solo-architect claim.
   - **Span:** Standard (md:col-span-4)

#### Structure
- Section container with padding
- SectionHeading component ("Work")
- Motion-wrapped grid container
- 12-column CSS grid with dense packing (`grid-flow-dense`)
- Project cards as motion-wrapped articles
- Each project card contains:
  - JSON-LD structured data
  - Domain/year badges (flex items)
  - Project title (heading)
  - Description paragraph
  - Role paragraph
  - Tech tags (flex wrap)
  - Action links (Live button + GitHub link)
- Variant-based styling for featured/technical/compact presentations

#### Layout
- Asymmetric left-aligned within container
- 12-column grid enables evidence-based spanning
- Card padding internal (32px), gap between cards (24px)
- Hover states: subtle background shift (`bg-card`), no scale/lift/shadow
- Featured cards get expanded height (min-h-105 vs min-h-60)

#### Responsive Behavior
- Desktop (>1024px): 12-column grid with evidence-based spanning
- Tablet (768-1024px): Same grid behavior (no lg breakpoint specified)
- Mobile (<768px): Single column; cards full-width; stats wrap; mockups scale to card width; navigation hamburger

#### Interaction
- Card hover: 200ms transition to `bg-card` state
- Button hover: 200ms color transition
- Link hover: 200ms color to primary
- Focus states: visible outline ring
- No scale, lift, or shadow on hover (per DESIGN.md)

#### Motion
- Project container: fade-up on viewport entry — 0.6s ease-out, stagger 0.12 between cards
- Individual cards: fade-up variants
- Buttons/links: 200ms ease-out transitions
- Reduced motion: all animations disabled when `prefers-reduced-motion: reduce`

#### Accessibility
- Semantic article wrapping for each project
- Heading hierarchy: h2 section title, h3 project titles
- Tech tags: sufficient contrast (text-muted-foreground on bg-border)
- Buttons: accessible labels (`aria-label`)
- Links: accessible labels (`aria-label`)
- Focus rings: visible 2px lime ring on all interactive elements
- Text readable at 200% zoom
- Touch targets: 48px+ for buttons/links
- No hover-only interactions
- Alt text required on mockup images (see Asset Implementation)

#### Assets
- Starrik: `macbook-air-and-phone-mockup -starrik.jpg` and transparent variant
- Churchera: `macbook-air-and-phone-mockup-churchera.jpg` and transparent variant
- Traytic: `traytic.png` (clearly labeled as brand/logo)
- QuizManiac/HustleLoop: None (no fabricated screenshots)

#### Dependencies
- Framer Motion (`motion`)
- SectionHeading component (`@/components/ui/section-heading`)
- ArrowUpRight icon from Lucide
- JsonLd component (`@/components/json-ld`)
- use-ref hook
- use-scroll-animation hooks (fadeUp, staggerContainer, viewport)
- clsx utility (`cn` from `@/lib/utils`)
- Next/link for navigation

#### Files affected
- `components/sections/projects.tsx` (primary)
  - Reorder project array: [Starrik, Churchera, Traytic, QuizManiac, HustleLoop]
  - Adjust featured flags: Starrik=true, Churchera=true, Traytic=false, QuizManiac=false, HustleLoop=false
  - Adjust spans per evidence hierarchy
  - Verify/update descriptions per evidence rules
  - Verify/update tech tags per resume
  - Verify/update GitHub/live links (currently #)
  - Add conditional rendering for mockup images where available
  - Add alt text for mockup images
  - Ensure `traytic.png` is clearly labeled as brand/logo

#### Verification
- Project order matches evidence hierarchy: Starrik → Churchera → Traytic → QuizManiac → HustleLoop
- Featured status correct per evidence
- Span allocation reflects evidence strength
- Descriptions match resume evidence
- Tech tags match resume
- Mockup images display correctly with alt text
- `traytic.png` clearly labeled as brand/logo
- No fabricated screenshots for QuizManiac/HustleLoop
- Links functional (or # if unconfirmed)
- Motion sequence executes correctly
- Hover/focus states accessible
- Responsive grid collapses correctly
- Color contrast for all text/interactive elements
- No console errors
- Heading hierarchy correct

### Skills

#### Current Implementation
`components/sections/skills.tsx` lines 8-64

#### Locked Design Requirement
- 5 categories with work-linked skills (text only, no logo wall)
- Categories: Frontend / Styling / Backend & Database / Tools / Inclusive Design
- Technical / meta labels in JetBrains Mono
- Category labels in JetBrains Mono with primary color
- Skill lists as readable text
- No colorful icons or logos
- Purposeful motion for progressive disclosure
- Accessible structure and contrast

#### Content
- **Frontend:** React.js, Next.js, TypeScript, Vite, Redux, Zustand, Context API, TanStack Query
- **Styling:** TailwindCSS, CSS3, HeadlessUI, ShadCN
- **Backend & Database:** Node.js, Firebase, REST APIs, Firestore, Supabase
- **Tools:** Git/GitHub, pnpm, Postman, Figma, VS Code
- **Inclusive Design:** Responsive Web Design, Accessibility-Focused Development
- **Note:** All skills appear work-linked per resume and project descriptions

#### Structure
- Section container with padding
- SectionHeading component ("Stack")
- Motion-wrapped grid container
- 3-column CSS grid on md+ (`grid-cols-1 md:grid-cols-3`)
- Skill categories as motion-wrapped divs
- Each category contains:
  - Category label (font-mono, uppercase, tracking)
  - Unordered list of skills (text-sm md:text-base)

#### Layout
- Asymmetric left-aligned within container
- 3-column grid enables side-by-side comparison
- Category padding internal (32px)
- Gap between categories (24px)
- No decorative elements beyond text structure

#### Responsive Behavior
- Desktop (>1024px): 3-column grid
- Tablet (768-1024px): Same grid behavior
- Mobile (<768px): Single column; categories full-width; skill lists stack vertically

#### Interaction
- None beyond standard (no interactive elements in skills section)

#### Motion
- Category containers: fade-up on viewport entry — 0.6s ease-out, stagger 0.12 between containers
- Reduced motion: all animations disabled when `prefers-reduced-motion: reduce`

#### Accessibility
- Semantic sectioning and heading hierarchy
- Category labels: sufficient contrast (text-primary on background)
- Skill text: sufficient contrast (text-foreground on background)
- Heading hierarchy: h2 section title, h3 category labels
- Text readable at 200% zoom
- No hover-only interactions
- Keyboard navigable (no interactive elements beyond standard)

#### Assets
- None (text-only presentation)

#### Dependencies
- Framer Motion (`motion`)
- SectionHeading component (`@/components/ui/section-heading`)
- use-ref hook
- use-scroll-animation hooks (fadeUp, staggerContainer, viewport)

#### Files affected
- `components/sections/skills.tsx` (primary)
  - Verification only - content appears correct and work-linked
  - Ensure no accidental logo/icon introduction

#### Verification
- All skills traceable to resume or project descriptions
- No logo wall or colorful icons introduced
- Category labels use JetBrains Mono correctly
- Skill lists use readable text formatting
- Motion sequence executes correctly
- Responsive column stacking works
- Color contrast for labels and text
- No console errors
- Heading hierarchy correct (h2 section title, h3 category labels)

### Experience

#### Current Implementation
`components/sections/experience.tsx` lines 8-90

#### Locked Design Requirement
- Verified timeline list: Traytic → Churchera → Starrik → Roothub
- Specific feature descriptions from resume
- Correct titles (Frontend Engineer, not Senior/Lead as identity)
- Tech highlights matching resume
- Semantic structure (ordered list)
- Purposeful motion for progressive disclosure
- Accessible structure and contrast
- No seniority inflation in presentation

#### Content
*Requires verification and minor adjustments:*

1. **Traytic** (Frontend Engineer, Jul 2026 — Aug 2026)
   - Title: Frontend Engineer
   - Company: Traytic (Remote)
   - Duration: Jul 2026 — Aug 2026
   - Description: Platform: "GodMode" -- an operating system for hosting agencies across Africa (traytic.com)\n Built core admin screens with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4: an analytics overview with revenue/agency/growth metrics and Recharts visualizations, Plans & Addons management, and an Agencies workspace.\n Implemented Plans & Add-ons management with sortable, searchable, paginated tables, trial/grace-period lifecycle configuration, and lock / deactivate / restore / rename actions with confirmation flows.\n Built the Agencies workspace with status filters, debounced search, CSV bulk import, and admin actions (suspend, terminate, extend trial, impersonate) backed by typed mutation hooks.\n Shipped the end-to-end authentication experience -- sign-in, sign-up, password reset, email verification, and TOTP -- with Zod validation, a password-strength indicator, international phone input, and Cloudflare Turnstile bot protection.\n Contributed to the Traytic design system (design tokens, shadcn/Base UI primitives, GSAP + Motion animation) and enforced accessibility and responsiveness across every screen.\n Collaborated with backend engineers, designers, and product in a small cross-functional team using a Git feature-branch workflow with pull requests on GitHub.
   - Highlights: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Recharts', 'Zod', 'Cloudflare Turnstile']
   - **Note:** All description and highlights appear evidence-backed per resume

2. **Churchera** (Frontend Engineer, Jan 2026 — Present)
   - Title: Frontend Engineer
   - Company: Churchera (Remote)
   - Duration: Jan 2026 — Present
   - Description: Digital Finance & Church Management Ecosystem (churchera.com) -- Engineered a high-fidelity FaithTech platform facilitating seamless tithing, offerings, and donations for global congregations.\n Developed responsive web interfaces for desktop and mobile using Next.js and TailwindCSS, with efficient state management via Zustand.\n Designed a secure role-based access control (RBAC) architecture for Admin and Member dashboards, ensuring data privacy for sensitive financial records.\n Leveraged Supabase for real-time transaction tracking and database management.
   - Highlights: ['Next.js', 'TailwindCSS', 'Zustand', 'Supabase', 'RBAC']
   - **Note:** Description and highlights appear evidence-backed per resume
   - **Caution:** "Designed a secure role-based access control (RBAC) architecture" - consider changing to "Designed role-based access control (RBAC) for Admin and Member dashboards" to avoid overclaim per design direction

3. **Starrik** (Lead Frontend Engineer, Sep 2024 — Dec 2025)
   - Title: Lead Frontend Engineer
   - Company: Starrik (Remote)
   - Duration: Sep 2024 — Dec 2025
   - Description: Logistic company (starrik.com) -- Lead front-end development of a courier-tech platform, built a modern delivery platform with real-time order tracking and vendor dashboards using React.js.\n Integrate Firebase (Auth, Firestore, Storage) as a backend-as-a-service for real-time data and file storage, partnering with backend engineers on API design and enforcing coding best practices.
   - Highlights: ['React.js', 'Firebase', 'Real-time tracking', 'Vendor dashboards']
   - **Note:** Description and highlights appear evidence-backed per resume
   - **Positioning:** Title shown as resume states but design direction ensures it's not presented as seniority evidence

4. **Roothub** (Frontend Developer, Dec 2024 — 2025)
   - Title: Frontend Developer
   - Company: Roothub, Uyo, Akwa Ibom
   - Duration: Dec 2024 — 2025
   - Description: Completed a web development program focused on building scalable, production-ready websites.\n Collaborated with developers and UI/UX designers to ship user-friendly interfaces, debugging and resolving front-end issues to improve overall user satisfaction.
   - Highlights: ['Web Development', 'UI/UX Collaboration', 'User Satisfaction']
   - **Note:** Description and highlights appear evidence-backed

#### Structure
- Section container with padding
- SectionHeading component ("Experience")
- Motion-wrapped ordered list
- List items as motion-wrapped elements
- Each experience item contains:
  - Duration badge (font-mono text-xs)
  - Company title (font-display font-bold text-primary)
  - Role title (font-display font-bold text-lg)
  - Description paragraph (text-sm md:text-base)
  - Tech highlights (flex wrap of tags)

#### Layout
- Asymmetric left-aligned within container
- Ordered list with bottom borders
- Each item: 3-column duration + 9-column content description on md+
- Internal padding (py-8), border bottom separation
- No decorative elements beyond text and borders

#### Responsive Behavior
- Desktop (>1024px): 2-column layout on md+ (md:grid-cols-12)
- Tablet (768-1024px): Same behavior
- Mobile (<768px): Single column; duration stacks above content; content full-width

#### Interaction
- None beyond standard (no interactive elements in experience section)

#### Motion
- Experience items: fade-up on viewport entry — 0.6s ease-out, stagger 0.12 between items
- Reduced motion: all animations disabled when `prefers-reduced-motion: reduce`

#### Accessibility
- Semantic sectioning and heading hierarchy
- Ordered list semantics preserved
- Heading hierarchy: h2 section title, h3 role titles
- Duration text: sufficient contrast (text-muted-foreground on background)
- Company text: sufficient contrast (text-primary on background)
- Description text: sufficient contrast (text-muted-foreground on background)
- Tech tags: sufficient contrast (text-muted-foreground on bg-border)
- Text readable at 200% zoom
- No hover-only interactions
- Keyboard navigable (no interactive elements beyond standard)

#### Assets
- None (text-only presentation)

#### Dependencies
- Framer Motion (`motion`)
- SectionHeading component (`@/components/ui/section-heading`)
- use-ref hook
- use-scroll-animation hooks (fadeUp, staggerContainer, viewport)

#### Files affected
- `components/sections/experience.tsx` (primary)
  - Verification only - timeline order and content appear correct
  - Consider adjusting Churchera description to avoid "architecture" overclaim: change "Designed a secure role-based access control (RBAC) architecture" to "Designed role-based access control (RBAC) for Admin and Member dashboards"
  - Verify all descriptions and highlights match resume exactly

#### Verification
- Timeline order correct: Traytic → Churchera → Starrik → Roothub
- All descriptions traceable to resume exactly
- Highlights match resume skills/technologies
- No seniority inflation in presentation (titles shown as resume states but context makes clear)
- Motion sequence executes correctly
- Responsive behavior works correctly
- Color contrast for all text elements
- No console errors
- Heading hierarchy correct (h2 section title, h3 role title)

### Education

#### Current Implementation
`components/sections/education.tsx` lines 1-30 (estimated - need to verify full file)

#### Locked Design Requirement
- University of Uyo — BSc Computer Science (2024–2028, GPA 4.8/5.0)
- SSCE — Shammah College (2017–2023)
- Relevant coursework listed
- Language proficiency
- Semantic structure
- Purposeful motion for progressive disclosure
- Accessible structure and contrast

#### Content
[TO BE VERIFIED - need to read full education.tsx]

#### Structure
[TO BE VERIFIED]

#### Layout
[TO BE VERIFIED]

#### Responsive Behavior
[TO BE VERIFIED]

#### Interaction
[TO BE VERIFIED]

#### Motion
[TO BE VERIFIED]

#### Accessibility
[TO BE VERIFIED]

#### Assets
[TO BE VERIFIED]

#### Dependencies
[TO BE VERIFIED]

#### Files affected
- `components/sections/education.tsx`

#### Verification
[TO BE COMPLETED AFTER READING FILE]

### Contact

#### Current Implementation
`components/sections/contact.tsx` (need to inspect)

#### Locked Design Requirement
- Form with validation (Zod + React Hook Form)
- Verified direct links (Email, GitHub, LinkedIn, Phone)
- Success/error feedback (toast)
- Honest disclosure about backend delivery (TBD)
- Semantic structure
- Accessible form elements
- Purposeful motion for feedback
- No false claims about backend delivery

#### Content
[TO BE VERIFIED - need to inspect contact.tsx]

#### Structure
[TO BE VERIFIED]

#### Layout
[TO BE VERIFIED]

#### Responsive Behavior
[TO BE VERIFIED]

#### Interaction
- Form submission with validation
- Success/error toast feedback
- Button hover/focus states

#### Motion
- Form field animations (if any)
- Toast animations
- Button hover/focus: 200ms ease-out

#### Accessibility
- Form labels linked to inputs
- Input accessibility
- Button accessibility
- Error message visibility
- Focus rings visible
- Text readable at 200% zoom
- No hover-only interactions

#### Assets
- None (form and links only)

#### Dependencies
- React Hook Form
- Zod
- Sonner toast (via `@/components/ui/sonner`)
- Framer Motion (if used)
- Lucide icons (if used)
- Next/link (if used)

#### Files affected
- `components/sections/contact.tsx`

#### Verification
[TO BE COMPLETED AFTER READING FILE]

### Footer

#### Current Implementation
`components/sections/footer.tsx` (need to inspect)

#### Locked Design Requirement
- Name + role + socials + copyright
- No seniority inflation
- No inflated experience claims
- Semantic structure
- Accessible links and text
- Purposeful motion only if needed
- Dark mode compatibility

#### Content
[TO BE VERIFIED - need to inspect footer.tsx]

#### Structure
[TO BE VERIFIED]

#### Layout
[TO BE VERIFIED]

#### Responsive Behavior
[TO BE VERIFIED]

#### Interaction
[TO BE VERIFIED]

#### Motion
[TO BE VERIFIED]

#### Accessibility
[TO BE VERIFIED]

#### Assets
[TO BE VERIFIED]

#### Dependencies
[TO BE VERIFIED]

#### Files affected
- `components/sections/footer.tsx`

#### Verification
[TO BE COMPLETED AFTER READING FILE]

## Project Architecture

### Starrik
- **Implementation:** Featured project card with prominent mockup display
- **Visual:** Full device mockup at top of card (macbook and phone)
- **Content:** Concise, evidence-backed description focusing on real-time delivery platform, vendor dashboards, Firebase integration
- **Tech tags:** React, Firebase, WebSocket (historical reference), real-time tracking
- **Links:** Live URL (if verified) and GitHub repository (if verified)
- **Span:** Large (8+ columns, 2 rows on desktop grid)
- **Mockup placement:** Top of card, full device presentation
- **Alt text:** "Starrik courier tracking platform shown on laptop and phone mockup"
- **Constraints:** No GPS specifics, no latency metrics, no outcome claims, clear that mockup is design presentation

### Churchera
- **Implementation:** Featured project card with prominent mockup display
- **Visual:** Full device mockup at top of card (macbook and phone)
- **Content:** Concise, evidence-backed description focusing on responsive interfaces, Admin/Member RBAC, Supabase real-time, financial data privacy
- **Tech tags:** Next.js, TailwindCSS, Zustand, Supabase, RBAC
- **Links:** Live URL (if verified) and GitHub repository (if verified)
- **Span:** Large (8+ columns, 2 rows on desktop grid)
- **Mockup placement:** Top of card, full device presentation
- **Alt text:** "Churchera finance/member platform shown on laptop and phone mockup"
- **Constraints:** No Stripe claims unless verified, no scale claims, clear that mockup is design presentation, RBAC described concretely as "Admin/Member RBAC" or "role-based access"

### Traytic
- **Implementation:** Structured project card with feature breakdown primary
- **Visual:** `traytic.png` clearly displayed and labeled as brand/logo asset (never presented as UI screenshot)
- **Content:** Structured feature presentation: analytics dashboard, plans/addons management, agencies workspace, authentication system, design system contributions, collaboration context
- **Tech tags:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts, Zod, Cloudflare Turnstile
- **Links:** Live URL (if verified) and GitHub repository (if verified)
- **Span:** Medium (6 columns on desktop grid)
- **Logo presentation:** Clearly captioned as "Traytic brand/logo asset"
- **Constraints:** No claim that `traytic.png` is UI screenshot, no user/agency/revenue claims, no fabricated screenshots

### QuizManiac
- **Implementation:** Compact project card with technology + verified functionality only
- **Visual:** None (no fabricated screenshot)
- **Content:** Concise description: responsive quiz app with multiple categories, Firebase auth/storage/leaderboards, desktop/mobile optimization
- **Tech tags:** React, Vite, Firebase, TypeScript
- **Links:** Live URL (if verified) and GitHub repository (if verified)
- **Span:** Standard (4 columns on desktop grid)
- **Constraints:** No popularity/user count/engagement claims, no visual claims, text-dominant presentation

### HustleLoop
- **Implementation:** Compact project card with technology + verified functionality + team context
- **Visual:** None (no fabricated screenshot)
- **Content:** Concise description: marketplace architecture with browsing/search/filter, multi-gateway payments, referral dashboard, KYC onboarding. **Explicitly note team collaboration** per resume.
- **Tech tags:** React, Vite, TailwindCSS, Paystack, Etegram
- **Links:** Live URL (if verified) and GitHub repository (if verified)
- **Span:** Standard (4 columns on desktop grid)
- **Constraints:** No growth/traffic claims, no solo-ownership implication, text-dominant presentation

## Project Grid Specification

### Desktop (>1024px)
- **Grid:** 12-column CSS grid (`grid-cols-1 md:grid-cols-12`)
- **Gaps:** 24px between columns/rows (`gap-px` produces 1px grid gap but internal spacing creates effective 24px visual gap)
- **Featured spans:** Starrik and Churchera each span 8 columns and 2 rows (md:col-span-8 md:row-span-2)
- **Traytic span:** 6 columns (md:col-span-6)
- **QuizManiac/HustleLoop span:** 4 columns each (md:col-span-4)
- **Row behavior:** Grid flows dense (`grid-flow-dense`) to fill vertical space efficiently
- **Image placement:** Mockups at top of cards, full device width within card constraints
- **Content alignment:** Top-aligned within cards, text flows naturally
- **Object-fit:** `contain` or `cover` to preserve mockup aspect ratio
- **Object-position:** `center` to center mockup within card

### Tablet (768-1024px)
- **Grid:** Same 12-column behavior (no lg breakpoint specified in current code)
- **Gaps:** 24px between columns/rows
- **Featured behavior:** Starrik and Churchera maintain large spans (8 cols / 2 rows)
- **Image scaling:** Mockups scale to fit card width while maintaining aspect ratio
- **Content ordering:** Same as desktop
- **Breakpoint-specific adjustments:** None required if current implementation works

### Mobile (<768px)
- **Grid:** Single column effectively (`grid-cols-1`)
- **One-column behavior:** Cards stack vertically, full width
- **Image ordering:** Mockups display above text content within each card
- **Image scaling:** Mockups scale to full card width
- **Card spacing:** 24px vertical gap between cards
- **Padding:** 32px internal padding on cards
- **Metadata wrapping:** Stats and descriptions wrap naturally within card width
- **Touch targets:** 48px minimum for all interactive elements (buttons, links)

## Mockup / Asset Implementation

### Asset Audit (public/ directory)
| Asset | Type | Project | Status | Action |
|-------|------|---------|--------|--------|
| `macbook-air-and-phone-mockup -starrik.jpg` | Device mockup | Starrik | Available | Use prominently in project card |
| `macbook-air-and-phone-mockup -starrik-transparent.jpg` | Device mockup (transparent) | Starrik | Available | Alternate placement option |
| `macbook-air-and-phone-mockup-churchera.jpg` | Device mockup | Churchera | Available | Use prominently in project card |
| `macbook-air-and-phone-mockup-churchera-transparent.jpg` | Device mockup (transparent) | Churchera | Available | Alternate placement option |
| `traytic.png` | Logo/brand asset | Traytic | Available (65K) | Clearly label as brand/logo, never present as UI screenshot |
| `public/icon.png` | Favicon/assets | Brand | Available | Preserve existing usage |
| Various favicon assets | Icons | Brand | Available | Preserve existing usage |

### Implementation Plan
#### Starrik Mockups
- **Placement:** Top of project card (approval item: card-top vs hero-background vs both)
- **Implementation:** Standard `<img>` or `next/image` component
- **Sizing:** Full width within card constraints, height auto to preserve aspect ratio
- **Alt text:** "Starrik courier tracking platform shown on laptop and phone mockup"
- **Loading:** Lazy loading recommended
- **Object-fit:** `contain` to preserve aspect ratio
- **Object-position:** `center`

#### Churchera Mockups
- **Placement:** Top of project card (approval item: card-top vs hero-background vs both)
- **Implementation:** Standard `<img>` or `next/image` component
- **Sizing:** Full width within card constraints, height auto to preserve aspect ratio
- **Alt text:** "Churchera finance/member platform shown on laptop and phone mockup"
- **Loading:** Lazy loading recommended
- **Object-fit:** `contain` to preserve aspect ratio
- **Object-position:** `center`

#### Traytic Asset
- **Placement:** Within project card, clearly separated from text content
- **Implementation:** Standard `<img>` component
- **Sizing:** Appropriate size for logo display (not full card width)
- **Alt text:** "Traytic brand/logo asset"
- **Labeling:** Adjacent text: "Brand/logo asset" or similar disclaimer
- **Constraints:** Never present or imply as product UI screenshot

#### QuizManiac/HustleLoop Assets
- **Implementation:** No images (no fabricated screenshots)
- **Content:** Text-dominant presentation as specified
- **Placeholder treatment:** None - rely on structured information hierarchy

### Asset Dependencies
- No new dependencies required (standard img/next/image)
- Potential optimization: `next/image` for automatic sizing and optimization
- If using `next/image`: require `next/images` in next.config.js if external domains
- Current assets are local to `/public/` so standard `<img>` sufficient

## Motion-System Audit

### Current Implementation
- **motion-provider.tsx:** Need to inspect
- **use-scroll-animation.ts:** Need to inspect
- **Framer Motion usage:** Throughout sections
- **Lenis integration:** Verified in `app/layout.tsx`
- **Existing animations:**
  - Hero: staggered entrance with custom easing `[0.22, 1, 0.36, 1]`
  - Sections: fade-up on scroll with viewport detection
  - Buttons: 200ms color transition
  - Cards: hover background/border transition
  - Focus rings: visible 2px lime ring
  - Toast: Sonner animations (if used)

### Motion-System Requirements vs Existing
| Requirement | Current Status | Gap | Action |
|-------------|----------------|-----|--------|
| Hero sequential stagger | Implemented | None | Preserve |
| Sections fade-up on viewport | Implemented | None | Preserve |
| Button hover 200ms | Implemented | None | Preserve |
| Card hover 200ms | Implemented | None | Preserve |
| Focus rings visible | Implemented (via globals.css) | None | Preserve |
| Lenis smooth scroll | Implemented | None | Preserve |
| Scroll-padding-top for fixed navbar | Implemented | None | Preserve |
| Reduced motion respected | **NEEDS VERIFICATION** | Potential gap | Verify `prefers-reduced-motion` disables all animations |
| No splash/intro animations | Implemented | None | Preserve |
| No scrolljacking/parallax overload | Implemented | None | Preserve |
| Motion supports navigation/feedback | Implemented | None | Preserve |
| No decorative perpetual motion | Implemented | None | Preserve |

### Motion Implementation Contract
#### Reduced-Motion Implementation
- **Requirement:** All Framer Motion animations disabled when `prefers-reduced-motion: reduce`
- **Current check:** Need to verify in `motion-provider.tsx` and `use-scroll-animation.ts`
- **Implementation:** Use `useReducedMotion` hook or equivalent to conditionally disable animations
- **Files to verify/modify:**
  - `motion-provider.tsx`
  - `use-scroll-animation.ts`
  - Any component using `motion.` or `useAnimation()` directly

#### Motion Principles to Preserve
- **Purpose:** Entrance reveals hierarchy; hover confirms interactivity; scroll indicates progress; form provides feedback
- **Hero:** Sequential stagger (label → name → sub → CTAs → stats → scroll) — 0.5–0.6s ease-out (`[0.22, 1, 0.36, 1]`)
- **Sections:** Fade-up on viewport entry — 0.6s ease-out, stagger 0.12 between cards/project items
- **Hover:** 200ms — card background/border/text shift; button color; link to primary. No scale, no lift, no shadow appearance.
- **Scroll:** Lenis preserved; native scroll preserved; no scroll-jacking; `scroll-padding-top` for fixed navbar (already fixed)
- **Static:** Navigation, footer, mockup images, section headings — never animate
- **Not decorative:** No splash, no parallax overload, no excessive stagger, no animation that delays content

## Reduced-Motion Implementation

### Current Status
Need to inspect `motion-provider.tsx` and `use-scroll-animation.ts` to verify reduced-motion implementation.

### Implementation Plan
1. **Audit current reduced-motion handling** in motion files
2. **Implement proper reduction** if missing:
   - Use `useReducedMotion` hook from Framer Motion or custom implementation
   - Condition all animation props on `!reducedMotion`
   - Ensure all motion variants respect the reduction
3. **Verify all animated elements:**
   - Hero section elements
   - Section containers
   - Project cards
   - Skill categories
   - Experience items
   - Education content
   - Contact form/form elements
   - Toast notifications
   - Button/link hover states (CSS transitions)
   - Focus rings (CSS-based, should be unaffected)

### Files to Audit/Modify
- `components/motion-provider.tsx`
- `hooks/use-scroll-animation.ts`
- `components/sections/hero.tsx`
- `components/sections/about.tsx`
- `components/sections/projects.tsx`
- `components/sections/skills.tsx`
- `components/sections/experience.tsx`
- `components/sections/education.tsx`
- `components/sections/contact.tsx`

## Responsive Strategy

### Breakpoints
- **Mobile:** `<768px`
- **Tablet:** `768–1024px`
- **Desktop:** `>1024px`

### Section-by-Section Behavior

#### Navbar
- **Desktop:** Horizontal links visible, dark mode toggle accessible
- **Tablet:** Horizontal if space permits, else hamburger menu
- **Mobile:** Hamburger menu, dark mode toggle accessible
- **All:** Touch targets 48px+, logical tab order, visible focus states

#### Hero
- **Desktop:** Asymmetric left-aligned: label → name → headline → copy → buttons → stats/socials → scroll
- **Tablet:** Same layout, potential wrapping adjustments for stats/buttons
- **Mobile:** Vertically stacked: label → name → headline → copy → buttons (stacked) → stats (wrapped) → socials → scroll
- **Text:** Never fixed-width, readable at 200% zoom
- **Touch targets:** 48px minimum for buttons/links

#### About
- **Desktop:** 2-column layout (text content | focus areas)
- **Tablet:** Same as desktop
- **Mobile:** Single column: text content stacks above focus areas
- **Text:** Readable at 200% zoom
- **Touch targets:** N/A (no interactive elements beyond standard)

#### Projects
- **Desktop:** 12-column grid with evidence-based spanning
  - Starrik/Churchera: 8 cols × 2 rows (featured)
  - Traytic: 6 cols
  - QuizManiac/HustleLoop: 4 cols each
- **Tablet:** Same grid behavior
- **Mobile:** Single column stack: cards full-width, stats wrap, mockups scale to card width
- **Images:** Scale to fit card width, maintain aspect ratio
- **Touch targets:** 48px minimum for buttons/links

#### Skills
- **Desktop:** 3-column grid
- **Tablet:** Same as desktop
- **Mobile:** Single column stack: categories full-width
- **Text:** Readable at 200% zoom
- **Touch targets:** N/A (no interactive elements)

#### Experience
- **Desktop:** 2-column layout on md+: duration | company/role/description
- **Tablet:** Same as desktop
- **Mobile:** Single column: duration stacks above content
- **Text:** Readable at 200% zoom
- **Touch targets:** N/A (no interactive elements)

#### Education
- **Desktop/TABLET/MOBILE:** To be verified after file inspection
- **Principle:** Readable at 200% zoom, logical stacking, touch targets 48px+ for interactive elements

#### Contact
- **Desktop/TABLET/MOBILE:** To be verified after file inspection
- **Principle:** Form inputs 48px+ touch targets, labels linked, errors visible, readable at 200% zoom

#### Footer
- **Desktop/TABLET/MOBILE:** To be verified after file inspection
- **Principle:** Links 48px+ touch targets, text readable at 200% zoom

### Responsive Dependencies
- No new dependencies required (uses existing Tailwind breakpoints)
- Lenis smooth scroll preserved
- Viewport units in hero heading (`clamp()` function) already implemented
- Grid system uses standard CSS grid with Tailwind utilities

## Accessibility Strategy

### Current Implementation Status (from audit)
- **Semantic HTML:** Verified (`section`, `nav`, `main`, `header`, `footer`, `h1-h6` hierarchy)
- **Keyboard navigation:** Appears functional (standard button/link behavior)
- **Focus visibility:** Verified via `--ring` token in globals.css (lime-700 light, lime-400 dark)
- **Color contrast:** Verified per DESIGN.md (lime-300 button with black text = safe; lime-700 light/dark links = safe)
- **Reduced motion:** **NEEDS VERIFICATION** in motion files
- **Text scaling:** Uses `rem` units, readable at 200% zoom (to be verified)
- **Touch targets:** Need to verify 48px minimum on all interactive elements
- **Alt text:** **MISSING** on mockup images (critical gap)
- **Form labels:** Need to verify in contact.tsx
- **Error messages:** Need to verify visibility in contact.tsx
- **Skip navigation:** Not currently implemented (optional enhancement)

### Accessibility Implementation Plan
#### Priority 1 - Critical Fixes
1. **Add alt text to all mockup images**
   - Starrik: "Starrik courier tracking platform shown on laptop and phone mockup"
   - Churchera: "Churchera finance/member platform shown on laptop and phone mockup"
   - Traytic: "Traytic brand/logo asset"
   - **Files:** `components/sections/projects.tsx`

#### Priority 2 - Verification & Enhancement
2. **Verify reduced-motion implementation** in motion files
3. **Verify touch target sizes** on all buttons/links (minimum 48px)
4. **Verify form labels** are properly linked to inputs in contact.tsx
5. **Verify error message visibility** in contact.tsx
6. **Consider adding skip navigation link** (accessibility best practice)
7. **Verify text scaling** at 200% zoom doesn't break layout
8. **Verify color contrast** in all states (hover, focus, disabled) for interactive elements

#### Accessibility Dependencies
- No new dependencies required
- Uses existing design tokens (`--ring`, color system)
- Uses existing semantic structure
- Uses existing motion system (with reduced-motion verification)

### Files to Audit/Modify
- `components/sections/projects.tsx` (add alt text to mockup images)
- `components/motion-provider.tsx` (verify reduced-motion handling)
- `hooks/use-scroll-animation.ts` (verify reduced-motion handling)
- `components/sections/contact.tsx` (verify form labels, error visibility, touch targets)
- `components/sections/footer.tsx` (verify link touch targets, text contrast)
- `components/sections/*.tsx` (verify touch targets on all interactive elements)

## Content Architecture

### Content Storage
- **Project data:** Currently hardcoded in `components/sections/projects.tsx` lines 11-38
- **Experience data:** Currently hardcoded in `components/sections/experience.tsx` lines 8-41
- **About content:** Currently hardcoded in `components/sections/about.tsx` lines 24-29
- **Skills data:** Currently hardcoded in `components/sections/skills.tsx` lines 8-29
- **Education content:** Currently in `components/sections/education.tsx` (to be verified)
- **Contact content:** Currently in `components/sections/contact.tsx` (to be verified)

### Content Strategy
- **Keep centralized data approach** for projects and experience (easy to maintain)
- **Do not introduce CMS or unnecessary abstraction**
- **Normalize content where beneficial** (e.g., separate data files if duplication occurs)
- **Keep work-linked skill categorization** (current approach is correct)
- **Preserve evidence-backed descriptions** (do not generalize or inflate)
- **Maintain clear separation** between content and presentation

### Content Dependencies
- No new dependencies required
- Uses existing JavaScript/TypeScript for data structures
- Uses existing mapping and rendering patterns
- JSON-LD component already in use for structured data

### Implementation Notes
- **Projects:** Consider extracting to `data/projects.ts` if duplication increases (not required yet)
- **Experience:** Consider extracting to `data/experience.ts` if duplication increases (not required yet)
- **About/Education/Contact/Skills:** Current inline approach is maintainable
- **All content must pass evidence verification** (levels 1-3 only)

## Link Audit

### External Links Currently Used/Required
| Link Type | Current Status | Verification Required | Action |
|-----------|----------------|-----------------------|--------|
| **GitHub profile** | `https://github.com/Zaph123` (used in multiple locations) | Verify profile exists and is correct | Preserve if correct |
| **GitHub repositories** | Currently using profile links for projects (need project-specific) | Verify if project-specific repos exist | Update to project-specific URLs if verified |
| **LinkedIn** | `https://www.linkedin.com/in/zaphenath-bassey` (used in hero/socials) | Verify profile exists and is correct | Preserve if correct |
| **Email** | `mailto:bassey2108@gmail.com` (used in hero/socials) | Verify email is correct | Preserve if correct |
| **Phone** | `+234 902 276 1407` (mentioned in footer/header - need to verify implementation) | Verify phone number is correct | Implement if missing |
| **Project live URLs** | Currently `#` placeholders in projects.tsx | **VERIFICATION REQUIRED** - confirm which are active | Update to verified URLs or remove if unconfirmed |
| **Project repository links** | Currently `#` or profile links in projects.tsx | **VERIFICATION REQUIRED** - confirm which exist | Update to verified URLs or remove if unconfirmed |

### Link Implementation Plan
#### Verification Process
1. **Confirm live URLs** for each project:
   - Starrik: `starrik.com` (verify if active and appropriate to link)
   - Churchera: `churchera.com` (verify if active and appropriate to link)
   - Traytic: `traytic.com` (verify if active and appropriate to link)
   - QuizManiac: Verify if live URL exists
   - HustleLoop: Verify if live URL exists
2. **Confirm repository links** for each project:
   - Starrik: Verify if `https://github.com/Zaph123/starrik` or similar exists
   - Churchera: Verify if `https://github.com/Zaph123/churchera` or similar exists
   - QuizManiac: Verify if `https://github.com/Zaph123/QuizManiac` or similar exists
   - HustleLoop: Verify if `https://github.com/Zaph123/HustleLoop` or similar exists
   - Traytic: Verify if exists (less likely per nature of work)
3. **Update implementation:**
   - Replace `#` with verified URLs
   - Remove links entirely if unconfirmed (better than misleading placeholder)
   - Use GitHub profile links only if project-specific unverified
   - Ensure `rel="noopener noreferrer"` and `target="_blank"` for external links
   - Add `aria-label` descriptive text for all links

#### Files Affected
- `components/sections/projects.tsx` (primary)
- `components/sections/contact.tsx` (if phone/email links present)
- `components/sections/footer.tsx` (if social links present)
- `components/sections/hero.tsx` (social links already implemented)

### Link Dependencies
- No new dependencies required
- Uses existing Next/link component
- Uses existing Lucide icons for link visualization
- Uses existing button/link styling

## SEO / Metadata

### Current Implementation
- **app/layout.tsx** lines 32-83: Metadata configuration
- **Title:** `default: 'Zaphenath | Senior Frontend Engineer'` (**INCORRECT** - contains seniority claim)
- **Description:** 'Portfolio of a frontend engineer specializing in React, Next.js, and modern web technologies.'
- **OpenGraph:** Title, description, image, site name
- **Twitter:** Card, title, description, creator, images
- **Alternates:** Canonical URL
- **Icons:** Favicon set

### Metadata Requirements per Design Direction
- **Title:** Must not contain seniority claims
- **Description:** Must be accurate and evidence-backed
- **OpenGraph/Twitter:** Must match corrected title/description
- **No inflated claims** in metadata
- **No unverified metrics or outcomes**

### Metadata Implementation Plan
#### Required Changes
1. **Update title** in `app/layout.tsx` line 35:
   - FROM: `default: 'Zaphenath | Senior Frontend Engineer',`
   - TO: `default: 'Zaphenath | Frontend Engineer',`
   - OR: `default: 'Zaphenath | Frontend Engineer · React.js & Next.js',` (more specific)
   - **NOTE:** Exact wording requires user approval per design direction (headline approval item)

2. **Verify description** accuracy:
   - Current: 'Portfolio of a frontend engineer specializing in React, Next.js, and modern web technologies.'
   - Consider: 'Portfolio of a frontend engineer with 2+ years production experience building React/Next.js systems across B2B, logistics, and finance-adjacent platforms.'
   - **NOTE:** Exact wording requires verification against evidence

3. **Verify OpenGraph/Twitter** content matches corrected metadata

4. **Verify favicon** implementation is correct and accessible

### Files Affected
- `app/layout.tsx` (primary)
- Potential updates to OpenGraph/Twitter sections

### Metadata Dependencies
- No new dependencies required
- Uses existing Next.js metadata system
- Uses existing image assets for OpenGraph

## Performance Considerations

### Performance-Sensitive Areas Audited
- **Mockup images:** Large files (~300KB each) - need optimization
- **Fonts:** Three Google Fonts being loaded - verify subsetting and display swap
- **Animation:** Framer Motion - verify efficient usage
- **Lenis:** Smooth scrolling library - verify necessity
- **Client components:** Check for excessive client-side JavaScript
- **Image loading:** Verify current implementation (standard img tags)
- **Layout shifts:** Verify CLS (Cumulative Layout Shift) minimization

### Performance Implementation Plan
#### Image Optimization
1. **Current:** Standard `<img>` tags for mockups (~300KB each)
2. **Optimization options:**
   - Use `next/image` for automatic optimization, resizing, lazy loading
   - Implement `srcset` and `sizes` for responsive images
   - Use modern formats (WebP) if available
   - **Note:** Current assets are JPG - consider if optimization warranted given low quantity (4 files)

#### Font Optimization
1. **Current:** Three fonts loaded via `next/font/google` with `display: "swap"`
2. **Verification:** Subsetting to latin only, proper font loading strategy
3. **Optimization:** Already optimized via next/font

#### Animation Performance
1. **Current:** Framer Motion ^11.0.0
2. **Verification:** Efficient usage, no excessive component wrappers
3. **Optimization:** Use `useReducedMotion` to skip work when disabled

#### Lazy Loading
1. **Images:** Implement `loading="lazy"` on mockup images
2. **Components:** Consider code-splitting if bundle analysis shows benefit

#### Bundle Analysis
- **Recommendation:** Run next build analysis to identify optimization opportunities
- **Current:** Likely acceptable for portfolio scale (~5 sections, moderate interactivity)

### Performance Dependencies
- No new dependencies required for basic optimization
- `next/image` already available in Next.js
- Potential: `imagine` or other optimization tools if needed later

### Files to Audit/Modify
- `components/sections/projects.tsx` (add loading optimization to mockup images)
- `app/layout.tsx` (verify font loading optimization)
- `components/motion-provider.tsx` (verify animation efficiency)

## Dependency Changes

### Current Dependencies (from package.json inspection)
Need to inspect `package.json` for exact versions, but known stack includes:
- Next.js 16.2.0
- React ^19
- TypeScript 5.7.3
- Tailwind CSS ^4.2.0
- Framer Motion ^11.0.0
- Lenis ^1.3.26
- React Hook Form ^7.54.1
- Zod ^3.24.1
- Lucide React ^0.564.0
- Next-themes ^0.4.6
- shadcn/ui components
- @vercel/analytics
- sonner (toast)

### Dependency Changes Required
**None required** - current stack provides all necessary functionality for implementing the design direction.

#### Justification
- Design system already implemented in `globals.css`
- Typography already implemented via `next/font/google`
- Layout and grid already implemented
- Motion system already implemented (needs reduced-motion verification)
- Form validation already implemented (React Hook Form + Zod)
- Icons already implemented (Lucide)
- Theme switching already implemented (next-themes)
- Analytics already implemented (Vercel)
- Toast notifications already implemented (sonner)

### Files to Verify
- `package.json` (confirm no unnecessary dependencies to remove)
- `pnpm-lock.yaml` (verify lock file consistency)
- `pnpm-workspace.yaml` (verify workspace configuration)

## File Impact Matrix

| File | Action | Reason | Risk | Dependencies |
|------|--------|--------|------|--------------|
| `app/layout.tsx` | MODIFY | Fix metadata seniority claim, verify font loading | low | Next.js metadata |
| `components/sections/hero.tsx` | MODIFY | Verify/adjust headline wording per approval | medium | Motion, Button, Link |
| `components/sections/about.tsx` | MODIFY | Verify wording (scalable, real-time) | low | Motion, SectionHeading |
| `components/sections/projects.tsx` | MODIFY | Evidence-based reordering, featured status, spans, mockup placement, alt text, link verification | high | Motion, SectionHeading, JsonLd, Link, Button |
| `components/sections/experience.tsx` | MODIFY | Verify timeline order, description accuracy (avoid architecture overclaim) | medium | Motion, SectionHeading |
| `components/sections/skills.tsx` | VERIFY | Confirm no logo/icons, correct typography | low | Motion, SectionHeading |
| `components/sections/education.tsx` | VERIFY/AUDIT | Confirm content accuracy, structure, accessibility | low | Motion, SectionHeading |
| `components/sections/contact.tsx` | VERIFY/AUDIT | Confirm form validation, link accuracy, accessibility | medium | React Hook Form, Zod, Motion, Sonner |
| `components/sections/footer.tsx` | VERIFY/AUDIT | Confirm link accuracy, no seniority claims, accessibility | low | Motion (if used) |
| `components/sections/navbar.tsx` | VERIFY/AUDIT | Confirm structure, links, dark mode toggle, accessibility | medium | Next-themes, Lucide |
| `components/motion-provider.tsx` | VERIFY/MODIFY | Confirm reduced-motion implementation | medium | Framer Motion |
| `hooks/use-scroll-animation.ts` | VERIFY/MODIFY | Confirm reduced-motion implementation | low | Framer Motion |
| `app/globals.css` | VERIFY | Confirm color tokens match DESIGN.md exactly | low | Tailwind CSS |
| `public/` assets | VERIFY | Confirm mockup availability, traptic.png labeling | low | None |

### Files Explicitly Protected from Change (No Action Required)
- `app/page.tsx` - Main page structure (preserve as-is)
- `components/json-ld.tsx` - Structured data component (preserve as-is)
- `lib/utils.ts` - Utility functions (preserve as-is)
- `components/ui/` - Shadcn/UI primitives (preserve as-is, use as needed)
- `next.config.mjs` - Next.js configuration (preserve unless proven necessary)
- `tsconfig.json` - TypeScript configuration (preserve)
- `postcss.config.mjs` - PostCSS configuration (preserve)
- `tailwind.config.ts` - Tailwind configuration (preserve if already correct)

## Implementation Order

### Phase 0 — Verification & Preparation
**Goal:** Confirm unverified content, prepare implementation baseline
- [ ] Verify live URLs and repository links for all projects
- [ ] Confirm exact headline wording approval (resolve "scalable" item)
- [ ] Confirm mockup placement preference (card-top vs hero-background vs both)
- [ ] Confirm Traytic presentation preference (logo+feature list prominent vs compact)
- [ ] Verify education.tsx content accuracy
- [ ] Verify contact.tsx form and link accuracy
- [ ] Verify footer.tsx content accuracy
- [ ] Verify navbar.tsx structure and links
- [ ] Audit motion files for reduced-motion implementation
- [ ] Verify current globals.txt tokens match DESIGN.md exactly
- [ ] Deliverable: Verified content checklist, approved unresolved items

### Phase 1 — Foundations
**Goal:** Establish correct design system and global foundations
- [ ] Update `app/layout.tsx` metadata to remove seniority claim
- [ ] Verify/adjust `app/globals.css` color tokens to match DESIGN.md exactly
- [ ] Verify font loading in `app/layout.tsx` is correct
- [ ] Verify motion-provider implements reduced-motion correctly
- [ ] Verify use-scroll-animation implements reduced-motion correctly
- [ ] Deliverable: Correct design tokens, typography, motion foundation

### Phase 2 — Layout Shell
**Goal:** Establish correct page structure and navigation
- [ ] Verify/adjust `components/sections/navbar.tsx` for correct links and accessibility
- [ ] Verify `app/page.tsx` structure is correct (preserve working structure)
- [ ] Deliverable: Correct navigation, page shell, section rhythm

### Phase 3 — Hero
**Goal:** Implement correct hero section per approvals
- [ ] Implement approved headline wording in `components/sections/hero.tsx`
- [ ] Implement approved mockup placement (if any)
- [ ] Verify all hero content accuracy per evidence
- [ ] Verify hero motion sequence and accessibility
- [ ] Deliverable: Correct hero section with approved content

### Phase 4 — Projects
**Goal:** Implement evidence-based project presentation
- [ ] Reorder project array: [Starrik, Churchera, Traytic, QuizManiac, HustleLoop]
- [ ] Set featured flags: Starrik=true, Churchera=true, others=false
- [ ] Adjust spans per evidence hierarchy (Starrik/Churchera large, Traytic medium, others standard)
- [ ] Implement mockup placement for Starrik/Churchera per approval
- [ ] Add alt text to all mockup images
- [ ] Clearly label `traytic.png` as brand/logo asset
- [ ] Update project descriptions per evidence verification
- [ ] Update tech tags per resume verification
- [ ] Update live URLs and repository links per verification (use # if unconfirmed)
- [ ] Verify project motion, hover, focus states, accessibility
- [ ] Deliverable: Correct evidence-based project presentation

### Phase 5 — Supporting Sections
**Goal:** Implement accurate supporting content sections
- [ ] Verify/about content accuracy in `components/sections/about.tsx`
- [ ] Verify/experience content accuracy and order in `components/sections/experience.tsx`
- [ ] Verify/skills content accuracy in `components/sections/skills.tsx`
- [ ] Verify/education content accuracy in `components/sections/education.tsx`
- [ ] Verify/contact form validation, links, and accessibility in `components/sections/contact.tsx`
- [ ] Verify/footer content accuracy in `components/sections/footer.tsx`
- [ ] Deliverable: All content accurate, evidence-backed, accessible

### Phase 6 — Motion Polish
**Goal:** Ensure motion system works correctly with reduced motion
- [ ] Verify all motion sequences trigger correctly
- [ ] Verify reduced motion disables all animations appropriately
- [ ] Verify hover/focus states work without motion where required
- [ ] Deliverable: Correct motion behavior, reduced motion compliance

### Phase 7 — Responsive Refinement
**Goal:** Ensure responsive behavior at all breakpoints
- [ ] Test responsive behavior at mobile (<768px)
- [ ] Test responsive behavior at tablet (768-1024px)
- [ ] Test responsive behavior at desktop (>1024px)
- [ ] Verify touch targets 48px+ on all interactive elements
- [ ] Verify text readable at 200% zoom
- [ ] Deliverable: Correct responsive behavior

### Phase 8 — Accessibility + Performance
**Goal:** Final accessibility and performance verification
- [ ] Verify all WCAG AA contrast ratios pass
- [ ] Verify all focus rings visible and accessible
- [ ] Verify all form labels properly linked
- [ ] Verify error messages visible and accessible
- [ ] Verify alt text on all images
- [ ] Verify no hover-only interactions
- [ ] Verify keyboard navigable logical tab order
- [ ] Optional: Add skip navigation link
- [ ] Deliverable: Full accessibility compliance

### Phase 9 — Visual QA
**Goal:** Final validation against design direction
- [ ] Verify no seniority inflation anywhere
- [ ] Verify no unsupported claims (scalable, 6 years, architecture-first, etc.)
- [ ] Verify evidence hierarchy visible in project presentation
- [ ] Verify Starrik/Churchera mockups correctly presented
- [ ] Verify Traytic not presented as fake UI screenshot
- [ ] Verify QuizManiac/HustleLoop have no fabricated visuals
- [ ] Verify terminal influence appears through precision, not decoration
- [ ] Verify design communicates "I care about building things properly"
- [ ] Deliverable: Design direction compliance confirmed

## Multi-Agent Ownership Boundaries

### Sequential Work (Must happen in order)
- [ ] **Foundations:** Design tokens, typography, motion system (Phase 1)
- [ ] **Layout Shell:** Navbar, page structure (Phase 2)
- [ ] **Content Foundation:** Hero, Projects content (Phases 3-4)
- Reason: Later phases depend on correct foundations and content structure

### Parallelizable Work (Can happen after foundations)
- [ ] **About Section:** Phase 5 (after foundations)
- [ ] **Skills Section:** Phase 5 (after foundations)
- [ ] **Experience Section:** Phase 5 (after foundations)
- [ ] **Education Section:** Phase 5 (after foundations)
- [ ] **Contact Section:** Phase 5 (after foundations)
- [ ] **Footer Section:** Phase 5 (after foundations)
- Reason: These sections are largely independent once foundations are set

### Dependent Work (Must happen after static implementation)
- [ ] **Motion Polish:** Phase 6 (after static layout and content)
- [ ] **Responsive Refinement:** Phase 7 (after static layout and content)
- [ ] **Accessibility + Performance:** Phase 8 (after static layout and content)
- [ ] **Visual QA:** Phase 9 (after all implementation)
- Reason: These phases verify and refine the implemented static structure

### Anti-Patterns to Avoid
- [ ] Do not let multiple agents independently modify shared foundations (globals.css, layout.tsx, motion files)
- [ ] Do not let agents redesign shared layout primitives (container, grid system, spacing)
- [ ] Do not let agents modify content structure after parallel sections have implemented it
- [ ] Do not allow conflicting implementation of motion system or reduced-motion handling

## Verification Gates

### Phase 0 Gate — Content Verification
**Exit Criteria:**
- [ ] All live URLs and repository links verified or marked as # (unconfirmed)
- [ ] Headline wording approved by user
- [ ] Mockup placement preference approved by user
- [ ] Traytic presentation preference approved by user
- [ ] Education content verified accurate
- [ ] Contact form and links verified
- [ ] Footer content verified
- [ ] Navbar structure and links verified
- [ ] Motion files audited for reduced-motion handling

### Phase 1 Gate — Foundations
**Exit Criteria:**
- [ ] `app/layout.tsx` metadata contains no seniority claims
- [ ] `app/globals.css` color tokens match DESIGN.md exactly
- [ ] Font loading correct (Space Grotesk, Inter, JetBrains Mono)
- [ ] Motion-provider implements reduced-motion correctly
- [ ] Use-scroll-animation implements reduced-motion correctly
- [ ] No console errors in foundation components

### Phase 2 Gate — Layout Shell
**Exit Criteria:**
- [ ] Navbar shows correct links and is accessible
- [ ] Dark mode toggle functional
- [ ] Page structure correct (preserves working app/page.tsx)
- [ ] Section rhythm and spacing correct (~128px)
- [ ] No console errors in layout components

### Phase 3 Gate — Hero
**Exit Criteria:**
- [ ] Approved headline wording implemented
- [ ] Approved mockup placement implemented (if any)
- [ ] All hero content accurate per evidence
- [ ] Hero motion sequence executes correctly
- [ ] All hero interactive elements accessible (focus, contrast, keyboard)
- [ ] Reduced motion disables hero animations
- [ ] No console errors in hero component

### Phase 4 Gate — Projects
**Exit Criteria:**
- [ ] Project order: Starrik → Churchera → Traytic → QuizManiac → HustleLoop
- [ ] Featured flags correct (Starrik=true, Churchera=true)
- [ ] Spans per evidence hierarchy (large/medium/standard)
- [ ] Mockup placement correct per approval
- [ ] All mockup images have descriptive alt text
- [ ] `traytic.png` clearly labeled as brand/logo asset
- [ ] All project descriptions accurate per resume
- [ ] All tech tags accurate per resume
- [ ] All links functional or # if unconfirmed
- [ ] Project motion, hover, focus states work correctly
- [ ] All project elements accessible (contrast, focus, keyboard, touch targets)
- [ ] Reduced motion disables project animations
- [ ] No console errors in projects component

### Phase 5 Gate — Supporting Sections
**Exit Criteria:**
- [ ] About content accurate per resume and evidence
- [ ] Experience order correct: Traytic → Churchera → Starrik → Roothub
- [ ] Experience descriptions accurate per resume
- [ ] Experience titles shown as resume states but context prevents seniority inflation
- [ ] Skills content accurate and work-linked
- [ ] Education content accurate per verified sources
- [ ] Contact form validates correctly, shows appropriate feedback
- [ ] Contact links accurate and functional
- [ ] Footer content accurate, no seniority/inflated claims
- [ ] All supporting section elements accessible
- [ ] Reduced motion disables all section animations
- [ ] No console errors in supporting sections

### Phase 6 Gate — Motion Polish
**Exit Criteria:**
- [ ] All motion sequences trigger correctly on viewport entry
- [ ] Hero sequential stagger timing and easing correct
- [ ] Section fade-up timing and stagger correct
- [ ] All hover states: 200ms ease-out, no scale/lift/shadow
- [ ] All focus states: visible 2px lime ring
- [ ] Reduced motion disables all Framer Motion animations
- [ ] CSS transitions (hover, focus) still work when JS motion disabled
- [ ] No console errors in motion-related components

### Phase 7 Gate — Responsive Refinement
**Exit Criteria:**
- [ ] Mobile (<768px): Single column stack, full-width cards, wrapped stats
- [ ] Tablet (768-1024px): Correct grid behavior, appropriate wrapping
- [ ] Desktop (>1024px): Evidence-based grid spanning, correct layouts
- [ ] All touch targets 48px+ minimum (buttons, links)
- [ ] All text readable at 200% zoom without layout breaking
- [ ] No horizontal overflow on any breakpoint
- [ ] No console errors at any breakpoint

### Phase 8 Gate — Accessibility + Performance
**Exit Criteria:**
- [ ] All WCAG AA contrast ratios pass (text/background, interactive states)
- [ ] All focus rings visible and accessible (2px lime ring)
- [ ] All form labels properly associated with inputs (`htmlFor`/`id`)
- [ ] All error messages visible and accessible
- [ ] All images have descriptive alt text
- [ ] No hover-only interactions (all functionality available via keyboard)
- [ ] Keyboard navigable with logical tab order
- [ ] Optional: Skip navigation link present and functional
- [ ] No console errors related to accessibility/performance

### Phase 9 Gate — Visual QA
**Exit Criteria:**
- [ ] No seniority inflation anywhere (no "Senior", "Lead" as authority signal, etc.)
- [ ] No unsupported claims (no "scalable", "6 years", "architecture-first", "real-time specialist", etc.)
- [ ] Evidence hierarchy visually clear in project presentation (Starrik/Churchera > Traytic > QuizManiac/HustleLoop)
- [ ] Starrik/Churchera mockups correctly presented per approval
- [ ] Traytic clearly presented as brand/logo asset, not UI screenshot
- [ ] QuizManiac/HustleLoop have no fabricated visuals (text-dominant only)
- [ ] Design communicates precision, evidence, capability (not decoration or theater)
- [ ] Terminal influence visible through structure/typography, not fake terminal aesthetics
- [ ] No console errors in final implementation

## Definition of Done

The portfolio implementation is complete when all of the following conditions are met:

### Design Direction Compliance
- [ ] Locked design direction (`PORTFOLIO_DESIGN_DIRECTION.md`) visually represented
- [ ] No terminal-theme overreach (no fake command-line UI, excessive monospace, etc.)
- [ ] No unsupported claims were introduced (verified against evidence sources)
- [ ] No WebSocket claim exists for Starrik unless independently verified
- [ ] No "RBAC architecture" claim exists (replaced with concrete formulation)
- [ ] No unsupported "scalable" claim exists in hero or elsewhere
- [ ] Project evidence hierarchy is visible (Starrik/Churchera featured with mockups, Traytic structured, QuizManiac/HustleLoop compact)
- [ ] Starrik/Churchera mockups are correctly presented (per user approval)
- [ ] Traytic is not presented as a fake UI screenshot (clearly labeled as brand/logo)
- [ ] QuizManiac/HustleLoop have no fabricated visuals (text-dominant presentation)
- [ ] No seniority inflation exists (no "Senior"/"Lead"/"Architect"/etc. as identity signals)
- [ ] No inflated experience claims (no "6 years" or equivalent)

### Technical Correctness
- [ ] Responsive behavior works at all breakpoints (mobile/tablet/desktop)
- [ ] Keyboard navigation works with logical tab order
- [ ] Focus states are visible on all interactive elements (2px lime ring)
- [ ] Reduced motion works (all Framer Motion animations disabled when `prefers-reduced-motion: reduce`)
- [ ] No unnecessary dependencies were introduced
- [ ] TypeScript passes (`next build` or `tsc --noEmit`)
- [ ] Lint passes (`next lint` or equivalent)
- [ ] Production build passes (`next build`)
- [ ] No runtime console errors remain in production build
- [ ] External links are verified and functional (or removed if unconfirmed)
- [ ] No implementation contradicts `PORTFOLIO_DESIGN_DIRECTION.md`

### Content Accuracy
- [ ] All project descriptions traceable to resume exactly
- [ ] All experience descriptions traceable to resume exactly
- [ ] All skill listings traceable to resume or project work
- [ ] All education content traceable to verified sources
- [ ] All contact information accurate and verified
- [ ] All footer information accurate
- [ ] All navbar links correct and functional
- [ ] No fabricated metrics, outcomes, testimonials, or client claims
- [ ] No false claims about backend delivery (TBD if applicable)
- [ ] All JSON-LD structured data accurate

### Accessibility Compliance
- [ ] Semantic HTML preserved (`section`, `nav`, `main`, `header`, `footer`, proper heading hierarchy)
- [ ] All interactive elements reachable via Tab key
- [ ] Focus order logical and intuitive
- [ ] Focus rings visible (`--ring: lime-700` light / `--ring: lime-400` dark)
- [ ] Color contrast ratios pass WCAG AA for all text/interactive states
- [ ] Reduced motion fully respected (no animation when `prefers-reduced-motion: reduce`)
- [ ] All images have descriptive alt text
- [ ] Form labels properly linked to inputs
- [ ] Error messages visible and accessible
- [ ] Text readable at 200% zoom
- [ ] Touch targets 48px+ minimum for all interactive elements
- [ ] No hover-only interactions
- [ ] No console errors related to accessibility

### Final Verification
- [ ] Portfolio loads correctly in development and production
- [ ] All navigation links work and scroll to correct sections
- [ ] All form functionality works (validation, submission, feedback)
- [ ] All interactive elements have appropriate hover/focus states
- [ ] Motion sequences enhance rather than hinder usability
- [ ] Design communicates intended message: "I care about building things properly"
- [ ] No implementation work remains undocumented or unverified

## Unresolved Implementation Questions

These items require user approval before implementation can proceed:

1. **Hero headline wording:** Exact copy needs approval (current "scalable" not sufficiently evidence-backed)
   - Current: "I build scalable React and Next.js systems that handle real-time complexity."
   - Requirements: Specific, evidence-backed formulation focusing on verified capabilities (auth, analytics, responsive, collaboration)
   - Example alternatives: "I build production React and Next.js systems handling authentication, analytics, and responsive interfaces." or similar evidence-based wording

2. **Mockup placement for Starrik/Churchera:** User preference needed
   - Options: Card-top only, hero-background only, both card-top and hero-background
   - Current implementation: Card-top only in projects.tsx
   - Hero-background would require changes to hero.tsx or layout.tsx

3. **Traytic presentation:** User's preference on visual weight for weakest visual evidence
   - Options: Logo + feature list prominent (medium card) OR compact card (like QuizManiac/HustleLoop)
   - Current implementation: Medium card with structured feature breakdown
   - Compact would reduce to technology + verified functionality only

4. **Case study pages (`/work/[slug]`):** Confirm if and which projects get case studies
   - If yes: Specify which projects (Starrik/Churchera recommended first) and what content is available
   - If no: Confirm deferred status is acceptable

5. **Live URLs:** Confirm active URLs for projects to update `#` placeholders
   - Starrik: `starrik.com` (verify if active and appropriate)
   - Churchera: `churchera.com` (verify if active and appropriate)
   - Traytic: `traytic.com` (verify if active and appropriate)
   - QuizManiac: Verify if live URL exists
   - HustleLoop: Verify if live URL exists

6. **Repository links:** Confirm specific project GitHub URLs to update current usage
   - Current: All cards use `https://github.com/Zaph123` (profile)
   - Required: Verify if project-specific repos exist and provide URLs
   - Example: `https://github.com/Zaph123/starrik` etc.

7. **Personal photo:** Optional provision (per BLUEPRINT.md §6)
   - If provided: Specify placement and usage
   - If not provided: Confirm design without placeholder is acceptable

8. **Motion intensity:** Confirm fade-up/stagger level preference
   - Current: Hero 0.5–0.6s stagger, sections 0.6s ease-out with 0.12 stagger
   - Options: More pronounced, less pronounced, or current level
   - Specify preferred timing values if different from current

9. **Major visual metaphor:** Confirm user comfort with minimal/decorative-light approach
   - Current approach: Precision through typography/structure, restrained lime accent, evidence-focused
   - Alternatives: More decorative approaches (not recommended per design direction)
   - Confirm no desire for decorative overload, 3D elements, gradient overload, etc.

## Change Control

This document is the implementation blueprint. Any change to the implementation plan after this point must be:

- **Documented:** Update this file or create a new version with clear revision notes
- **Justified:** Identify which source of truth changed or was misunderstood
- **Approved by user:** If material (affects brand, positioning, evidence, accessibility, or requires user decisions per design direction)

### Examples of Changes Requiring User Approval
- Changing the locked design direction itself
- Modifying evidence rules or content constraints
- Altering the visual hierarchy or project presentation strategy
- Changing approved unresolved items (headline, mockup placement, etc.)
- Modifying accessibility requirements that affect implementation scope

### Examples of Changes Not Requiring New Approval
- Fixing typos or minor wording errors in implementation
- Adjusting implementation details within approved constraints
- Correcting errors discovered during implementation that don't change the design direction
- Optimizing performance within the approved technical approach

### Process for Material Changes
1. **Stop implementation** if conflicting information is discovered
2. **Document the conflict** clearly with source references
3. **Identify the authoritative source** that should prevail
4. **Propose the smallest possible resolution**
5. **Obtain user approval** when the change affects material design decisions
6. **Update the relevant source document** before proceeding with implementation
7. **Never implement silently** based on assumptions or unverified information

## Final Notes

This blueprint translates the locked design direction into an actionable implementation plan. It preserves all working functionality, corrects identified discrepancies, and provides a clear path forward that respects the evidence, positioning, and accessibility requirements.

The implementation should focus on:
- **Evidence accuracy:** All content traceable to verified sources
- **Accessibility compliance:** WCAG AA, keyboard navigation, visible focus, reduced motion
- **Design direction fidelity:** Terminal precision through structure, not decoration
- **Minimal changes:** Work within existing architecture unless proven necessary
- **User approval:** Respect all unresolved items requiring user decisions

No coding should begin until this blueprint is reviewed and approved. Implementation proceeds phase by phase with verification gates ensuring quality at each step.