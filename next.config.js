/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panel.istra-les.ru',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};
const withYAML = require('next-yaml');

module.exports = withYAML(nextConfig);
