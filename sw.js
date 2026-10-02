const C='remedium-v031';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(x=>x.addAll(['./?v=031','./index.html?v=031'])).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(()=>caches.match('./?v=031')));});
