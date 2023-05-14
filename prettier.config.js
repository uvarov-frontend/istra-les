/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  jsxSingleQuote: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 180,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
};
