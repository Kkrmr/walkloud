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
    "revision": "c46d872253fdda562bd2a5ad1086aa23"
  },
  {
    "url": "404.html",
    "revision": "85767db2a7fd7103018d7e2611350f36"
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
    "url": "assets/js/10.cb9b31b7.js",
    "revision": "5fcc13167c1fadbaae7abebb410903cd"
  },
  {
    "url": "assets/js/11.1ad7eec0.js",
    "revision": "d6db335ed9432a470df458e3b2cf4518"
  },
  {
    "url": "assets/js/12.f33f773a.js",
    "revision": "75b8dbd046afc66d545b1b703b275b39"
  },
  {
    "url": "assets/js/13.1939ba67.js",
    "revision": "b52e61532391317fa4ee550b39d6db37"
  },
  {
    "url": "assets/js/3.48b39f13.js",
    "revision": "63ad17d805776848bb32c4f96239af8e"
  },
  {
    "url": "assets/js/4.d7caed9b.js",
    "revision": "e87d39285b55cdb69a105bd21789ddc6"
  },
  {
    "url": "assets/js/5.480f9369.js",
    "revision": "f7dcc70a305e2cbf3e775bea280470a5"
  },
  {
    "url": "assets/js/6.f9b6139d.js",
    "revision": "d98c68dea765b480a03f720be76561ca"
  },
  {
    "url": "assets/js/7.46df12d6.js",
    "revision": "bc3d87d79dd64de3defd7af51c3f01bd"
  },
  {
    "url": "assets/js/8.ab1a6469.js",
    "revision": "2543e6dc4ac964acf8b55d41dde4ddf9"
  },
  {
    "url": "assets/js/9.8d9cdc29.js",
    "revision": "65e6735e112ae918e21963696dbc4bcd"
  },
  {
    "url": "assets/js/app.1ff5458c.js",
    "revision": "bce05fa892cd2ba63ac250cdc87fcdf2"
  },
  {
    "url": "assets/js/vuejs-paginate.c6dc7ffd.js",
    "revision": "0ff9b9856f163ada88b5e6b576321218"
  },
  {
    "url": "index.html",
    "revision": "ace468305ec7d7811d9f508f6739e8f7"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "c07f5bada3af4f9a06ffd17a8c1e3f77"
  },
  {
    "url": "tag/index.html",
    "revision": "dd94c4ace841fc8e3eecc125c0ccac61"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "56fe8db903f518efed467326d51877c6"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "33e73b02261aa47a4a946b1e8b517300"
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
