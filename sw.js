self.addEventListener('install', (e) => {
  console.log("Instalita!")
  e.waitUntil(
    caches.open('vortaro-dosieraro').then((cache) => cache.addAll([
      'vortaro-pwa/index.html',
      'https://vortaro.warut.net/eotajpu.js',
      'https://vortaro.warut.net/skriptoj/skripto.js',
      'https://vortaro.warut.net/eoth-vortaro.js',
      'https://vortaro.warut.net/stilo.css',
      'https://vortaro.warut.net/skriptoj/lasta_sxangxo.js',
      'https://vortaro.warut.net/skriptoj/tujsercxo/piv_vortoj.js',
      'https://vortaro.warut.net/skriptoj/tujsercxo/tujsercxo.js',
      'https://vortaro.warut.net/skriptoj/aliaj-fontoj.js',
      'https://vortaro.warut.net/skriptoj/hazardilo.js',
    ])),
  );
});

self.addEventListener('active', (e) => {
  console.log("Aktiva!");
});

self.addEventListener('fetch', (e) => {
  console.log("Venigita! ",e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
