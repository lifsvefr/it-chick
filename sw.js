/* IT CHICK Academy service worker: always tries the network first, so updates show at once,
   and falls back to the last saved copy when offline. Only files from this site are kept. */
var CACHE = "itchick-v15";
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r).then(function(res){
    if (res && res.ok){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(r, copy); }); }
    return res;
  }).catch(function(){
    return caches.match(r, {ignoreSearch: true}).then(function(hit){ return hit || Response.error(); });
  }));
});
