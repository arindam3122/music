// Service Worker: sw.js
const CACHE_NAME = 'music-player-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './songs.js'
];

// Install Event - Cache Core App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve Cache First, then Network, Auto-Cache media files
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Cache-First strategy for audio, image, and app static files
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Clone and cache media & app assets dynamically as they are loaded
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (event.request.destination === 'audio' ||
           event.request.destination === 'image' ||
           event.request.destination === 'script' ||
           requestUrl.pathname.endsWith('.mp3') ||
           requestUrl.pathname.endsWith('.m4a'))
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Return fallback if completely offline and not in cache
        if (event.request.destination === 'image') {
          return caches.match('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop');
        }
      });
    })
  );
});