module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        sticky: "1 0 auto",
      },
      colors: {
        primary: "#143cff",
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
    fontFamily: {
      heading: ["Bebas Neue", "cursive"],
      body: ["Open Sans", "sans-seif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
