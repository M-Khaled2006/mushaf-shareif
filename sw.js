const CACHE_NAME = 'quran-pwa-v33';
const TOTAL_PAGES = 604;

const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.png',
  './quran-data.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(CORE_ASSETS);
      
      // تحميل وحفظ الـ 604 صورة بالكامل قبل إتمام التثبيت على دفعات سريعة
      const batchSize = 20;
      for (let i = 1; i <= TOTAL_PAGES; i += batchSize) {
        const batch = [];
        for (let j = i; j < i + batchSize && j <= TOTAL_PAGES; j++) {
          const url = `./Pages/q (${j}).jpg`;
          batch.push(
            fetch(url)
              .then((res) => {
                if (res.ok) return cache.put(url, res);
              })
              .catch(() => {})
          );
        }
        await Promise.all(batch);
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
