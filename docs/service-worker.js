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
    "revision": "bde096e3ee1f60e55962d8a2652894d2"
  },
  {
    "url": "1970/01/01/_1/index.html",
    "revision": "94440fa6ef7204752c839cee36631e13"
  },
  {
    "url": "1970/01/01/_2/index.html",
    "revision": "2570860b159efecb9e098fd0f1c999c3"
  },
  {
    "url": "404.html",
    "revision": "d005f762b27d539538464fb5a5dc3f33"
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
    "url": "assets/js/10.e7e06682.js",
    "revision": "16dd78dc5f57b47f5c608be6fdbb0e37"
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
    "url": "assets/js/13.5a53b7ff.js",
    "revision": "191afcb9c5e04093d75d4c26b929764d"
  },
  {
    "url": "assets/js/14.3f675b8d.js",
    "revision": "e0359e88a2ca395ffa2360fc907dfb27"
  },
  {
    "url": "assets/js/15.b357c0c3.js",
    "revision": "6ca4744a74b35bfd8b63a391ad8ef6b1"
  },
  {
    "url": "assets/js/3.0a11053e.js",
    "revision": "ce757b0171d5c732a9435972070d9b51"
  },
  {
    "url": "assets/js/4.32e36811.js",
    "revision": "0fcfbb6ff49eb94790fb2181edaf8a6b"
  },
  {
    "url": "assets/js/5.480f9369.js",
    "revision": "f7dcc70a305e2cbf3e775bea280470a5"
  },
  {
    "url": "assets/js/6.36047ee3.js",
    "revision": "ab5c063c84d3a56adf58d3e9404e58f0"
  },
  {
    "url": "assets/js/7.74c78251.js",
    "revision": "ca2d7a15106425d416eb7177b7edfc9a"
  },
  {
    "url": "assets/js/8.c2d9d252.js",
    "revision": "a443f80b00df03ec26c283f79d330f17"
  },
  {
    "url": "assets/js/9.a24e6306.js",
    "revision": "1fdb91cb773f4eecefac80d0c0002b7a"
  },
  {
    "url": "assets/js/app.18b97d16.js",
    "revision": "f877f6c2333a43bd19a1c979be5d58e3"
  },
  {
    "url": "assets/js/vuejs-paginate.c6dc7ffd.js",
    "revision": "0ff9b9856f163ada88b5e6b576321218"
  },
  {
    "url": "index.html",
    "revision": "64db73add96b103d11b9c1e4fa5ccda3"
  },
  {
    "url": "tag/AWS/index.html",
    "revision": "e7588e8ee087bdaa99189338b084bc15"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "28f61ae3e06368282626a4ed966d0f62"
  },
  {
    "url": "tag/Google Analytics Plugin/index.html",
    "revision": "0264bebdb3459789bbdae5c4649a7b3c"
  },
  {
    "url": "tag/index.html",
    "revision": "8de70e0d40f3800154ccde2a2997255d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a01f9fdf51f674329fbaff3fbf138b07"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "8203fc4aae2552d541869611aa23b688"
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
