module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1740px",
    },
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
