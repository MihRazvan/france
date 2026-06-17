
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        // Original TourCraft palette — kept so the template's visual language is preserved.
        safari: {
          green: "#2A624C",
          brown: "#8B4513",
          gold: "#DAA520",
          beige: "#F5F5DC",
          lightgreen: "#3D8D73", // lighter shade of #2A624C
          darkgreen: "#1A3E31", // darker shade of #2A624C
        },
        // Readable aliases for the trip hub. Same exact hex values as TourCraft —
        // we reuse the template's colors, we do not invent a new palette.
        brand: {
          green: "#2A624C", // primary brand / headings / nav
          greenLight: "#3D8D73",
          greenDark: "#1A3E31",
          gold: "#DAA520", // accent / highlights / active states
          brown: "#8B4513", // link hover
          beige: "#F5F5DC", // soft section background
          sand: "#c9cebd", // pill / label background
          olive: "#4A5C23", // secondary button
          oliveLight: "#85BC03", // secondary button hover
        },
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
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 1s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
