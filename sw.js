self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("carta-romantica").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "music/barbara.mp3",
        "img/foto1.jpg",
        "img/foto2.jpg",
        "img/foto3.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
