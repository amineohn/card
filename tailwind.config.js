const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.yellow,
        amber: colors.amber,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        'light-blue': colors.lightBlue,
        blue: colors.blue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        cyan: colors.cyan,
        orange: colors.orange,
        'warm-gray': colors.warmGray,
        'true-gray': colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray
      }
    },
    borderRadius: {
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '30px',
      'full': '9999px',
    },
    backgroundImage: {
      'gradient-to-t':	'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr':	'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r':	'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br':	'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b':	'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl':	'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l':	'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl':	'linear-gradient(to top left, var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
      'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
      'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
      'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
      'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
      'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
      'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
      'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
    },
  },
  variants: { 
    extend: {}, 
  },
  plugins: [],
}