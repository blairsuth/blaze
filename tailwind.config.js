/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6ff",
          100: "#d8ebff",
          200: "#b8dcff",
          300: "#8ac8ff",
          400: "#5cabff",
          500: "#3d8eff",
          600: "#2972f5",
          700: "#1e5ccd",
          800: "#204ca7",
          900: "#1e4184",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#f4f6fd",
          100: "#e9edfb",
          200: "#d2dbf7",
          300: "#b0beee",
          400: "#8999e2",
          500: "#6c77d6",
          600: "#5b5fc8",
          700: "#4d4eb3",
          800: "#424292",
          900: "#383a75",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          50: "#fdf2fb",
          100: "#fae5f6",
          200: "#f6cbee",
          300: "#f0a5e0",
          400: "#e876cb",
          500: "#db50b2",
          600: "#ce3197",
          700: "#b32479",
          800: "#931f63",
          900: "#781d50",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      spacing: {
        4.5: "1.125rem",
      },
      transitionTimingFunction: {
        "material-standard": "cubic-bezier(0.2, 0, 0, 1)",
        "material-decelerate": "cubic-bezier(0, 0, 0, 1)",
        "material-accelerate": "cubic-bezier(0.3, 0, 1, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
module.exports = {
  theme: {
    // your theme config
  },
  // ...other config
  plugins: [
    require("tailwindcss-animate"),
    // ...other plugins
  ],
};
