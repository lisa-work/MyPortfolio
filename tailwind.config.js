/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-letter': {
          from: { opacity: '0', transform: 'translateY(0.3em)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-letter': 'fade-letter 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
