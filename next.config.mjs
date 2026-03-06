/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256, 384],
  },
};

export default nextConfig;
