import Typography from "typography"
// import grandViewTheme from "typography-theme-grand-view"

const typography = new Typography({
  baseFontSize: "16pt",
  scaleRatio: 5,
  // blockMarginBottom: "10em",
  baseLineHeight: 2,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],

  //   baseLineHeight: 1.5,
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
