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