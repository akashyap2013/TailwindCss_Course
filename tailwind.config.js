module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens : {
        '3xl' : '1600px'
      },
      colors: {
        'regal-blue' : '#243c5a'
      },
      spacing :{
        '13' : '3.25rem',
        '15' : '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
