/** @type {import('next').NextConfig} */

module.exports = module.exports = {
  async redirects() {
    return [
      {
        source: '/documentation',
        destination:
          'https://github.com/oslabs-beta/Topmast/blob/dev/README.md',
        permanent: true,
      },
    ];
  },
};
