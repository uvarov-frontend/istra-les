/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    backgroundImage: {
      'icon-address':  "url('/img/address.svg')",
      'icon-phone':  "url('/img/phone.svg')",
    },
    colors: {
      white: '#fff',
      dark: '#444',
      green: '#5ec03b',
      green_hover: '#51a335',
      gray: '#ddd',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
};
