/** @type {import('tailwindcss').Config} */

export default {
  content: ['./inertia/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          500: '#c9ba46',
        },
      },
      backgroundImage: {
        500: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'translateinfinite': {
          to: { transform: 'translateX(calc(-180px * 5))' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'translateinfinite': 'translateinfinite 10s linear infinite',
      },
    },
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require('tailwindcss-animate')],
}
