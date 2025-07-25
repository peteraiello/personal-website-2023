// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class', // or 'media' or 'class'
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',    
        './index/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './modules/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      fontFamily: {
        noto: ['"Noto Serif"', ...defaultTheme.fontFamily.serif],
        open: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
      },
      extend: {
        spacing: {
          'sm': '20px',
          'md': '40px',
          'lg': '80px',
          'xl': '120px',
          'xxl': '180px',
        },
        fontSize: {
          '6xl': '4.625rem',
          '5xl': '3.688rem',
          '4xl': '2.938rem',
          '3xl': '2.313rem',
          '2xl': '1.875rem',
          'xl': '1.5rem',
          'strapline': '1.313rem',
          'lead': '1.25rem',
          'body': '1.125rem',
          'award': '1.5rem',
          'subtitle': '1.5rem',
        },
        lineHeight: {
          'body': '2rem',
          'subtitle': '2.188rem'
        },
        colors: {
          darkGray: 'rgb(var(--color-dark-gray) / <alpha-value>)',
          darkerGray: 'rgb(var(--color-darker-gray) / <alpha-value>)',
          lightGray: 'rgb(var(--color-light-gray) / <alpha-value>)',
          brandBlue: 'rgb(var(--color-brand-blue) / <alpha-value>)',
          brandGold: 'rgb(var(--color-brand-gold) / <alpha-value>)'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
};