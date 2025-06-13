import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        moneyGreen: "#00A86A",
        bananaYellow: "#F6C500",
        hypePurple: "#763B7D",
        tan: "#F4C38C",
        gold: "#F2B90C",
        darkBrown: "#5C2E0C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(to bottom, #00c77b, #00A86A)",
        "yellow-gradient": "linear-gradient(to bottom, #ffda44, #F6C500)",
        "purple-gradient": "linear-gradient(to bottom, #8a4593, #763B7D)",
      },
      boxShadow: {
        "glow-green": "0 0 15px rgba(0, 168, 106, 0.5)",
        "glow-yellow": "0 0 15px rgba(246, 197, 0, 0.5)",
        "glow-purple": "0 0 15px rgba(118, 59, 125, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
