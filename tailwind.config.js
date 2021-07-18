
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
    plugin(function ( { addUtilities }) {
      const newUtilities = {
        '.scale-1' : {
          transform : 'scale(1)'
        },
        '.rotate-1' : {
          transform : 'rotate(1)'
        }
      }
        addUtilities(newUtilities, {
          variants : ['responsive', 'hover']
        })
    })
  ],
}
