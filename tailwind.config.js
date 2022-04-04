const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.violet
      }
    },
    fontFamily: {
      'ello-bold': ['Satoshi-Bold'],
      'ello-medium': ['Satoshi-Medium'],
      'ello-regular': ['Satoshi-Regular']
    }
  }
}
