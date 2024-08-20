'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "607d11ea7f6d4430dd02c4211da0ca48",
"version.json": "b3ab04ba38615313112f35f966e56b8b",
"index.html": "8e1eb1d4e026eabdc107056fb3e46ec2",
"/": "8e1eb1d4e026eabdc107056fb3e46ec2",
"main.dart.js": "4a0d575e70801592550e6009b96d4b53",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fb1ce790fbc08a155e5345e6df0af74",
"assets/AssetManifest.json": "a1d5bc6839547d8f2f36e7d5475df00a",
"assets/NOTICES": "0c7661fbbc9e120220be6318df297b9d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a7404b52051d180c2c25f9aabad9bcc3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dac7685df8be3789eee9e0478f0866f3",
"assets/fonts/MaterialIcons-Regular.otf": "0cfde7b118a200a9e9edd7cb5e351cf8",
"assets/assets/bot.png": "6754bcabcf97b1f56d09373a6802ac8e",
"assets/assets/ludoboard.png": "b1ac4062888243352f25bb590e0e31c1",
"assets/assets/human.gif": "e7068927ca5da91cd75409f601163999",
"assets/assets/images/crown/3rd.png": "c40896d88773bb0f7af67276dec3626a",
"assets/assets/images/crown/1st.png": "c8b54f7b04a944b23d42ec341979586d",
"assets/assets/images/crown/2nd.png": "173b3e173ec8ef4e27b696db9518d74a",
"assets/assets/images/dice/4.png": "64e3de43b1f0cd5e8d2d3ef3aed831c5",
"assets/assets/images/dice/5.png": "e0aad10fd4ce8075184cf30843739b98",
"assets/assets/images/dice/6.png": "c5416b2a52e8fc4ed08709ee78b7e264",
"assets/assets/images/dice/draw.gif": "cca60b595081d93353b4aca542d4c97e",
"assets/assets/images/dice/2.png": "f26f36962ec5c37adb91b721d3a545e1",
"assets/assets/images/dice/3.png": "6b54db869e6a18b90738099933be9477",
"assets/assets/images/dice/1.png": "9a79131208ed2edf1fa0734f68768242",
"assets/assets/computer.gif": "1d7d953f6128b29378eccfb408e0a675",
"assets/assets/12345.png": "603ea7c0d27e623ef4e02893ac54e5dd",
"assets/assets/2211.png": "5b3d9799abe29d4149b942658d49a48c",
"assets/assets/sounds/move.wav": "02d523b8f892be7fc308facaa5bd2322",
"assets/assets/sounds/roll_the_dice.mp3": "6b8950d758f3482aac3e3fc13a58c30a",
"assets/assets/sounds/laugh.mp3": "6bc60f4e0a03f7c5acff47a7b28a20c5",
"assets/assets/sounds/boardgame.png": "65cb113a988dcc0fbacdd81f4ae2bf9b",
"assets/assets/sounds/suc.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/man.png": "cd95d8b0bdc47599af32490a29970df2",
"assets/assets/bot.gif": "4af46445164c9d1699989e034347a936",
"assets/assets/logo.png": "67b35b56bb154ea64356e350cbf40b24",
"assets/assets/SMAITLOGO.png": "2e957f3979bcebd4a68687652259036d",
"assets/assets/gameover.png": "45c65f750fcff67fee07bc59e3eb58bb",
"assets/assets/smait.png": "155d51c23c9cfd7d05ef350d90569c47",
"assets/assets/computer.png": "3f2adb67f79bfb03bf4e222dcf6d0a3d",
"assets/assets/splace.png": "cf5548f5e99b54dd304f2a020327618d",
"assets/assets/finger/2.png": "d350db5fed382b5f9fcdcd2557eade9e",
"assets/assets/finger/1.png": "faaa0ce350ca267f89c23616e4cf569d",
"assets/assets/homescreen.png": "5b3066a21eb5d6d75127fe980157370e",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
