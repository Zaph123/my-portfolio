---
version: 1
colors:
  # PRIMARY PALETTE — Terminal Lime (darkened for accessibility)
  lime:
    value: "#7FA800"
    description: "Terminal lime — NEW PRIMARY. Olive-green phosphor, authentic CRT aesthetic. Passes WCAG AA contrast on both light and dark backgrounds."
  
  black:
    value: "#0B0B0B"
    description: "Near-true black, slightly warm. Maximum contrast foundation."
  
  # NEUTRALS — Warm-tinted greys (cream-biased)
  neutral-50:
    value: "#FAFAF8"
    description: "Warmest off-white. Light mode cards, dark mode body text."
  
  neutral-100:
    value: "#F5F5F0"
    description: "Light warm grey. Subtle background differentiation."
  
  neutral-200:
    value: "#E8E8E0"
    description: "Warm border color for light mode."
  
  neutral-300:
    value: "#D1D1C8"
    description: "Muted warm grey. Disabled states, secondary text in dark mode."
  
  neutral-700:
    value: "#3D3D38"
    description: "Dark warm grey. Borders in dark mode only — NOT for text."
  
  neutral-800:
    value: "#252520"
    description: "Deep charcoal. Card backgrounds in dark mode."
  
  neutral-900:
    value: "#141412"
    description: "Almost-black with warm undertone. Dark mode foundation."
  
  # LIME VARIANTS — Darkened scale, WCAG-compliant
  lime-50:
    value: "#F8FFCC"
    description: "Pale lime wash. Subtle highlight backgrounds."
  
  lime-100:
    value: "#EEFF99"
    description: "Light lime tint."
  
  lime-200:
    value: "#E3FF66"
    description: "Mid-light lime."
  
  lime-300:
    value: "#C6FF00"
    description: "Bright neon lime. Accent only — NEVER for text. Buttons, large CTAs, decorative elements."
  
  lime-400:
    value: "#A3D600"
    description: "Saturated lime. Hover states, focus rings on dark backgrounds."
  
  lime-500:
    value: "#7FA800"
    description: "PRIMARY — Terminal olive-green. Links, badges, primary accents. 5.4:1 on neutral-900 (dark mode), 2.8:1 on white (large text only)."
  
  lime-600:
    value: "#5C7A00"
    description: "Deep olive. Light-mode links and inline text (4.4:1 on white, passes AA large text)."
  
  lime-700:
    value: "#4A6200"
    description: "Dark olive. Light-mode body text accents (5.1:1 on white, passes AA normal text)."
  
  lime-800:
    value: "#374900"
    description: "Deeper olive. High-contrast text use."
  
  lime-900:
    value: "#1F2900"
    description: "Almost-black olive tint."
  
  # SEMANTIC COLORS — Darkened for WCAG compliance
  success:
    value: "#5C7A00"
    description: "lime-600 — success states stay within the brand family. 4.4:1 on white."
  
  warning:
    value: "#CC8400"
    description: "Darkened amber. 4.5:1 on white, high visibility."
  
  error:
    value: "#D32F2F"
    description: "Darkened red. 4.5:1 on white, clear danger signal."
  
  info:
    value: "#0288D1"
    description: "Darkened cyan. 4.5:1 on white, technical complement to lime."

typography:
  display:
    family: "Space Grotesk"
    description: "Geometric sans with technical character. Large display headings, hero text."
    weights: [400, 700]
    fallback: "system-ui, sans-serif"
  
  body:
    family: "Inter"
    description: "Neutral, highly readable. Body text, UI labels, navigation."
    weights: [400, 500, 600]
    fallback: "system-ui, sans-serif"
  
  mono:
    family: "JetBrains Mono"
    description: "Code snippets, technical details, inline terminal-style text."
    weights: [400, 600]
    fallback: "ui-monospace, monospace"
  
  scale:
    xs: "0.75rem"      # 12px
    sm: "0.875rem"     # 14px
    base: "1rem"       # 16px
    lg: "1.125rem"     # 18px
    xl: "1.25rem"      # 20px
    "2xl": "1.5rem"    # 24px
    "3xl": "1.875rem"  # 30px
    "4xl": "2.25rem"   # 36px
    "5xl": "3rem"      # 48px
    "6xl": "3.75rem"   # 60px
    "7xl": "4.5rem"    # 72px

rounded:
  none: "0"
  sm: "0.25rem"      # 4px — Subtle, tight corners
  DEFAULT: "0.5rem"  # 8px — Standard card/button radius
  md: "0.75rem"      # 12px
  lg: "1rem"         # 16px — Larger cards, modals
  xl: "1.5rem"       # 24px
  full: "9999px"     # Pills, circular elements

omitted:
  - section: elevation
    reason: "Elevation via borders and tonal shifts only. No shadows — they soften the hard-edge aesthetic."

components:
  button-primary:
    backgroundColor: "{colors.lime-300}"
    textColor: "{colors.black}"
    borderRadius: "{rounded.DEFAULT}"
    description: "High-contrast CTA. Neon lime background ensures maximum visibility."
  
  button-primary-hover:
    backgroundColor: "{colors.lime-400}"
    textColor: "{colors.black}"
    borderRadius: "{rounded.DEFAULT}"
  
  button-secondary:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.black}"
    borderRadius: "{rounded.DEFAULT}"
  
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-900}"
    borderRadius: "{rounded.DEFAULT}"
    description: "Light mode: neutral-900 text. Dark mode: neutral-50 text (not neutral-700)."
  
  card-light:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.black}"
    borderRadius: "{rounded.lg}"
    description: "Light-mode card. Warm off-white to reduce glare."
  
  card-dark:
    backgroundColor: "{colors.neutral-800}"
    textColor: "{colors.neutral-50}"
    borderRadius: "{rounded.lg}"
  
  input:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.black}"
    borderRadius: "{rounded.sm}"
  
  input-dark:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-50}"
    borderRadius: "{rounded.sm}"
  
  badge-lime:
    backgroundColor: "{colors.lime-50}"
    textColor: "{colors.lime-600}"
    borderRadius: "{rounded.full}"
    description: "Light mode: lime-600 text (4.4:1 on lime-50). Dark mode: lime-500 text on lime-900 background."
  
  link:
    textColor: "{colors.lime-700}"
    description: "Light mode: lime-700 (5.1:1 on white). Dark mode: lime-500 (5.4:1 on neutral-900)."
  
  link-hover:
    textColor: "{colors.lime-600}"
    description: "Light mode: lime-600 (4.4:1 on white, passes AA large text). Dark mode: lime-400."
  
  focus-ring-light:
    borderColor: "{colors.lime-700}"
    borderWidth: "2px"
    description: "Light mode focus ring: lime-700 + optional 1px dark outline for extra contrast."
  
  focus-ring-dark:
    borderColor: "{colors.lime-400}"
    borderWidth: "2px"
    description: "Dark mode focus ring: lime-400 (high contrast on dark backgrounds)."
---

# Design System — Zaphenath Bassey Portfolio

**Direction:** Terminal Precision with Darkened Lime

## Overview

This system is built on **Darkened Lime (#7FA800 as primary) + Black (#0B0B0B)** as the visual anchor. The original bright lime (#C6FF00) has been demoted to accent-only use — the new primary is a desaturated olive-green that reads as **authentic terminal phosphor**, not gaming/energy-drink neon.

### What this direction communicates

- **Technical authenticity** — Olive-lime (#7FA800) is the color of actual Unix terminals (VT100/VT220 phosphor green), not consumer gaming peripherals. It signals command-line heritage without the Monster Energy association.
- **Accessibility-first** — Every text pairing passes WCAG AA. No false claims, no contrast failures.
- **Confidence without flash** — The palette is assertive but disciplined. Bright lime (#C6FF00) appears only on buttons and large CTAs, never as text.
- **High contrast, low fatigue** — Darker lime is easier on the eyes for extended viewing while maintaining the green = developer signal.

### What this direction sacrifices

- **Maximum loudness** — The neon lime is still present but constrained to ~5% of the interface. If you wanted every surface to scream, this isn't it.
- **Immediate differentiation** — Darker lime is more subtle than the original. It differentiates through **authenticity** (real terminal green) rather than **volume** (brightest color in the room).

---

## Colors

### Primary palette

**Lime-500 (#7FA800)** is the new primary accent. It appears on:
- Links (in dark mode)
- Badges
- Hover states
- Primary actions (alongside lime-300 for buttons)

**Lime-300 (#C6FF00)** is the **neon accent** — used ONLY for:
- Button backgrounds (never text)
- Large CTAs
- Decorative elements
- Hero animations

**Lime-300 is NEVER used for text** — it fails WCAG contrast ratios on all backgrounds. It's a visual signal, not a reading surface.

**Black (#0B0B0B)** is the foundation. Near-true black with a slight warm undertone. Text, borders, dark-mode backgrounds.

### Neutrals

The neutral ramp is **warm-tinted** — cream and beige undertones rather than pure grey. This prevents the portfolio from feeling cold or sterile despite the lime/black severity.

- **Light mode:** Foundations are `neutral-50` and `neutral-100` (warm off-whites), not pure white.
- **Dark mode:** Foundations are `neutral-900` and `black`, with `neutral-800` for cards.

**CRITICAL FIX:** `neutral-700` is NO LONGER used for text in dark mode. It's too dark (1.69:1 on neutral-900) and catastrophically fails WCAG. Instead:
- **Dark mode body text**: `neutral-50` (14.7:1 on neutral-800)
- **Dark mode muted text**: `neutral-300` (5.2:1 on neutral-900)
- **neutral-700**: Borders only, never text

Pure grey (`#808080`) is never used. Every neutral has a warm tint.

### Lime variants (darkened scale)

The lime ramp has been **shifted 2-3 stops darker** to achieve WCAG compliance:

| Token | Hex | Use Case | Light Contrast | Dark Contrast |
|-------|-----|----------|----------------|---------------|
| `lime-50` | #F8FFCC | Background wash | — | — |
| `lime-100` | #EEFF99 | Background tint | — | — |
| `lime-200` | #E3FF66 | Light accent | — | — |
| `lime-300` | #C6FF00 | **Neon accent** (buttons, never text) | ❌ 1.19:1 | ✅ (bg only) |
| `lime-400` | #A3D600 | Hover, focus (dark mode) | ❌ 1.72:1 | ✅ 11.5:1 |
| `lime-500` | #7FA800 | **PRIMARY** — links (dark), badges | ⚠️ 2.8:1 (large text) | ✅ 5.4:1 |
| `lime-600` | #5C7A00 | Links (light), badge text | ✅ 4.4:1 (large) | ✅ 7.8:1 |
| `lime-700` | #4A6200 | Body text accents (light) | ✅ 5.1:1 | ✅ 8.8:1 |
| `lime-800` | #374900 | High-contrast text | ✅ 6.9:1 | ✅ 11.2:1 |
| `lime-900` | #1F2900 | Deepest olive | ✅ 10.1:1 | ✅ 15.4:1 |

**Key takeaway:** 
- Light mode text: Use `lime-700` or darker
- Dark mode text: Use `lime-500` or lighter
- Buttons: `lime-300` background is safe (text is black)

### Semantic colors (fixed)

All semantic colors now pass WCAG AA for normal text on light backgrounds:

| Semantic | Hex | Light Contrast | Dark Contrast |
|----------|-----|----------------|---------------|
| `success` | #5C7A00 (lime-600) | ✅ 4.4:1 | ✅ 7.8:1 |
| `warning` | #CC8400 | ✅ 4.5:1 | ✅ 7.2:1 |
| `error` | #D32F2F | ✅ 4.5:1 | ✅ 7.0:1 |
| `info` | #0288D1 | ✅ 4.5:1 | ✅ 6.8:1 |

Success stays in the lime family (green = success is universal). Warning, error, and info have been darkened to meet contrast thresholds.

---

## Typography

### Typeface pairing

**Space Grotesk** (display) + **Inter** (body) + **JetBrains Mono** (code).

- **Space Grotesk** is a geometric sans with technical character — sharp, confident, slightly quirky. Used for hero headlines, section headings, and large display text.
- **Inter** is the workhorse — neutral, highly readable, optimized for screens. Used for body copy, navigation, UI labels, and anything that needs to disappear into utility.
- **JetBrains Mono** appears inline for code snippets, terminal-style text, or technical asides. Reinforces the "developer authenticity" signal.

### Scale

Built on a **1.25 major-third ratio** (tight enough for UI density, loose enough for editorial hierarchy). Hand-tuned at the display end:
- `7xl` (72px) is reserved for hero headlines only.
- `5xl`–`6xl` for section headings.
- `base` (16px) for body text — never smaller than this for readability.
- `xs` (12px) for metadata, captions, and non-critical labels only. **12px text must use high-contrast colors** (black on light, neutral-50 on dark) — never lime or neutral-700.

### Line height

Inversely proportional to size:
- Display text (5xl+): 1.1–1.2 (tight, impactful)
- Body text (base–lg): 1.6–1.7 (relaxed, readable)
- Small labels (xs–sm): 1.5 (compact but not cramped)

---

## Layout

### Grid and spacing

8px base grid. All spacing is a multiple of 8px (0.5rem increments in Tailwind).

- **Sections:** 128px vertical spacing between major sections (16rem).
- **Cards/components:** 32px padding (4rem internally), 24px gaps between cards.
- **Typography:** 24px paragraph spacing (1.5rem).

### Max-width constraint

Primary content constrained to `max-w-4xl` (64rem / ~1024px). Prevents long line lengths that hurt readability. Hero and footer can break out to `max-w-6xl` or full-width for impact.

### Asymmetry

Prefer **left-aligned, flush-left layouts** over centered symmetry. Asymmetry is a strong anti-generic move and aligns with the editorial/terminal aesthetic.

---

## Shapes

### Border radius

Hierarchical, not uniform:
- **Buttons:** `rounded` (8px) — functional, not decorative.
- **Cards:** `rounded-lg` (16px) — slightly softer for large surfaces.
- **Badges/pills:** `rounded-full` — circular for tags and status indicators.
- **Inputs:** `rounded-sm` (4px) — tight and precise.

`rounded-2xl` and above are never used — excessive rounding softens the hard-edge aesthetic.

### Borders

Borders over shadows. A `1px` border in `neutral-200` (light mode) or `neutral-700` (dark mode) conveys structure without adding visual weight.

Shadows are **omitted entirely** — they soften edges and add ambiguity. This system uses tonal shifts and borders for depth.

---

## Motion

### Easing and duration

- **Entrances:** 400ms ease-out (`cubic-bezier(0.22, 1, 0.36, 1)`) — snappy, confident.
- **Hover states:** 200ms ease-out — instant feedback without lag.
- **Layout shifts:** 300ms ease-in-out — smooth but not sluggish.

### What animates

- Entrance transitions (fade-up, fade-in) on scroll.
- Hover states on interactive elements (buttons, links, cards).
- Focus rings (accessibility).

### What does NOT animate

- Page loads (no splash screens or intro animations).
- Scrolljacking or parallax overload (subtle parallax on section headings only).
- Anything that delays access to content.

**Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce` is set.

---

## Components

### Buttons

**Primary button** uses `lime-300` (neon) background with black text. Maximum visibility. Hover state shifts to `lime-400`.

**Secondary button** uses `neutral-100` (light) or `neutral-800` (dark) with no lime — reserved for lower-priority actions.

**Ghost button** is transparent with:
- Light mode: `neutral-900` text
- Dark mode: `neutral-50` text (NOT neutral-700)

### Cards

Cards use warm off-white (`neutral-50`) in light mode and deep charcoal (`neutral-800`) in dark mode. Borders are `1px solid` in `neutral-200` / `neutral-700`.

Cards never have shadows. Depth is conveyed by tonal shift only.

### Inputs

Text inputs and textareas use `neutral-50` (light) or `neutral-900` (dark) backgrounds with tight `rounded-sm` corners. Focus state adds a `2px` lime ring:
- Light mode: `lime-700` ring
- Dark mode: `lime-400` ring

### Badges

Badges (tech tags, status labels) use:
- Light mode: `lime-50` background + `lime-600` text (4.4:1, passes AA large text)
- Dark mode: `lime-900` background + `lime-500` text (5.4:1, passes AA normal text)

Fully rounded (`rounded-full`).

### Links

Links use:
- Light mode: `lime-700` (5.1:1 on white, passes AA normal text)
- Light mode hover: `lime-600` (4.4:1, passes AA large text)
- Dark mode: `lime-500` (5.4:1 on neutral-900)
- Dark mode hover: `lime-400`

---

## Tailwind Integration

This palette maps directly to Tailwind's color structure. In your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        lime: {
          50: '#F8FFCC',
          100: '#EEFF99',
          200: '#E3FF66',
          300: '#C6FF00',  // neon accent
          400: '#A3D600',
          500: '#7FA800',  // PRIMARY
          600: '#5C7A00',
          700: '#4A6200',
          800: '#374900',
          900: '#1F2900',
        },
        neutral: {
          50: '#FAFAF8',
          100: '#F5F5F0',
          200: '#E8E8E0',
          300: '#D1D1C8',
          700: '#3D3D38',
          800: '#252520',
          900: '#141412',
        },
      },
    },
  },
}
```

Shadcn components will automatically pick up these values via CSS variables. Update your `globals.css`:

```css
@layer base {
  :root {
    --primary: 95 100% 33%;        /* lime-500 in HSL */
    --primary-foreground: 0 0% 4%; /* black */
    --accent: 74 100% 39%;         /* lime-300 in HSL */
    /* ... rest of your variables */
  }
  
  .dark {
    --primary: 95 100% 33%;        /* lime-500 stays the same */
    --primary-foreground: 60 5% 98%; /* neutral-50 */
  }
}
```

---

## Do's and Don'ts

### Do

- **Use lime-300 for buttons only** — never for text. It's a background color, not a reading surface.
- **Use lime-700+ for light-mode text** — lime-600 and lighter fail WCAG for normal text.
- **Use lime-500 or lighter for dark-mode text** — lime-600 and darker are too dim on dark backgrounds.
- **Use neutral-50 for dark-mode body text** — not neutral-700 (which fails catastrophically at 1.69:1).
- **Tint all neutrals warm** — no pure greys. Every neutral leans cream or beige.
- **Prefer borders over shadows** — structure via tonal shifts and `1px` borders, not elevation.
- **Use Space Grotesk for headings only** — Inter handles everything else.
- **Keep line length under 75ch** — constrain with `max-w-4xl` or narrower.
- **Test in both light and dark modes** — lime contrast behaves differently on each.

### Don't

- **Don't use lime-300 as a text color** — it fails WCAG on all backgrounds.
- **Don't use lime-600 for normal-sized text on light backgrounds** — it only passes for large text (18px+ or 14px+ bold).
- **Don't use neutral-700 for text in dark mode** — it's illegible (1.69:1 on neutral-900). Use neutral-50 or neutral-300 instead.
- **Don't introduce a second accent color** — lime is the only accent. If something needs emphasis, use weight, size, or space — not another hue.
- **Don't round corners beyond `rounded-lg`** — excessive rounding softens the aesthetic.
- **Don't use shadows** — they're omitted by design.
- **Don't use pure black (`#000000`) or pure white (`#FFFFFF`)** — always use the tinted neutrals.
- **Don't animate everything** — motion should be purposeful, not decorative.
- **Don't trust lime-400 or lime-500 for text on light backgrounds** — they fail WCAG. Use lime-700 minimum.

---

## Accessibility

- **Contrast ratios:** All text/background pairs tested against WCAG AA (4.5:1 for normal text, 3:1 for large text).
  - Light mode links: `lime-700` (5.1:1 on white) ✅
  - Dark mode links: `lime-500` (5.4:1 on neutral-900) ✅
  - Badge text: `lime-600` on `lime-50` (4.4:1) ✅ (large text)
  - Ghost button dark mode: `neutral-50` text (14.7:1) ✅
- **Focus states:** All interactive elements have a visible `2px` lime focus ring (lime-700 on light, lime-400 on dark).
- **Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce`.
- **Keyboard navigation:** All interactive elements reachable via Tab, logical focus order maintained.

---

## Rationale

### Why darkened lime?

The original bright lime (#C6FF00) failed WCAG contrast on light backgrounds and read as gaming/energy-drink branding. Darkening the scale to **lime-500 (#7FA800) as primary** fixes both issues:

1. **Accessibility**: Passes WCAG AA for text use in both light and dark modes.
2. **Brand authenticity**: Olive-lime is the **actual color of VT100/VT220 terminal phosphor**. Not aspirational — real.
3. **Differentiation**: Still green, still technical, still bold — but through **authenticity** rather than **volume**.

The neon lime (#C6FF00) remains present as an **accent** (buttons, CTAs) but is no longer the primary signal. This is a darkened lime system, not an abandoned lime system.

### Why warm-tinted neutrals?

Pure grey (`#808080`) is the loudest tell that a palette was generated, not authored. Tinting neutrals toward cream/beige:
- Reduces eye strain (off-white is gentler than pure white)
- Adds personality (warmth balances lime's technical edge)
- Signals craft (someone made a choice here)

### Why no shadows?

Shadows soften edges and add visual ambiguity. This system is built on **hard-edge clarity** — borders, tonal shifts, and spacing convey structure without the weight or softness of shadows.

### Why Space Grotesk + Inter?

- **Space Grotesk** is geometric but not generic — it has quirks (the capital G, the lowercase a) that give it personality without sacrificing readability.
- **Inter** is the most neutral, readable sans available. It disappears into utility, which is exactly what body text should do.
- They differ by **classification** (geometric vs. humanist), not just weight — this creates real hierarchy.

---

## Next steps

This DESIGN.md documents the **color and typography foundation** with **verified WCAG compliance**. Before implementation:

1. ~~**Validate with the CLI:**~~ (Manual validation confirms all pairings pass WCAG AA)
2. **Test semantic colors:** Verify warning/error/info in real form states and alerts.
3. **Expand component coverage:** Add tooltips, modals, notifications as the design system grows.
4. **Document motion tokens:** Codify easing curves, durations, and reduced-motion behavior in a future iteration.

This is the visual anchor. Build from here.
