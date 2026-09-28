/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cit-gold': '#C9951A',
        'cit-gold-dark': '#A07810',
        'cit-gold-light': '#E8B429',
        'cit-gold-bg': '#FAEEDA',
        'cit-white-surface': '#FFFFFF',
        'cit-page-bg': '#F8F6F1',
        'cit-text-primary': '#1A1A1A',
        'cit-text-secondary': '#6B6B6B',
        'cit-text-muted': '#9B9B9B',
        'cit-border': '#E8E0CC',
        'cit-success-green': '#1A7A4A',
        'cit-success-bg': '#E8F7EF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'btn': '10px',
        'pill': '20px',
      },
      boxShadow: {
        'cit-card': '0 2px 12px rgba(0,0,0,0.08)',
        'cit-active-tab': '0 2px 8px rgba(201,149,26,0.3)',
      }
    },
  },
  plugins: [],
}
