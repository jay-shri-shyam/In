/* Radhe Radhe service worker: makes the site installable and fast.
   Bump CACHE when you change many files so old copies are cleared. */
const CACHE = 'radhe-radhe-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(SHELL.map(function(u){ return c.add(u).catch(function(){}); }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

function networkFirst(req, fallbackUrl){
  return fetch(req).then(function(res){
    if(res && res.ok){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); }
    return res;
  }).catch(function(){
    return caches.match(req).then(function(hit){ return hit || (fallbackUrl ? caches.match(fallbackUrl) : Response.error()); });
  });
}
function staleWhileRevalidate(req){
  return caches.match(req).then(function(hit){
    var net = fetch(req).then(function(res){
      if(res && res.ok){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); }
      return res;
    }).catch(function(){ return hit; });
    return hit || net;
  });
}

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET'){ return; }
  var url = new URL(req.url);
  if(url.origin !== self.location.origin){ return; }          // fonts, maps, Google login: leave to the browser
  if(req.mode === 'navigate'){ e.respondWith(networkFirst(req, './index.html')); return; }
  if(/product\.js$/.test(url.pathname)){ e.respondWith(networkFirst(req)); return; }   // catalog updates show up right away
  e.respondWith(staleWhileRevalidate(req));                     // images, icons, css: instant, refreshed in background
});
