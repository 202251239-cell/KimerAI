---
version: alpha
name: KimerAI Speaker
description: Interactive speaker portfolio — dark-first, motion-heavy, information-dense. Built for coding & AI class introductions. Bold, kinetic, and deeply technical.
colors:
  bg: "#0a0a0f"
  bg-elevated: "#11111b"
  bg-card: "#1a1a2e"
  bg-card-hover: "#1e1e32"
  surface: "#1a1a2e"
  surface-soft: "#1e293b"
  border: "#2a2a3e"
  border-bright: "#3a3a5e"
  primary: "#0a0a0f"
  secondary: "#1a1a2e"
  tertiary: "#00e5ff"
  accent-gold: "#ffd700"
  accent-cyan: "#00e5ff"
  accent-purple: "#7c3aed"
  accent-green: "#10b981"
  accent-pink: "#ec4899"
  neutral: "#ffffff"
  text-primary: "#ffffff"
  text-secondary: "#a1a1aa"
  text-muted: "#71717a"
  text-on-dark: "#ffffff"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#ef4444"
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  h1:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  h2:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.25
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    lineHeight: 1.6
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    lineHeight: 1.6
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.7rem
    fontWeight: 600
    letterSpacing: "0.12em"
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    lineHeight: 1.5
motion:
  ease-default: "cubic-bezier(0.25, 0.1, 0.25, 1)"
  ease-spring: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-out-expo: "cubic-bezier(0.16, 1, 0.3, 1)"
  duration-fast: 150ms
  duration-normal: 300ms
  duration-slow: 500ms
  duration-hero: 800ms
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.accent-gold}"
    textColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: 28px
  card-hover:
    backgroundColor: "{colors.bg-card-hover}"
    textColor: "{colors.text-primary}"
  badge:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.accent-cyan}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  terminal:
    backgroundColor: "#0f0f14"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 20px
---

## Overview

KimerAI Speaker is dark-first, kinetic, and information-dense. Every pixel earns attention through motion, not decoration. Built for a Teknik Informatika speaker who teaches coding & AI — the portfolio must prove skill through interactive evidence, not claim it with generic copy.

**Personality:** Bold engineer meets AI researcher. Terminal-native but polished. Data-dense without clutter. Animations clarify, never delay.

## Colors

- **BG (#0a0a0f):** Near-black canvas — premium, focused, lets content glow.
- **BG Card (#1a1a2e):** Navy cards with subtle lift on hover (#1e1e32).
- **Accent Cyan (#00e5ff):** Primary interaction — CTAs, links, terminal cursor, live indicators.
- **Accent Gold (#ffd700):** Premium highlight — speaker badge, stats, workshop highlights. Used sparingly.
- **Accent Purple (#7c3aed):** Secondary accent — gradients, AI section, depth.
- **Text:** White primary, zinc-400 secondary, zinc-500 muted. High contrast on dark.
- **Borders:** #2a2a3e default, #3a3a5e on hover — subtle elevation without shadows.

## Typography

- **Space Grotesk** for display/headlines — geometric, slightly condensed, speaker-grade authority. Tight tracking (-0.02 to -0.04em).
- **Inter** for body — neutral, readable at information density.
- **JetBrains Mono** for code, labels, stats, terminal — technical credibility.
- Hierarchy via scale + weight + tracking, not color. Headlines use tight leading (0.95-1.05).

## Layout

- **Density:** Information-rich sections with 120px between major sections, 48px within.
- **Grid:** 12-column, max 1280px, generous gutters. Cards use 24px radius.
- **Rhythm:** Alternate dense (project grid, skill matrix) with breathing (hero, CTA). Never uniform card grids.
- **Depth:** Subtle border brightness on hover + slight y-lift (4px), not heavy shadows.

## Motion

Motion is core identity, not decoration:

- **Entrance:** Staggered reveals (80ms delay per item), y:24 → 0, opacity 0→1, spring easing.
- **Scroll:** Parallax grid, progress-tied timeline, skill bars fill on viewport entry.
- **Interaction:** Card tilt (3D), glow follow cursor, terminal typing (real code, not lorem).
- **Micro:** Button magnetic hover, badge pulse, counter tick, cursor blink.
- **Respect:** `prefers-reduced-motion` disables parallax + reduces stagger to 0.

## Elevation & Depth

No heavy shadows. Depth via:
1. Background layering (bg → elevated → card → hover)
2. Border brightness shift
3. Subtle glow (cyan 12% on focused cards)
4. Backdrop blur on sticky nav

## Shapes

- Cards: 24px radius (xl) — soft, premium
- Buttons: full pill — speaker CTA confidence
- Badges: pill with mono label
- Terminal: 16px radius + window chrome dots
- Images: 16px, no sharp corners anywhere

## Components

- **Terminal:** Window chrome (red/yellow/green dots) + JetBrains Mono + cyan cursor blink + syntax-highlighted code typing animation. Shows real API calls to FreeLLMAPI/9Router.
- **Project Card:** Hover = lift + border brighten + glow. Click expands detail view. Tags animate in. Stats counter on entry.
- **Skill Matrix:** Animated bars + interactive filter. Bars fill via spring when scrolled into view.
- **Timeline:** Vertical line with animated dot progression. Items reveal with left-slide.
- **Stats:** Counter animation (0 → real number) on viewport entry, mono font, gold accent.
- **CTA:** Cyan pill button → gold on hover, magnetic follow, slight scale.

## Do's and Don'ts

- **Do** animate every section differently — hero typewriter, projects stagger, skills bar-fill, timeline slide.
- **Do** show real project data (200+ models, 198 models, 118+ skills) with proof, not placeholders.
- **Do** keep dark mode as default — this is a developer/engineering identity.
- **Do** use gold sparingly for premium moments (speaker badge, key stats).
- **Don't** use centered hero + 3 equal cards — commit to asymmetric, editorial composition.
- **Don't** add generic SaaS icon grids or fake testimonials.
- **Don't** introduce colors outside palette — extend first.
- **Don't** use heavy glassmorphism or rainbow gradients — one accent at a time.
