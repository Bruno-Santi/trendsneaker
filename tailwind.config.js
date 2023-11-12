/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../src/assets/backgroundlanding1.jpg')",
      }),
      fontFamily: {
        monaSans: ["Mona-Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#D2D9E5",
        secondary: "#FFB700",
      },
      textColor: {
        main: "#D2D9E5",
        secondary: "#FFB700",
      },
    },
  },
  plugins: [],
};
