/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scale-up-bl': {
          '0%': { transform: 'scale(1)', transformOrigin: '0% 100%' },
          '100%': { transform: 'scale(1.1)', transformOrigin: '0% 100%' },
        },
        'flip-vertical-right': {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'text-fill': {
          '0%': { backgroundSize: '200% 100%', backgroundPosition: '200% 0' },
          '100%': { backgroundSize: '200% 100%', backgroundPosition: '0 0' },
        },
      },
      animation: {
        'scale-up-bl': 'scale-up-bl 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'flip-vertical-right': 'flip-vertical-right 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        'text-fill': 'text-fill 2s linear forwards',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}
