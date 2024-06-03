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
      fontSize: {
        xs: '0.5rem',
        sm: '0.65rem',
        ssm: '0.58rem',
        base: '0.85rem',
        lg: '1rem',
        xl: '1.4rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      backgroundImage: {
        'graphicDots': "url('assets/img/bg/graphic_dots.svg')",
        'graphicRectangles': "url('/assets/img/bg/graphic-rectangles.webp')",
        'soda': "url('assets/img/bg/soda.webp')",
        'sodaArt': "url('assets/img/bg/soda-art.webp')",
        'drink': "url('assets/img/bg/drink.webp')",
        'juiceArt': "url('assets/img/bg/juice-art.webp')",
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

