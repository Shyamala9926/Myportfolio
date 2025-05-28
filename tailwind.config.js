/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6FF',
          100: '#CCE3FF',
          200: '#99C7FF',
          300: '#66AAFF',
          400: '#338EFF',
          500: '#0071FF',
          600: '#005ACC',
          700: '#004499',
          800: '#002D66',
          900: '#001733',
        },
        secondary: {
          50: '#F0F7FF',
          100: '#E1EFFE',
          200: '#C3DFFD',
          300: '#A4CFFB',
          400: '#86BFF9',
          500: '#67AFF7',
          600: '#4886C6',
          700: '#2A5D94',
          800: '#0C3363',
          900: '#050A30',
        },
        accent: {
          50: '#EDFAFF',
          100: '#DBF5FE',
          200: '#B7EBFC',
          300: '#93E1FB',
          400: '#6FD7F9',
          500: '#4BCDF8',
          600: '#00F5FF',
          700: '#007880',
          800: '#005054',
          900: '#00282A',
        },
        neon: {
          purple: '#5E17EB',
          pink: '#FF00F5',
          cyan: '#00F5FF',
          green: '#00FF66',
        },
      },
      fontFamily: {
        sans: ['"Urbanist"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 5px #5E17EB, 0 0 10px #5E17EB',
        'neon-cyan': '0 0 5px #00F5FF, 0 0 10px #00F5FF',
        'neon-pink': '0 0 5px #FF00F5, 0 0 10px #FF00F5',
        'neon-green': '0 0 5px #00FF66, 0 0 10px #00FF66',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        glitch: 'glitch 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};