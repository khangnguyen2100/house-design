/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "nhaxinh.com", "housedesign.vn"],
  },
};

module.exports = nextConfig;
