/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
           
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
           
          },
          {
            protocol: 'https',
            hostname: 'validthemes.net',
           
          },
          {
            protocol: 'https',
            hostname: 'i.imgflip.com',
           
          },
          {
            protocol: 'https',
            hostname: 'static.episodate.com',
           
          },
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
           
          },
        ],
      },
};

export default nextConfig;
