module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    borderRadius: {
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '30px',
     'full': '9999px',
    },
    linearGradientColors: theme => theme('colors'),
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}