/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
    },reactStrictMode: true,
    env: {
        URLDATA: process.env.URLDATA,
    },
    experimental: {
      urlImports: ['https://d25zvmpxpn9d7y.cloudfront.net','https://umkmku.s3.ap-southeast-1.amazonaws.com'],
    },
      images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'umkmku.s3.ap-southeast-1.amazonaws.com',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'cloudfront.net',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'd25zvmpxpn9d7y.cloudfront.net',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'placehold.co',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'wsrv.nl',
              pathname: '**',
            } ,
            {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
              pathname: '**',
            }   
          ]
      }
  };
  
  export default nextConfig;
  