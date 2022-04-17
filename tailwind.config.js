module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#EBECF0',
          300: '#B1B3BA',
          400: '#909090',
          600: '#4C4C4C',
          700: '#323232',
          800: '#181817',
          900: '#222222',
        },
        green: {
          400: '#8DD715',
          500: '#70AB10',
        },
        blue: {
          300: '#9CD5FF',
          400: '#88C5F1',
          500: '#4B4AEF',
        },
        red: {
          300: '#EB9B8F',
        },
        transparent: 'transparent',
        current: 'currentColor',
        purple: {
          500: '#FF66F0',
          800: '#5200FF',
        },
        orange: {
          500: '#F84E29',
        },
      },
      borderRadius: {
        large: '20px',
      },
      width: {
        50: '50px',
        61: '60px',
        65: '64px',
        376: '376px',
      },
      height: {
        30: '30px',
        50: '50px',
        65: '64px',
        140: '140px',
      },
      maxHeight: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
