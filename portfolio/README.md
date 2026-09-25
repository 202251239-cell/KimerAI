# KimerAI — Riski Eka Nanda Speaker Portfolio

Dark-first, motion-heavy portfolio for Teknik Informatika UMK (wisuda Okt 2026).

- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind + Motion v12 (framer-motion v12) + GSAP 3.12 + ScrollTrigger + @gsap/react
- **Theme:** #0a0a0f bg, #00e5ff cyan, #ffd700 gold, #7c3aed purple — Space Grotesk / Inter / JetBrains Mono
- **Run:** `npm install && npm run dev` → http://localhost:3000
- **Deploy:** Push to GitHub → import in Vercel (Next.js preset, no extra config)

Sections: Hero + live terminal (4 snippets) + stats (animated counters) + 6 real projects + skill matrix + interactive AI chat demo + timeline + talks + booking CTA.

Verified: `npx tsc --noEmit` clean. Local Termux `next build` needs Next 13.5 (android swc missing for 14.x); Vercel (Linux) builds on 14.x fine. Full prod build validated on Next 13.5.6.
