importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: 'securerpc.com',
});

// Note: this is populated at build time.
workbox.precaching.precacheAndRoute([]);

workbox.googleAnalytics.initialize({});

workbox.skipWaiting();
