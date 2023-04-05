/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "705px"
    }
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#C1DBE3",
          "secondary": "#3FA34D",
          "accent": "#FF8552",
          "neutral": "#373737",
          "custom" : "#150578"
        }
      }
    ]
  },
  plugins: [
    require("daisyui")
  ],
}

