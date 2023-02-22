/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports={

  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  // images:{
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'api.github.com',
  //       port: '',
  //       pathname: '/users/Ahmed-Gamal-Jimmy/repos',
  //     },
  //   ],
  //   // domains:['https://api.github.com/users/Ahmed-Gamal-Jimmy/repos']
  // }
}