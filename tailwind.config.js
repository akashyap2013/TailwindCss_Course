module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      sm: '400px',
      md: "700px",
      lg: '900px',
      xl: '1400px'
    },
    colors: {
      indigo : {
        light: '#b3bcf5',
        DEFAULT: '#5c6ac4',
        dark: '#202e78',
      }
    },
    spacing : {
      1 : '0.35rem',
      2: '0.75rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
