module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#319E61",
      },
    },
    screens: {
      sm: { max: "639px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      lg: { max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
  },
  plugins: [],
};
