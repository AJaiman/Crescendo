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
        },
        rotateLeftBarely: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'center' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-13deg)', transformOrigin: 'center' }
        },
        rotateLeft: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'center' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-26deg)', transformOrigin: 'center' }
        },
        rotateRightBarely: {
          '0%': { transform: 'translate(50%, -50%) rotate(0deg)', transformOrigin: 'center' },
          '100%': { transform: 'translate(50%, -50%) rotate(13deg)', transformOrigin: 'center' }
        },
        rotateRight: {
          '0%': { transform: 'translate(50%, -50%) rotate(0deg)', transformOrigin: 'center' },
          '100%': { transform: 'translate(50%, -50%) rotate(26deg)', transformOrigin: 'center' }
        },
        popInLeft: {
          '0%': { transform: 'translate(0%, -50%)' },
          '100%': { transform: 'translate(-50%, -50%)' }
        },
        popInRight: {
          '0%': { transform: 'translate(0%, -50%)' },
          '100%': { transform: 'translate(50%, -50%)' }
        },
      },
      animation: {
        pulsate: 'pulsate 0.75s ease-in-out infinite', // Animation name, duration, and looping
        pulsateDelayed: 'pulsateDelayed 0.75s ease-in-out infinite',
        pulsateMuted: 'pulsateMuted 0.75s ease-in-out infinite',
        rotateLeftBarely: 'rotateLeftBarely 0.25s ease-in-out 0.25s forwards',
        rotateLeft: 'rotateLeft 0.25s ease-in-out 0.25s forwards',
        rotateRightBarely: 'rotateRightBarely 0.25s ease-in-out 0.25s forwards',
        rotateRight: 'rotateRight 0.25s ease-in-out 0.25s forwards',
        popInLeft: 'popInLeft 0.25s ease-in-out',
        popInRight: 'popInRight 0.25s ease-in-out'
      },
    },
  }
} satisfies Config;
