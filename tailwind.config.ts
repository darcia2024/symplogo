import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        symtext: ['Symtext', 'sans-serif'], 
        modernist: ['Sk-Modernist', 'sans-serif'],
      },
      colors: {
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
        brand: {
          burgundy: "hsl(var(--brand-burgundy))",
          "burgundy-light": "hsl(var(--brand-burgundy-light))",
          red: "hsl(var(--brand-red))",
          gold: "hsl(var(--brand-gold))",
          "gold-light": "hsl(var(--brand-gold-light))",
          cream: "hsl(var(--brand-cream))",
          sand: "hsl(var(--brand-sand))",
          black: "hsl(var(--brand-black))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "scroll-dot": {
          '0%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(16px)' },
        },
        "scroll-line-1": {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'scaleY(1.5)' },
        },
        "scroll-line-2": {
          '0%, 100%': { opacity: '0.2', transform: 'scaleY(1)' },
          '50%': { opacity: '0.4', transform: 'scaleY(1.3)' },
        },
        "scroll-line-3": {
          '0%, 100%': { opacity: '0.1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.2', transform: 'scaleY(1.1)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'float-slower': 'float 8s ease-in-out infinite',
        'scroll-dot': 'scroll-dot 1.5s ease-in-out infinite',
        'scroll-line-1': 'scroll-line-1 1.5s ease-in-out infinite',
        'scroll-line-2': 'scroll-line-2 1.5s ease-in-out 0.2s infinite',
        'scroll-line-3': 'scroll-line-3 1.5s ease-in-out 0.4s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
