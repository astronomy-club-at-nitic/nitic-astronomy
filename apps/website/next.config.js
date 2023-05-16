/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.microcms-assets.io', port: '', pathname: '**' }],
  },
};
