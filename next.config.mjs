/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-images-getimg.b74c4cef8e39fc0d1de2c7604852a487.r2.cloudflarestorage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'byc8tublolbhhpzq.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // output: 'export'
};

export default nextConfig;