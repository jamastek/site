module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem"
    },
    extend: {
      colors: {
        secondary: {
          900: "#44d2ff"
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
