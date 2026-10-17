import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#09090b",
          elevated: "#0e0f14",
        },
        surface: {
          DEFAULT: "#12141c",
          elevated: "#181b24",
          hover: "#1e2230",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          strong: "rgba(255, 255, 255, 0.22)",
        },
        primary: {
          DEFAULT: "#0FA3FB",
          hover: "#38b6ff",
          glow: "rgba(15, 163, 251, 0.35)",
        },
        foreground: "#f8fafc",
        "muted-foreground": "#a1a1aa",
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "var(--font-barlow)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
