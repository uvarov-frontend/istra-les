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
    colors: {
      white: '#fff',
      lite: '#f6f6f6',
      dark: '#444',
      green: '#5ec03b',
      green_hover: '#51a335',
      gray: '#ddd',
      dark_gray: '#8c8c8c',
      transparent: 'transparent',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      boxShadow: {
        'sm': '0 5px 20px rgba(105, 105, 105, 0.1)',
      },
    },
  },
};
