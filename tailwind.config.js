/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        script:  ['Dancing Script', 'cursive'],
      },
      colors: {
        // Palette from user reference: #3368A0, #66A3BF, #C8DFDB, #F2EFE7
        brand: {
          blue:       '#3368A0',
          deepBlue:   '#254F7A',
          gold:       '#66A3BF',
          brightGold: '#3368A0',
        },
        cyber: {
          bg:        '#66A3BF',
          bgLight:   '#C8DFDB',
          navy:      '#3368A0',
          navyDark:  '#254F7A',
          cream:     '#F2EFE7',
        },
        text: {
          main:      '#254F7A',
          secondary: '#3368A0',
          light:     '#FFFFFF',
        },
        bg: {
          main: '#66A3BF',
        },
        glass: {
          white:  'rgba(255, 255, 255, 0.70)',
          strong: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(255, 255, 255, 0.80)',
        },
        accent: '#3368A0',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #254F7A 0%, #3368A0 50%, #66A3BF 100%)',
        'glass-panel':    'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(242,239,231,0.65))',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(37, 79, 122, 0.12)',
        'nav':     '0 15px 50px rgba(37, 79, 122, 0.10)',
        'card':    '0 10px 36px rgba(51, 104, 160, 0.16)',
        'btn':     '0 6px 20px rgba(51, 104, 160, 0.35)',
        'float':   '0 12px 40px rgba(51, 104, 160, 0.22)',
      },
    },
  },
  plugins: [],
}
