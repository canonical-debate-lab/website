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
    "url": "webpack-runtime-c1167469c828bd77edf2.js"
  },
  {
    "url": "app-a0269f2f846263aae38f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9f760c8c76edb74daa4c.js"
  },
  {
    "url": "index.html",
    "revision": "b9764085fd9dd38c89d25c7e2a036d2f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a969333f95bdff8acfa724953b9916f8"
  },
  {
    "url": "1.bf5bb61d6a239fb476f0.css"
  },
  {
    "url": "component---src-pages-index-js.17e560df251f0652976c.css"
  },
  {
    "url": "0.66483ced8e776b88ccec.css"
  },
  {
    "url": "component---src-pages-index-js-86f856844fae4d560035.js"
  },
  {
    "url": "0-3c7c858292df3c4992cd.js"
  },
  {
    "url": "1-faeaaf897b0becdb155f.js"
  },
  {
    "url": "2-0ffd66f35116ef1badfe.js"
  },
  {
    "url": "static/d/395/path---index-6a9-VOAYXN12B9nqscjPgTyoVwvY.json",
    "revision": "4769abb9ee5ab521a98961370d13fa62"
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
