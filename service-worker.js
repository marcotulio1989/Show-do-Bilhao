
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('milhao-cache').then((cache) => {
      return cache.addAll([
        'show_do_milhao_pwa.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
