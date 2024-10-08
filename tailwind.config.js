/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["poppinsRegular", "sans-serif"],
        poppinsSemiBold: ["poppinsSemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
