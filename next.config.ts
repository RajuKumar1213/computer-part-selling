import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '5.imimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.techycomp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-5.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-7.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-4.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-2.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-4.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-1.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpat2-1.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
