/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        ytpg: {
          "primary": "#00843a",
          "secondary": "#C3F73A",
          "accent": "#52D1DC",
          "neutral": "#1C1018",
          "base-100": "#f1f1f1",
          "info": "#094D92",
          "success": "#29A882",
          "warning": "#F3CE68",
          "error": "#F05167",
        }
      } 
    ],
    darkTheme: "light"
  },
}