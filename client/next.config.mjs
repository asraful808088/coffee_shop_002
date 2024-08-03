/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: false,
};

export default nextConfig;
