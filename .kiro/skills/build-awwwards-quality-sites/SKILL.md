---
name: build-awwwards-quality-sites
description: Art-direct and implement distinctive, motion-rich marketing, editorial, portfolio, and landing websites with original reference-inspired imagery, standout heroes, GSAP choreography, one smooth-scroll engine, optional Three.js shaders, honest icon and logo sourcing, photo avatars, accessibility, and performance safeguards. Enhanced with layout precision, editorial typography, AIDA structure, gapless grids, and advanced GSAP patterns from gpt-taste. Use when a user asks for an Awwwards-quality, premium, cinematic, interactive, high-concept, or motion-led website, or explicitly requests this visual and motion system.
---

# Build Awwwards-Quality Sites

Build a cohesive, memorable site whose visual idea, media, typography, and motion tell the same story. Treat "Awwwards quality" as an acceptance bar, never as an award or recognition claim.

## 1. Set the art direction

- Inspect the user's reference evidence completely before implementation. Extract only high-level traits such as hierarchy, pacing, contrast, image treatment, and motion principles.
- Generate a materially new identity, layout, copy system, imagery, and interaction language. Never reuse, trace, or closely reproduce reference assets, screenshots, source code, identity, or copy.
- Use Aura.build top asset imagery only when the user requests it or it is relevant and available. Treat it as high-level inspiration, not an asset library.
- Select and name at least one compatible installed web-design skill. Follow the smallest relevant set and avoid combining unrelated aesthetic systems.
- Write a compact direction before coding: visual thesis, hero focal asset, type hierarchy, color system, section sequence, motion narrative, chosen smooth-scroll engine, Three.js decision, and asset provenance plan.
- **Optional: Deterministic layout variance.** To break LLM repetition defaults, simulate a deterministic selection (e.g., prompt character count modulo options) for hero architecture, typography stack, component architectures, and GSAP paradigms. Record the selections in your design plan. This is a technique, not a rigid rule.

## 2. Build an honest asset system

- Generate original hero or project imagery when it materially improves the concept. Use appropriately licensed media when it is stronger, and keep provenance in the site source.
- Do not draw illustrations with model-authored SVG, CSS, or canvas paths. Use original generated or appropriately licensed transparent PNG cutouts for illustrative elements. Simple authored brand marks, interface icons, data graphics, and a justified Three.js shader canvas are allowed.
- Use photographs for every avatar. Prefer provided or appropriately licensed photos; never ship initials, illustrated heads, faceless silhouettes, or generated people presented as real customers, staff, or endorsers.
- Use Phosphor icons through Iconify for interface symbols. Use Iconify SVG Logos only for legitimate real-company marks in truthful contexts. Use Logo Ipsum only for explicitly disclosed fictional brand specimens, never as customer proof. Omit a logo wall when no honest proof exists.
- Provide deliberate aspect ratios, crop behavior, alt text, loading behavior, and missing-media fallbacks. Avoid generic stock imagery, copied mockups, watermarks, and decorative media without a narrative role.

## 3. Compose the hero

- Make the first viewport the site's strongest authored moment. Combine a clear message and CTA with original imagery, video, pointer-responsive interaction, or a justified Three.js scene.
- **Hero architecture:** Favor wide, editorial layouts. The H1 should flow horizontally in 2–3 lines maximum; use `max-w-5xl` to `max-w-6xl` containers and `clamp(3rem, 5vw, 5.5rem)` font scale to guarantee this. Avoid narrow 6-line text walls.
- **Hero layout options** (select based on art direction):
  1. *Cinematic Center:* Text perfectly centered, massive width. Exactly two high-contrast CTAs below. Behind everything, a stunning full-bleed background image with dark radial wash.
  2. *Artistic Asymmetry:* Text offset left, with an artistic floating image overlapping from bottom right.
  3. *Editorial Split:* Text left, image right, with massive negative space.
- Create a composed GSAP intro sequence for the hero. Keep navigation, primary message, and CTA readable and usable before the animation completes.
- Make pointer effects additive. Support touch, keyboard, coarse pointers, window blur, and visibility changes without leaving the interface in an incomplete state.
- Design a static first frame that remains complete when JavaScript, media playback, WebGL, or motion is unavailable.
- **Banned in hero:** arbitrary floating stamp/badge icons on text, pill-tags under the hero, raw data/stats in the hero.

## 4. Build the motion system

- Use GSAP as the primary animation system.
- Evaluate Lenis and Locomotive Scroll, then choose exactly one as the site's sole smooth-scroll engine. Never install or initialize both. Connect the chosen engine correctly to GSAP ScrollTrigger, refresh measurements after media and font changes, and destroy it during cleanup.
- Bypass smooth scrolling and scrubbed timelines under `prefers-reduced-motion: reduce`. Render final states immediately instead of merely shortening animations.
- **Choreograph section by section:**
  - Reveal major headings word-by-word with a restrained stagger, then sequence supporting copy and media.
  - Preserve an unsplit accessible name for staggered text. Hide decorative split words from assistive technology, never split links or meaningful inline markup, and keep the unsplit content visible without JavaScript.
- Use CSS for simple hover, focus, and tap states. Reserve ScrollTrigger for justified scrubbed or pinned sequences and avoid multiple systems controlling the same property.
- **Advanced GSAP patterns (use when art direction justifies):**
  - *Scroll Pinning (Split):* Pin a section title on the left while a gallery scrolls up on the right.
  - *Image Scale & Fade Scroll:* Images start at `scale: 0.8`, grow to `1.0` on scroll in, darken and fade to `opacity: 0.2` on scroll out.
  - *Scrubbing Text Reveals:* Opacity of central paragraph words scrubs from 0.1 to 1.0 sequentially.
  - *Card Stacking:* Cards overlap and stack dynamically from the bottom on scroll down.
  - *Hover Physics:* Every clickable card/image reacts. Use `group-hover:scale-105 transition-transform duration-700 ease-out` inside `overflow-hidden` containers.

## 5. Structure with AIDA discipline

For landing pages and marketing surfaces, enforce the AIDA framework as a compositional backbone:

- **Attention (Hero):** Cinematic, clean, wide layout (see Section 3).
- **Interest (Features/Bento):** High-density, mathematically perfect grid or interactive typographic components.
- **Desire (GSAP Scroll/Media):** Pinned sections, horizontal scroll, text-reveals, or media-driven narrative.
- **Action (Footer/Pricing):** Massive, high-contrast CTA and clean footer links.
- **Spacing rule:** Add huge vertical padding between all major sections (`py-32 md:py-48`). Sections must feel like distinct, cinematic chapters. Do not cramp elements together.

This structure is for Persuade-mode surfaces. Do not impose it on Operate/Read/Experience contexts.

## 6. Compose gapless bento grids

- **Zero empty space:** Use Tailwind's `grid-flow-dense` (`grid-auto-flow: dense`) on every Bento Grid. Mathematically verify that `col-span` and `row-span` values interlock perfectly. No grid shall have a missing corner or empty void.
- **Card restraint:** 3 to 5 highly intentional, beautifully styled cards are better than 8 messy ones. Fill them with a mix of large imagery, dense typography, or CSS effects.
- **No meta-labels:** Ban labels like "SECTION 01", "SECTION 04", "QUESTION 05", "ABOUT US". They look cheap. Name sections by their actual topic.

## 7. Component arsenal (select based on art direction)

- **Inline typography images:** Embed small, pill-shaped images directly inside massive headings. Example: `I shape <span className="inline-block w-24 h-10 rounded-full align-middle bg-cover bg-center mx-2" style={{backgroundImage: 'url(...)'}}></span> digital spaces.`
- **Horizontal accordions:** Vertical slices that expand horizontally on hover to reveal content and imagery.
- **Infinite marquee:** Smooth, continuously scrolling rows of authentic `@phosphor-icons/react` icons or large typography.
- **Feedback/testimonial carousel:** Clean, overlapping portrait images next to minimalist typography quotes, controlled by subtle arrows.
- **Image context & style:** Use `https://picsum.photos/seed/{keyword}/1920/1080` matched to the vibe. Apply sophisticated CSS filters (`grayscale`, `mix-blend-luminosity`, `opacity-90`, `contrast-125`) so they don't look like boring stock photos.
- **Creative backgrounds:** Subtle professional ambient design — deep radial blurs, grainy mesh gradients, shifting dark overlays. Avoid flat, boring colors.
- **Horizontal scroll bug prevention:** Wrap the entire page in `<main className="overflow-x-hidden w-full max-w-full">` to absolutely prevent horizontal scrollbars caused by off-screen animations.

## 8. Add Three.js only with purpose

- Use Three.js and custom WebGL shaders when spatial depth, texture transition, displacement, or pointer response materially supports the art direction. Do not add a shader as ornamental background noise.
- Give the canvas one clear responsibility and keep it subordinate to semantic content and controls.
- Cap device pixel ratio, pause rendering offscreen or when the document is hidden, throttle pointer input, and avoid per-frame allocation.
- Provide a static poster and replace the canvas entirely under reduced motion or WebGL failure.
- Dispose animation frames, observers, event listeners, render targets, textures, geometries, materials, and the renderer. Handle context loss without breaking page content.

## 9. Meet the quality bar

- Build a complete semantic page, not a hero-only concept. Include responsive navigation, coherent section progression, concrete conversion content, final CTA, footer, robust form or control states when present, and visible keyboard focus.
- Require a distinct art-directed idea, memorable first viewport, disciplined typography and spacing, intentional image crops, authored transitions, and refined hover, focus, active, loading, disabled, error, touch, and reduced-motion behavior.
- Preserve performance with responsive media, lazy loading below the fold, bounded transforms, limited blur, capped canvas work, and no continuously animated offscreen content.
- Reject generic gradient blobs, ornamental bento grids, glass applied everywhere, stock component layouts, fake testimonials, invented partnerships, logo-wall theater, and motion with no narrative role.
- Never describe the result as award-winning or Awwwards-recognized unless the user provides verifiable evidence.

## 10. Mandatory pre-flight design plan

Before writing ANY React/UI code, output a `<design_plan>` block containing:

1. **Deterministic selections** (if using variance technique): Mock output showing hero layout, typography stack, component architectures, and GSAP paradigms selected.
2. **AIDA Check:** Confirm the page contains Navigation, Attention (Hero), Interest (Bento), Desire (GSAP), Action (Footer) — for Persuade-mode surfaces.
3. **Hero Math Verification:** Explicitly state the `max-w` class applied to the H1 to guarantee 2–3 line flow. Confirm no stamp icons or spam tags exist.
4. **Bento Density Verification:** Prove mathematically that grid columns/rows leave zero empty spaces and `grid-flow-dense` is applied.
5. **Label Sweep & Button Check:** Confirm no cheap meta-labels exist, and button text contrast is perfect.
6. **Asset Provenance:** List all image/icon sources and their licenses.
7. **Motion Stack:** Document GSAP version, smooth-scroll engine, ScrollTrigger integration, and Three.js decision.
8. **Accessibility Plan:** Reduced-motion behavior, focus management, unsplit text for staggered headings.

Only output the UI code after this rigorous verification is complete.

## 11. Validate before handoff

- Run the production build and fix every failure.
- Check the page at desktop and mobile sizes when browser validation is requested or needed to resolve a blocker.
- Verify keyboard navigation, visible focus, touch behavior, content with JavaScript unavailable, static media fallbacks, and `prefers-reduced-motion` behavior.
- Check that only one smooth-scroll engine is installed and initialized, ScrollTrigger integration is correct, and all animation and WebGL resources clean up.
- Search rendered content and source for placeholders, copied reference identity, unsupported claims, misleading logos, uncredited media, and inaccessible split text.
- Report the chosen web-design skill, asset sources, motion stack, Three.js decision, validation performed, and any remaining limitation.