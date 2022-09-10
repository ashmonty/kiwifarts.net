module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://diyhrt.wiki',
        permanent: false,
      },
      {
        source: '/:whatevs*',
        destination: 'https://diyhrt.wiki',
        permanent: false,
      },
    ]
  },
}
