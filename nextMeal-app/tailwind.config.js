/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    colors: {
      pure_white: '#ffffff',
      slate_white: '#F5F5F5',
      default: '#000000',
      bg_variant1: '#f8382f',
      bg_variant2: '#fff5ec',
      headings: '#433f4d',
      graphic_light: '#433f4d/90',
      graphic_dark: '#ffffff/50',
      light_dark: '#B3ADA7'
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'graphicDots': "url('assets/img/graphic_dots.svg')",
        'graphicRectangles': "url('/assets/img/graphic-rectangles.webp')",
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.container-snap::-webkit-scrollbar': {
          display: 'none',
        },
        '.container-snap': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };

      addUtilities(newUtilities);
    })
  ],
}

