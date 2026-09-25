# AGENTS.md — Portfolio Redesign Command Center

**This file operates the portfolio redesign. Do NOT redesign the portfolio. Do NOT modify application code.**

---

## 1. Project Mission

This repository redesigns an existing developer portfolio. The goal is to refresh the visual direction, improve accessibility, and modernize the design system — **not** to rebuild from scratch.

**Non-goals:**
- Do not fabricate clients, testimonials, metrics, awards, users, revenue, or partnerships.
- Do not rebuild working functionality unless there is a documented reason.
- Do not replace existing content without cause.

---

## 2. Source-of-Truth Hierarchy

Agents must resolve decisions in this order. Never override a higher level with a lower preference.

1. **Explicit user decisions** — what the user has clearly stated
2. **Project requirements and constraints** — brief, goals, limitations
3. **Verified existing code/content/assets** — what is actually in the repo
4. **Portfolio strategy and project documentation** — DESIGN.md, audit files, decisions
5. **Specialized skills** — `design-taste-frontend`, `interaction-polish`, `build-awwwards-quality-sites`, `impeccable`
6. **General best practices** — accessibility, semantics, performance
7. **Agent assumptions/experimentation** — last resort, must be documented

---

## 3. Core Operating Loop

Always follow: **UNDERSTAND → INSPECT → ASK → RECOMMEND → ALIGN → IMPLEMENT → VERIFY → DOCUMENT**

**Mandatory:** Inspect before changing any code. Read existing files, `package.json`, `DESIGN.md`, and project documentation before making recommendations.

---

## 4. Material-Decision Rule

**If a decision materially affects:**
- brand identity, positioning, audience, information architecture
- visual direction, content claims, project representation
- major UX behavior, architecture, or irreversible implementation choices

...and the answer is not known, **ask the user**. Document the question and the user's answer.

For low-risk implementation details, make a reasonable decision and document it when useful.

---

## 5. Portfolio Workflow

Phases must be followed in order. Do not skip ahead.

```
AUDIT → DISCOVERY → POSITIONING → CONTENT / EVIDENCE
→ VISUAL DIRECTION → DESIGN SYSTEM → BLUEPRINT → IMPLEMENTATION
→ VERIFICATION → ITERATION
```

**Current phase: PORTFOLIO AUDIT**

Do not skip ahead simply because implementation is technically possible.

---

## 6. Design Skill Architecture

Four finalized, complementary skills. They do not compete.

| Skill | Authority | Role |
|-------|-----------|------|
| `design-taste-frontend` | Overall visual direction | Typography, color, layout, redesign strategy, design system selection |
| `interaction-polish` | Animation & interaction engineering | Animation decisions, transitions/easing/timing/springs, micro-interactions, gestures/drag, transforms/clip-path, performance, accessibility/reduced motion |
| `build-awwwards-quality-sites` | Cinematic/art-directed motion-rich sites | Art direction, GSAP choreography, Three.js (purposeful only), honest asset systems, site-wide motion narratives |
| `impeccable` | Quality review/refinement overlay | UX, accessibility, responsive, typography, spacing, IA, performance, interaction quality, anti-patterns |

**Key:** These skills are **complementary, not competing**. Use them in the hierarchy (Section 2), not as alternatives.

Do NOT duplicate their full instructions inside this file.

---

## 7. User's Design Direction

**Initial visual anchor (already established):**

- Lime: `#C6FF00` (neon accent)
- Black: `#0B0B0B` (near-true black foundation)

**This is an initial visual exploration, NOT a finalized design system.**

The visual system must still be evaluated against:
- Positioning, audience, usability, accessibility
- Content, existing portfolio
- WCAG contrast compliance
- The three dials: `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY` (from `design-taste-frontend`)

Do not replace this palette automatically. Honor established visual anchors while evaluating them against all constraints.

---

## 8. Evidence Rules

**Never fabricate:**
- clients, testimonials, metrics, awards, users, revenue
- performance improvements, project outcomes, responsibilities
- technologies, credentials, partnerships, quotes, endorsements

**If evidence is missing,** identify the gap and use an honest alternative. Say so explicitly.

---

## 9. Asset Rules

**Inspect existing assets before creating or replacing anything.**

Do not fabricate personal photographs, client logos, project screenshots, testimonials, or real-world evidence.

Generated decorative assets are allowed when appropriate, but must never be presented as real evidence.

---

## 10. Existing-Codebase Rule

**This is a redesign of an existing project.**

Preserve working functionality unless there is a documented reason to change it.

Before introducing dependencies, components, APIs, patterns, or architectural changes, verify:
- package/version compatibility
- existing conventions
- current implementation
- available components
- existing utilities
- existing design tokens
- dependencies already installed

Avoid blind guesses.

---

## 11. Implementation Quality

**Require:**
- semantic HTML
- responsive behavior
- accessibility (including `prefers-reduced-motion`)
- keyboard/focus support
- performance awareness
- correct loading behavior
- clean component boundaries
- consistent tokens
- maintainable code

**Do NOT use animation merely for decoration.** Every animation must be motivated (hierarchy, storytelling, feedback, or state transition).

---

## 12. Verification

After meaningful implementation, run the relevant:
- typecheck
- lint
- build
- route checks
- link checks
- responsive checks
- accessibility checks
- interaction checks

**Never claim something works without verifying it.**

---

## 13. Documentation

Use these project documents when appropriate (preserve them so future agents do not rediscover decisions):

- `PORTFOLIO_AUDIT.md`
- `PORTFOLIO_BLUEPRINT.md`
- `PORTFOLIO_DECISIONS.md`

---

## Important

- Keep `AGENTS.md` concise — operating manual, not reference work
- Do NOT copy design-skill contents into it
- Do NOT redesign the portfolio
- Do NOT modify application code
- Do NOT create `PORTFOLIO_AUDIT.md` yet (it will be created as part of the audit phase)
- These instructions are compatible with the four finalized design skills