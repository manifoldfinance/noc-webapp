import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponse } from 'workbox-cacheable-response';

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  }),
);
