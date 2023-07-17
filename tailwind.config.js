/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': '1.75rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      // letterSpacing: {
      // },
      colors: {
        'pina-smoke': {
          1: '#1E1C0F',
          2: '#292929',
          3: '#1E1E1E',
          4: 'rgba(202, 193, 172, 0.22);',
          5: 'rgba(41, 41, 41, 0.30);',
          6: '#312F23',
        },
        'pina-yellow': {
          1: '#FFDC00',
          2: '#FED839',
          3: '#FBF99D',
          4: '#F7B313',
          5: '#FFEA66',
        },
        'pina-green': {
          1: '#D7F0BF',
          2: '#CEEEDF',
        },
      },
      boxShadow: {
        card: '0px 4px 16px 0px rgba(0, 0, 0, 0.12);',
        header: '0px 1px 8px 1px rgba(0, 0, 0, 0.06)',
        button: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      maxWidth: {
        '2xs': '250px',
        '8xl': '1440px',
      },
    },
  },
  plugins: [require('preline/plugin'), require('prettier-plugin-tailwindcss')],
};
