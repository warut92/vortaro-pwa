self.addEventListener('install', (e) => {
  console.log("Instalita!")
  e.waitUntil(
    caches.open('vortaro-dosieraro').then((cache) => cache.addAll([
      'vortaro-pwa/index.html',
      'https://vortaro.warut.net/eotajpu.js',
      'https://vortaro.warut.net/skripto.js',
      'https://vortaro.warut.net/eoth-vortaro.js',
      'https://vortaro.warut.net/stilo.css',
      'https://vortaro.warut.net/lasta_sxangxo.js',
      'https://vortaro.warut.net/tujsercxo/piv_vortoj.js',
      'https://vortaro.warut.net/tujsercxo/tujsercxo.js',
      'https://vortaro.warut.net/aliaj-fontoj.js',
      'https://vortaro.warut.net/hazardilo.js',
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
