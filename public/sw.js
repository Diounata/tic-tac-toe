if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return n[s]||(e=new Promise((async e=>{if("document"in self){const n=document.createElement("script");n.src=s,document.head.appendChild(n),n.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!n[s])throw new Error(`Module ${s} didn’t register its module`);return n[s]}))},e=(e,n)=>{Promise.all(e.map(s)).then((s=>n(1===s.length?s[0]:s)))},n={require:Promise.resolve(e)};self.define=(e,a,t)=>{n[e]||(n[e]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+e.slice(1)};return Promise.all(a.map((e=>{switch(e){case"exports":return n;case"module":return i;default:return s(e)}}))).then((s=>{const e=t(...s);return n.default||(n.default=e),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-779af46608fcf4bb0110.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/714-407a1e6cec7e7dc90ebd.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/de71a805-9594f216327006a31bba.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/main-b734e03257a3b7558feb.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/404-7b2342597e2fb1efd90d.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/_app-88d841c1a97bc633aea8.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/about-0b1690c97d8c9315b32c.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/history-58dd2fc1b62ec4786865.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/how-to-play-fc3d84324f81ff0fc9d8.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/index-ab9f593dd88d4c041893.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/play-ee2a8e05422f2692437a.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/players-63eee1168e789ba9d959.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/players/edit-7ae334e86331cf3b248a.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/players/new-004740386fe423f3da31.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/settings-b67a1dd1e35a249df5e9.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/pages/statistics-733fe76d771f0be286a5.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/3c7cdd4c58ace3beb6fd.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/445593f770a9c8f49124.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/5c4a8aaab58664c53092.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/5c63aaf099f72e1cfc3e.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/8289aa3bbf5d6964c6c9.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/873ce481cb416b7ebc41.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/8b6941ad791d3dc56ed9.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/b6247b919d6b064cde03.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/ba494d521e658bcd8ad9.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/cbc4bfea075045c4ef2e.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/css/e467f46434f94a4ad315.css",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/vZ6BMOaN4Is5nYrubNydV/_buildManifest.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/_next/static/vZ6BMOaN4Is5nYrubNydV/_ssgManifest.js",revision:"vZ6BMOaN4Is5nYrubNydV"},{url:"/favicon.svg",revision:"3ed61b5a9c862c5e46858522abf0e202"},{url:"/manifest.json",revision:"47d671ec67688affd0d1cfed865fb281"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:n,state:a})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
