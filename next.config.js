/** @type {import('next').NextConfig} */
// path: middleware.ts
// export async function middleware(request: Request, next: any) {
//   await connectDb();
//   return next(request);
// }

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'nhaxinh.com', 'housedesign.vn'],
  },
  experimental: {
    esmExternals: 'loose', // <-- add this
    serverComponentsExternalPackages: ['mongoose'], // <-- and this
  },
  // and the following to enable top-level await support for Webpack
  webpack: config => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  }
};

module.exports = nextConfig;
