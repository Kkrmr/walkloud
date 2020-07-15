/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/_0/index.html",
    "revision": "51911b0fd8828e84c8592dba9682387c"
  },
  {
    "url": "404.html",
    "revision": "7c2fd43a8a54d6134fe7ed0a4ffa817b"
  },
  {
    "url": "assets/css/0.styles.f51536de.css",
    "revision": "75fabdf2c40b4a1c53b7e137326c5652"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.60de0599.js",
    "revision": "bc97e1dd6f49b8237eb3feaa12db0092"
  },
  {
    "url": "assets/js/11.1d45a020.js",
    "revision": "8f9f79cbe28ecfe3c096360b4f5e0383"
  },
  {
    "url": "assets/js/12.45d9f0ea.js",
    "revision": "2f640b266cd873bfa1d9a1d4c6ea3ee4"
  },
  {
    "url": "assets/js/13.8bb0a4e4.js",
    "revision": "593839fdafd5676bb39f40c2e769cfe2"
  },
  {
    "url": "assets/js/3.59f3a641.js",
    "revision": "cc9dd1526497faf7b805c39e1e4145ed"
  },
  {
    "url": "assets/js/4.c83f9c12.js",
    "revision": "7cb0fb1f093f1afec8e63fde8ecc0a3f"
  },
  {
    "url": "assets/js/5.169434b2.js",
    "revision": "5ddccd6c3698ed3d36b2925b8f5dd4de"
  },
  {
    "url": "assets/js/6.402b42f8.js",
    "revision": "c32a6b271592ef1d0bdf202ea75f07cb"
  },
  {
    "url": "assets/js/7.46df12d6.js",
    "revision": "bc3d87d79dd64de3defd7af51c3f01bd"
  },
  {
    "url": "assets/js/8.0e1117ed.js",
    "revision": "98b5c6fe710ead4665e2517b5068544f"
  },
  {
    "url": "assets/js/9.cf88976c.js",
    "revision": "3d10da74d7d85c52f8caddff8d2a77af"
  },
  {
    "url": "assets/js/app.9285698d.js",
    "revision": "c4a284c2871051c2fc5c6e9f78d420c0"
  },
  {
    "url": "assets/js/vuejs-paginate.c6dc7ffd.js",
    "revision": "0ff9b9856f163ada88b5e6b576321218"
  },
  {
    "url": "index.html",
    "revision": "4784cb76eee25fa611e26a9ba777f6e3"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "b8674e2c1d9a7ab962aad91a29a2f379"
  },
  {
    "url": "tag/index.html",
    "revision": "a23870bd7ae9baaddb463730413d0c18"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "28bede38fa56d580b5736da2d61fe751"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "914fec4f9732e7b0a7461c0b9a71a66c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
