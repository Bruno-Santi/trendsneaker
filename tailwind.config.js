/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../src/assets/backgroundlanding1.jpg')",
      }),
      fontFamily: {
        monaSans: ["Mona-Sans", "san-serif"],
      },
      colors: {
        main: "#D2D9E5",
        secondary: "#FFB700",
      },
    },
  },
  plugins: [],
};
