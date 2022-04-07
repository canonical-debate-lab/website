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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-9be3eff696ae2409c354.js"
  },
  {
    "url": "app-3e7652f0986731890ded.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-be5ba3d6c002f01ca007.js"
  },
  {
    "url": "index.html",
    "revision": "fa1a0f258410ed54de71072ca22f9d68"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c2d8efe8e629d17377cea0fecaa78760"
  },
  {
    "url": "0.5ac8f156ca922cc4708e.css"
  },
  {
    "url": "1.ba8506cc24abe6e3b410.css"
  },
  {
    "url": "1-ce9333083af60a466fd9.js"
  },
  {
    "url": "component---src-pages-index-js-2d7b9b0925eafda9be2f.js"
  },
  {
    "url": "0-e8da01a49ee695ccf09e.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "87d1f82e193a35d7b785e4cc4bbb2509"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
