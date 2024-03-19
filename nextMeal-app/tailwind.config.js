/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    colors: {
      pure_white: '#ffffff',
      default: '#000000',
      bg_variant1: '#f8382f',
      headings: '#433f4d',
      graphic_light: '#433f4d/90',
      graphic_dark: '#ffffff/50'
    },
    extend: {},
  },
  plugins: [],
}

