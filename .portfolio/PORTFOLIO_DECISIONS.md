# Portfolio Decisions — Zaphenath Bassey

> Strategic decisions, alternatives considered, and rationale. This document captures *why* decisions were made so implementation is grounded and traceable.

---

## Decision 1: Keep "Einstein" de-emphasized

**Decision:** Lead with "Zaphenath Bassey" as the primary identity. "Einstein" appears naturally in secondary contexts (footer, LinkedIn link anchor text), but NOT in the hero headline as an unexplained "also known as Einstein" phrase.

**Rationale:** 
- LinkedIn is "Einstein Bassey" — there's a real brand connection that should not be severed.
- An unexplained "also known as Einstein" in the hero reads as affectation to recruiters who don't know the backstory.
- Portfolio's primary job is to convert as a professional credential; the nickname can be a discovery element, not a headline element.

**Alternatives considered:**
- Full removal of "Einstein" — rejected because it severs the LinkedIn connection.
- Full prominence (keep current "also known as Einstein") — rejected as unexplained and credibility-risk.
- Create a "also known as Einstein" link to a /about page explaining the nickname — adds complexity; overkill for a nickname.

**Implementation:** Remove the "also known as Einstein" line from HeroSection. Add a small "Einstein" reference in the footer next to the name, or in the LinkedIn link text ("LinkedIn (Einstein Bassey)").

---

## Decision 2: Use real GitHub repo URLs

**Decision:** Replace all `#` placeholder GitHub links with the user's provided real URLs:
- Starrik: `https://github.com/Atabang/starrik.git`
- Churchera: `https://github.com/Churchera/churchera.git`
- Hustleloop: `https://github.com/icekidtech/hustleloop.git`

If a project has no public repo, remove the "Code" link from that project's card entirely rather than link to `#`.

**Rationale:**
- Handbook §4: "Never fabricate evidence." Dead `#` links are evidence of fabrication or neglect.
- Real repos build trust even if they're private — having a real URL signals transparency.
- A private repo link can still communicate "I can share this with you privately" if asked.

**Alternatives considered:**
- Link all to a single "view my GitHub" profile — rejected; too generic.
- Remove all code links entirely — rejected; many recruiters want to see code.

---

## Decision 3: Qualify or remove unverifiable metrics

**Decision:** Remove the 40% / 35% / 50% metrics from the Experience section. Replace with qualitative, verifiable descriptions of what was accomplished.

**Before (unverifiable):**
> "Improved app performance by 40%"

**After (qualitative, honest):**
> "Optimized rendering pipeline by batching state updates; reduced unnecessary re-renders"

**Rationale:**
- The metrics are not independently verifiable from the codebase. Without dashboards, Slack proofs, or review docs, they read as invented.
- Handbook §4 explicitly forbids inventing statistics.
- A recruiter who asks "how did you measure that?" and gets no answer loses trust.
- Qualitative outcomes are still compelling: "batched state updates" demonstrates technical thinking.

**Alternatives considered:**
- Keep them and add a disclaimer "approximately" — rejected; disclaimers don't make unverifiable claims credible.
- Ask the user for verification — done; no response, so default to removal.

---

## Decision 4: Add contact form with react-hook-form + zod

**Decision:** Add a contact form component to the ContactSection using the existing `react-hook-form` and `zod` dependencies already installed in the project. Keep the direct email link alongside it.

**Form fields:**
- Name (required, min 2 chars)
- Email (required, valid email format)
- Message (required, min 10 chars, max 1000)

**Backend:** TBD. For now, just establish the UX:
- Form renders and validates client-side.
- On submit, show a success toast (using existing `sonner` dependency).
- Log to console or show "Message sent!" — backend delivery is a separate decision.

**Rationale:**
- Handbook: "Your ideal client might have different preferences on how they'd like to communicate with you" — some prefer forms, some prefer direct email.
- `react-hook-form` + `zod` are already in `package.json` — low cost to implement.
- Direct email link remains for users who prefer mailto.

**Alternatives considered:**
- Only mailto link — rejected per user request for a "proper contact form".
- Full backend integration now — rejected; backend delivery decision is separate (email service, Vercel function, form handler).
- Third-party form service (Formspree, etc.) — defer until backend decision made.

---

## Decision 5: Use separate `/work/[slug]` case-study pages

**Decision:** Create a new dynamic route `app/work/[slug]/page.tsx` that renders individual case studies. The homepage project cards link to these pages.

**Route structure:**
```
/work              → (optional) projects gallery index
/work/starrik      → Starrik case study
/work/churchera    → Churchera case study  
/work/roothub      → Roothub case study
```

**Case study structure (flexible, per project):**
- Hero (project name, role, dates)
- Problem / Context
- Constraints
- Role
- Technical decisions (the "why")
- Stack
- Outcomes
- Lessons learned
- Links (live, code)

**Rationale:**
- Handbook §3: "The case study is where we give more context to the work we did beyond the initial thumbnail on the homepage."
- Separate pages allow deeper SEO (each project gets its own metadata, JSON-LD).
- A single-page anchor approach limits depth; separate pages scale better if case studies grow.
- The user explicitly requested separate pages.

**Alternatives considered:**
- Single-page with expandable cards — rejected; less SEO value, harder to maintain deep content.
- External case studies (Medium, Hashnode) — rejected; keeps traffic on-site, better for conversion.

---

## Decision 6: No personal photo (design without)

**Decision:** Design the portfolio without requiring a personal headshot. If the user provides one later, it can be added to the About section. Do not fabricate or use placeholder photos.

**Rationale:**
- Handbook: "a professionally taken photo immediately builds trust and suggests quality in your work."
- User explicitly said: "A professional photo is optional... If I don't, design the portfolio without one."
- Adding a placeholder image would look worse than no image.

**Alternatives considered:**
- Use Avatar component with initials fallback — could work but looks generic.
- Ask for photo again — user said optional; don't pester.
- Design with photo slot but hidden by default — adds complexity for conditional; keep simple.

---

## Decision 7: Add `prefers-reduced-motion` support

**Decision:** Update the animation variants in `hooks/use-scroll-animation.ts` to respect the user's system preference for reduced motion.

**Implementation:** Wrap Framer Motion animations with `useReducedMotion()` hook from Framer Motion, or add `prefers-reduced-motion` media query check in the variants. The simplest approach: disable animation entirely when reduced motion is preferred.

**Rationale:**
- Accessibility compliance (WCAG 2.1 Level AA).
- Modern best practice — animations can cause motion sickness for some users.
- Low cost: Framer Motion has built-in support via `useReducedMotion()`.
- The portfolio itself demonstrates technical quality; accessibility is part of that.

---

## Decision 8: Fix anchor navigation behind fixed navbar

**Decision:** Add `scroll-padding-top: 5rem` (or equivalent to navbar height + buffer) to the `html` element in global CSS. This ensures anchor links (e.g., `#projects`, `#contact`) don't scroll content behind the fixed navbar.

**Implementation:** Add `scroll-padding-top: var(--navbar-height, 5rem)` to the `html` rule in `app/globals.css`.

**Rationale:**
- Current behavior: clicking nav links scrolls to the section but the section title is hidden behind the fixed navbar.
- Fix is a single CSS rule — extremely low cost, high impact on UX.
- Already flagged in audit as a bug.

---

## Decision 9: Fix ghost-text parallax clipping

**Decision:** Ensure the `SectionHeading` component's parallax ghost text (the large, low-opacity background text) is not clipped by `overflow: hidden` on parent sections.

**Root cause:** Some sections (Hero, Projects) do not have `position: relative`, but SectionHeading uses `position: absolute` for the ghost text. Without a `relative` parent, the ghost text positions relative to a higher ancestor and may clip.

**Implementation:** Add `position: relative` to any section that uses SectionHeading and doesn't already have it.

**Rationale:**
- Visual bug identified in audit.
- Easy fix (one class per section).
- Affects the visual polish of the portfolio.

---

## Decision 10: Update footer copyright year

**Decision:** Change footer copyright from "© 2024" to dynamic year (new Date().getFullYear()) or hardcoded "© 2026".

**Rationale:**
- Stale copyright year undermines credibility ("if they don't update their own site, what else is neglected?").
- Dynamic is cleaner for long-term maintenance.

---

## Decision 11: Fix webmanifest theme_color

**Decision:** Update `public/site.webmanifest` to use `#212842` (dark navy) as `theme_color` to match the site's actual dark theme primary, rather than `#ffffff`.

**Rationale:**
- Mismatch between manifest and actual theme reduces the "native app" feel on mobile.
- The navy theme color is more on-brand than white.

---

## Decision 12: Align "2+ years" with 2018–Present timeline

**Decision:** Update About section copy to accurately reflect "6 years of experience" (2018–2024 = 6 years) or clarify what "2+ years" refers to (e.g., "2+ years in senior roles").

**Rationale:**
- Inconsistency between About ("2+ years") and Experience (2018–Present = 6 years) erodes credibility.
- Either the timeline is wrong or the About copy is wrong — both need to agree.

---

## Decision 13: Rewrite hero with clear value proposition

**Decision:** Replace the generic hero text with a specific value proposition that answers "why should I care?" in <15 seconds.

**Current:**
> "Frontend Engineer building scalable, production-grade web applications with React, Next.js, and TypeScript."

**Draft (subject to refinement):**
> "I build scalable React and Next.js systems that handle real-time complexity. 6 years shipping production frontends across logistics, faith-tech, and marketplace platforms."

**Rationale:**
- Handbook §Hero: "What do they do?" is answered, but "Why should I care?" is not.
- Generic "I build X with Y" is what every frontend dev says.
- Specificity (real-time, 6 years, 3 domains) differentiates.

---

## Summary of decisions made

| # | Decision | Blocked on |
|---|----------|------------|
| 1 | Einstein de-emphasized, not removed | Implementation |
| 2 | Real GitHub URLs or remove Code link | None (URLs provided) |
| 3 | Remove unverifiable metrics, use qualitative | None (user approved) |
| 4 | Add contact form (UX only) | Backend decision later |
| 5 | Separate `/work/[slug]` case-study pages | Content writing |
| 6 | Design without personal photo (optional) | None (user approved) |
| 7 | Add reduced-motion support | Implementation |
| 8 | Fix anchor navigation | Implementation |
| 9 | Fix ghost-text parallax clipping | Implementation |
|10 | Update copyright year | Implementation |
|11 | Fix webmanifest theme_color | Implementation |
|12 | Align experience claims | Implementation |
|13 | Rewrite hero value prop | Implementation |

---

## Open decisions (deferred)

| Decision | Impact | Why deferred |
|----------|--------|--------------|
| Contact form backend delivery | Medium | Need to know where submissions go (email service, Vercel, form handler) |
| Project screenshots | High | Need user-provided assets |
| Open source links | Low | Need verification of real projects |
| Testimonials | Medium | Need real, attributed quotes |
| Blog / writing section | Low | Nice-to-have; "how I think" can be expressed in case studies |