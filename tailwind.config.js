/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderBlue: "#646cff",
        pearl: "#fbfcf8",
        pictonBlue: "#4EA5D9",
        emerald: "#46D68E",
        jade: "#36A970",
        lightRed: "#E74040",
      },
    },
  },
  plugins: [],
};
