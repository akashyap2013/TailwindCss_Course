
const plugin  = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    plugin(function ( { addBase, theme }) {
      const heading = {
        'h1' : { fontSize : theme('spacing.6')},
        'h2' : { fontSize : theme('fontSize.xl') },
        'h3' : { fontSize : theme('fontSize.lg') },
      }

      addBase(heading)
    })
  ],
}
