module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#00EFBC",
        gray: "#C6C6C6",
        subMain: "#F3F9FF",
        border: "#F1F8FF",
      },
      screens: {
        xs: "475px",
      },
      fontFamily: {
        main: ["Roboto Slab", "serif"],
        subMain: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
