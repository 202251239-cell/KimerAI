import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        elevated: "#11111b",
        card: "#1a1a2e",
        "card-hover": "#1e1e32",
        surface: "#1e293b",
        border: "#2a2a3e",
        "border-bright": "#3a3a5e",
        cyan: "#00e5ff",
        gold: "#ffd700",
        purple: "#7c3aed",
        pink: "#ec4899",
        zincmuted: "#71717a",
        zincsec: "#a1a1aa",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: { xl: "24px", lg: "16px", md: "10px", sm: "6px" },
      maxWidth: { content: "1280px" },
    },
  },
  plugins: [],
};
export default config;
