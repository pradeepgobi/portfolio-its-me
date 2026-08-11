/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1e3a8a',
          deepBlue: '#1a2a6c',
          gold: '#f5a623',
          brightGold: '#f7b733',
        },
        text: {
          main: '#111827',
          secondary: '#52627A',
        },
        bg: {
          main: '#f0f2fa',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.65)',
          strong: 'rgba(255, 255, 255, 0.78)',
          border: 'rgba(255, 255, 255, 0.75)',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #1a2a6c 0%, #1e3a8a 40%, #f5a623 100%)',
        'glass-panel': 'linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.48))',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(26, 42, 108, 0.10)',
        'nav': '0 15px 50px rgba(26, 42, 108, 0.08)',
      },
    },
  },
  plugins: [],
}
