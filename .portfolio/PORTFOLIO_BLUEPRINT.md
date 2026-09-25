# Portfolio Blueprint — Zaphenath Bassey

> Strategic source of truth for the portfolio redesign. Updated to reflect validated positioning and evidence audit (2026-09-25).

---

## 1. Objective

**Primary:** Communicate credible technical capability as a production-capable Frontend Engineer with strong React/Next.js specialization, built from 2+ years of real work across B2B SaaS/admin, courier logistics, and fintech-adjacent platforms.

**Secondary:** Demonstrate engineering judgment through concrete feature descriptions (authentication flows, RBAC, analytics, complex tables, responsive design, accessibility) rather than abstract seniority labels.

**Tertiary:** Provide a persistent, honest professional credential online that reflects reality — not marketing copy or inflated experience claims.

**Non-goals (explicitly preserved from AGENTS.md / validation):**
- Do not claim seniority, "Lead" as authority, "Architect", or "Architecture-first" headline.
- Do not claim 6 years experience (corrected to 2+ from resume).
- Do not fabricate metrics, clients, testimonials, users, revenue, or partner claims.
- Do not invent case studies, screenshots, or architecture documentation not present in repo.

---

## 2. Positioning

### Validated identity

**Name:** Zaphenath Bassey  
**Primary identity:** Zaphenath (professional). LinkedIn references include "Einstein Bassey" — preserved naturally in footer/LinkedIn link, not as headline.

**Title:** **Frontend Engineer / Frontend Developer**  
**Specialization:** React.js + Next.js + TypeScript (App Router, React 19, modern patterns).  
**Experience:** 2+ years of production delivery (Traytic Jul 2026 — Aug 2026; Starrik Sep 2024 — Dec 2025; Churchera Jan 2026 — Present; Roothub Dec 2024 — 2025).  
**Education:** University of Uyo — BSc Computer Science (2024–2028, GPA 4.8/5.0); SSCE Shammah College (2017–2023).

### What I build

**Scalable, responsive React/Next.js frontends** that solve real business problems — admin platforms, logistics interfaces, finance/member dashboards, marketplace flows. Emphasis on features that involve complexity: state management, authentication, data visualization, payment integration, role-based access, responsive design, and accessibility.

**Specific demonstrated capabilities (evidence-backed from resume + code):**
- Modern Next.js 16 (App Router) + React 19 development
- TypeScript, Tailwind CSS v4, design system contributions (tokens, shadcn/Base UI primitives)
- Authentication flows (sign-in/sign-up/password reset/email verification/TOTP, international phone input, bot protection with Cloudflare Turnstile, Zod validation, password-strength indicators)
- Complex data management (sortable/searchable/paginated tables, bulk CSV import, lifecycle actions, admin actions like suspend/terminate/extend/impersonate)
- Analytics visualization (Recharts) with revenue/agency/growth metrics
- RBAC architecture for Admin and Member dashboards with sensitive financial data privacy
- Supabase for real-time transaction tracking and database management
- Zustand for efficient state management
- Responsive interfaces verified across desktop/mobile (mockup assets confirm device presentation)
- Accessibility-focused development (semantic HTML, focus rings, reduced-motion respect, color-contrast compliance via DESIGN.md tokens)
- Cross-functional collaboration using Git feature-branch workflow with pull requests

### What I do NOT claim (per validation / user directive / evidence audit)

- **NOT Senior / Lead / Architect as seniority signal.** Even though resume lists "Lead" for Starrik, user's directive supersedes: position reflects production capability, not authority over strategic product direction.
- **NOT "6 years experience."** Corrected to 2+ years per resume.
- **NOT "Real-time systems specialist" as headline.** Supported by Starrik (strongest) and Churchera (Supabase real-time), but not universal across portfolio. Mention as demonstrated contribution, not core identity.
- **NOT "Architecture-first approach."** No architecture documentation, ADRs, or system diagrams exist in repo. Replace with specific practices (RBAC design, auth architecture, state management choices) that are evidence-backed.
- **NOT mentoring as a headline claim.** Old portfolio mentioned mentoring; updated resume and user's directive de-emphasize it. Mention only if specifically relevant to a role; do not make it a differentiator.
- **NOT open-source contributor.** No links or evidence exist; either verify or omit.

### Who I build for

Hiring managers, engineering leads, and recruiters evaluating frontend engineers for roles requiring:
- Production delivery of complete React/Next.js features
- Technical depth across frontend systems (auth, data, responsive, accessibility)
- Ability to collaborate cross-functionally in small product teams
- Growth trajectory from education through multiple production roles

Not for audiences seeking strategic architecture leadership, multi-year senior ownership, or team-management narratives.

---

## 3. Audience

**Primary:** Hiring managers and recruiters at mid-to-late-stage tech companies evaluating frontend engineers for production roles (2024–present experience level, 2+ years production).

**Secondary:** Engineering leads / VPs considering contractors or full-time hires who need someone to own complete features (auth, analytics, responsive interfaces) rather than strategic architecture.

**Tertiary:** Fellow developers, peers, or communities discovering work — they should quickly understand technical approach and project context.

**What they value:** Proof of work, technical depth, reliability, responsive communication, and evidence of quality (accessibility, responsive design, design system awareness) rather than inflated seniority claims.

---

## 4. Core Portfolio Narrative (Evidence-Based)

**Progression (not chronological — narrative order for conversion):**

```
IDENTITY (who + what) → WHAT I BUILD (capabilities) → EVIDENCE (projects with verified assets) → EXPERIENCE (verified timelines + specific contributions) → TECHNICAL DEPTH (skills structured by actual work) → EDUCATION / GROWTH → CONTACT
```

**Narrative arc:**
1. **I am a Frontend Engineer** — React/Next.js + TypeScript, 2+ years, production experience.
2. **I build complete features** — auth, analytics, RBAC, responsive interfaces, market integrations — not just UI components.
3. **Here is evidence** — Starrik (mockups + real-time tracking + Firebase); Churchera (mockups + RBAC + Supabase); Traytic (resume descriptions + design-system + auth/analytics/workspace features); QuizManiac / HustleLoop (project cards, technology demonstrations).
4. **My experience** — Traytic (Next.js 16, React 19, analytics/auth/workspace, cross-functional collaboration); Churchera (Next.js + Zustand + RBAC + Supabase); Starrik (Firebase + vendor dashboards); Roothub (development program).
5. **How I work** — Attention to accessibility, responsive design, design tokens, state management, validation, collaboration. Not architecture-first — specific engineering practices.
6. **Education / trajectory** — University of Uyo (CS, GPA 4.8/5.0), SSCE; rapid progression from education to production.
7. **Contact me** — Direct links verified (GitHub: Zaph123, LinkedIn: zaphenath-bassey, Phone: +234 902 276 1407, Email: bassey2108@gmail.com).

---

## 5. Information Architecture

### Page / route evaluation (existing)

**Current:** Single-page (`app/page.tsx`) with 7 sections (Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer) + JSON-LD.

**Proposed — preserve existing single-page structure, refine content:**
- The single-page architecture is sufficient for the current evidence level.
- No `/work/[slug]` case-study routes are recommended **unless** user provides actual case-study content (problem/context/architecture/outcome) and confirms live URLs / source links.
- The BLUEPRINT.md §14 and DECISIONS.md §5 proposed case studies; however, CONTENT_EVIDENCE.md shows only 2 of 5 projects have visual evidence, 0 have case-study text, and live URLs are unconfirmed. Creating empty case studies would violate evidence rules.
- If user confirms case studies later (with content and assets), add `/work/[slug]` then.

### Homepage section structure (finalized)

```
Navbar (fixed, responsive, dark-mode toggle)
Hero (name + role + value proposition + CTAs + socials + key stats)
About (engineering approach + recent focus areas: Traytic / Churchera / Starrik)
Selected Work / Projects (starrik + churchera emphasized; traytic described; quizmaniac + hustleloop listed with clear scope)
Skills / Technical Capabilities (grouped by work evidence: Frontend / Styling / Backend / Tools / Inclusive Design)
Experience (verified timelines: Traytic → Churchera → Starrik → Roothub)
Education (University of Uyo + SSCE)
Contact (form + direct links)
Footer (name + role + socials + copyright)
```

### Navigation links (finalized — evidence-backed)
- Work (#projects)
- About (#about)
- Skills (#skills)
- Experience (#experience)
- Education (#education)
- Contact (#contact)

No case-study links until content exists.

---

## 6. Project Strategy

### Project hierarchy (by evidence + narrative value)

**Tier 1 — Featured / Strong Evidence:**
- **Starrik** (strongest visual + resume + real-time evidence). Use device mockups prominently. Describe real-time requirements and Firebase integration specifically.
- **Churchera** (strong visual + resume + sensitive-data evidence). Use device mockups. Describe RBAC design, responsive interfaces, Zustand state management, Supabase real-time specifically.

**Tier 2 — Strong Resume + Limited Visual:**
- **Traytic** (best resume detail — analytics, auth, workspace, design system, collaboration). Use `traytic.png` clearly labeled as brand/logo asset. Prioritize feature descriptions over image expectations. Emphasize modern stack (Next.js 16, React 19) and complex data interactions (CSV import, bulk actions, pagination, TOTP/bot protection).

**Tier 3 — Listed / Breadth Demonstration:**
- **QuizManiac** — React + Vite + Firebase. Listed with technologies. No claim of live usage or user counts without verification.
- **HustleLoop** — Marketplace + payments + referral + KYC. Listed with technologies; clearly distinguish team collaboration from individual ownership (resume states "collaborated with team").

### Project card content rules (per CONTENT_EVIDENCE.md)

For every card:
- Domain, role, years (verified from resume)
- Short feature-level description from resume — not generic marketing
- Technology tags matching resume (max 3–5)
- Clear distinction: direct link to case study (only if exists) vs. external live URL (only if verified) vs. no external link (if unconfirmed)
- No metrics, outcomes, or client names unless verified

---

## 7. Evidence Strategy

### Hierarchy (from CONTENT_EVIDENCE.md — preserved exactly)

1. **Direct visual evidence** — mockups, screenshots, rendered UI (Starrik, Churchera mockups; traytic.png as logo; portfolio code itself)
2. **Verified in source / code** — `components/`, `package.json`, `app/globals.css`, `DESIGN.md` tokens, accessibility features (semantic HTML, focus rings, reduced-motion)
3. **Verified in resume** — all experience, roles, technologies, features listed above
4. **Reasonable contextual inference** — design-system contributions imply design collaboration; form validation implies UX attention; responsive grids imply mobile-first awareness
5. **Unsupported / do not claim** — metrics, user counts, revenue, testimonials, architecture documentation, case studies without content

### Evidence handling rules for presentation

- Only levels 1–3 become factual portfolio claims.
- Level 4 can inform design choices (e.g., layout structure that supports technical credibility) but must not appear as written claims.
- Level 5 must never appear in portfolio text, even with qualifiers.
- Missing evidence must be handled honestly: either omit claim, use qualified language ("contributed to" rather than "built" when team collaboration is involved), or provide context that explains limitation (e.g., "Project listed with technology details; live URL and case study content pending verification").

---

## 8. Content Architecture (Per Section)

### Hero

**Communicate:** Identity + specialization + technical value + concise evidence.

**Content:**
- Label: Frontend Engineer · React.js & Next.js
- Headline: Specific, not generic — reference production delivery and complexity (e.g., "I build scalable React and Next.js systems that handle real-time complexity" — already updated in `hero.tsx`)
- Subtext: 2+ years across production domains, with concrete capabilities (auth, analytics, responsive, accessibility) — already updated
- Stats: 2+ years, 3 production contexts, real-time contribution (not "6 years, 3 companies")
- CTAs: "View work" → #projects; "Get in touch" → #contact
- Social links: GitHub (Zaph123), LinkedIn (zaphenath-bassey), Email (bassey2108@gmail.com) — verified

**What must NOT appear:**
- "6 years"
- "Senior" or seniority-implying language
- Generic developer slogans
- Unverified metrics

### Selected Work (Projects)

**Structure:** 5 cards in grid (current `projects.tsx` structure preserved). 2 featured (Starrik, HustleLoop — evidence supports featured status for Starrik; HustleLoop is featured but has weaker visual evidence — consider reducing feature prominence or clarifying scope).

**Per card:**
- Title, domain, years, role (verified)
- Feature-level description (from resume — specific, not generic)
- 3–5 technology tags (from resume / code)
- Visual: Use mockup when available; for others, use design treatment (pattern, gradient, structured information) — never fabricate screenshot
- Links: Only verified links; `#` for unconfirmed; separate case-study link only if page exists

### Experience

**Structure:** List (current `experience.tsx` — preserved with updated timelines).

**Per entry:**
- Title, company (with remote indicator where verified), duration
- Specific contribution descriptions from resume (not generic role summaries)
- Highlight tags (verified technologies/features)

**Verified timeline (already applied to code):**
- Traytic — Jul 2026 – Aug 2026 (Frontend Engineer)
- Churchera — Jan 2026 – Present (Frontend Engineer)
- Starrik — Sep 2024 – Dec 2025 (Lead — noted in resume; positioned as production role, not seniority claim)
- Roothub — Dec 2024 – 2025 (Web development program / frontend work)

### Technical Capabilities (Skills)

**Structure:** 5 category cards (current `skills.tsx` — preserved with updated categories).

**Categories (evidence-backed):**
- **Frontend:** React.js, Next.js, TypeScript, Vite, Redux, Zustand, Context API, TanStack Query
- **Styling:** TailwindCSS, CSS3, HeadlessUI, ShadCN
- **Backend & Database:** Node.js, Firebase, REST APIs, Firestore, Supabase
- **Tools:** Git/GitHub, pnpm, Postman, Figma, VS Code
- **Inclusive Design:** Responsive Web Design, Accessibility-Focused Development

**Not:** Technology dumps, unverified tools, or claims that don't map to work evidence.

### About

**Content (already updated — preserve):**
- 2 paragraphs: who (frontend engineer, 2+ years, production focus), what I care about (interfaces that stay calm under load, architecture between data/time/user, mentoring in team context, curiosity)
- Recent focus areas: Traytic (GodMode OS, analytics/auth/workspace), Churchera (FaithTech, RBAC/Supabase), Starrik (courier tracking, Firebase, real-time)
- No unsupported claims about open-source, mentoring as headline, or architecture leadership

### Education

**Content (new `education.tsx` — preserved):**
- University of Uyo — BSc Computer Science (2024–2028, GPA 4.8/5.0)
- Coursework: Data Structures & Algorithms, Software Engineering, Web Development, Database Systems, Computer Networks
- SSCE — Shammah College (2017–2023)
- Languages: English (Professional Proficiency), Ibibio (Native)

### Contact

**Content (already updated — preserve):**
- Form with validation (Zod + React Hook Form — verified in code)
- Direct links: Email, GitHub (Zaph123), LinkedIn (zaphenath-bassey), Phone (+234 902 276 1407)
- Success feedback (toast — verified in `contact.tsx`)
- Note that backend delivery is TBD (honest — not fabricated)

---

## 9. Visual Evidence Strategy

### Asset inventory (verified)

| Asset | Type | Quality for Portfolio | Recommended Use |
|---|---|---|---|
| `macbook-air-and-phone-mockup -starrik.jpg` | Device mockup (macbook + phone) | High — shows responsive presentation of courier platform | Featured in Starrik project; hero/section background if appropriate |
| `macbook-air-and-phone-mockup -starrik-transparent.jpg` | Device mockup (transparent bg) | High — flexible placement | Alternate presentation for Starrik |
| `macbook-air-and-phone-mockup-churchera.jpg` | Device mockup (macbook + phone) | High — responsive presentation of finance/community platform | Featured in Churchera project |
| `macbook-air-and-phone-mockup-churchera-transparent.jpg` | Device mockup (transparent bg) | High — flexible placement | Alternate presentation for Churchera |
| `traytic.png` | Logo / graphic (65K, older) | Medium — brand identity only; NOT product UI | Use clearly labeled; do not present as product screenshot |
| `public/icon.png`, `favicon` assets | Brand / icon assets | Standard | Header / favicon only |

### Design response to uneven assets

The design must not assume every project has a large thumbnail. Use:
- Typography-driven layout (strong headings, clear descriptions, technical tags)
- Structured feature lists where images are thin
- Mockup assets prominently where available (Starrik, Churchera)
- Clear labeling for brand assets (`traytic.png`)
- Pattern / structured information treatments for QuizManiac / HustleLoop rather than empty image placeholders that could be mistaken for screenshots
- Text hierarchy that communicates capability even when visual evidence is partial

---

## 10. Design Direction (Respecting DESIGN.md — Verified Authority)

### Established visual anchors (preserve — not redesign)

- **Palette:** Terminal lime (primary `#7FA800`, accent `#C6FF00` for buttons/CTAs only — never text). Black `#0B0B0B`. Warm neutrals (`#FAFAF8` to `#141412`). All verified against WCAG in DESIGN.md.
- **Typography:** Space Grotesk (display) + Inter (body) + JetBrains Mono (code). Verified in `app/layout.tsx` font loading.
- **Layout:** `max-w-4xl` container, 8px grid, asymmetric left-aligned layouts, 128px section spacing.
- **Shape:** Hierarchical radius (buttons: 8px, cards: 16px, inputs: 4px, badges: full). No `rounded-2xl`+.
- **Borders over shadows:** `1px` borders in `neutral-200` / `neutral-700`. No elevation shadows.
- **Dot grid:** Subtle lime-tinted radial gradient (`rgba(127, 168, 0, 0.06` light / `0.08` dark) — verified in `globals.css`.

### Implementation status vs. design direction

| Element | Status | Note |
|---|---|---|
| Color tokens (`globals.css`) | Implemented | Verified |
| Font loading (`layout.tsx`) | Implemented | Space Grotesk, Inter, JetBrains Mono |
| Light/dark theme (`globals.css`) | Implemented | `.dark` variants verified |
| Section spacing / container | Implemented (`container-center`) | 128px vertical, max-w-4xl |
| Cards with borders / no shadow | Implemented (`projects.tsx`) | Verified |
| Focus rings (`--ring`) | Implemented | Lime-700 light / Lime-400 dark |
| Reduced motion | Partially implemented (`motion-provider.tsx`) | Should respect `prefers-reduced-motion` fully |
| Dot grid (`body::before`) | Implemented | Verified |
| Glass-effect utility | Implemented (`.glass-effect` class) | Verified |

### What the blueprint needs from design (not prescribing every detail)

- Ensure design supports text-heavy cards (for QuizManiac/HustleLoop / Traytic) — not image-only layouts
- Use mockups prominently for Starrik/Churchera
- Maintain border-over-shadow, no-shadows aesthetic (per DESIGN.md)
- Ensure accessible contrast for lime-300 button backgrounds (`#C6FF00` with black text — verified safe; never use lime-300 for text)
- Confirm `prefers-reduced-motion` enforcement across all motion components
- Preserve existing `lenis` smooth-scroll integration (verified in `layout.tsx`) with proper `scroll-padding-top`

---

## 11. Interaction / Motion Strategy

### Principles (from AGENTS.md §11, DESIGN.md §376, skills reference)

Motion must be motivated — hierarchy, feedback, state transition, story. Not decorative.

**Verified in current code:**
- Hero: staggered entrance (paragraph → h1 → body → buttons → stats → scroll indicator) with custom easing `[0.22, 1, 0.36, 1]`
- Sections: fade-up on scroll (`use-scroll-animation.ts`) with viewport detection
- Buttons: 200ms color transition
- Cards: hover background/border transition (`card-hover` class)
- Focus rings: visible 2px lime ring

**Requirements:**
- All animations disabled when `prefers-reduced-motion: reduce`
- No page-load splash screens or intro sequences (DESIGN.md §388)
- No scrolljacking / parallax overload (subtle on headings only)
- Motion supports navigation (scroll-to-section via navbar) and feedback (button hover, focus, form validation)

---

## 12. Accessibility & Responsive Strategy

### Requirements (verified from code + DESIGN.md + AGENTS.md §11)

**Semantic:** `<section>`, `<nav>`, `<main>`, `<header>`, `<footer>`, proper heading hierarchy, `<article>` for projects (verified).

**Keyboard:** All interactive elements reachable (buttons, links, form inputs, nav links). Focus order logical.

**Focus:** 2px lime ring (`--ring`) visible on all interactive elements. No hidden focus states.

**Color:** All pairs pass WCAG AA per DESIGN.md (§524–534). Lime-300 (`#C6FF00`) used only for button backgrounds with black text — never for text (verified in `globals.css`, `components/sections/hero.tsx` button style, `contact.tsx` button style).

**Reduced motion:** Must respect `prefers-reduced-motion`. Implement fully across `motion-provider` and scroll animations.

**Responsive:** Mobile-first (375px), tablet (768px), desktop (1024px), large (1440px). Touch targets 48px+. Navigation collapses on mobile (existing `navbar` component).

**Typography:** Minimum `base` (16px) for body; never smaller for reading surface. `xs` (12px) only for captions/metadata with high-contrast colors.

---

## 13. Technical Constraints

### Existing dependencies (verified — do not replace without reason)

- **Framework:** Next.js 16.2.0, React ^19, TypeScript 5.7.3
- **Styling:** Tailwind CSS ^4.2.0, PostCSS ^8.5, `tw-animate-css`, `@tailwindcss/postcss`
- **UI primitives:** Radix UI (accordion, alert-dialog, aspect-ratio, avatar, etc. — used by shadcn components)
- **Components:** shadcn/ui components (button, drawer, section-heading, sonner, etc.)
- **Animation:** Framer Motion ^11.0.0 (current; could migrate to `motion` per motion skill recommendation — not required unless budget demands)
- **Scrolling:** Lenis ^1.3.26 (verified in `layout.tsx`)
- **Forms:** React Hook Form ^7.54.1 + Zod ^3.24.1 (verified in `contact.tsx`)
- **Themes:** Next-themes ^0.4.6
- **Icons:** Lucide React ^0.564.0
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (next/font/google — verified)
- **Analytics:** Vercel Analytics (production only — verified in `layout.tsx`)

### Constraints for new implementation

- Use existing dependencies for new features (e.g., form validation already handled by `react-hook-form` + `zod`)
- Do not introduce new animation libraries unless existing Framer Motion fails
- Maintain `pnpm` workspace (verified `pnpm-workspace.yaml`)
- Do not change `app/layout.tsx` font loading or metadata structure without cause
- Keep `next.config.mjs` minimal; add only if routing (case studies) requires

---

## 14. Case Study Strategy (Evidence-Conditional)

### Current status (from CONTENT_EVIDENCE.md)

- **Starrik:** Strong visual (mockup) + resume. Could support minimal case study if content written (problem, contribution, approach, evidence). No source code, no architecture docs.
- **Churchera:** Strong visual (mockup) + resume. Could support minimal case study.
- **Traytic:** Best resume detail but only logo graphic. Case study possible with written content only — no visual beyond logo.
- **QuizManiac:** No visual, no case study content. Not ready.
- **HustleLoop:** No visual, team collaboration (not solo). Not ready.

### Recommendation (from BLUEPRINT.md — corrected by evidence)

**Do NOT create `/work/[slug]` routes until:**
- User confirms case-study content for at least 2 projects (Starrik + Churchera recommended first; Traytic possible with written-only format)
- User provides or confirms live URLs and repository links
- User provides any additional product screenshots or feature images needed

**If case studies proceed:**
- Use the BLUEPRINT.md §8 structure (problem → contribution → technical challenge → approach → implementation → evidence → outcome → lessons → links)
- Mark any missing elements explicitly (e.g., "Outcome: Qualitative — responsive interfaces verified via mockup; quantitative metrics not independently verified")
- Include only evidence-backed claims; never invent outcomes or metrics

---

## 15. Conversion Strategy

### Visitor journey (designed for 2+ years engineer, not senior architect)

1. **Who?** — Hero: "Zaphenath Bassey — Frontend Engineer" + role + specialization ( immediate)
2. **What?** — Work section: Starrik (real-time logistics) + Churchera (RBAC/finance) + Traytic (admin/analytics/auth) — concrete projects
3. **Proof?** — Mockup assets visible; resume-backed descriptions; skills grouped by work evidence; contact links verified
4. **Depth?** — Experience timeline (verified dates); specific feature descriptions (auth, RBAC, analytics, tables, payments); design-system awareness; accessibility features
5. **Verify?** — Education (University of Uyo, GPA); GitHub link (Zaph123); LinkedIn link; project tech tags match resume
6. **Contact?** — Form + direct links + clear CTAs (already implemented)

### Friction avoidance

- No hidden navigation — all sections reachable via navbar
- No mandatory form submission — direct email always available
- No case-study dependency — portfolio stands alone without `/work/[slug]`
- No fabricated evidence — visitor can verify claims through visible code, resume references, mockup assets

---

## 16. Content That Must Not Appear (Preserved From Validation)

Explicit exclusions — verified against AGENTS.md §8, POSITIONING_VALIDATION.md, CONTENT_EVIDENCE.md:

- Senior / Lead / Architect as seniority signals (corrected)
- "6 years experience" (corrected to 2+)
- Unverified metrics ("40% improvement", "35% retention", etc.)
- Fabricated testimonials / endorsements
- Fabricated clients / users / revenue / partnerships
- Unsupported architecture documentation or "architecture-first" headline
- Unsupported "real-time specialist" identity
- Fabricated screenshots (QuizManiac, HustleLoop — none exist; do not create placeholders that could be mistaken)
- Fabricated case studies (empty `/work/[slug]` routes)
- Mentoring as headline claim (de-emphasized per user directive)
- Open-source claims without links
- Any claim that `traytic.png` is a UI screenshot (label as logo/brand)
- Performance benchmarks without measurement evidence

---

## 17. Implementation Priorities (Corrected for Evidence)

### Must have (verified available, does not invent)

- Confirm content in hero, about, experience, projects matches resume (already done in code updates)
- Verify all external links (GitHub Zaph123, LinkedIn zaphenath-bassey, live URLs if confirmed) — currently `#` for unconfirmed
- Confirm `contact.tsx` form validation and toast feedback work correctly (already implemented)
- Confirm `education.tsx` renders properly (new file)
- Preserve accessibility features (focus rings, semantic HTML, reduced-motion)
- Preserve design tokens (`globals.css`, `DESIGN.md`) — no palette change needed

### Should have (low risk, improves credibility)

- Add case-study pages ONLY for projects where content + assets confirmed (Starrik, Churchera first); do not create empty routes
- Confirm / update `public/` asset labeling (mockups clear; traytic clearly branded)
- Add alt text for mockup images when placed in UI
- Verify `next/image` usage if images placed (currently not used — can use standard `<img>` or `next/image` with proper sizing)

### Nice to have (does not affect evidence integrity)

- Optional personal photo (per BLUEPRINT.md §6 — do not fabricate placeholder)
- Additional project screenshots if user supplies
- Enhanced case-study content for Traytic (with written-only format if no full mockup)
- Open-source links if user verifies real repos
- Blog / writing links if verified

### Evidence-dependent (BLOCKED until evidence provided)

- `/work/[slug]` case studies beyond Starrik/Churchera
- Visual redesign of QuizManiac / HustleLoop cards beyond text/structure
- Any claim requiring new assets, metrics, or external verification

---

## 18. Open Decisions (Requiring User Input)

Recorded per AGENTS.md §4 / BLUEPRINT.md §11 — not silently resolved:

| Decision | Impact | Status | User Input Required? |
|---|---|---|---|
| **Live URLs for projects** (Starrik `starrik.com`, Churchera `churchera.com`, Traytic `traytic.com`) | Portfolio cards currently use `#`; links either verified or removed | Partial — old links removed, new not confirmed | **Yes — confirm which live URLs are active and should be linked** |
| **Project GitHub repositories** (Starrik, Churchera, QuizManiac, HustleLoop) | Current cards use `https://github.com/Zaph123` (profile); specific repo links unverified | Partial — profile link correct per resume | **Yes — confirm if specific project repos exist and provide URLs** |
| **Case study pages** (`/work/[slug]`) | BLUEPRINT.md proposes; CONTENT_EVIDENCE.md recommends only for verified projects | Not created | **Yes — confirm which projects get case studies and what content is available** |
| **Additional project screenshots** (QuizManiac, HustleLoop, Traytic UI) | Would improve visual credibility; not required | Not available | Optional — provide if available |
| **Personal photo** | Optional per BLUEPRINT.md; design works without | Not provided | Optional — do not fabricate placeholder |
| **Open source / writing links** | BLUEPRINT.md / DECISIONS.md flagged; resume does not emphasize | Unverified | Optional — only if real links exist |
| **Contact form backend** (email service, Vercel function, etc.) | Form renders and validates; delivery mechanism TBD | Present (toast + console log) | Optional — establish delivery method when ready |

---

## 19. Success Criteria (Evidence-Based — Not Inflated)

A visitor to the portfolio should be able to answer within 15 seconds:

1. **Who?** — Zaphenath Bassey, Frontend Engineer, React/Next.js + TypeScript
2. **What specialization?** — Production frontends across B2B admin, logistics, finance-adjacent platforms
3. **What has he built?** — Starrik (mockup + real-time + Firebase), Churchera (mockup + RBAC + Supabase), Traytic (analytics/auth/workspace + design system), QuizManiac (React/Vite + Firebase), HustleLoop (marketplace + payments + KYC)
4. **What technical problems?** — Authentication with TOTP/bot protection; RBAC for sensitive data; analytics with Recharts; complex data tables with pagination/search/bulk actions; responsive design; accessibility; design-system contributions
5. **What evidence supports it?** — Mockup assets for Starrik/Churchera; updated experience descriptions; verified skills; new education section; verified contact links; source code demonstrating responsive design, form validation, accessibility features, design tokens
6. **How to contact?** — Form working; direct email/LinkedIn/GitHub/phone links verified

The portfolio should feel **technically credible** — not because it claims seniority, but because it demonstrates specific capabilities with concrete evidence (design tokens, form validation patterns, mockup assets, verified timelines, portfolio code quality) rather than abstract labels.

---

## Consistency Check (Performed Before Writing)

Checked against:
- **AGENTS.md** — Workflow phases (AUDIT → DISCOVERY → POSITIONING → CONTENT/EVIDENCE → VISUAL DIRECTION → DESIGN SYSTEM → BLUEPRINT → IMPLEMENTATION) respected; no skip to implementation; evidence rules preserved; material-decision rule applied (user input required for live URLs, case studies, photo); source-of-truth hierarchy maintained.
- **PORTFOLIO_POSITIONING_VALIDATION.md** — Title corrected (Frontend Engineer, not Senior); experience corrected (2+ years); claims classified (React/Next.js verified; architecture-first replaced; mentoring de-emphasized; real-time partially verified); audience verified; all exclusions preserved.
- **CONTENT_EVIDENCE.md** — Evidence hierarchy applied to all 5 projects; gaps documented (no case study pages, no QuizManiac/HustleLoop visuals, no architecture docs, no metrics); safe/avoid claims listed; mockup asset status clarified (Starrik/Churchera strong, Traytic logo only, others none); content recommendations preserved.
- **DESIGN.md** — Palette (terminal lime + black + warm neutrals) preserved; typography (Space Grotesk/Inter/JetBrains Mono) preserved; layout (max-w-4xl, 8px grid) preserved; shapes (hierarchical radius, borders over shadows) preserved; motion (purposeful, reduced-motion) preserved; accessibility (WCAG AA pairs, focus rings) preserved.
- **Existing PORTFOLIO_BLUEPRINT.md (backup `PORTFOLIO_BLUEPRINT.md.bak`)** — Contradictions identified and resolved:
  - Old positioning: "Senior Frontend Engineer", "6 years", "Architecture-first headline" → Corrected.
  - Old brand: Cream/navy (`#F0E7D5` / `#212842`) — Note: this differs from current `DESIGN.md`/`globals.css` (terminal lime / black / warm greys). The new blueprint uses current design authority (`DESIGN.md`) — **no palette redesign needed**.
  - Old case study plan (`/work/[slug]` for 3 projects with full content) → Corrected to evidence-conditional (only if content verified).
  - Old metrics ("40% improvement", etc.) → Corrected to qualitative only.
  - Old mentoring/open-source as headlines → De-emphasized.
  - New design direction preserved (minimalist, intentional, no gradients/3D, clarity > flashiness) — aligns with current `DESIGN.md`.

**Remaining contradictions / unresolved:**
- Old blueprint proposed cream/navy; current design is terminal lime. User has established lime in `globals.css` / `DESIGN.md`; no contradiction — current design is authoritative.
- Old blueprint proposed `DM Sans`; current design uses `Space Grotesk`. Again — current design is authoritative.
- User did not explicitly confirm whether case studies should proceed; open decision preserved (§18).
- User did not provide additional screenshots, live URLs, or repo links; open decisions preserved (§18).

---

## Final Note

This blueprint defines strategy — not code. It respects the validated evidence, corrects the old blueprint's overclaims, preserves useful existing decisions (structure, contact form, accessibility, design tokens), and explicitly marks what remains unresolved. Implementation should reference this document, not invent beyond it.
