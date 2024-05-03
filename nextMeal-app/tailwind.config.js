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
      bg_variant2: '#fafafa',
      headings: '#433f4d',
      graphic_light: '#433f4d',
      faint_default:'#433F4D',
      blue: '#0000ff',
      gray: '#e5e7eb',
      graphic_dark: '#ffffff',
      light_dark: '#B3ADA7'
    },
    extend: {
      caretColor: {
        transparent: 'transparent',
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
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

