/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        transitionDelay: {
          '100': '100ms',
          '300': '300ms',
          '500': '500ms',
          '700': '700ms',
          '900': '900ms',
        }
      }
    },
    plugins: [],
  }