/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'charcoal-deep': '#1e2023',
        'charcoal': '#2b2e33',
        'orange-vibrant': '#FF6B35',
        'blue-steel': '#5DADE2',
        'gray-warm': '#c9d8d8',
        'yellow-golden': '#F1C40F',
        'green-forest': '#27AE60',
        'glass-edge': 'rgba(255, 255, 255, 0.2)',
        'glass-surface-light': 'rgba(255, 255, 255, 0.1)',
        'glass-surface-dark': 'rgba(45, 52, 54, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'text-focus-in': 'textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'pulsate-cta': 'pulsateCta 2s ease-in-out infinite both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        textFocusIn: {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        pulsateCta: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 107, 53, 0.7)' },
          '70%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(255, 107, 53, 0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 107, 53, 0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
    }
  },
  plugins: [],
}
