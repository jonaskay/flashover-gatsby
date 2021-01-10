module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./gatsby-ssr.js"],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      mono: ["Cutive Mono", "monospace"],
      sans: ["Inter", "sans-serif"],
      serif: ["Crimson Pro", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
