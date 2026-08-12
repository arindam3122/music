// Change this version name whenever you push a new code update to GitHub
const CACHE_NAME = 'sonify-v1.0.1';

// Add the core assets you want available offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './songs.js',
  './sw.js'
];

// 1. Install Event: Caches essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate Event: Cleans up old cache versions immediately upon update
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Takes control of all open pages immediately
  );
});

// 3. Fetch Event: Network-first strategy (tries fetching fresh data, falls back to cache if offline)
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If network request succeeds, clone and update cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails (offline), load from cache
        return caches.match(event.request);
      })
  );
});

// 4. Message Event: Listens for the 'skipWaiting' command sent by index.html to force instant auto-refresh
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});