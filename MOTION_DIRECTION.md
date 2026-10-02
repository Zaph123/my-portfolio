# MOTION_DIRECTION.md — Final Direction Draft

**Status:** FINAL DIRECTION DRAFT — awaiting approval. Not an implementation contract.  
**Date:** 2026-09-26  
**Companion:** `MOTION_STORYBOARD.md`

**Authority**

This document evolves **motion and composition language** only.

It does not replace:

- Terminal Precision
- evidence rules
- palette (`#7FA800` / `#C6FF00` button-only / `#0B0B0C`)
- type (Space Grotesk / Inter / JetBrains Mono)
- positioning (Frontend Engineer · React / Next.js · 2+ years)
- project hierarchy (Starrik → Churchera → Traytic → QuizManiac → HustleLoop)
- experience chronology (Traytic → Churchera → Starrik → Roothub)

Where this draft increases motion intensity beyond `PORTFOLIO_DESIGN_DIRECTION.md` (“not a cinematic showcase”), the expansion is intentional and must be approved. Identity, claims, and evidence do not change.

**Page order (locked)**

```text
Nav → Hero → About → Work → Stack → Experience → Contact → Footer
```

Do not shuffle information architecture to make a cooler reel.

---

## 1. Motion Thesis

The portfolio should **unfold rather than simply scroll**.

The visitor should not feel they are paging through a document with entrance animations. They should feel they are moving through a sequence of scenes that belong to one person.

What they should feel:

> “That was interesting. I wonder what happens next.”

What they should never feel:

> “This person is delaying me from seeing the work.”

SEQUENCE is the governing structure. DEPTH and MORPH are supporting mechanisms. They are not competing styles, and they must not appear in every section.

---

## 2. Governing Rules

### 2.1 Setup → Movement → Payoff

Every major motion moment must have:

1. **Setup** — attention is prepared
2. **Movement** — something actually changes
3. **Payoff** — the change communicates something, or creates a meaningful transition

If there is no payoff, the motion does not belong.

### 2.2 Rhythm over quota

Signature motion should be **sparse enough to remain perceptually significant**. Major peaks sit inside quieter states.

```text
anticipation → movement → payoff → stillness
anticipation → movement → payoff → stillness
```

Not:

```text
animation → animation → animation → animation
```

There is no numerical cap such as “≤2 Level 4 moments per viewport.” The test is whether the last surprise still felt like a surprise.

### 2.3 Work is the main visual story

The strongest spatial storytelling belongs to **Work**, especially Starrik and Churchera.

Opening may be a typographic signature.  
Work is the product/spatial signature.  
Everything else supports those two.

### 2.4 Stillness is part of the system

About, Traytic, compact work, Experience, and Footer are allowed — and often required — to be quiet.

### 2.5 Evidence over spectacle

Mockups remain presentation imagery, not live screenshots. Motion must not crop, overlay, or distort them into fake product UI. If motion hides the work, motion loses.

### 2.6 Progressive, reversible, coherent

Desktop/motion-enabled visitors get the fuller choreography. Reduced motion and mobile get legitimate alternative experiences, not broken leftovers. Lime, type, borders, and hierarchy stay constant across scenes.

---

## 3. Motion Hierarchy

Keep four levels. Use them as a language, not a scoreboard.

| Level | Name | Role | Examples in this portfolio |
|-------|------|------|----------------------------|
| L0 | Still | No motion after rest | Footer; hero after entrance; compact project rest |
| L1 | Ambient | Barely noticeable environment | Optional slow grid; marquee **rejected** |
| L2 | Functional | Communicates state | Hover, focus, active experience item, form errors |
| L3 | Expressive | Personality without stealing the work | Opening text emerge; hero masked lines; About column offset |
| L4 | Signature | The moments people remember | Opening becoming the hero; Starrik scene; Starrik → Churchera |

Most of the page lives in L0–L2. L3 is occasional. L4 is rare and bookended by quiet.

---

## 4. Mechanism Vocabulary

A small set. Not a catalogue.

| Mechanism | Meaning | Use when | Do not use when |
|-----------|---------|----------|-----------------|
| **Fade** | Opacity change | Valleys, compact work, reduced motion | As the only personality of every section |
| **Reveal** | Content emerges from a clip, mask, or overflow hidden | Opening type; featured mockup crops | On every heading |
| **Slide** | Directional translate | About’s two-axis entry; overlay exit | As fake parallax on every block |
| **Scale** | Size change | Tiny rest-state hover on images, if at all | Card lift, bounce, 1.1 zoom as decoration |
| **Clip / crop** | Changing visible window of an image | Starrik and Churchera mockups | Distorting mockups into fake UI |
| **Spatial handoff** | One scene occupies the space the previous scene leaves | Starrik → Churchera | Between About and Work, or every section |
| **Morph** | Shared element continuously becomes another | Not in v1 | Forced letter-to-letter tricks |
| **Pin / sticky** | A scene holds while scroll drives its interior | Featured work on desktop | Hero, About, Stack, Contact |
| **Curtain / wipe** | A plane leaves the viewport | **Opening overlay exit only** | Section-to-section branding wipes |
| **Scrub** | Progress tied to scroll | Featured mockup crop/scale | Body copy, forms, nav |

Rejected as default tools: lime branded curtains, looping pulse, glow, horizontal page scroll, velocity chaos, blur-to-sharp on body text.

---

## 5. Two Signatures, Not a Contest

Opening and pinned Work **can coexist**. They are not XOR.

They occupy different times and different jobs:

| | Opening | Featured Work |
|--|---------|----------------|
| Job | Arrival / identity | Evidence / immersion |
| Sense | Typographic | Spatial / product |
| Duration | Seconds, first visit | The main scroll story |
| Risk if removed | Site starts like every other portfolio | The “adventure” feeling collapses |

They compete only if the opening is long, loud, or still moving when Work begins. Therefore:

- Opening is short, skippable, first-visit, then gone
- Hero becomes calm
- About is a valley
- Work is where spatial motion is spent

If a future pass must cut one, cut the **opening**, not the Work scenes. The work is the portfolio.

---

## 6. Opening Sequence

Not a loader. Not a second site. Not Einstein.

The opening is the **first movement of the hero**. The hero already exists underneath. When the overlay leaves, the site has begun — it has not “finished intro and started website.”

### Copy (recommended)

```text
ZAPHENATH BASSEY
Frontend Engineer
```

Option B if A feels too dry:

```text
ZAPHENATH BASSEY
React / Next.js
```

Rejected: “WELCOME, I’M EINSTEIN.” “LET ME INTRODUCE MYSELF.”

### Choreography intent

1. Full-viewport overlay, same foundation color as the system
2. Name emerges from a clipped container — physical, not a fade from nowhere
3. Role line appears one beat later, in the existing mono/label language
4. Brief recognition hold
5. Overlay **leaves the viewport** (upward curtain / clip-path). Not opacity 1 → 0
6. Hero is already there. Hero’s quieter entrance overlaps the exit so there is no blank frame

Timing is subordinate to perception. Aim for “read it once, then the site opens.” Roughly a couple of seconds, never a ten-second trap. Exit on choreography complete, Escape, click/tap, or a short hard maximum.

First visit only. Repeat visits skip. Reduced motion skips. Skip must be obvious, not a tiny ×.

### Alternatives

1. No overlay — hero is the opening. Fastest for recruiters.
2. Identity overlay as specified — one typographic signature.
3. Scroll-tied dismiss — first wheel/touch opens the site. Do not ship until 2 is proven.

Recommendation: **2**, because it gives arrival without stealing Work. If it feels like delay in a prototype, fall back to **1**.

---

## 7. Hero

After the opening (or immediately on repeat visits), the hero is **expressive, then still**.

It establishes identity and specialization. It does not compete with Work.

- Label, name, headline, copy, CTAs, socials enter in a short cascade
- Headline may use a masked line reveal
- Then the hero **stops**
- Hover on CTAs is L2 (200ms color), not ongoing motion
- No pinned hero
- No second curtain into About

Rest state: a readable credential. If someone screenshots the first viewport, it should look finished.

---

## 8. About — the valley

Purpose: human context, grounding, preparation for the work.

There is no personal photograph. Do not invent one. Depth comes from **column offset and typography**.

Motion: text column first, focus areas second, different axes, then still. No pulse loops. No opposing parallax theater. No Level 4 wipe into Work.

The absence of spectacle here is the design.

---

## 9. Work — the main story

Projects are not one card component with different spans.

### Starrik — primary featured scene

Immersive, large, spatial. Presentation mockup is the visual evidence. Copy stays readable **beside or below** the image, not trapped in a dark glass overlay that hides the mockup. Scroll can drive crop/scale of the image window. The product remains inspectable.

### Starrik → Churchera — signature handoff

This is the page’s spatial peak.

It should communicate: **we are moving into another product**, not “next card in the grid.”

Preferred language: **crop/mask spatial handoff** inside a pinned desktop scene. Churchera occupies the space Starrik leaves.

Rejected for this beat: generic fade between cards; lime branded wipe; morphing letterforms.

### Churchera — second featured scene, distinct

Same importance class, different motion identity. If Starrik is a crop/scale scene, Churchera should not repeat the same move. Prefer a directional crop or a different mask axis so the two products are remembered as two places, not two loops.

### Traytic — decompress

Editorial / structured. Logo is a brand asset, labeled as such. Feature breakdown is the story. Motion drops on purpose after two immersive scenes.

### QuizManiac / HustleLoop — compact, text-led

Entrance only. No fake screenshots. No hover scale. Stillness is the point: these are supporting evidence.

---

## 10. Stack

**Decision: reject a marquee for v1.**

A two-row opposing ticker is the most template-like move in this brief. It reads as “I visited Awwwards,” not as craft. Skills are work-linked evidence.

Use the **category grid** with a small staggered reveal, then rest. Masked edges optional. No velocity-linked direction changes.

Revisit a marquee only if the page later feels too still *after* Work is already strong — and even then, one row, slow, ambient, killable.

---

## 11. Experience

Chronology and credibility, not a UI demo.

Keep the list. Mark the **active item** as the visitor reads (L2). A thin spine is optional and quiet. No glow, no drop-shadow theater, no horizontal timeline gimmick.

Experience order stays Traytic → Churchera → Starrik → Roothub. Do not restyle it to match Work’s presentation hierarchy.

---

## 12. Contact and Footer

Contact is resolution:

```text
You’ve seen the work
→ you understand the person
→ there is an invitation to connect
```

Fields enter once. Form feedback is functional. Success toast is L2, not a second climax.

Footer is still. No motion.

---

## 13. Page Rhythm

```text
OPENING          peak (typographic, optional, first visit)
HERO             expressive → still
ABOUT            valley
STARRIK          peak (spatial)
STARRIK→CHURCHERA peak (handoff)
CHURCHERA        peak, then settle
TRAYTIC          valley / structured
COMPACT WORK     still
STACK            quiet evidence
EXPERIENCE       functional
CONTACT          small close
FOOTER           still
```

Peaks are few. Valleys are where the visitor actually reads.

---

## 14. Transitions Between Sections

Most section boundaries should be **ordinary scroll**. Continuity comes from type, color, and spacing — not a branded effect at every seam.

| Boundary | Treatment | Why |
|----------|-----------|-----|
| Opening → Hero | Overlay leaves; hero already present | Arrival, not a hard cut |
| Hero → About | Soft / none | About is a valley |
| About → Work | Ordinary scroll into a larger scene | Work earns attention by scale, not a wipe |
| Starrik → Churchera | Spatial handoff | New product, same story |
| Churchera → Traytic | Release pin; editorial rest | Decompress |
| Traytic → compact | None / fade | Information |
| Work → Stack | None | Skills should not try to outdo Work |
| Stack → Experience | None | Chronology, not theater |
| Experience → Contact | None | Invitation |
| Contact → Footer | None | Close |

---

## 15. Mobile

Mobile is not desktop scaled down.

| Desktop | Mobile |
|---------|--------|
| Opening overlay (first visit) | Same idea, shorter hold, easier skip; or skip overlay entirely if it feels like delay |
| Hero cascade then still | Same, slightly shorter |
| About two-axis entry | Simple stacked fade |
| Pinned Starrik / Churchera scenes | **No pin.** Sequential full-width scenes. Crop reveal on enter, not scrubbed pin |
| Spatial handoff | Sequential scene change; Churchera simply follows Starrik |
| Category grid | Same, stacked |
| Experience active marker | Optional; list is enough |
| Hover crop | Do not rely on hover |

Preserve the **feeling** (unfold, few surprises, quiet valleys), not the machinery (pin, scrub, handoff).

---

## 16. Accessibility

Reduced motion is a real experience:

- No overlay (or instant static identity, no hold)
- No pin, no scrub, no clip theater
- Content in final layout immediately
- Fades allowed if they do not hide information
- Hover/focus still visible without motion
- Lenis / smooth scroll off
- No essential content only available mid-animation
- No scroll trapping, no forced wait, no skip hidden from keyboard

Focus rings, 48px targets, heading order, labels, and mockup alt text remain product requirements.

---

## 17. Creative Direction vs Later Implementation

**Creative direction (this document):** unfold; two signatures; Work as spatial story; valleys; sparse peaks.

**Implementation (later, not now):** existing Motion + Lenis is the default path. Do not choose GSAP, ScrollTrigger, or WebGL in this phase. Revisit tools only if pinned dual-scene Work cannot stay smooth. No new dependency is justified by this draft alone.

---

## 18. Explicit Rejections

- “WELCOME, I’M EINSTEIN”
- 10-second intro / `setTimeout` traps
- Loading-screen behavior
- Scroll-jacking
- Sound
- Three.js / WebGL
- Animation for animation’s sake
- Constant parallax
- Generic fade-up as the personality of every section
- Excessive horizontal scrolling
- Cinematic curtains between every section
- Fake product interactions
- Invented screenshots
- Dark overlays that hide mockup evidence
- Motion that exists only because it looks impressive in a recording
- Skills marquee as v1
- Glowing experience timeline
- Morphing hero letterforms into project titles (v1)

---

## 19. Quality Test (this pass)

| Question | Answer |
|----------|--------|
| Does it unfold? | Yes, if Work is scenes and the opening becomes the hero |
| Anticipation / surprise? | Opening arrival; Starrik; Starrik→Churchera. That is enough |
| Are quiet sections quiet? | About, Traytic, compact, Stack, Experience, Footer |
| Does motion help the work? | Only if mockups stay visible and Churchera feels like another product |
| Does each movement have a reason? | Setup → movement → payoff, or cut |
| Is Starrik important because of the work? | Yes — scale and time with the mockup, not a glow |
| Is Churchera distinct? | Yes — different handoff axis, not a cloned Starrik loop |
| Does opening feel like beginning? | Yes, if it is short and continuous with the hero |
| Rhythm? | Peak / valley / peak / valley |
| Would removing 20% make it stronger? | Yes — marquee, section wipes, overlay-on-image, glow spine are already removed |
| Same designer throughout? | Lime, type, borders, sparse motion, evidence-first |

---

## 20. Decision Log

1. **SEQUENCE governs; DEPTH/MORPH support.** Stops the page from becoming three competing animation styles.
2. **Opening and pinned Work coexist**, differentiated as typographic vs spatial signatures. If one must go later, opening goes first.
3. **Einstein stays out of the opening.** Positioning decision stands.
4. **No 10-second intro.** Choreography-led, skippable, first visit only.
5. **About is a valley.** No invented portrait, no spectacle.
6. **Work is the visual story.** Starrik and Churchera are scenes; Traytic decompresses; compact stays text-led.
7. **Starrik → Churchera is crop/mask spatial handoff**, not a branded wipe and not a morph.
8. **Reject skills marquee for v1.** Category grid is more honest and less template.
9. **Experience = active marker, not glow theater.**
10. **Most section seams are ordinary scroll.** Spending wipes at every boundary kills surprise.
11. **No lime overlay that hides mockups.** Evidence visibility beats cinematic posters.
12. **Replace the “≤2 L4 per viewport” quota** with qualitative rhythm.
13. **Mobile drops pinning and scrub**, keeps sequential scenes.
14. **Do not pick GSAP/WebGL in this phase.**

---

## 21. Remaining Decisions

Only items that still need a human call before an implementation plan:

1. **Opening: ship overlay (copy A), skip overlay, or prototype behind a flag?**  
   Recommendation: prototype overlay first-visit only. Fall back to no overlay if it feels like delay.

2. **Desktop Work: pin Starrik and Churchera, or use unpinned editorial scenes with the same crop/handoff language?**  
   Recommendation: pin on desktop. That is the adventure. Unpinned is the safer fallback if pin fights Lenis or accessibility.

3. **Churchera’s distinct move:** opposite crop axis vs directional mask vs quieter pinned hold.  
   Cannot be chosen well without looking at the two mockups side by side in a prototype.

Everything else in this draft is resolved enough to storyboard.

---

*Final direction draft. Implementation plan comes only after approval. No code in this phase.*
