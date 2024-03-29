module.exports = {
  swcMinify: false,
  webpack5: false,
  images: {
    domains: ['steamcdn-a.akamaihd.net', 'steamuserimages-a.akamaihd.net', 'cdn.datdota.com', 'www.segalfamilyfoundation.org'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
          {key: 'Access-Control-Allow-Origin', value: '*'},
          {key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
          {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'},
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ranking',
        permanent: true,
      },
    ];
  },
};
