/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00D9FF',
          yellow: '#FFFF00',
          purple: '#B900FF',
          orange: '#FF6B00',
        }
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00D9FF, 0 0 20px #00D9FF, 0 0 40px #00D9FF',
        'neon-yellow': '0 0 5px #FFFF00, 0 0 20px #FFFF00, 0 0 40px #FFFF00',
        'neon-purple': '0 0 5px #B900FF, 0 0 20px #B900FF, 0 0 40px #B900FF',
        'neon-orange': '0 0 5px #FF6B00, 0 0 20px #FF6B00, 0 0 40px #FF6B00',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
