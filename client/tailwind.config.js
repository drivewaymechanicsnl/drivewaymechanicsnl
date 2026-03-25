/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mechanicBlack: '#12100F',
        mechanicOrange: '#F26A21',
        mechanicCopper: '#7C3F1D',
        mechanicBronze: '#B66A32',
        mechanicCanvas: '#F3ECE2',
        mechanicPanel: '#FBF7F2',
        mechanicSteel: '#D8D1C7',
        mechanicWhite: '#FFFFFF',
      },
      boxShadow: {
        card: '0 12px 28px rgba(18, 16, 15, 0.12)',
        glow: '0 18px 38px rgba(242, 106, 33, 0.24)',
      },
    },
  },
  plugins: [],
}

