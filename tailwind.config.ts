import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        term: {
          green: "#00ff41",
          green2: "#39d353",
          cyan: "#79c0ff",
          yellow: "#e3b341",
          red: "#f85149",
          purple: "#bc8cff",
          white: "#e6edf3",
          muted: "#606b78",
          dim: "#3d444d",
          bg:     "var(--term-bg,     #0c0e0f)",
          navbg:  "var(--term-navbg,  #111416)",
          border: "var(--term-border, #21262d)",
          "pwsh-text": "#a8d8a8",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
