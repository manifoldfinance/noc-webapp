/**
 * @test Lighthouse
 * @usage npx @11ty/eleventy --serve --incremental
 */

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx @11ty/eleventy --serve --incremental',
      startServerReadyPattern: 'eleventy webserver available',
      url: ['http://localhost:8008/'],
      settings: {
        skipAudits: ['uses-text-compression', 'uses-long-cache-ttl'],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
