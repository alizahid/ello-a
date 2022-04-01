const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.orange
      }
    },
    fontFamily: {
      'ello-bold': ['Satoshi-Bold'],
      'ello-medium': ['Satoshi-Medium'],
      'ello-regular': ['Satoshi-Regular']
    }
  }
}
