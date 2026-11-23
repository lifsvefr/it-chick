/* IT CHICK Academy service worker.
   Online: tries the network first (so updates show at once) and keeps a copy of each file it fetches.
   Slow or no signal: if the network hasn't answered within a few seconds, or the phone is offline, it serves the saved
   copy instead. "Use offline" in Settings fills the same cache with the whole app ahead of time.
   Audio is served with byte ranges from the cache, because Safari asks for audio in pieces. */
var CACHE = "itchick-v19";                 // the same cache the Settings download writes to (ICA.offline)
var FONTS = "itchick-fonts";
var WAIT_MS = 3500;                        // how long a weak signal gets before we use the saved copy

self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return /^itchick-v/.test(k) && k !== CACHE; }).map(function(k){ return caches.delete(k); })); })
    .then(function(){ return self.clients.claim(); }));
});

function key(url){ var u = url.split("#")[0].split("?")[0]; return /\/$/.test(u) ? u + "index.html" : u; }   // "/it-chick/" is index.html
function saved(r){ return caches.match(key(r.url)); }

function ranged(req, res){
  var h = req.headers.get("range"); if (!h || !res || res.status !== 200) return res;
  var m = /bytes=(\d*)-(\d*)/.exec(h); if (!m) return res;
  return res.arrayBuffer().then(function(buf){
    var size = buf.byteLength, start = m[1] ? +m[1] : size - +m[2], end = m[1] && m[2] ? +m[2] : size - 1;
    if (!m[1]) end = size - 1;
    start = Math.max(0, start); end = Math.min(size - 1, end);
    return new Response(buf.slice(start, end + 1), {status: 206, statusText: "Partial Content", headers: {
      "Content-Type": res.headers.get("Content-Type") || "audio/mpeg", "Content-Range": "bytes " + start + "-" + end + "/" + size,
      "Content-Length": String(end - start + 1), "Accept-Ranges": "bytes"}});
  });
}

function fromNetwork(r){
  var plain = r.headers.get("range") ? new Request(r.url, {credentials: "same-origin"}) : r;   // cache whole files only
  return fetch(plain).then(function(res){
    if (res && res.ok && res.status === 200){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(key(r.url), copy); }); }
    return res;
  });
}

self.addEventListener("fetch", function(e){
  var r = e.request, u = new URL(r.url);
  if (r.method !== "GET") return;
  // Google Fonts: keep a copy, use it when offline
  if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com"){
    e.respondWith(caches.open(FONTS).then(function(c){ return c.match(r).then(function(hit){
      var net = fetch(r).then(function(res){ if (res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; }).catch(function(){ return hit; });
      return hit || net;
    }); }));
    return;
  }
  if (u.origin !== self.location.origin) return;
  if (/\.epub$/.test(u.pathname)) return;   // big downloads (Reader EPUBs) go straight to the network and are not cached
  e.respondWith(saved(r).then(function(hit){
    if (hit && self.navigator && self.navigator.onLine === false) return ranged(r, hit);
    var net = fromNetwork(r);
    if (!hit) return net.catch(function(){ return Response.error(); }).then(function(res){ return r.headers.get("range") && res.status === 200 ? ranged(r, res) : res; });
    var timer = new Promise(function(ok){ setTimeout(function(){ ok(null); }, WAIT_MS); });
    return Promise.race([net.catch(function(){ return null; }), timer]).then(function(res){
      if (res && res.ok) return r.headers.get("range") && res.status === 200 ? ranged(r, res) : res;
      return ranged(r, hit);
    });
  }));
});
