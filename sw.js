// Minimal service worker — required by Android/Chrome to allow
// the "Install app" prompt to appear. Doesn't do offline caching,
// just needs to exist and handle fetch events.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
