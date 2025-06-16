import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "retro-dark": "#0a0a0a",
        "retro-darker": "#050505",
        "retro-green": "#00ff41",
        "retro-cyan": "#00ffff",
        "retro-magenta": "#ff00ff",
        "retro-red": "#ff0040",
        "retro-yellow": "#ffff00",
        "retro-blue": "#0080ff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        pixel: ["Courier New", "Monaco", "Menlo", "Consolas", "monospace"],
        mono: ["Courier New", "Monaco", "Menlo", "Consolas", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "pixel-blink": "pixelBlink 1s infinite",
        "pixel-glow": "pixelGlow 2s ease-in-out infinite alternate",
        "pixel-fade-in": "pixelFadeIn 1s ease-out forwards",
        "pixel-slide-up": "pixelSlideUp 0.8s ease-out forwards",
        "pixel-slide-down": "pixelSlideDown 0.3s ease-out forwards",
        "pixel-typewriter": "pixelTypewriter 3s steps(40) forwards",
        "pixel-scan": "pixelScan 2s infinite",
        "pixel-loading-move": "pixelLoadingMove 1s linear infinite",
        "pixel-wave": "pixelWave 2s ease-in-out infinite",
        "pixel-category-appear": "pixelCategoryAppear 0.6s ease-out forwards",
      },
      keyframes: {
        pixelBlink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        pixelGlow: {
          "0%": {
            boxShadow: "0 0 5px #00ff41, 0 0 10px #00ff41",
          },
          "100%": {
            boxShadow: "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41",
          },
        },
        pixelFadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pixelSlideUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pixelSlideDown: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pixelTypewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        pixelScan: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        pixelLoadingMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "20px 20px" },
        },
        pixelWave: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pixelCategoryAppear: {
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
