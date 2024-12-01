import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crescendoPurple: '#6058CC'
      },
      keyframes: {
        pulsate: {
          '0%, 100%': { transform: 'scale(0.85)', transformOrigin: 'center' }, // Keep scaling centered
          '50%': { transform: 'scale(0.95)', transformOrigin: 'center' },
        },
        pulsateDelayed: {
          '0%, 100%': { transform: 'scale(0.95)', transformOrigin: 'center' }, // Keep scaling centered
          '50%': { transform: 'scale(0.85)', transformOrigin: 'center' },
        },
        pulsateMuted: {
          '0%, 100%': { transform: 'scale(1.025)', transformOrigin: 'center' }, // Keep scaling centered
          '50%': { transform: 'scale(1)', transformOrigin: 'center' },
        }
      },
      animation: {
        pulsate: 'pulsate 0.75s ease-in-out infinite', // Animation name, duration, and looping
        pulsateDelayed: 'pulsateDelayed 0.75s ease-in-out infinite',
        pulsateMuted: 'pulsateMuted 0.75s ease-in-out infinite'
      },
    },
  }
} satisfies Config;
