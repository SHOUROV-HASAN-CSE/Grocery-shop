/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'castle.com.bd' },
      { protocol: 'https', hostname: 'www.startech.com.bd' },
    ],
  },
};

module.exports = nextConfig;
