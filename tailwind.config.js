/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  theme: {
    colors: {
      white: '#fff',
      white_dark: '#f9f9f9',
      lite: '#f6f6f6',
      dark: '#444',
      green: '#5ec03b',
      green_hover: '#51a335',
      green_lite: '#eef7ea',
      gray: '#ddd',
      gray_dark: '#8c8c8c',
      gray_lite: '#e5e5e5',
      red: '#f44336',
      yellow: '#f8df5e',
      yellow_dark: '#e1c94a',
      transparent: 'transparent',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1220px',
    },
    extend: {
      fontSize: {
        none: '0',
      },
      boxShadow: {
        'sm': '0 5px 20px rgba(105, 105, 105, 0.1)',
        'md': '0 5px 20px rgba(105, 105, 105, 0.25)',
      },
    },
  },
};
