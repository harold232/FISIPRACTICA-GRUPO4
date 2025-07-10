'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "060880a650d66241ff1ba25e598b811c",
"version.json": "322dfa94430cc69aa45ce83495f46466",
"index.html": "7559f177b4c5f0e4adc3a95103b7e79c",
"/": "7559f177b4c5f0e4adc3a95103b7e79c",
"main.dart.js": "40677824c38f40ac64ff9cf4f209bc5b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e66e1314dbabf0aa13062137d7bf013",
"assets/AssetManifest.json": "98f8149561b491fe558c4cbb20f2421d",
"assets/NOTICES": "477ec5a92b6150e836ca9799f726fb97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "27a51c411a8a468bf4f887abcd245b3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e3271188c8e278e18ca07e038e2026b6",
"assets/fonts/MaterialIcons-Regular.otf": "3a348d366909debcad291b18d9eb54c4",
"assets/assets/ferreyros.png": "b307f8cbb3f708abb33573429e972046",
"assets/assets/cosapi.jpg": "c1a35bc9c7db13723af48da85b9cd631",
"assets/assets/logo_app.png": "bf2349a5e556f9c30b8393a2eb53f02c",
"assets/assets/logo_blanco.png": "b204cbc8a41ea2f348b4887d88c641ae",
"assets/assets/logo_azul.png": "7d14f3c76bc4d3404259bc5de27c6c0f",
"assets/assets/map_icon.png": "24d3e03331de3ad0deb65a380fa50701",
"assets/assets/alicorp.png": "ddbd824e3f370fbb65e1d1e69467a69b",
"assets/assets/bcp.png": "0ac45c1094c18b3ffb0221019af390ec",
"assets/assets/cemex.png": "b95681396fedf306d5f5522feaf349fa",
"assets/assets/inca.jpg": "ca9d311ffd0796b9cde0c59099395053",
"assets/assets/home_icon.png": "714ee089499a32539ef7ff55575d0145",
"assets/assets/chat_icon.png": "d9a21a05d90ded65faa6882d4f524d2f",
"assets/assets/portfolio_icon.png": "7e2e5228f935fd43d5656d7ce0c3351d",
"assets/assets/student_login_image.jpg": "2384060d21092a6a856416b08ec0c5d9",
"assets/assets/backus.jpg": "470434dec92ab078e6dfb740f3c2f9a2",
"assets/assets/profile_picture.jpg": "222f3daaf100f3b6f9ffe1bc5f9df46e",
"assets/assets/scotiabank.jpg": "232df4da893a45b0e46069f1005c3dfa",
"assets/assets/bbva.png": "e5781115f27efe9af15690833cd64e07",
"assets/assets/southern.png": "17c56bf956456232934479850e32a126",
"assets/assets/chatbot_icon.png": "607c03082592cdd5778eb9df446d49fd",
"assets/assets/logo.png": "9a01860f3134496877d4abe310c82768",
"assets/assets/user_icon.png": "b1c8b7d497b96d8731f8d9993b5631e5",
"assets/assets/recruiter_login_image.jpg": "537c28ab393bdf2a1e9be71ff04a92bc",
"assets/assets/office-building.png": "4413d3bd03705a0ff586498f977bb67c",
"assets/assets/tottus.png": "8461a04ad73c40d9899976bce6ef7cf3",
"assets/assets/lindley.png": "e0448de6c77a99e4805c9d8632b781e0",
"assets/assets/claro.png": "8d0e16c02a0a0e2bef7e670d185f4961",
"assets/assets/mibanco.png": "04d530a9feeaa22cb5344e2d8f85baa2",
"assets/assets/interbank.png": "ed1ea4c597d7f4a9f9f6506a1c9ef35b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
