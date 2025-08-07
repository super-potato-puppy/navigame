const CACHE_NAME = 'navi-game-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './navi.png',
  './service-worker.js',
  './cards/scenario1.png',
  './cards/scenario2.png',
  './cards/scenario3.png',
  './cards/scenario4.png',
  './cards/a1.png',
  './cards/a2.png',
  './cards/a3.png',
  './cards/a4.png',
  './cards/a5.png',
  './cards/a6.png',
  './cards/a7.png',
  './cards/a8.png',
  './cards/a9.png',
  './cards/a10.png',
  './cards/a11.png',
  './cards/a12.png',
  './cards/a13.png',
  './cards/a14.png',
  './cards/a15.png',
  './cards/a16.png',
  './cards/a17.png',
  './cards/a18.png',
  './cards/a19.png',
  './cards/a20.png',
  './cards/a21.png',
  './cards/a22.png',
  './cards/a23.png',
  './cards/a24.png',
  './cards/a25.png',
  './cards/a26.png',
  './cards/a27.png',
  './cards/a28.png',
  './cards/a29.png',
  './cards/a30.png',
  './cards/a31.png',
  './cards/a32.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keyList => Promise.all(
      keyList.map(key => key !== CACHE_NAME && caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  if (evt.request.mode !== 'navigate') {
    evt.respondWith(
      caches.match(evt.request).then(response => response || fetch(evt.request))
    );
  } else {
    evt.respondWith(
      fetch(evt.request).catch(() => caches.match('./index.html'))
    );
  }
});
