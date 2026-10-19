import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        obsidian: {
          950: "#050609",
          900: "#090B10",
          850: "#0E1118",
          800: "#131722",
          700: "#1C2232",
        },
        accent: {
          cyan: "#38BDF8",
          blue: "#3B82F6",
          violet: "#8B5CF6",
          indigo: "#6366F1",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.14), rgba(139, 92, 246, 0.06) 45%, transparent 75%)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
