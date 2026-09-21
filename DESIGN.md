---
version: alpha
name: KimerAI
description: Bright, modern AI agent brand identity — clean, cheerful, and professional with gold and cyan accents.
colors:
  primary: "#1a1a2e"
  secondary: "#16213e"
  tertiary: "#00bfa6"
  neutral: "#ffffff"
  on-primary: "#ffffff"
  on-tertiary: "#1a1a2e"
  accent-gold: "#ffd700"
  accent-cyan: "#00e5ff"
  accent-teal: "#00bfa6"
  bg-light: "#f8f9fa"
  bg-soft: "#f0f4f8"
  text-primary: "#1a1a2e"
  text-secondary: "#4a4a5e"
  text-muted: "#8a8a9e"
  border-light: "#e8e8ee"
  border-medium: "#d0d0d8"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#ef4444"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 64px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.on-tertiary}"
  button-secondary:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  logo-mark:
    backgroundColor: "{colors.accent-gold}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 16px
---

## Overview

KimerAI is a bright, modern AI agent brand — clean, cheerful, and professional. The identity balances warmth (gold accents) with technological precision (cyan/teal), creating a visual language that feels approachable yet capable. The color palette is deliberately optimistic — gold for intelligence, cyan for innovation, and deep navy for trust.

## Colors

- **Primary (#1a1a2e):** Deep navy for text, headlines, and dark surfaces — serious but not cold.
- **Tertiary (#00bfa6):** Teal accent for interactive elements, CTAs, and brand moments — the core brand color.
- **Accent Gold (#ffd700):** Warm gold for highlights, logo mark, and premium feel.
- **Accent Cyan (#00e5ff):** Bright cyan for hover states, innovation signals, and tech-forward moments.
- **Neutral (#ffffff):** Clean white for cards, elevated surfaces, and maximum contrast.
- **Background Light (#f8f9fa):** Soft gray for page backgrounds — warm enough to feel human.
- **Text Primary (#1a1a2e):** High-contrast text on light backgrounds.
- **Text Secondary (#4a4a5e):** Supporting text, descriptions, metadata.

## Typography

Inter throughout — clean, geometric, modern. Headlines use weight 700 for authority, body uses 400 for readability. Tight letter-spacing on display sizes (-0.02em) creates a premium feel.

## Layout

8px baseline grid. Generous spacing (24px-64px) between sections. Cards use 16px border-radius for soft, approachable feel. No heavy shadows — depth comes from subtle background elevation and border treatment.

## Components

- **Button Primary:** Teal background with white text, 8px radius, 12px 24px padding.
- **Button Secondary:** Soft gray background with dark text, 8px radius.
- **Card:** White surface, 16px radius, 24px internal padding, subtle border.
- **Logo Mark:** Gold circular mark with abstract 'K' — clean, geometric, scalable.

## Do's and Don'ts

- **Do** use teal (#00bfa6) for primary CTAs and interactive elements.
- **Do** use gold (#ffd700) sparingly — for logo mark and premium highlights only.
- **Do** keep backgrounds warm-tinted (#f8f9fa, not pure white).
- **Don't** introduce colors outside the palette — extend first.
- **Don't** use sharp corners (< 6px) — softness is core to the identity.
- **Don't** use heavy drop shadows — depth comes from background elevation.