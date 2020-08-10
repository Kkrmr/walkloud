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
    "revision": "5e01cab90239c2bcab77f39c15da3b16"
  },
  {
    "url": "1970/01/01/_1/index.html",
    "revision": "67ad719ef86646e6fd74aaa72eec84ac"
  },
  {
    "url": "404.html",
    "revision": "1c53b1bd61ab3bae2f91a5e7648d9ed2"
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
    "url": "assets/js/11.221029c1.js",
    "revision": "7f91b59ad9d7d1d8b6aed1c55ee3b9a2"
  },
  {
    "url": "assets/js/12.faccbf0d.js",
    "revision": "da22b140acba37e59887ae3451dd9c30"
  },
  {
    "url": "assets/js/13.1939ba67.js",
    "revision": "b52e61532391317fa4ee550b39d6db37"
  },
  {
    "url": "assets/js/14.5989c3a3.js",
    "revision": "c72e4646b7a985eee4eee1da61a5c4fe"
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
    "url": "assets/js/6.11bfbd82.js",
    "revision": "f7ff5b8ef35e8c47152b307c8bd3c292"
  },
  {
    "url": "assets/js/7.74c78251.js",
    "revision": "ca2d7a15106425d416eb7177b7edfc9a"
  },
  {
    "url": "assets/js/8.dbe7d942.js",
    "revision": "e8debe719f17d7f6de155d2f60b56691"
  },
  {
    "url": "assets/js/9.8d9cdc29.js",
    "revision": "65e6735e112ae918e21963696dbc4bcd"
  },
  {
    "url": "assets/js/app.42db180f.js",
    "revision": "9b7bb646c291955a8c54eb1aa4220f14"
  },
  {
    "url": "assets/js/vuejs-paginate.c6dc7ffd.js",
    "revision": "0ff9b9856f163ada88b5e6b576321218"
  },
  {
    "url": "index.html",
    "revision": "6b64be5545b4be02cca514f43356d1f1"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "a93381cd9ebb94f27f32e8ea79686f9b"
  },
  {
    "url": "tag/Google Analytics Plugin/index.html",
    "revision": "43234b4f7ec97cfd12d950ae0e148d31"
  },
  {
    "url": "tag/index.html",
    "revision": "7a2cc365ddb0d329928798b3112befb9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "59946d8a4bd403901780ec5483195d00"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "a479faf3f3bc4002e297aa99873c243b"
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
