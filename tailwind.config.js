const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        "200auto": "200% auto"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
