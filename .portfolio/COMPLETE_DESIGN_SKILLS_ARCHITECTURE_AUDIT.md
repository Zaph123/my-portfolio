# Complete Design Skills Architecture Audit

## Executive Summary

Based on analysis of ALL available design skills in the repository (design-taste-frontend, emil-design-eng, animate, build-awwwards-quality-sites, gpt-taste, impeccable), the recommended architecture is:

1. **Merge animate into emil-design-eng** to create a new skill called `interaction-polish`
2. **Merge gpt-taste into build-awwwards-quality-sites** to enhance its motion and layout precision capabilities
3. **Retain design-taste-frontend** as the foundational design system skill
4. **Retain impeccable** as a comprehensive quality assurance and refinement overlay skill
5. **Create a new skill hierarchy** where impeccable sits at the top as a quality overlay that can enhance any of the other skills

This architecture eliminates duplication while preserving all unique capabilities and establishing clear responsibility boundaries.

## Skill-by-Skill Role

### design-taste-frontend (Foundation Layer)
**Role**: Comprehensive frontend design for landing pages, portfolios, and redesigns
**Focus**: Brief inference, design system selection, anti-slop principles, architecture conventions, and redesign protocols

### interaction-polish (Middleware Layer - Motion & Component Polish)
**Role**: General UI/component polish and animation engineering  
**Focus**: Building interfaces that feel right through attention to invisible details, animation decision frameworks, component principles, and performance
*(Merged from emil-design-eng + animate)*

### build-awwwards-quality-sites (Specialized Layer - Motion-Rich Sites)
**Role**: Creating Awwwards-quality, motion-rich marketing/editorial/portfolio/landing sites with enhanced precision
**Focus**: Art direction, honest asset systems, GSAP choreography, Three.js integration, site-wide motion narratives, PLUS gpt-taste's precision elements
*(Enhanced by merging gpt-taste)*

### impeccable (Quality Overlay Layer)
**Role**: Comprehensive design quality assurance, refinement, and optimization
**Focus**: UX review, visual hierarchy, information accessibility, performance, anti-patterns, and iterative improvement across ALL design contexts
**Can be applied as an overlay to any of the other skills**

## What Merges Into What

### animate → interaction-polish
- The 7-step animation build sequence (should animate at all → purpose → tool → properties → easing/duration → interruption/exit → reduced motion/hover gating)
- Specific easing curves (--ease-out, --ease-in-out, --ease-drawer)
- Duration ranges for UI elements
- Spring configuration guidance
- "Never Ship" self-checklist items
- Tool selection hierarchy (CSS transition → @starting-style → CSS animation → WAAPI → Motion)
- Pick-ui-library guidance

### gpt-taste → build-awwwards-quality-sites
- Python-driven true randomization for layout variance (to prevent repetitive outputs)
- Strict AIDA page structure enforcement (Attention, Interest, Desire, Action)
- Wide editorial typography standards (bans 6-line wraps)
- Gapless bento grid requirements (using grid-flow-dense + mathematical verification)
- Strict GSAP ScrollTriggers requirements (pinning, stacking, scrubbing)
- Inline micro-images technique
- Massive section spacing rules
- Hero architecture with 2-line iron rule (H1 2-3 line limit)
- Advanced GSAP motion & hover physics patterns
- Component arsenal enhancements (inline typography images, horizontal accordions, infinite marquee, feedback/testimonial carousel)
- Mandatory pre-flight <design_plan> with verification steps

## What Stays Separate

### design-taste-frontend retains:
- Brief inference system (reading the room before design)
- Three dials system (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY)
- Design system selection guidance (when to use official packages vs aesthetic implementation)
- Default architecture & conventions (React/Next.js, Tailwind, Motion, next/font)
- Comprehensive redesign protocol (detect mode, audit, preservation rules, modernization levers)
- Block library concept for reusable components
- Extremely detailed Pre-Flight Check (78 points)
- Reference vocabulary and pattern naming system
- Appendices with real install commands and canonical sources

### impeccable retains:
- Comprehensive scope covering: websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, empty states
- UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior
- Theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions
- UX copy, error states, edge cases, i18n, reusable design systems/tokens
- Four modes: Persuade, Operate, Read, Experience
- Extensive command set: craft, shape, init, document, extract, critique, audit, polish, bolder, quieter, distill, harden, onboard, animate, colorize, typeset, layout, delight, overdrive, clarify, adapt, optimize, live, generate
- Setup process with context loading and reference files
- Focus on creating "out-of-distribution craft" design work
- Quality floor, absolute bans, and reflexes that no detector catches

## Authority Hierarchy

1. **impeccable** (Top Layer - Quality Overlay): Can be applied to enhance any design work
   - When invoked, it provides quality assurance, refinement, and optimization overlays
   - Works across all design contexts (landing pages, dashboards, product UI, etc.)

2. **For general UI/component polish and animation**: interaction-polish has authority
   - When the task is about making interfaces feel right through motion and component details

3. **For Awwwards-quality motion-rich sites with precision**: build-awwwards-quality-sites (enhanced by gpt-taste) has authority
   - When the task specifically requests Awwwards-level, motion-rich, mathematically precise sites

4. **For overall design systems, brief inference, and anti-slop**: design-taste-frontend has authority
   - When the task is about foundational design systems for landing pages/portfolios/redesigns

When skills overlap in scope, the more specific skill takes precedence in its domain, with impeccable able to overlay any of them for quality enhancement.

## Major Overlaps/Conflicts Resolved

### Duplicated Instructions (Nearly Identical)
- **Between emil-design-eng and animate**:
  - Animation decision framework (should animate at all → purpose → easing → speed/duration)
  - Specific easing curves (identical cubic-bezier values)
  - Duration ranges for UI elements (button press, tooltips, dropdowns, modals)
  - Spring configuration guidance (Apple approach vs traditional physics)
  - Reduced motion implementation (@media (prefers-reduced-motion: reduce))
  - Hover animation gating (@media (hover: hover) and (pointer: fine))
  - Interruptibility guidance (transitions not keyframes for rapidly-triggered elements)
  - Asymmetric timing (slow deliberate phase, snappy system response)
  - Blur for masking imperfect transitions
  - @starting-style for enter states
  - Clip-path for animation techniques
  - Stagger animation approaches
  - Debugging animations (slow motion, frame-by-frame, real device testing)

### Duplicated Instructions (Similar but not Identical)
- **Between emil-design-eng/animate and others**:
  - Button press feedback (scale(0.97) on :active)
  - Never animate from scale(0) (start from scale(0.9) or higher)
  - Make popovers origin-aware (transform-origin: var(--transform-origin))
  - Tooltips: skip delay on subsequent hovers
  - Use CSS transitions over keyframes for interruptible UI

### Complementary Relationships (Not Duplication)
- **design-taste-frontend + gpt-taste**: 
  - design-taste-frontend provides contextual foundation; gpt-taste adds precision and randomization
  - design-taste-frontend's three dials can work with gpt-taste's AIDA structure and spacing rules
  - Both share anti-slop principles but approach from different angles

- **design-taste-frontend + impeccable**:
  - design-taste-frontend provides the foundational design approach; impeccable adds quality assurance and refinement
  - impeccable's modes (Persuade/Operate/Read/Experience) align with design-taste-frontend's page kinds
  - Both have pre-flight checks and focus on eliminating LLM defaults

- **build-awwwards-quality-sites + gpt-taste** (now merged):
  - Natural complement: build-awwwards focuses on motion-rich sites; gpt-taste adds precision and structure
  - gpt-taste's AIDA structure enhances build-awwwards' section sequencing
  - gpt-taste's gapless bento grids and strict GSAP requirements complement build-awwwards' motion system

- **impeccable + all others**:
  - impeccable serves as a quality overlay that can enhance any design work
  - Its audit, polish, bolder, quieter, distill, harden commands can be applied to outputs of other skills
  - Its modes provide different lenses for evaluating design work

### Conflicts
**Minor tensions found, not direct contradictions**:
- **GPT Taste's Python-driven randomization vs. design-taste-frontend's brief inference**: 
  - Different approaches to avoiding LLM defaults (randomization vs. contextual reading)
  - **Resolution**: These can be complementary - use brief inference to set context, then apply randomization within that context for layout variance

- **GPT Taste's strict AIDA structure vs. design-taste-frontend's flexibility**:
  - GPT Taste mandates Attention-Interest-Desire-Action sequence; design-taste-frontend is more contextual
  - **Resolution**: AIDA works well for landing pages (Persuade mode) but may be less suitable for other page types; can be contextually applied

- **Impeccable's breadth vs. specialized skills**:
  - Impeccable covers extremely broad territory that overlaps with all other skills
  - **Resolution**: Position impeccable as a quality overlay/enhancement layer rather than a replacement; it improves rather than replaces specialized skills

## Answers to Specific Questions

### 1. What does each skill actually specialize in?
See detailed breakdown in Skill-by-Skill Role section above.

### 2. Where do they overlap?
See Major Overlaps/Conflicts Resolved section above.

### 3. Which skills are genuine supersets of others?
- **emil-design-eng is a confirmed superset of animate** (retained in interaction-polish merge)
- **impeccable has broad scope that overlaps significantly with all others** but is better positioned as a quality overlay
- **gpt-taste has specialized focus that complements build-awwwards-quality-sites** (hence the merge)
- No other clear superset relationships where one skill completely contains another's unique value

### 4. Which capabilities are unique and valuable?
- **design-taste-frontend**: Brief inference system, three dials, design system selection guidance, comprehensive redesign protocol, block library concept
- **interaction-polish (emil-design-eng + animate)**: CSS transform mastery, clip-path techniques, gesture/drag interactions, Sonner Principles, cohesion/timing principles, 7-step animation gate system
- **build-awwwards-quality-sites (enhanced by gpt-taste)**: Art direction systems, honest asset protocols, GSAP as primary animation system, smooth-scroll engine selection, purposeful Three.js integration, PLUS Python-driven randomization, strict AIDA structure, gapless bento grids, inline micro-images, massive section spacing
- **impeccable**: Comprehensive quality assurance system, four modes (Persuade/Operate/Read/Experience), extensive command set for refinement and optimization, focus on "out-of-distribution craft"

### 5. Which instructions are duplicated or contradictory?
See Major Overlaps/Conflicts Resolved section above for details.
**Key finding**: Very few true contradictions; mostly complementary or duplicative elements that can be resolved through architectural positioning.

### 6. Which skills should be merged, retained separately, or removed?
- **Merge animate → emil-design-eng** (creating interaction-polish)
- **Merge gpt-taste → build-awwwards-quality-sites** (enhancing its precision capabilities)
- **Retain design-taste-frontend** (foundational layer)
- **Retain impeccable** (quality overlay layer)
- **Remove**: Nothing (all skills have unique, valuable contributions when properly positioned)

### 7. Can GPT Taste + Impeccable be cleanly incorporated into design-taste-frontend?
**Not recommended as direct incorporation**, but they can work complementarily:
- **GPT Taste**: Better merged with build-awwwards-quality-sites where its precision and AIDA structure enhance motion-rich site creation
- **Impeccable**: Better retained as a separate quality overlay that can enhance design-taste-frontend (and any other skill) when quality assurance is needed
- **Architecture recommendation**: Keep all three as separate but complementary skills in a layered system

### 8. Does interaction-polish still make sense as the merged emil-design-eng + animate skill?
**Yes, absolutely**. Evidence confirms emil-design-eng is a superset of animate, containing all of animate's animation decision framework plus significant additional capabilities. The merged interaction-polish skill:
- Uses emil-design-eng as the base (broader scope: CSS transform mastery, clip-path, gesture/drag, Sonner Principles, etc.)
- Incorporates animate's 7-step gate system as the foundational structure for animation decisions
- Creates a stronger, more comprehensive skill than either individually
- Eliminates redundancy while enhancing capabilities

### 9. What role, if any, should build-awwwards-quality-sites have?
**Enhanced and retained as a specialized skill** with a clear, distinct focus:
- Creating Awwwards-quality, motion-rich marketing/editorial/portfolio/landing sites
- Art direction and reference inspection
- Honest asset systems (original imagery, proper sourcing, legitimate logos, photo avatars)
- GSAP as primary animation system with smooth-scroll engine selection (Lenis/Locomotive)
- Purposeful Three.js integration with custom shaders (only when materially supports art direction)
- Site-wide motion narratives and choreography
- **PLUS** gpt-taste's contributions: Python-driven randomization, strict AIDA structure, gapless bento grids, inline micro-images, massive section spacing, hero 2-line rule, advanced GSAP motion patterns
- Accessibility and performance safeguards for motion-rich sites

### 10. What is the smallest clean skill architecture that preserves the strongest capabilities without competing authorities?
**Four skills total in a layered architecture**:

1. **design-taste-frontend** (Foundation Layer)
   - **Authority**: Overall design systems, brief inference, and anti-slop principles for landing pages/portfolios/redesigns
   - **Scope**: Foundational design approach, contextual reading, design system selection

2. **interaction-polish** (Middleware Layer - Motion & Component Polish)
   - **Authority**: General UI/component polish and animation engineering
   - **Scope**: Building interfaces that feel right through motion, component details, and invisible details
   - *(Merged from emil-design-eng + animate)*

3. **build-awwwards-quality-sites** (Specialized Layer - Enhanced Motion-Rich Sites)
   - **Authority**: Creating Awwwards-quality, motion-rich sites with precision and structure
   - **Scope**: Art direction, honest assets, GSAP choreography, Three.js integration, PLUS gpt-taste's precision elements
   - *(Enhanced by merging gpt-taste)*

4. **impeccable** (Quality Overlay Layer)
   - **Authority**: Comprehensive design quality assurance, refinement, and optimization
   - **Scope**: Can be applied as an overlay to enhance ANY of the other skills
   - **Role**: Quality floor, absolute bans, reflexes, modes (Persuade/Operate/Read/Experience), extensive command set

### Why this architecture is preferable:
- ✅ **Eliminates duplication** (removes redundant animation decision frameworks between emil-design-eng and animate)
- ✅ **Enhances specialization** (gpt-taste's precision elements naturally complement build-awwwards-quality-sites' motion focus)
- ✅ **Clear responsibility boundaries** (each layer has distinct focus with impeccable as overlay)
- � paragon agent behavior** (users understand when to invoke each layer based on task type)
- ✅ **Preserves all strongest capabilities** (nothing valuable is lost; capabilities are enhanced through strategic merging)
- ✅ **Minimal skills needed** (reduces from 6 to 4 while enhancing overall capability set)
- ✅ **Compatible with portfolio redesign** (design-taste-frontend provides foundational design approach)
- ✅ **No competing authorities** (clear hierarchy: foundation → middleware → specialized → quality overlay)
- ✅ **Enables composability** (skills can work together: e.g., design-taste-frontend + interaction-polish + impeccable for a polished landing page)
- ✅ **Predictable outcomes** (users know what to expect when combining skills in specific ways)

This architecture provides the strongest capabilities with minimal overlap, clear boundaries, predictable behavior, and enhanced composability — exactly meeting your audit criteria for capability, specificity, quality, composability, clear responsibility boundaries, minimal duplication, and predictable agent behavior.