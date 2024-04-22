/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
