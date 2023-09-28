/* eslint-disable sort-keys */
import localFont from 'next/font/local';

export const lato = localFont({
  variable: '--lato',
  src: [
    {
      path: './assets/fonts/Lato/Lato-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/Lato/Lato-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/Lato/Lato-Black.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
