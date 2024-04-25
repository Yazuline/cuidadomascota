/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#181c39",
          2: "#e5ebfb",
          3: "#273176",
          4: "#f7f2f8",
        }
      },
      keyframes: {
        translateText: {
          '0%': { transform: 'translate(-56px)', opacity: '0' },
          '60%': { transform: 'translate(15px)', opacity: '.5' },
          '100%': { transform: 'translate(0)', opacity: '1' },
        }
      },
      animation: {
        translateText: 'translateText .5s ease-in-out',
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".h1": {
          "@apply text-5xl font-bold":
            {},
        },
        ".h2": {
          "@apply text-4xl font-bold":
            {},
        },
        ".h3": {
          "@apply text-3xl font-semibold": {},
        },
        ".h4": {
          "@apply text-3xl font-medium": {},
        },
        ".h5": {
          "@apply text-2xl font-medium": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
      })
    }),
  ],
}

