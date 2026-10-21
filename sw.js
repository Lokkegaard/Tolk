// Service worker: makes Tolk installable and lets the app itself open without a network.
// Translation, speech and the connection between devices still need the internet.
const SHELL_CACHE = "tolk-shell-v1";
const CDN_CACHE = "tolk-cdn-v1";
const SHELL = ["./", "index.html", "qrcode.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"];
// Fonts and the text-recognition files never change at a given URL, so they can be served from cache.
const CDN_HOSTS = ["cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL_CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== SHELL_CACHE && k !== CDN_CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // Network first, so a new version on GitHub shows up straight away; the cache is the offline fallback.
    e.respondWith(fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(SHELL_CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true })
        .then(hit => hit || (req.mode === "navigate" ? caches.match("index.html") : Response.error()))));
    return;
  }

  if (CDN_HOSTS.includes(url.host)) {
    e.respondWith(caches.open(CDN_CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === "opaque") c.put(req, res.clone());
      return res;
    }));
  }
  // Everything else (translation, speech, ntfy.sh) goes straight to the network.
});
