'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9766ff9a8382bfd8e614c9ded6461b16",
"assets/AssetManifest.bin.json": "c8609de3b7b4075824f67d760fd3ff74",
"assets/AssetManifest.json": "d6a04a460593612f5f5db30806a748fc",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excel_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashboard.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/images/common/adn_logo.ico": "81ecfd7223dbf63437569bf08abd38b5",
"assets/assets/images/common/adn_logo.png": "56abd8a03a66836ba572691231b8bd04",
"assets/assets/images/home_page/image%25203.jpg": "b7048c211700a9afef495720a927c186",
"assets/assets/images/home_page/image%25204.jpg": "fa47fb8d931056b8c8f96c0b4c59b309",
"assets/assets/images/home_page/image1.jpg": "c1b1133372d316975cb2523f5235a535",
"assets/assets/images/home_page/image2.jpg": "78c035d5929e572251878b785dd74b9d",
"assets/assets/images/home_page/map.png": "67d5c7be3b479bbc0862bd3412939cb6",
"assets/assets/images/login/EmailIcon.png": "dab09a1d5997232956e1cc2cfe852ae7",
"assets/assets/images/login/EmailIcon.svg": "e8fd7fc39fc1bb65da5147e1fe45c0ff",
"assets/assets/images/login/EyeIcon.png": "3de213dfe3a434a605a8d1afc44b40d6",
"assets/assets/images/login/EyeIcon.svg": "45679ca613e78d79b7c8b219415790ce",
"assets/assets/images/login/facebook.png": "487429f7ade6e90917e0f1ba844e0cbe",
"assets/assets/images/login/google.png": "a5c1144f8a492cb85eb3163503a5cc1d",
"assets/assets/images/login/hide.png": "d435d0845b5aec188d6ad464494b7f66",
"assets/assets/images/login/lockIcon.png": "c9476ebc3a97b083f6e4ba107e8667e1",
"assets/assets/images/login/lockIcon.svg": "69a9dc4adeb78f6db6a7c62bb278fd08",
"assets/assets/images/login/mail-inbox-app.png": "047c125fa0b959d9e2268425cc72b4fc",
"assets/assets/images/login/padlock.png": "e3902334cd272e1d744d880b59c90752",
"assets/assets/images/login/user.png": "fcd8fa026a50630ef13e29dd0d176749",
"assets/assets/images/login/view.png": "07b2c56e22b6bdb2b68fe6cc10586873",
"assets/assets/images/login/working.png": "1e6cb36a8709f887901b071ae2ba0b7a",
"assets/assets/images/panel_profile/%25E3%2583%25AA%25E3%2583%25A9%25E3%2583%2583%25E3%2582%25AF%25E3%2583%259E%25E3%2581%25AA%25E7%258C%25AB%25E3%2581%258C%25E3%2581%25A8%25E3%2581%25A6%25E3%2582%2582%25E5%258F%25AF%25E6%2584%259B%25E3%2581%2584.jpg": "1921fbab655cf8ec5401dd87bca7d4e5",
"assets/assets/images/panel_profile/badge%2520(1).png": "989cf545b532f86b4ea92036f117f92a",
"assets/assets/images/panel_profile/badge%2520(2).png": "33e915b677e1626f8943b54a769eb00d",
"assets/assets/images/panel_profile/crown%2520(1).png": "25e908f2a3b9db9e1a6221db1802ebff",
"assets/assets/images/panel_profile/Kimi%2520no%2520na%2520wa%2520_%2520Ilustra%25C3%25A7%25C3%25B5es%2520retro,%2520Wallpapers%25E2%2580%25A6.jpg": "1dd95b1faae49faa42c3cc2770dca80f",
"assets/assets/images/panel_profile/trash-bin.png": "c88823046a0bd46d752d10cfb988c2c4",
"assets/assets/images/panel_profile/verify.png": "8a740b03641c546bcc0578e2c8b1d222",
"assets/assets/images/panel_projects/adobe.png": "cd473c83f256e8a95fe2fc3772ef2b58",
"assets/assets/images/panel_projects/deleteproject.png": "5d48cb9afa15e4d95162868bb5291fcd",
"assets/assets/images/panel_projects/filter.png": "368e24fb56f9d28874d2c523feff35a3",
"assets/assets/images/panel_projects/github.png": "81b9ccdf246f9f77c57dc274f32a840e",
"assets/assets/images/panel_projects/magnifying-glass.png": "c23cdbb63bba65c8d67d432d449e5bf3",
"assets/assets/images/panel_projects/microsoft.png": "3c1995cb1c944fef14002d0cf3cc9c89",
"assets/assets/images/panel_projects/newproject.png": "b98986edc9826735cfc39c07f88542e4",
"assets/assets/images/sidebar/home.png": "eb064f704abe329b8b223f71bc9e0908",
"assets/assets/images/sidebar/information.png": "33a04119ee23af0cd4e285c65020b954",
"assets/assets/images/sidebar/night.png": "26c6b4c296406224fae592c4bde96c0c",
"assets/assets/images/sidebar/projects.png": "7a2ba246fe083a747e6643200d968061",
"assets/assets/images/sidebar/settings.png": "a25d2cb6354045e10a4e7de7a0c40c2f",
"assets/assets/images/sidebar/sun.png": "7e9b4e64ea40dd76f447e5e27d96f5cb",
"assets/assets/images/sidebar/user_panel.png": "9429dd8c67d2c5f546455fd5c7af1269",
"assets/assets/images/sidebar/user_pic.jpg": "1921fbab655cf8ec5401dd87bca7d4e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "02bb05589b577c89968b00449385c6f1",
"assets/NOTICES": "367dd7221b4f74b730b1bc5a3871eafd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70697a1f8589f7898a6b66a046452153",
"/": "70697a1f8589f7898a6b66a046452153",
"main.dart.js": "142a5dd3f3407cd53b680f98451c855c",
"manifest.json": "d8db4ba3a41d45d3a49f93c4fd3df3bb",
"version.json": "c4554ac815626da6edc9f5827b2e4b89"};
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
