/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com', // Just the hostname, no 'https://'
      },
      {
        protocol: 'https',
        hostname: 'wordpress-1308874-4772101.cloudwaysapps.com', // Just the hostname, no 'https://'
      },
      {
        protocol: 'https',
        hostname: 'krystotest-erp.square.nc', // Just the hostname, no 'https://'
      },
    ],
  },
}

export default nextConfig
