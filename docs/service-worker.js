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
    "revision": "1bbdda5ae211a03aa75eba5b6a6a617d"
  },
  {
    "url": "404.html",
    "revision": "8f2680f4cfd20541361dc1e7b410f71e"
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
    "url": "assets/js/13.e05f7b0c.js",
    "revision": "ed74347fc684c261ae284ffdafc7658e"
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
    "url": "assets/js/app.a3faebe2.js",
    "revision": "fc54bbf8265e5ebc2bda807759b64730"
  },
  {
    "url": "assets/js/vuejs-paginate.c6dc7ffd.js",
    "revision": "0ff9b9856f163ada88b5e6b576321218"
  },
  {
    "url": "index.html",
    "revision": "df6916fefec2662ad8bbb72a1cd9614e"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "200382a24a496a3644e18b841df6435e"
  },
  {
    "url": "tag/index.html",
    "revision": "b257c7cdbfbbc55e4f5fa5a8efecedfe"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "06d03de311b8ee37afce3dd0ae14a576"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "99444773c0c863235ead28dd9d860529"
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
