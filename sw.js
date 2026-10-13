// Service worker mínimo: solo para que la app sea instalable. No guarda nada en caché.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
