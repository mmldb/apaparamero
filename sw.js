self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  return; // Csak a telepíthetőség miatt kell, most nem cache-elünk semmit
});
