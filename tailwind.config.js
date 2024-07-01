/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        sidebarButtonColor:'#737373',
        sidebarBorder:'rgba(255,255,255,0.2)'
      }
    },
  },
  plugins: [],
}

