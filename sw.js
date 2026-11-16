const CACHE_NAME = 'quran-pwa-v13';
const TOTAL_PAGES = 604;

// تجهيز قائمة بجميع ملفات التطبيق + الـ 604 صورة
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.png'
];

for (let i = 1; i <= TOTAL_PAGES; i++) {
  ASSETS_TO_CACHE.push(`./Pages/q (${i}).jpg`);
}

// إجبار المتصفح على تحميل وحفظ الـ 604 صورة كلها قبل إتمام التثبيت
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
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
