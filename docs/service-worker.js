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
    "revision": "a1a83f50e68596c5ff398e4d1f8f264b"
  },
  {
    "url": "1970/01/01/_1/index.html",
    "revision": "c124e9df15c6b58fd2e7a9b8f4c3aee7"
  },
  {
    "url": "1970/01/01/_2/index.html",
    "revision": "79efb22f232cc104f670c90cfa42e0cc"
  },
  {
    "url": "404.html",
    "revision": "0fa7edbc5e6cd350471ed7e476172c95"
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
    "url": "assets/js/15.227c8abe.js",
    "revision": "bff604628102ffba93e6dd411ac22117"
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
    "url": "assets/js/app.c4fec99c.js",
    "revision": "25473c645479a57215072729b9350635"
  },
  {
    "url": "assets/js/vuejs-paginate.c6dc7ffd.js",
    "revision": "0ff9b9856f163ada88b5e6b576321218"
  },
  {
    "url": "index.html",
    "revision": "2fb4f586e3caf7434c9072d85f6abb24"
  },
  {
    "url": "tag/AWS/index.html",
    "revision": "cf9257ca6ff802511f546f0c3b3f81e3"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "f1a702e20c7a51d6e714e4eafb5eeb0c"
  },
  {
    "url": "tag/Google Analytics Plugin/index.html",
    "revision": "ef20896daa4daca9fe1ac0a94c385a55"
  },
  {
    "url": "tag/index.html",
    "revision": "8115b721e6ea58485023a3938e53816e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "cf4ffe86a6bcdd58ba01c48b7ebd8476"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "788262f770e38d17499ab4c1dfa3cc38"
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
