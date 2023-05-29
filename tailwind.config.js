/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "430": "27rem",
        "800": "50rem",
      },
      colors: {
        "red-logo": "#50913"
      },
    },
  },
  plugins: [require("daisyui")],
}

