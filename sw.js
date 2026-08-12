// Version definition
const CACHE_NAME = 'sonify-v1.1.0';
const AUDIO_CACHE = 'sonify-audio-v1';

// Core Application Assets
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './songs.js',
  './sw.js'
];

// 1. Install Event: Pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline application shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME && cache !== AUDIO_CACHE) {
            console.log('[ServiceWorker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Smart Data Saver Audio Cache Engine + Network-First Fallback Strategy
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const request = event.request;
  const url = request.url;

  // INTERCEPT AUDIO REQUESTS (.mp3, .opus, or destination 'audio') FOR 0-DATA REPLAYS
  if (request.destination === 'audio' || url.endsWith('.mp3') || url.endsWith('.opus') || url.includes('/songs/')) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then(async (audioCache) => {
        const cachedAudio = await audioCache.match(request);
        
        if (cachedAudio) {
          // Serve immediately from local device cache (Consumes 0 KB internet data)
          return cachedAudio;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            // Save full audio file to local storage during first streaming session
            audioCache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          // Handle completely offline state
          return cachedAudio || Promise.reject('Offline and track not cached');
        }
      })
    );
    return;
  }

  // STANDARD APPLICATION ASSETS
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// 4. Force Update Handler
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});