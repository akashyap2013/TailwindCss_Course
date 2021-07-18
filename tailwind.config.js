
const plugin  = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    customPlugin : ['responsive', 'hover'],
    extend: {
    },
  },
  prefix : 'dt-',
  plugins: [
    plugin(function ( { addComponents, variants }) {
      const button = {  
        '.btn' : {
          padding : '.5rem 1rem',
          fontWeight : '600'
        },
        '.btn-blue' : {
          color : '#fff',
          '&:hover' : {
            color : "#000"
          }
        }
      }
      addComponents(button, variants('customPlugin'))
    })
  ],
}
