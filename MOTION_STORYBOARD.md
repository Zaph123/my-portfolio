# MOTION_STORYBOARD.md

**Status:** FINAL DIRECTION DRAFT — choreography of the live page  
**Date:** 2026-09-26  
**Companion:** `MOTION_DIRECTION.md`

This is the portfolio as a sequence of scenes. It is not a component spec and not code.

Locked order:

```text
Opening (optional, first visit)
→ Hero
→ About
→ Work / Starrik
→ Starrik → Churchera
→ Churchera
→ Traytic
→ Compact work
→ Stack
→ Experience
→ Contact
→ Footer
```

Intensity: L0 still · L1 ambient · L2 functional · L3 expressive · L4 signature

---

## 01 — Opening

**Scene purpose:** Arrival. Name the person, then become the site.

**Emotional intent:** Expectation → recognition → the page opens.

**User expectation:** Something is beginning. They should not brace for a commercial.

**Visual intent:** Full-viewport field in the existing foundation color. Typography only. No second brand, no Einstein, no decoration.

**Initial state:** Overlay covers the viewport. Hero is already mounted underneath, not yet performing.

**Trigger:** First visit, motion allowed. Skip if reduced motion, repeat visit, Escape, click/tap, or short hard maximum.

**Movement:**  
Name rises from a clipped container. Role line follows one beat later in the existing mono/label voice. Short hold to read. Overlay leaves the viewport (upward curtain / clip). Not a fade to black.

**Payoff:** The overlay *is* the beginning of the hero. No blank frame. No “intro over, website starts.”

**Rest state:** Overlay gone. Does not return this session.

**Intensity:** L4, then immediately handed to a calmer hero.

**Mobile:** Same idea, shorter hold, skip even more obvious. If it feels like delay on a small screen, skip overlay and start at Hero.

---

## 02 — Hero

**Scene purpose:** Credential. Frontend Engineer · React.js & Next.js. Identity, specialization, CTA.

**Emotional intent:** Confidence without theater. “This is who I am. Here is the work.”

**User expectation:** After the opening (or immediately on repeat visits), they can actually read.

**Visual intent:** Existing left-aligned hero. Space Grotesk headline, Inter body, mono label. Lime used structurally. No project mockups here.

**Initial state:** Content in place; opacity/clip closed if motion is on.

**Trigger:** Opening exit overlap (~one beat), or page load on repeat visits.

**Movement:** Short cascade — label, name, headline (masked line), supporting copy, CTAs, socials. Then stop.

**Payoff:** A finished first viewport. CTAs are usable. Nothing keeps moving.

**Rest state:** Still. Hover on CTAs is 200ms color only.

**Intensity:** L3 entrance → L0 rest. L2 hover.

**Mobile:** Same cascade, slightly tighter. No pin. No curtain into About.

**Transition out:** Ordinary scroll. About is a valley; do not spend a signature wipe here.

---

## 03 — About

**Scene purpose:** Grounding. The engineer behind the work, without seniority inflation.

**Emotional intent:** Human context. Preparation for evidence.

**User expectation:** They will read, not be shown a spectacle.

**Visual intent:** Two columns on desktop (copy + focus areas). No personal photo. No invented imagery.

**Initial state:** Section in layout, quiet.

**Trigger:** Entering viewport.

**Movement:** Text column first, focus areas second, slight axis difference. Markers are static, not pulsing.

**Payoff:** The visitor understands domains (Starrik / Churchera / Traytic) before the big visuals.

**Rest state:** Fully still. This is a valley on purpose.

**Intensity:** L2–L3 entrance → L0 rest.

**Mobile:** Stacked fade. No opposing travel.

**Transition out:** Ordinary scroll into Work. Work earns attention by becoming a scene, not by a branded seam.

---

## 04 — Starrik

**Scene purpose:** Primary evidence. Courier / logistics, real-time tracking interfaces, Firebase, vendor dashboards. Presentation mockup.

**Emotional intent:** “This is the work. Stay with it.”

**User expectation:** After quiet About, the page should open up.

**Visual intent:** Immersive featured scene. Mockup large, honest, not a fake live screenshot. Copy readable beside/below — **not** buried in a dark overlay that hides the device imagery.

**Initial state:** Scene waiting. On desktop, this is the first pinned/spatial moment.

**Trigger:** Work enters viewport; on desktop, pin engages.

**Movement:** Image window crops or scales with scroll progress (scrub). Copy remains readable throughout. No card lift. No fake UI zoom into the screen content.

**Payoff:** Time spent with Starrik. The mockup is inspectable. The product feels like a place.

**Rest state:** While pinned, motion is scroll-tied, not looping. When the visitor holds still, the image holds still.

**Intensity:** L4 spatial.

**Mobile:** No pin. Full-width scene. Crop/reveal on enter, then still. Sequential, not scrubbed.

**Alt text stays:** “Starrik courier tracking platform shown on laptop and phone mockup.”

---

## 05 — Starrik → Churchera

**Scene purpose:** Product-to-product continuation. The adventure beat.

**Emotional intent:** Anticipation. A second world arriving.

**User expectation:** Not another identical card. A change of place.

**Visual intent:** Churchera’s mockup occupies the space Starrik leaves. Same importance class, different crop/mask axis.

**Initial state:** Starrik scene complete.

**Trigger:** Continued scroll inside the featured-work pin (desktop). On mobile, reaching the end of Starrik.

**Movement:** Spatial handoff via crop/mask. Starrik’s window closes or yields; Churchera’s window opens on a different axis. Not a lime curtain. Not a grid shuffle. Not letter morphing.

**Payoff:** The visitor understands they have entered another product.

**Rest state:** Handoff ends; Churchera holds.

**Intensity:** L4.

**Mobile:** Sequential replacement — Churchera scene follows Starrik without pin. Keep a distinct enter (different axis or quieter reveal) so it does not feel like a cloned Starrik.

---

## 06 — Churchera

**Scene purpose:** Second featured evidence. Faith-tech / finance-adjacent. Admin/Member role-based access, Supabase real-time, presentation mockup.

**Emotional intent:** Same seriousness as Starrik, different atmosphere.

**User expectation:** They can read this product without repeating the previous interaction beat-for-beat.

**Visual intent:** Featured scene. Mockup honest. Copy readable. Distinct from Starrik’s crop language.

**Initial state:** After handoff.

**Trigger:** Handoff complete; remaining pin (desktop) or scene enter (mobile).

**Movement:** Hold + a different interior move than Starrik (e.g. directional crop instead of scale, or a calmer mask). Then settle.

**Payoff:** Churchera is memorable as itself.

**Rest state:** Pin releases into Traytic. Motion stops being spatial.

**Intensity:** L4 then down to L3/L0.

**Mobile:** Unpinned scene, enter once, rest.

**Alt text stays:** “Churchera finance/member platform shown on laptop and phone mockup.”

---

## 07 — Traytic

**Scene purpose:** Technical evidence without fake UI. Hosting-agency admin work. Logo is a brand asset.

**Emotional intent:** Decompression. “Now we talk about systems, not posters.”

**User expectation:** After two immersive products, the page should let them think.

**Visual intent:** Structured editorial: labeled logo + feature breakdown. Never presented as a dashboard screenshot.

**Initial state:** Pin released. Ordinary document flow resumes.

**Trigger:** Viewport enter.

**Movement:** Simple editorial entrance. No scale theater. No overlay.

**Payoff:** The visitor can actually read TOTP, Turnstile, tables, Recharts, design-system contribution.

**Rest state:** Still. This is a valley.

**Intensity:** L2 entrance → L0.

**Mobile:** Stacked structured block. Same quiet.

---

## 08 — Compact work (QuizManiac, HustleLoop)

**Scene purpose:** Supporting evidence. Text-led. Team context on HustleLoop.

**Emotional intent:** Completeness without inflation.

**User expectation:** No more cinematic products. That is correct.

**Visual intent:** Compact pair. No images. No fabricated screenshots.

**Initial state:** In flow.

**Trigger:** Viewport enter.

**Movement:** Fade/stagger once.

**Payoff:** The list of work is honest. Nothing pretends these have Starrik’s visual weight.

**Rest state:** Still. No hover scale.

**Intensity:** L2 → L0.

**Mobile:** Stacked. Same.

---

## 09 — Stack

**Scene purpose:** Work-linked skills as evidence, not a ticker demo.

**Emotional intent:** Craft, then rest.

**User expectation:** They can scan categories.

**Visual intent:** Existing category grid (Frontend / Styling / Backend & Database / Tools / Inclusive Design). No logo wall. No marquee.

**Initial state:** Grid in layout.

**Trigger:** Viewport enter.

**Movement:** Small staggered reveal of categories. Then stop.

**Payoff:** Skills are readable and attached to real work.

**Rest state:** Still.

**Intensity:** L2 → L0.

**Mobile:** One column. No marquee, no horizontal page.

**Note:** A marquee was considered and rejected for v1. Too template, too easy to compete with Work.

---

## 10 — Experience

**Scene purpose:** Chronology and credibility. Traytic → Churchera → Starrik → Roothub.

**Emotional intent:** Trust. Time, not theater.

**User expectation:** A resume they can verify, not a timeline toy.

**Visual intent:** List. Titles as employed. No seniority inflation in presentation.

**Initial state:** List in flow.

**Trigger:** Scroll through items.

**Movement:** Items enter once. Active item can be marked (L2) as it becomes the reading focus. Spine optional and thin. No glow.

**Payoff:** Chronology is clear and separate from Work’s evidence hierarchy.

**Rest state:** Quiet list.

**Intensity:** L2.

**Mobile:** Stacked list. Marker optional.

---

## 11 — Contact

**Scene purpose:** Invitation after the story.

**Emotional intent:** Resolution. You’ve seen the work; here is how to reach me.

**User expectation:** A usable form and real links. Not a finale animation.

**Visual intent:** Existing form + verified links. Lime CTA remains button-only.

**Initial state:** Form in layout.

**Trigger:** Viewport enter; then user input.

**Movement:** Fields appear once. Validation and toast are functional (L2).

**Payoff:** Sending mail / opening GitHub / LinkedIn is easy. Success is acknowledged, then gone.

**Rest state:** Form at rest. No looping motion.

**Intensity:** L3 tiny entrance → L2 interaction → L0.

**Mobile:** Same, stacked, 48px targets.

---

## 12 — Footer

**Scene purpose:** Close.

**Emotional intent:** Done.

**User expectation:** Copyright, name, quiet links.

**Visual intent:** Existing footer. Einstein only if already decided as secondary, never as a motion beat.

**Initial state / rest:** Still.

**Trigger:** None.

**Movement:** None.

**Payoff:** The page does not keep performing after the invitation.

**Intensity:** L0.

**Mobile:** Still.

---

## Nav (through-line, not a scene)

**Purpose:** Wayfinding.

**Movement:** None on load. Color/underline on hover and current section (L2). Hash links use the existing smooth-scroll behavior; they must not fight pins. If a pin is active, nav still reaches the section.

**Reduced motion:** Instant section jump or native scroll.

**Mobile:** Same links; menu open/close is functional, 200ms, not a signature.

---

## Reduced-motion pass (whole page)

| Scene | Reduced-motion experience |
|-------|---------------------------|
| Opening | Skip. Hero is visible immediately |
| Hero | Final layout; optional opacity only |
| About | Visible immediately |
| Starrik / Churchera | Final crops, no pin, no scrub |
| Handoff | Instant next scene |
| Traytic / compact / stack | Visible |
| Experience | Static list, optional static current item |
| Contact | Visible fields; toast may fade |
| Footer | Still |

---

## First-visit walkthrough (desktop, motion on)

```text
1. Name emerges. Role appears. Overlay lifts. (~2s)
2. Hero finishes speaking, then sits still.
3. About is readable, quiet.
4. The page opens into Starrik. The mockup has time.
5. Scroll continues; Churchera takes the place. Distinct product.
6. Air returns. Traytic is a document. Compact work is a document.
7. Stack is a list. Experience is a list.
8. Contact is an invitation. Footer does not move.
```

If that walkthrough still feels busy, cut the opening before cutting Starrik/Churchera.

---

*Storyboard only. No implementation until the direction is approved.*
