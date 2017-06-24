// Can use some ES6 features as browsers that support service workers support them
// Configure service worker to give an acceptable offline experience

// The configured service worker here is exetremely basic. It simply caches dedicated
// offline files and serves them up when you're offline

// Important to version your cache names
const offlineCacheName = 'react-app-template-v1'
const offlineUrls = [
  '/offline/index.d6fe751cbafc91681dc8e84ca080e0aa.html'
]

// Very basic service worker install
// Simply caches all the specified offline files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(offlineCacheName)
      .then(cache => cache.addAll(offlineUrls))
  )
})

// Proxy all fetch calls, if a cached response exists then use that first then forward onto regular fetch
// If the request throws (ie no network) and you were navigating not acting within a loaded page
// then serve up the offline cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        return event.request.mode === 'navigate' ? caches.match(offlineUrls[0]) : Promise.reject()
      })
  )
})

// When a service worker activates clean up older caches, only keeping our latest cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(cacheNames
        .filter(cacheName => cacheName !== offlineCacheName)
        .map(cacheName => caches.delete(cacheName))
      )
    )
  )
})
