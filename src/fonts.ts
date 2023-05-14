/* eslint-disable sort-keys */
import localFont from 'next/font/local';

export const ttnorms = localFont({
  variable: '--ttnorms',
  src: [
    {
      path: './assets/fonts/TTNorms/TTNorms-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/TTNorms/TTNorms-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/TTNorms/TTNorms-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
