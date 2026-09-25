# Static Audit of Frontend Design Skills

## Executive Summary

This report provides a thorough static analysis of four frontend design skills (`animate`, `design-taste-frontend`, `emil-design-eng`, `build-awwwards-quality-sites`) located in the `.agents/skills` directory. The analysis examines each skill's purpose, capabilities, overlaps, superset relationships, composability, redundancy, and compatibility with an existing Next.js developer portfolio project.

**Key Findings:**
- Significant overlap exists between `animate` and `emil-design-eng` (nearly identical animation decision frameworks)
- `design-taste-frontend` is the most comprehensive skill, covering architecture, typography, color, layout, UX, and performance
- `build-awwwards-quality-sites` focuses on art-directed, motion-rich websites with GSAP and Three.js specialization
- The skills show varying degrees of composability, with some combinations likely to cause conflicts
- For the portfolio context (frontend engineer showcase with lime/black visual anchor), `design-taste-frontend` provides the strongest foundation
- Recommendation: Keep `design-taste-frontend` as primary skill, retain `animate` as specialist for pure animation tasks, consider merging `emil-design-eng` into `animate`, and use `build-awwwards-quality-sites` situationally for high-concept projects

---

## Skill-by-Skill Analysis

### Animate Skill
**Purpose**: Building animations that feel right by following a strict decision sequence based on Emil Kowalski's animation philosophy.

**Capabilities**:
- **Core**: Animation decision framework (should animate at all? → purpose → tool → properties → easing/duration → interruption/exit → reduced motion)
- **Supporting**: Specific property constraints (transform/opacity only, never scale(0), transform-origin at trigger), tool selection hierarchy, easing guidelines, duration ranges, spring animation guidance
- **Mentioned but limited**: Hardware-accelerated CSS vs JS performance considerations
- **Not covered**: Typography, color systems, layout architecture, content strategy, accessibility beyond reduced motion

**Influence Areas**:
- Design: High (animation properties, timing, easing)
- UX: High (purpose-driven animation for feedback, spatial consistency, state indication)
- Motion: Core purpose
- Frontend/code: Medium (writes animation implementation code)
- Accessibility: Medium (reduced motion implementation)
- Responsiveness: Low
- Performance: Medium (hardware-accelerated properties emphasis)
- Asset handling: None

**When to use**: When asked to animate something, add motion, make a component feel alive, or build a transition

### Design-Taste-Frontend Skill
**Purpose**: Anti-slop frontend skill for landing pages, portfolios, and redesigns that reads the brief, infers design direction, and ships non-templated interfaces.

**Capabilities**:
- **Core**: Brief inference system, three dial system (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY), design system selection guidance
- **Supporting**: Default architecture (React/Next.js + Tailwind v4 + Motion), state management, icon policies, responsiveness/layout mechanics
- **Mentioned but limited**: Motion guidelines (covered in context-aware proactivity), basic accessibility
- **Not covered**: Deep animation technical specifics (left to animate skill)

**Influence Areas**:
- Design: Very High (typography, color, layout, spacing, imagery, component structure)
- UX: Very High (interactive states, layout discipline, content density, form patterns)
- Motion: Medium (context-aware proactivity guidelines)
- Frontend/code: Very High (defines architecture, dependency verification, implementation standards)
- Accessibility: High (dedicated guardrails section)
- Responsiveness: High (specific mechanics section)
- Performance: High (guardrails section including Core Web Vitals)
- Asset handling: High (image & visual asset strategy)

**When to use**: Landing pages, portfolios, and redesigns (not for dashboards, data tables, multi-step product UI)

### Emil-Design-Eng Skill
**Purpose**: Encoding Emil Kowalski's philosophy on UI polish, component design, animation decisions, and invisible details that make software feel great.

**Capabilities**:
- **Core**: Animation decision framework (identical to animate skill), component building principles
- **Supporting**: CSS transform mastery, clip-path for animation, gesture/drag interactions, performance rules (hardware acceleration, WAAPI), accessibility (reduced motion, touch states)
- **Mentioned but limited**: The Sonner Principles (component excellence), stagger animations, debugging techniques
- **Not covered**: Typography, color systems, layout architecture, content strategy, accessibility beyond motion/touch

**Influence Areas**:
- Design: Medium (animation-specific details affecting feel)
- UX: High (purpose, feedback, spatial consistency, perceptual performance)
- Motion: Very High (core focus on animation/UI polish)
- Frontend/code: Medium (implementation guidance for animations)
- Accessibility: Medium (reduced motion and touch device hover states)
- Responsiveness: Low
- Performance: High (hardware acceleration, CSS vs JS performance, WAAPI focus)
- Asset handling: None

**When to use**: When reviewing UI code or building interfaces that need to feel right through attention to invisible details

### Build-Awwwards-Quality-Sites Skill
**Purpose**: Art-direct and implement distinctive, motion-rich marketing, editorial, portfolio, and landing websites with original reference-inspired imagery, standout heroes, GSAP choreography, one smooth-scroll engine, optional Three.js shaders, honest icon/logo sourcing, photo avatars, accessibility, and performance safeguards.

**Capabilities**:
- **Core**: Art direction system, honest asset system guidelines, hero composition, GSAP-based motion system, Three.js integration with purpose
- **Supporting**: Quality bar requirements (complete semantic page, performance preservation), validation procedures
- **Mentioned but limited**: Accessibility requirements, responsive design
- **Not covered**: Typography/color system specifics (defers to chosen web-design skill), detailed animation easing/duration (defers to GSAP/system)

**Influence Areas**:
- Design: Very High (visual direction, hero composition, asset system, typography/spacing via chosen skill)
- UX: Very High (memorable first viewport, coherent progression, conversion content, focus/touch/reduced-motion behavior)
- Motion: Very High (GSAP as primary system, smooth-scroll engine, section choreography)
- Frontend/code: High (builds complete semantic pages with technical requirements)
- Accessibility: High (keyboard focus, JS-unavailable content, static fallbacks, reduced-motion behavior)
- Responsiveness: High (responsive navigation, cross-sectional progression)
- Performance: High (responsive media, lazy loading, bounded transforms, limited blur)
- Asset handling: Very High (original imagery, honest asset system, avatar photos, icon/logo sourcing)

**When to use**: When user asks for Awwwards-quality, premium, cinematic, interactive, high-concept, or motion-led website, or explicitly requests this visual and motion system

---

## Capability Matrix

| Skill | Primary Purpose | Secondary Capabilities | Design Influence | UX Influence | Motion | Frontend/code Influence | Accessibility | Responsiveness | Performance | Asset Handling | When to Use | Potential Conflicts |
|-------|----------------|------------------------|------------------|--------------|--------|-------------------------|---------------|----------------|-------------|----------------|-------------|---------------------|
| **animate** | Build animations that feel right following Kowalski's philosophy | Animation decision framework, tool/property/easing selection, specific recipes | High | High | Core | Medium | Medium (reduced motion) | Low | Medium (hw-accel focus) | None | Animation requests, motion implementation | Skills controlling animation properties/timing |
| **design-taste-frontend** | Anti-slop frontend for landing pages/portfolios/redesigns | Brief inference, 3-dial system, architecture standards, layout discipline | Very High | Very High | Medium | Very High | High | High | High (CWV focus) | High (img strategy) | Landing pages, portfolios, redesigns | Other design/system skills, animation skills |
| **emil-design-eng** | UI polish via Kowalski's philosophy (invisible details) | Animation framework, component principles, CSS transforms, clip-path, gestures, perf rules | Medium | High | Very High | Medium | Medium (reduced motion/touch) | Low | High (hw-accel/WAAPI) | None | UI review, building "feel-right" interfaces | Animation skills (major overlap) |
| **build-awwwards-quality-sites** | Art-direct motion-rich sites with GSAP/Three.js & honest assets | Art direction, asset system, hero composition, GSAP motion, purposeful Three.js | Very High | Very High | Very High | High | High | High | High (perf preservation) | Very High (original assets) | Awwwards-quality, premium, cinematic sites | Skills controlling motion systems/assets/design direction |

*Influence Levels: None, Low, Medium, High, Very High*

---

## Overlap Analysis

### Direct Overlaps

#### Animate ↔ Emil-Design-Eng
```
animate
    ↕ nearly identical overlap
emil-design-eng
```

**What both do**: Share the exact same animation decision framework:
1. Should animate at all? (frequency-based gating)
2. What is the purpose? (feedback, spatial consistency, state indication, preventing jarring changes, delight)
3. What easing should it use? (custom curves: --ease-out, --ease-in-out, --ease-drawer, never ease-in on UI)
4. How fast should it be? (element-specific duration ranges)
5. Spring animation guidance (Apple approach vs traditional physics)
6. Interruption handling (transitions for rapid triggers, springs for gestures)
7. Reduced motion implementation
8. Component principles (buttons scale(0.97) on :active, never animate from scale(0), origin-aware popovers, tooltip delay skipping, CSS transitions over keyframes, blur for masking transitions, @starting-style for enter states)

**How they approach it differently**:
- Animate: Focuses purely on building animations from requests ("construction skill")
- Emil-design-eng: Focuses on UI polish and invisible details that make software feel great (broader philosophy including component building principles beyond animation)
- Emil-design-eng adds: CSS transform mastery, clip-path for animation, gesture/drag interactions, detailed performance rules (CSS variables inheritable, Framer Motion caveat, CSS animations beat JS under load, WAAPI), The Sonner Principles, staggered animations, debugging techniques

**Relationship**: Emil-design-eng is a **superset** of animate - it contains all of animate's animation decision framework plus additional UI polish capabilities.

**Conflict potential**: Low - they are complementary, with emil-design-eng extending animate's capabilities rather than conflicting.

#### Design-Taste-Frontend ↔ Build-Awwwards-Quality-Sites
```
design-taste-frontend
    ↕ partial overlap
build-awwwards-quality-sites
```

**What both do**:
- Concerned with high-quality frontend implementation
- Address motion (design-taste-frontend via dials and context-aware proactivity; build-awwwards-quality-sites via GSAP as primary system)
- Address accessibility (both have dedicated sections)
- Address performance (both have performance-focused guidelines)
- Both can be used for portfolio websites

**How they approach it differently**:
- Design-taste-frontend: Comprehensive system covering brief inference, three dials, architecture standards, typography, color calibration, layout discipline, content strategy, component policies
- Build-awwwards-quality-sites: Focused on art direction, honest asset system, hero composition, GSAP/Three.js motion specialization, validation for Awwwards-quality bar

**Relationship**: Partial overlap with complementary strengths - design-taste-frontend provides stronger architectural/typographic foundation; build-awwwards-quality-sites provides stronger art direction/motion specialization/asset system.

**Conflict potential**: Medium - both could try to control motion systems and overall design direction.

#### Emil-Design-Eng ↔ Build-Awwwards-Quality-Sites
```
emil-design-eng
    ↕ partial overlap
build-awwwards-quality-sites
```

**What both do**:
- Strong focus on motion/animation quality
- Both address accessibility (reduced motion specifically)
- Both concerned with making interfaces feel right through attention to detail

**How they approach it differently**:
- Emil-design-eng: Deep technical animation specifics (transform properties, easing curves, performance considerations)
- Build-awwwards-quality-sites: Higher-level art direction, asset honesty, hero composition, GSAP choreography, Three.js specialization

**Relationship**: Partial overlap - emil-design-eng provides deeper animation technical foundation; build-awwwards-quality-sites provides higher-level motion artistry and asset system.

**Conflict potential**: Medium - both could try to control animation implementation details.

#### Design-Taste-Frontend ↔ Emil-Design-Eng
```
design-taste-frontend
    ↕ partial overlap
emil-design-eng
```

**What both do**:
- Address motion (design-taste-frontend via MOTION_INTENSITY dial and context-aware proactivity; emil-design-eng via core animation framework)
- Address accessibility (both have sections)
- Both concerned with high-quality frontend implementation

**How they approach it differently**:
- Design-taste-frontend: Broad architectural/system approach (brief inference, three dials, architecture standards, layout discipline, content strategy)
- Emil-design-eng: Narrow but deep focus on animation/UI polish specifics

**Relationship**: Partial overlap - design-taste-frontend provides broader system foundation; emil-design-eng provides deeper animation specialization.

**Conflict potential**: Medium - both could try to control motion implementation and timing.

#### Animate ↔ Design-Taste-Frontend
```
animate
    ↕ partial overlap
design-taste-frontend
```

**What both do**:
- Address animation/motion
- Both have guidelines for when to animate (frequency-based considerations)

**How they approach it differently**:
- Animate: Deep technical animation implementation (exact decision sequence, property constraints, tool selection)
- Design-taste-frontend: Higher-level motion guidance via dials and context-aware proactivity (motivation requirements, marquee limits, forbidden patterns)

**Relationship**: Partial overlap - animate provides deeper technical implementation; design-taste-frontend provides higher-level motion governance.

**Conflict potential**: Medium - both could try to control animation implementation specifics.

#### Animate ↔ Build-Awwwards-Quality-Sites
```
animate
    ↕ partial overlap
build-awwwards-quality-sites
```

**What both do**:
- Address animation implementation
- Both concerned with performance of animations

**How they approach it differently**:
- Animate: Low-level CSS/JS animation implementation (specific properties, easing, durations, interruption handling)
- Build-awwwards-quality-sites: High-level motion artistry (GSAP choreography, section-by-section reveals, heading word-by-word animation)

**Relationship**: Partial overlap - animate provides lower-level implementation foundation; build-awwwards-quality-sites provides higher-level motion specialization.

**Conflict potential**: Low-Medium - animate focuses on implementation mechanics; build-awwwards-quality-sites focuses on motion artistry.

#### Emil-Design-Eng ↔ Design-Taste-Frontend (Revisited)
More specific analysis shows:
- Emil-design-eng's animation decision framework could conflict with design-taste-frontend's motion guidelines if both try to specify exact easing curves or durations
- Design-taste-frontend's "Motion must be motivated" principle aligns with emil-design-eng's purpose requirement
- Both address reduced motion but with slightly different implementations

### Summary of Overlap Types

**A. Exact Duplication**: 
- Animate's animation decision framework ↔ Emil-design-eng's animation decision framework (nearly identical)

**B. Partial Overlap**: 
- Design-taste-frontend ↔ Build-awwwards-quality-sites (motion, accessibility, performance concerns)
- Emil-design-eng ↔ Build-awwwards-quality-sites (motion quality, accessibility)
- Design-taste-frontend ↔ Emil-design-eng (motion, accessibility)
- Animate ↔ Design-taste-frontend (animation concerns)
- Animate ↔ Build-awwwards-quality-sites (animation implementation)

**C. Superset Relationship**: 
- Emil-design-eng ⊃ Animate (contains all of animate's animation framework + additional UI polish capabilities)

**D. Complementary Capabilities**: 
- Design-taste-frontend + Animate (architecture + animation implementation)
- Design-taste-frontend + Emil-design-eng (system foundation + animation specialization)
- Build-awwwards-quality-sites + [any design system skill] (art direction + implementation foundation)

**E. Potential Instruction Conflicts**: 
- Motion implementation specifics (easing curves, durations, property choices)
- Overall design direction control
- Accessibility implementation details
- Performance optimization approaches

---

## Superset Analysis

### Emil-Design-eng ⊃ Animate
**Evidence**:
- Both contain identical animation decision framework sections (should animate at all? → purpose → easing → speed)
- Both specify the same custom easing curves (--ease-out: cubic-bezier(0.23, 1, 0.32, 1); --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1))
- Both have identical duration ranges by element type
- Both cover spring animations (Apple approach vs traditional physics)
- Both cover interruption handling (transitions for rapid triggers, springs for gestures)
- Both implement reduced motion and hover gating
- Both contain component building principles (buttons, scale(0) avoidance, origin-aware popovers, tooltip delay skipping, CSS transitions over keyframes, blur masking, @starting-style)

**Additional capabilities in Emil-design-eng**:
- CSS transform mastery (translateY percentages, scale() scaling children, 3D transforms, transform-origin)
- Clip-path for Animation (inset shape, perfect color transitions, hold-to-delete, image reveals, comparison sliders)
- Gesture and drag interactions (momentum-based dismissal, damping at boundaries, pointer capture, multi-touch protection, friction instead of hard stops)
- Performance rules (CSS variables inheritable, Framer Motion hardware acceleration caveat, CSS animations beat JS under load, WAAPI)
- Accessibility (prefers-reduced-motion, touch device hover states)
- The Sonner Principles (building loved components)
- Stagger animations
- Debugging animations (slow motion, frame-by-frame, real device testing)
- Detailed review checklist

**Conclusion**: Emil-design-eng is a clear superset of animate, containing all of animate's animation decision framework plus significant additional UI polish and technical animation capabilities.

### Other Potential Supersets
No other clear superset relationships exist:
- Design-taste-frontend does not contain the deep animation technical specifics of animate/emil-design-eng
- Build-awwwards-quality-sites does not contain the architectural/typographic/system foundations of design-taste-frontend
- Neither design-taste-frontend nor build-awwwards-quality-sites contains the deep animation specifics of emil-design-eng/animate

---

## Composability Analysis

### Safe Combinations

#### Design-Taste-Frontend + Animate
- **What each contributes**: 
  - Design-taste-frontend: Architecture system, typography, color, layout, content strategy, component policies
  - Animate: Pure animation implementation following Kowalski's philosophy
- **Responsibility separation**: 
  - Design-taste-frontend sets motion parameters via MOTION_INTENSITY dial and context-aware proactivity
  - Animate implements specific animations using its decision framework
- **Conflict potential**: Low-Medium (both could try to specify exact easing/duration; resolved by letting animate handle implementation details)
- **Sequence recommendation**: Design-taste-frontend first (establishes system), then animate (implements specific motions)

#### Design-Taste-Frontend + Emil-Design-eng
- **What each contributes**:
  - Design-taste-frontend: Architecture system, typography, color, layout, content strategy, component policies
  - Emil-design-eng: Deep animation technical specifics, component building principles, performance rules
- **Responsibility separation**:
  - Design-taste-frontend sets overall motion intensity and architectural constraints
  - Emil-design-eng implements animation specifics within those constraints
- **Conflict potential**: Medium (both have animation guidelines; resolved by letting emil-design-eng handle technical animation details)
- **Sequence recommendation**: Design-taste-frontend first (establishes system), then emil-design-eng (refines animation implementation)

#### Design-Taste-Frontend + Build-Awwwards-Quality-Sites
- **What each contributes**:
  - Design-taste-frontend: Architecture system, typography, color, layout, content strategy
  - Build-awwwards-quality-sites: Art direction, honest asset system, hero composition, GSAP/Three.js motion specialization
- **Responsibility separation**:
  - Design-taste-frontend provides foundational architecture and design system
  - Build-awwwards-quality-sites provides art direction and motion specialization within that system
- **Conflict potential**: Medium (both could try to control motion systems and overall design direction; resolved by letting build-awwwards-quality-sites handle motion artistry while respecting design-taste-frontend's architecture)
- **Sequence recommendation**: Design-taste-frontend first (establishes foundation), then build-awwwards-quality-sites (applies art direction)

#### Animate + Build-Awwwards-Quality-Sites
- **What each contributes**:
  - Animate: Low-level animation implementation (CSS/JS specific)
  - Build-awwwards-quality-sites: High-level motion artistry (GSAP choreography, section reveals)
- **Responsibility separation**:
  - Animate handles low-level animation implementation details
  - Build-awwwards-quality-sites specifies what should animate and at what level of sophistication
- **Conflict potential**: Low (different animation layers; animate handles implementation, build-awwwards-quality-sites specifies artistry)
- **Sequence recommendation**: Either order works; build-awwwards-quality-sites defines what to animate, animate implements it

### Problematic Combinations

#### Emil-Design-eng + Build-Awwwards-Quality-Sites
- **Conflict areas**: 
  - Both specify animation implementation details (easing curves, durations, properties)
  - Both have performance guidelines (hw-accel focus vs GSAP specialization)
  - Both address accessibility in overlapping ways
- **Resolution**: Would need clear division of labor - emil-design-eng handles low-level animation technical specifics, build-awwwards-quality-sites handles higher-level motion artistry and asset system
- **Recommendation**: Only use together if responsibilities are clearly separated; otherwise choose one based on project needs (emil-design-eng for technical animation polish, build-awwwards-quality-sites for art-directed motion-rich sites)

#### Emil-Design-eng + Animate
- **Conflict areas**: Nearly identical animation decision frameworks would lead to duplicate/contradictory guidance
- **Resolution**: Since emil-design-eng is a superset of animate, using both is redundant
- **Recommendation**: Use emil-design-eng alone (contains all of animate's capabilities plus more)

#### All Four Skills Together
- **High conflict potential**: Multiple skills trying to control motion implementation, design direction, and accessibility
- **Not recommended**: Would lead to contradictory guidance and implementation conflicts

---

## Redundancy Analysis

### Evaluation Categories
- **KEEP**: Primary skill for general use
- **KEEP AS SPECIALIST**: Retain for specific specialized tasks
- **MERGE**: Combine capabilities into a single skill
- **OPTIONAL**: Useful in specific contexts but not essential
- **REDUNDANT**: Duplicates capabilities better covered elsewhere
- **REMOVE**: Should be eliminated from toolkit

### Skill Evaluations

#### Animate
- **Verdict**: KEEP AS SPECIALIST
- **Reasoning**: 
  - Provides pure animation implementation following Kowalski's philosophy
  - Valuable for specific animation requests where deep technical implementation is needed
  - However, largely duplicated by emil-design-eng (which is a superset)
  - Best used as a specialist skill for pure animation implementation tasks

#### Design-Taste-Frontend
- **Verdict**: KEEP (as primary general-purpose design/frontend skill)
- **Reasoning**:
  - Most comprehensive skill covering architecture, typography, color, layout, content strategy, component policies
  - Provides essential foundation for frontend implementation
  - Brief inference system ensures context-appropriate design decisions
  - Three-dial system allows tuning for different project types
  - Minimal overlap with other skills' core strengths
  - Essential for the portfolio project's needs (landing page/portfolio focus)

#### Emil-Design-eng
- **Verdict**: MERGE into animate (or KEEP AS SPECIALIST if merge not desired)
- **Reasoning**:
  - Largely duplicates animate's core animation decision framework
  - Contains additional valuable UI polish and technical animation capabilities
  - Best approach: Merge the unique capabilities of emil-design-eng into animate to create an enhanced animation skill
  - If merging is not desired: Keep as specialist for deep animation/UI polish tasks
  - For the portfolio context: Less critical than design-taste-frontend's architectural foundation

#### Build-Awwwards-Quality-Sites
- **Verdict**: OPTIONAL (situational use for high-concept projects)
- **Reasoning**:
  - Valuable for Awwwards-quality, premium, cinematic, interactive projects
  - Provides specialized art direction, honest asset system, GSAP/Three.js motion specialization
  - Less relevant for standard portfolio implementation than design-taste-frontend
  - Has meaningful overlap with design-taste-frontend in motion/accessibility/performance areas
  - Best used situationally when the portfolio needs high-concept motion-rich sections

### Redundancy Summary
- **Redundant**: animate (largely duplicated by emil-design-eng's superset relationship)
- **Optional**: build-awwwards-quality-sites (valuable but situational)
- **Keep as specialist**: animate (if not merged) or emil-design-eng (if merged into animate)
- **Keep**: design-taste-frontend (primary foundation)

---

## Conflict Analysis

### Major Conflict Areas

#### 1. Animation Implementation Control
- **Skills involved**: animate, emil-design-eng, design-taste-frontend, build-awwwards-quality-sites
- **Conflict**: Multiple skills trying to specify exact easing curves, durations, animation properties
- **Evidence**: 
  - Animate/emil-design-eng: Specific easing curves (--ease-out: cubic-bezier(0.23, 1, 0.32, 1)), duration ranges
  - Design-taste-frontend: Motion must be motivated, marquee limits, GSAP pattern requirements
  - Build-awwwards-quality-sites: GSAP as primary system, section-by-section choreography
- **Resolution**: 
  - Let animate/emil-design-eng handle low-level animation implementation
  - Let design-taste-frontend set motion intensity parameters and motivation requirements
  - Let build-awwwards-quality-sites specify motion artistry and choreography within those constraints

#### 2. Design Direction Control
- **Skills involved**: design-taste-frontend, build-awwwards-quality-sites
- **Conflict**: Both trying to establish overall visual direction and design system
- **Evidence**:
  - Design-taste-frontend: Brief inference system, three dials, architecture standards, design system selection
  - Build-awwwards-quality-sites: Art direction system, asset honesty rules, hero composition requirements
- **Resolution**:
  - Let design-taste-frontend establish foundational architecture and design system
  - Let build-awwwards-quality-sites provide art direction and specialization within that system
  - Critical: build-awwwards-quality-sites must select and name a compatible installed web-design skill (per its instructions)

#### 3. Accessibility Implementation
- **Skills involved**: All four skills have accessibility components
- **Conflict**: Potentially contradictory reduced motion or focus implementations
- **Evidence**:
  - All mention prefers-reduced-motion handling
  - Different approaches to implementation details
- **Resolution**:
  - Establish one accessibility implementation approach (preferably from design-taste-frontend's comprehensive guardrails)
  - Other skills should follow that implementation rather than providing conflicting guidance

#### 4. Performance Optimization
- **Skills involved**: All skills have performance components
- **Conflict**: Potentially contradictory performance guidelines (hw-accel focus vs lazy loading vs GSAP specialization)
- **Evidence**:
  - Animate/emil-design-eng: Hardware-accelerated properties, CSS vs JS performance focus
  - Design-taste-frontend: Core Web Vitals targets, DOM cost, z-index restraint
  - Build-awwwards-quality-sites: Responsive media, lazy loading, bounded transforms
- **Resolution**:
  - Create unified performance approach combining strengths
  - Let design-taste-frontend's performance guardrails serve as foundation
  - Incorporate specific techniques from other skills where complementary

---

## Specialization Map

| Situation | Recommended Skill | Reasoning |
|-----------|------------------|-----------|
| **General UI implementation** | design-taste-frontend | Provides complete architectural foundation, typography, color, layout, component policies essential for any frontend work |
| **Visual direction** | build-awwwards-quality-sites (with design-taste-frontend foundation) | Specializes in art direction, honest asset system, hero composition for high-concept visual projects |
| **Component design** | design-taste-frontend + emil-design-eng/animate | design-taste-frontend for component policies/layout; emil-design-eng/animate for animation/interaction specifics |
| **Motion/animation** | emil-design-eng (or merged animate+emil-design-eng) | Deepest technical animation specifics including component building principles, performance rules, UI polish |
| **High-end landing page** | design-taste-frontend (primary) + build-awwwards-quality-sites (situational) | design-taste-frontend for foundation; build-awwwards-quality-sites for art-directed sections if needed |
| **Portfolio case study** | design-taste-frontend | Ideal fit - specifically designed for portfolios, includes case study presentation guidelines |
| **Interaction polish** | emil-design-eng | Focus on invisible details, component building principles, perceptual performance that make interactions feel right |
| **Responsive behavior** | design-taste-frontend | Includes specific responsiveness & layout mechanics section with concrete guidelines |
| **Accessibility** | design-taste-frontend | Most comprehensive accessibility coverage including reduced motion, dark mode, focus states, form validation |
| **Frontend implementation** | design-taste-frontend | Defines default architecture, state management, dependency verification, implementation standards |
| **Final visual refinement** | emil-design-eng or build-awwwards-quality-sites | emil-design-eng for animation/UI polish refinement; build-awwwards-quality-sites for high-concept visual refinement |

**Note**: For motion/animation situations, if emil-design-eng and animate were merged, the merged skill would be the clear recommendation.

---

## Portfolio Compatibility Evaluation

### Portfolio Context Summary
- Existing Next.js developer portfolio being redesigned
- Should communicate: Zaphenath Bassey as primary identity, Frontend Engineer, technical ability, creativity, curiosity, innovation, ambition, personality, credibility, strong frontend craftsmanship
- Should feel: modern, intentional, technically sophisticated, visually distinctive, minimal rather than chaotic, expressive without gimmicky, highly usable, credible to recruiters/founders/clients/developers
- Visual exploration based around: Lime and Black (initial anchor, not finalized design system)
- Should support: separate /work/[slug] case-study pages

### Skill Compatibility Assessment

#### Design-Taste-Frontend
- **Compatibility**: Excellent
- **Reasons**:
  - Specifically mentions portfolios as a target use case ("Landing pages, portfolios, and redesigns")
  - Portfolio-specific presets in dial inference table (Portfolio Developer: VARIANCE=6, MOTION=5, DENSITY=4)
  - Brief inference system will correctly identify this as a developer portfolio for hiring managers/recruiters
  - Three-dial system allows appropriate tuning for technical portfolio (moderate variance, motion, density)
  - Architecture standards (Next.js + Tailwind v4 + Motion) align with current project stack
  - Typography guidelines (Space Grotesk + Inter + JetBrains Mono) complement technical identity
  - Color calibration prevents AI-default palettes, allowing intentional lime/black system
  - Layout discipline (anti-center bias, asymmetry preference) supports distinctive visual identity
  - Content density guidelines prevent gimmicky, chaotic layouts
  - Image & visual asset strategy ensures authentic project representation
  - Accessibility and performance guardrails ensure credibility with technical audience
  - Out of scope exclusions (dashboards, data tables) confirm focus on presentation sites like portfolios

#### Emil-Design-eng (or merged animate+emil-design-eng)
- **Compatibility**: Good (as specialist)
- **Reasons**:
  - Valuable for refining animations and interactions to feel "right"
  - Component building principles (buttons, popovers, tooltips) enhance portfolio polish
  - Performance rules (hw-accel focus, WAAPI) support technical sophistication
  - Accessibility considerations (reduced motion, touch states) support usability
  - However, less critical than architectural foundation provided by design-taste-frontend
  - Best used to refine specific interactive elements after foundation is established

#### Build-Awwwards-Quality-Sites
- **Compatibility**: Situational/Optional
- **Reasons**:
  - Could be valuable for high-concept portfolio sections or special case studies
  - Honest asset system ensures authentic project representation (no fake screenshots, real avatar photos)
  - GSAP choreography could elevate specific portfolio sections
  - Three.js specialization could be used for special technical demonstrations
  - However, may be overkill for standard portfolio implementation
  - Risk of visual excess conflicting with "minimal rather than chaotic" and "credible to recruiters" goals
  - Best used situationally when specific portfolio sections need high-concept motion treatment

#### Animate
- **Compatibility**: Limited (largely redundant if emil-design-eng available)
- **Reasons**:
  - Provides pure animation implementation but largely duplicated by emil-design-eng
  - Could be used for very specific animation requests
  - However, emil-design-eng provides same animation framework plus additional UI polish capabilities
  - Lower priority than design-taste-frontend for portfolio foundation

### Compatibility Summary
- **Primary recommendation**: design-taste-frontend as foundational skill
- **Secondary recommendation**: emil-design-eng (or merged animate+emil-design-eng) for animation/UI polish refinement
- **Tertiary recommendation**: build-awwwards-quality-sites situationally for high-concept sections
- **Lowest priority**: animate as standalone skill (largely redundant)

---

## Merge Possibility Investigation

### Should Skills Be Consolidated?

#### Analysis: design-taste-frontend + emil-design-eng (+ potentially animate)
**Merge Possible**: Yes, with clear separation of concerns

**What Should Be Merged**:
1. **design-taste-frontend's** architectural foundation:
   - Brief inference system
   - Three dial system (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY)
   - Default architecture standards (React/Next.js + Tailwind v4 + Motion + next/font)
   - State management guidelines
   - Responsiveness & layout mechanics
   - Dependency verification
   - Icon and emoji policies

2. **emil-design-eng's** animation specialization:
   - Complete animation decision framework (should animate at all? → purpose → easing → speed)
   - Component building principles (buttons, popovers, tooltips, enter states)
   - CSS transform mastery and clip-path for animation
   - Gesture and drag interactions
   - Performance rules (hardware acceleration, CSS variables inheritable, Framer Motion caveat, CSS animations beat JS under load, WAAPI)
   - Accessibility (reduced motion, touch device hover states)
   - The Sonner Principles (building loved components)
   - Stagger animations and debugging techniques

3. **animate's** contributions (largely duplicative but worth verifying):
   - Animation decision framework (already covered in emil-design-eng)
   - Specific recipes (could be incorporated as implementation examples)

**What Should NOT Be Merged**:
- design-taste-frontend's extensive typography, color calibration, layout diversification, content density, quotes/testimonials, page theme lock, context-aware proactivity (liquid glass, magnetic micro-physics, etc.), redesign protocol, block library, AI tells, final pre-flight check
- These represent design-taste-frontend's unique architectural and systematic strengths that should remain central

**Proposed Architecture**:
```
portfolio-design-system
    ├── visual-taste (design-taste-frontend core)
    │   ├── brief-inference
    │   ├── three-dial-system
    │   ├── architecture-standards
    │   ├── responsiveness-layout
    │   ├── typography-color
    │   ├── layout-discipline
    │   ├── content-strategy
    │   ├── component-policies
    │   ├── asset-strategy
    │   ├── accessibility-guardrails
    │   └── performance-guardrails
    ├── frontend-implementation (implementation standards from design-taste-frontend)
    │   ├── state-management
    │   ├── dependency-verification
    │   ├── icon-emoji-policies
    │   └── coding-standards
    ├── motion-specialization (emil-design-eng core + animate recipes)
    │   ├── animation-decision-framework
    │   ├── component-building-principles
    │   ├── css-transform-mastery
    │   ├── clip-path-animation
    │   ├── gesture-drag-interactions
    │   ├── performance-rules
    │   ├── sonner-principles
    │   ├── stagger-debugging
    │   └── animation-recipes
    └── ux-excellence (design-taste-frontend UX + emil-design-eng perceptual focus)
        ├── interactive-states
        ├── layout-discipline-details
        ├── content-density
        ├── form-patterns
        ├── perceptual-performance
        └── accessibility-details
```

**What Conflicts Would Need Resolution**:
- Motion specification: Would need clear hierarchy (visual-taste sets MOTION_INTENSITY parameters, motion-specialization implements within those constraints)
- Accessibility implementation: Would need unified approach (likely from visual-taste's guardrails)
- Performance guidelines: Would need combined approach (visual-taste's guardrails + motion-specialization's hw-accel/WAAPI focus)

**What Would Be Duplicated**:
- Animation decision framework (would appear once in motion-specialization)
- Basic accessibility concepts (would be unified)

#### Analysis: design-taste-frontend + build-awwwards-quality-sites
**Merge Possible**: Yes, but less beneficial than above

**What Should Be Merged**:
- design-taste-frontend's architectural foundation
- build-awwwards-quality-sites' art direction and asset system capabilities

**What Would Be Duplicated**:
- Motion guidelines (both have motion components)
- Accessibility guidelines
- Performance guidelines
- Some UX considerations

**Proposed Architecture** (less clean separation):
```
enhanced-design-system
    ├── design-taste-frontend foundation
    │   ├── brief-inference
    │   ├── three-dial-system
    │   ├── architecture-standards
    │   └── ... (rest of design-taste-frontend)
    ├── build-awwwards-quality-sites specialization
    │   ├── art-direction-system
    │   ├── honest-asset-system
    │   ├── hero-composition
    │   ├── gsap-threejs-motion
    │   └── validation-procedures
```

**Conflict Risk**: Higher - both skills try to control overall design direction and motion systems

**Recommendation**: The design-taste-frontend + emil-design-eng merge is preferable due to clearer separation of concerns (architecture/foundation vs animation/specialization).

#### Analysis: animate + emil-design-eng
**Merge Possible**: Yes, highly recommended

**What Should Be Merged**:
- animate's animation decision framework
- emil-design-eng's additional capabilities:
  - CSS transform mastery
  - Clip-path for animation
  - Gesture and drag interactions
  - Performance rules
  - Accessibility considerations
  - The Sonner Principles
  - Stagger animations
  - Debugging techniques
  - Component building principles

**What Would Be Duplicated**:
- Animation decision framework (would appear once)
- Basic animation concepts

**Proposed Architecture**:
```
enhanced-animation-skill
    ├── animation-decision-framework (from both)
    ├── property-constraints (transform/opacity only, no scale(0), origin-aware)
    ├── tool-selection-hierarchy
    ├── easing-guidelines
    ├── duration-ranges
    ├── spring-animation-guidance
    ├── interruption-handling
    ├── reduced-motion-implementation
    ├── component-building-principles
    │   ├── buttons (scale(0.97) on :active)
    │   ├── popovers (origin-aware)
    │   ├── tooltips (delay skipping)
    │   ├── enter-styles (@starting-style)
    ├── css-transform-mastery
    ├── clip-path-animation
    ├── gesture-drag-interactions
    ├── performance-rules
    │   ├── hw-accel-focus
    │   ├── css-variables-inheritable
    │   ├── framer-motion-caveat
    │   ├── css-animations-beat-js
    │   ├── waapi-guidance
    ├── accessibility
    │   ├── prefers-reduced-motion
    │   ├── touch-device-hover-states
    │   ├── sonner-principles
    │   ├── stagger-animations
    │   ├── debugging-techniques
    └── animation-recipes (from animate)
```

**Benefit**: Creates a comprehensive animation skill that covers both implementation details and UI polish aspects.

**Recommendation**: Strongly recommended to merge animate into emil-design-eng (or create a new merged skill) since emil-design-eng is already a superset.

### Final Merge Recommendation
1. **Merge animate into emil-design-eng** (or create enhanced-animation-skill) - clear superset relationship makes this logical
2. **Consider merging design-taste-frontend + (enhanced-animation-skill)** for a comprehensive foundation - clean separation of concerns
3. **Keep build-awwwards-quality-sites separate** for situational use - its specialization is valuable but higher conflict risk with foundation skills

---

## Final Recommendations

### Recommended Skill Architecture

For this portfolio project, I recommend the following skill architecture:

```
portfolio-design-system (foundational)
    ├── visual-taste-and-architecture (design-taste-frontend core)
    │   ├── brief-inference-system
    │   ├── three-dial-system (VARIANCE/MOTION/DENSITY)
    │   ├── nextjs-tailwind-v4-architecture
    │   ├── typography-space-grotesk-inter
    │   ├── color-calibration-lime-black
    │   ├── layout-discipline-asymmetry
    │   ├── content-strategy-case-studies
    │   ├── asset-strategy-authentic-representations
    │   ├── accessibility-comprehensive
    │   └── performance-guardrails-core-web-vitals
    ├── motion-and-interaction-polish (enhanced animate+emil-design-eng)
    │   ├── animation-decision-framework-kowalski
    │   ├── component-building-principles
    │   ├── css-transform-mastery-clip-path
    │   ├── gesture-drag-interactions
    │   ├── performance-rules-hw-accel-waapi
    │   ├── accessibility-reduced-motion-touch
    │   ├── sonner-principles-stagger-debugging
    │   └── animation-implementation-recipes
    └── ux-and-content-excellence (design-taste-frontend UX + emil-design-eng perceptual focus)
        ├── interactive-states-loading-empty-error
        ├── layout-discipline-details-hero-navigation
        ├── content-strategy-density-copy-audit
        ├── form-patterns-label-above-input
        ├──äuftö reconnaissance
        └ galleries-media-visual-assets
```

### Usage Guidelines by Situation

1. **General portfolio development**: Start with portfolio-design-system (visual-taste-and-architecture layer)
2. **Adding animations/interactions**: Use motion-and-interaction-polish layer
3. **Refining specific portfolio sections**: Apply ux-and-content-excellence principles
4. **High-concept special sections**: Optionally apply build-awwwards-quality-sites principles, but only after establishing the foundation and respecting its requirement to "select and name at least one compatible installed web-design skill"
5. **Pure animation requests**: Use motion-and-interaction-polish layer directly

### Open Questions / Unknowns

1. **Exact dialectic between design-taste-frontend's three dials and emil-design-eng's animation specifics**: How should MOTION_INTENSITY values translate to specific easing curves/duration choices in emil-design-eng implementation?

2. **Asset system compatibility**: How would build-awwwards-quality-sites' "honest asset system" requirements interact with design-taste-frontend's image & visual asset strategy?

3. **Performance guideline unification**: How to best combine design-taste-frontend's Core Web Vitals focus with emil-design-eng's hardware-accelerated/WAAPI performance rules?

4. **Accessibility implementation standardization**: Which skill's reduced motion and focus implementation approaches should be standardized?

5. **Block library integration**: How would design-taste-frontend's block library (implemented patterns) interact with the enhanced animation skill's recipes and principles?

6. **Three.js specialization role**: Where does build-awwwards-quality-sites' Three.js work fit in relation to the enhanced animation skill's motion capabilities?

### Bottom-Line Recommendation

**Do NOT simply say "Skill X is the best."**

Instead:

- **design-taste-frontend should be the primary general-purpose design/frontend skill** because it provides the essential architectural foundation, typography, color, layout, and content strategy necessary for any frontend work, especially portfolios, with minimal dangerous overlap with other skills' core strengths.

- **animate should be merged into emil-design-eng** (or replaced by an enhanced animation skill) because emil-design-eng already contains all of animate's animation decision framework plus significant additional UI polish, component building principles, performance rules, and accessibility considerations that make it strictly more valuable for animation and interaction work.

- **The merged animation skill (animate+emil-design-eng) should be used as a specialist layer** on top of the design-taste-frontend foundation for refining animations and interactions to feel "right" through attention to invisible details.

- **build-awwwards-quality-sites should be retained as an optional, situational skill** for high-concept, motion-rich portfolio sections when specifically needed, but only after establishing the design-taste-frontend foundation and strictly following its requirement to select and name a compatible installed web-design skill to avoid architectural conflicts.

- **This approach favors fewer skills with clearer responsibilities** (foundational architecture + animation specialist + situational art-direction) while preserving deep capability in each area and minimizing instruction conflict.

This architecture provides the strong foundation needed for the portfolio project while allowing for specialized enhancement where valuable, without accumulating redundant or conflicting guidance.