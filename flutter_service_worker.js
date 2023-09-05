'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e2c116b9e661420e83e339bbed0221d3",
"index.html": "8d66cb50be802eba0e82e27de8aaf94e",
"/": "8d66cb50be802eba0e82e27de8aaf94e",
"main.dart.js": "bf0a0a2f7bade1dfd90087d6574ed546",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "85e37b56789d51a899b7bfea9779828a",
".git/config": "85fa9e7d6d8453f05570b666ab8d9e36",
".git/objects/3e/d8cfbc160fd658e69b6f61c851d54ff0726878": "e6d278269f3ac70cf0d1fd3462d89a3b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/ae693368fd30a11712b3c4c9928161533cf852": "fb45f6c8951b6c1b224cccd889ed5343",
".git/objects/34/9a68460daca359b384a0a97039a5806f193160": "796e95554c913fe55eb8ec2da9819acc",
".git/objects/5a/6876a877b9b6e783544c204ad63306363c6c43": "cb2d13506753830cd30515c2d81cb4e2",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/a47948de14f8854b676519699f4f51958ac32a": "311f7fb6d5e1bbcaf60a9c787e42cae5",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/279f6e60b442f67b79899fa066787afdaf4b53": "ee6b8807446bbab076f3a26b725affd8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/0ee9a0ce28f03fa1f3930a4e7c4cd5867c67f5": "b903d8c8282f3bd8d280295b01c8b920",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f3/b89f4c672a6eec64a166330292d255310e42d5": "4a0fab4ed320ee8b2e84b13b8f5910af",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/86838c5d315f5b94c12c7784917171912485b6": "e1be572c5ced6217e4d86f4204a2f6f9",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/2d2b2189ed61fce0f2943254fedf6c437c5c3a": "3ce151cc8078c7d0d355a5edaa927214",
".git/objects/ed/f600b3a52fb84250b9737144d77ecaf976b8e7": "01af165c0914bc9b660a4dace0c139b5",
".git/objects/4b/49c2c973f4b51f082f0adb51b286635b1c257c": "557d2fb677a38db2fdc568e321f1dfd3",
".git/objects/11/f2d61e086f59f4c6813633240208ea2669bf49": "8c9a02fa7fafb79b65a48ab00cd87c48",
".git/objects/1a/86de62100ee78e0abf3c272dee0c1a00f4cfdc": "453e311eb05ebd108b8175645e750ccf",
".git/objects/17/86dd26f1506c0d527232a14ed662b001df7ecb": "ca0a8d067d4473ef016296d9a7117192",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/26/0ccc6b8c32f0ee078e2598eb07847202d7ae84": "ecef6ce4bff95c606e1244ad45093758",
".git/objects/2a/ce137c51cbe65380244da95a4cbc560f3541a0": "c38580e260a8acc7fa580b260ab0c7a5",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/50bd38db6697e2b054fb26bfc9760103daef26": "c402acc7498e5dde4fa78bbcdee77f97",
".git/objects/00/c038d7f999c983d1c304ee8a1e297b475726ce": "5da883a01895a550e08287442ee1e27d",
".git/objects/36/99ced64d3a99f3b86a0d55d18e91952ac12f72": "4bde8ac460e805b05ef0cec91ad4fdfd",
".git/objects/09/05ed14ef8a945d5bd1740a03bb1b3e4f330cb8": "6e6eea000a6756d78f30a85ce9a9f2ff",
".git/objects/62/131ae49a434be05a2f79116b6e3545e4c61d84": "e50190565ab99c44237c1102155a6672",
".git/objects/54/753a85b5e6dc67d54496965a6e4bd0b2f2eddb": "36171231a7b5a6cfa4cf7e169c9fda64",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/6b89c771c079c845c13a36b56a2f30fafe8a01": "6f2aec77bc8c95115e0e99787142dc21",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/06/84ffc358409525253ac1c92677d9a4eaf001d8": "0941c4fb0e9af6060a1aa381f41d6a42",
".git/objects/06/cadf7e2ed49a389fabdd4e0c203c01f2661839": "0bf120d33cc281eef872505a984acddb",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/52854481a69bae80ae998d2f77ed3e19c24110": "e5c1acc46989e9117524e7f35e6d201d",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/67a52aeabfd88e094b2740a60dd945ae76efc1": "75229e4b360e69f756faecbcc8ec872d",
".git/objects/cc/1d5f9c0edffe1195cfb760401ef9b6c731b5cd": "5988767d14d4ad0a3c8a8221e96f0e1e",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/b71f067c76c05d83aae8356bf0cb0a5b7257cb": "6360216262b24e78dfa9bac425d9ec0c",
".git/objects/fa/af1b2e2ce2cfef7bd4a7e0f73989d51492e9b4": "6f41fe1001b6108596a05b8d0212c03f",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/eb35a58f5991c178a39f8a471cc0695037d945": "43a7e37985a5a03a0417083aeb41e11f",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cb/9151ddc1a0066f901395badc3c2cfe5c9f0567": "9164759a08183dad116dcab6a86715cd",
".git/objects/ce/7311b3811250516568ce71304249b1474d3135": "3c278c1bb1567e99e205d5a63a6f2888",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/09e0078d263b1e72d17159acd9a6e750fd6406": "42294cbc9402fe6a5a577f03b7a6158e",
".git/objects/15/faaf16399bc20e62600253aed6b4667d25d2e6": "eb548a80da18cfb95fa43cfe5670948f",
".git/objects/1c/e8663885e3dcdea6a6143b48c48cf4223b5770": "e13040afd3b90a58c727dbfc6361f8c7",
".git/objects/2e/3c3ec2739b08b6645bb009a792fd469c34c475": "5851f5b90c5afd908f651d1c7d60b516",
".git/objects/8b/89ec777a243252c630f8d3d2190f3588db1054": "c4386404e1698d82a17f3cf78b71df37",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00710a709304d959f905c33c621525ce",
".git/logs/refs/heads/main": "3650feed61d601d2d2a7966e4f324a4d",
".git/logs/refs/remotes/origin/main": "a6635322ec3dc524326f7f738f083760",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6f9c7915d459da23dd8301f2993b21aa",
".git/refs/remotes/origin/main": "6f9c7915d459da23dd8301f2993b21aa",
".git/index": "c953f30aff0db6260496376906dcc23e",
".git/COMMIT_EDITMSG": "0fb4faf94eb343542b80b5856e62e7cc",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "676d5ab6ae6aac7e41c758a8ae0515c5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
