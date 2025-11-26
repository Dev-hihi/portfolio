/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bcons: {
          gold: '#FBBF24', // Vàng sáng logo
          dark: '#111827', // Nền tối
          red: '#EF4444',  // Đỏ nhấn
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}