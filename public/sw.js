// Can use some ES6 features as browsers that support service workers support them
// Configure service worker to give an acceptable offline experience

const cacheName = 'my-site-cache-v1';
const offlineUrls = [
  '/offline/index.d6fe751cbafc91681dc8e84ca080e0aa.html'
];

//
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(offlineUrls))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => event.request.mode === 'navigate' ? caches.match(offlineUrls[0]) : Promise.reject())
  )
})
