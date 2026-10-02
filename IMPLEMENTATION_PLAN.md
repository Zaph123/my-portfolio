# Revised Implementation Plan — Portfolio Motion System
Status: VERIFIED-CONSTRAINTS + IMPLEMENTATION-VALIDATION PLAN. No code modified, no dependencies installed. Awaiting implementation validation against actual mockups/code.

## 1. Verified Current State (before any changes)
- `app/layout.tsx`: Confirmed Server Component. Can mount a client component from it; must not be converted to Client Component solely for this feature.
- `components/hero.tsx`: Full cascade entrance exists; no conditional skip mechanism yet.
- `components/motion-provider.tsx`: `MotionProvider` with `reducedMotion="user"` already present; `useReducedMotion` hook available.
- `components/sections/projects.tsx`: Featured Starrik / Churchera grid; clip-path utilities in `globals.css`; no handoff code exists.
- No opening overlay exists; no first-visit storage mechanism exists.
- `MOTION_STORYBOARD.md` (2026-09-26) defines scene order: Opening (optional, first visit) → Hero → About → Work/Starrik → Starrik → Churchera (crop/mask handoff) → Churchera → Traytic → Compact → Stack → Experience → Contact → Footer. Reduced-motion pass is defined per scene.
- Creative Decision (approved): Only the Starrik → Churchera crop/mask handoff is approved. Reveal axis/direction is not prescribed and must be validated during implementation.

## 2. High-Level Changes
| Feature | What Changes | Reuse / New | Risk / Note |
|---|---|---|---|
| Opening Sequence (optional, first visit only) | Overlay shows identity (name + role), then exits; hero is visible underneath but performs its entrance only when appropriate. | Reuse Framer Motion / Lenis; new minimal overlay component + narrowest client-boundary state. | Low — isolated mount; must not block hero or create intermediate state. |
| Hero Entrance | Preserve existing cascade for repeat visits; do not disable it via `openingShown`. On first visit, after overlay exit, hero must already be in final visible state — do not run a second hero entrance. | Modify hero conditionally only for the first-visit hand-off (final-state, not skipped). | Medium — must distinguish first-visit final-state from repeat-visit entrance. |
| Starrik → Churchera Handoff | Implement crop/mask handoff. Axis/direction undetermined — validate against actual mockups during implementation. | Reuse existing image assets, clip-path CSS, Framer Motion `useTransform`. | Medium — clip-path must not distort mockups; direction validated at build/test time. |
| Skills / Stack | Keep existing category grid; no marquee. | Reuse `skills.tsx`. | Low. |
| Motion hierarchy & reduced motion | Overlay and hero entrance must respect `prefers-reduced-motion`. No artificial delay; hero renders immediately in final state. | Reuse `MotionProvider` and `useReducedMotion`. | Low — connect existing hooks. |
| Accessibility / focus | Verify focus rings (`--ring`), ARIA labels on overlay interaction (Escape / click to close / skip) and CTA buttons. | Reuse existing accessible patterns. | Low — verify only. |

## 3. Files Affected
| File / Path | Action | Reason |
|---|---|---|
| `components/OpeningOverlay.tsx` (new) or minimal inline | New presentation component for identity overlay. Mount conditionally at narrowest client boundary inside layout structure. | First-visit optional entry; must not convert `app/layout.tsx`. |
| `components/hero.tsx` | Modify to support first-visit final-state (already visible, no second entrance after overlay) and preserve existing cascade for repeat visits. | Behavioral change only for first-visit hand-off; no structural lock. |
| `components/sections/projects.tsx` | Add minimal crop/mask handoff (Starrik → Churchera). Axis/direction not prescribed; determine during validation against mockups. | Approved creative decision — crop/mask only. |
| `app/layout.tsx` | Conditionall render overlay after `<Navbar />`, before `<HeroSection />`. Add first-visit state at narrowest client boundary (client component mounted inside layout, not converting layout itself). | Must remain Server Component. |
| `globals.css` / motion tokens | No token-value changes required; use existing `--primary`, `--accent`, clip-path utilities, and motion conventions. | Reuse. |

No changes to: `navabr.tsx`, `education.tsx`, `contact.tsx`, `footer.tsx`, `tsconfig.json`, `package.json`, `pnpm-lock.yaml`, project data/images/tech tags/live URLs.

## 4. Component Behavior (behavioral requirements; implementation validates specifics)

### 4.1 Opening Sequence (first visit, motion allowed; optional)
- Initial state: Full-viewport overlay covers viewport. Hero is already mounted underneath at final layout state; it does not perform its entrance while overlay is present.
- Trigger: First visit + motion allowed. Skip if reduced motion, repeat visit, user skip (Escape / click / tap), or if it introduces delay on mobile.
- Movement: Name/role appear; overlay lifts/curtains upward (not fade-to-black). No blocking animation that prevents hero from being ready.
- Payoff: The overlay is the beginning; no blank frame; no “intro over, site starts.” After exit, hero is visible and already in final state.
- Rest state: Overlay gone; does not return this session.
- Underlying requirement: The underlying hero must be mounted and ready immediately; the opening overlay must never introduce an artificial loading or waiting state.
- Reduced motion: No overlay; hero visible immediately in final state. No artificial wait.

### 4.2 Hero Entrance (behavioral rules — do not prescribe timing/mechanism yet)
- First visit: The opening sequence replaces the hero's entrance animation. After overlay exit, hero is already visible in its final state; do not run a second hero entrance.
- Subsequent visits: Preserve the existing hero entrance behavior (cascade: label, name, headline, supporting copy, CTAs, socials; then stop).
- Do not use `openingShown` (or any equivalent flag) as a reason to disable the hero's normal entrance on repeat visits. The distinction is visit-order, not a prop that suppresses entrance globally.
- Reduced motion: Final layout; hero renders immediately; no cascade.

### 4.3 Starrik → Churchera Crop/Mask Handoff (approved; axis undetermined)
- Concept: Starrik’s visible window recedes; Churchera revealed via crop/mask.
- Determination: Exact clip-path shape, reveal direction, and choreography must be validated against actual mockups during implementation. Do not prescribe axis/direction in this plan.
- Implementation validation steps before locking durations: inspect mockup layout, test clip-path on actual images, verify no distortion.
- Reduced motion: Instant next scene — both scenes visible in final crops, no animation, no intermediate state.
- No exact `will-change`, no fixed duration, no fixed easing prescribed here; use existing motion tokens/conventions after validation.

### 4.4 Skills / Stack
- Keep existing category grid. No marquee.
- Entrance: small staggered reveal once, then fully still.

### 4.5 Reduced-Motion / Accessibility Requirements (immediate final state)
Required behavior (implementation chooses mechanism after inspection):
- No blocking overlay animation.
- No artificial waiting period.
- No hero entrance animation.
- Hero immediately renders in final state.
- First-visit state never creates an intermediate/awkward state.
- Focus rings (`--ring`) verified on overlay interaction points and hero CTAs.
- `aria-label` verified where needed (overlay skip/close, hero CTAs if not already present).
- 48px hit targets maintained.

### 4.6 First-Visit Architecture (not prematurely locked)
- Inspect existing component tree to identify the narrowest appropriate client boundary.
- `app/layout.tsx` remains a Server Component.
- Introduce first-visit state at the narrowest client boundary after inspection; do not convert `app/layout.tsx` solely for this feature.
- Choose `localStorage` vs `sessionStorage` based on intended first-visit behavior (session = per tab/session; local = per device/browser; document the choice before implementation).
- Do not prescribe a specific hook (`useIsFirstVisit`), prop-drilling, context, or storage mechanism in this plan. The mechanism is selected after tree inspection.

## 5. Implementation Sequence (ordered; no code written yet)
1. Inspect component tree (layout + hero + motion-provider + projects) to confirm narrowest client boundary for first-visit state. Document storage choice.
2. Create / add opening overlay at that boundary; mount inside layout structure (not converting layout). Validate that hero is ready immediately underneath.
3. Modify hero to distinguish first-visit final-state from repeat-visit cascade; do not globally suppress entrance with a flag.
4. Implement Starrik → Churchera crop/mask handoff in `projects.tsx` (or new component). Validate clip-path shape and direction against mockups; adjust after inspection.
5. Verify reduced-motion behavior: overlay skipped, hero final-state immediately, no intermediate/awkward first-visit state.
6. Verify focus/accessibility on overlay and hero CTAs.
7. Build / type-check (`npx tsc --noEmit`; `npx next build`) and manual QA: first visit → overlay; repeat → existing hero entrance; reduced motion → all final-state.

## 6. Risks & Unresolved Implementation Questions
- Clip-path animation performance / cross-browser support — test after validation; fallback to static images if needed.
- Storage choice (session vs local) must match intended “first visit” semantics — document before implementation.
- Double-fire of overlay + hero — ensure first-visit state is checked before hero animation starts; use visit-order logic, not a global suppression prop.
- Exact clip-path values, choreography, and axis — unresolved until mockup validation; this is intentional per approved creative decision.

## 7. What Must NOT Happen
- No 10-second timer or forced wait.
- No Einstein / secondary brand in opening.
- No second animated hero entrance after overlay (first visit: hero already final after overlay exit).
- No change to project data, images, tech tags, live URLs.
- No new dependencies (GSAP, ScrollTrigger, Three.js).
- No component modifications beyond those listed.
- No prescribed axis/direction for Starrik → Churchera before mockup validation.
- No conversion of `app/layout.tsx` to Client Component solely for this feature.

## 8. Final Status
VERIFIED-CONSTRAINTS + IMPLEMENTATION-VALIDATION PLAN APPROVED (post-correction). All creative decisions are either locked (Starrik → Churchera crop/mask handoff approved; axis not prescribed) or explicitly deferred to implementation validation (clip-path shape/direction/choreography; storage mechanism; narrowest client boundary after tree inspection). No premature implementation locks remain.