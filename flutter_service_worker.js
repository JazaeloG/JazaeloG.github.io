'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "d1f790667e5b35c2c99b0ad73915e215",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "77763f3a9d2af2cc01c5179750b2f0c7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64b409d454b15a420ecb242255704374",
".git/logs/refs/heads/master": "64b409d454b15a420ecb242255704374",
".git/logs/refs/remotes/origin/master": "c6e00a84b3dfbacc435dbb67dcdace03",
".git/objects/00/62018aec06028018cc3dedbb6f2908d68c5def": "9c482f17ad035267b5d75cbb976b086f",
".git/objects/01/2c1c6da150cb95de8c15ea3bb10a358a97ea11": "8e253381795a2751620e5df25dcab4a0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/a80275b0966496cb6b6ecb6527f69c9f2a2183": "bf6659a440f2d9c85aca504bef2c8ff6",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/1c/5ece4813fd338f79cc6a7cd9e3b3a0d375b04f": "11473a336c20e69426eef3a82225875e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/43/c13a227b538491b0032879d13a12ee4827990f": "8fc8ac44aa600b3797430ea77e877fca",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/d366d16b8c7e823fd3b66271030261cf8974a8": "4dc616b3a8ffa62259eca7eb6fd759b6",
".git/objects/5d/3a76c1be061190b0bd700ebc88d6a742825cca": "218e756db2e852948c8fdf778066f81c",
".git/objects/61/31072a7e6d73fde1de701066e3d1f8a3565a63": "eb73c16b6f4570449faf085e62726749",
".git/objects/64/de0e41f00f720aa55d10a04a00966fe1ca7bed": "cff1deb8d0b78bdb4df40f0cd9e3b633",
".git/objects/69/0a04a61b2dd10ec9b3e16b4cdcc6b27df6b20a": "ec8ea36236dd13db528dc92059ae0d21",
".git/objects/6b/7c5dc00b5e38c3d42bb69ac35faf6d2ea3b5d8": "bf00b5a71b040bd02d08a60a8c47f96c",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6e/53371519cdfd88585440077cca0be3e047d97f": "871fd1d55098d91cc38811683613ef83",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/7a/3814f68b8dc3e1efa499bc8680c93494e6166a": "ab4def6fe20a7401266c069a73cf155a",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8c/2c9a9eec25ddf127066f298e56e4ee6bda5b48": "6811fc6a2b96c09da8b1873e9ce86bc9",
".git/objects/8d/78b5f76e164d3bf82cecaa66563c4251b625fb": "ca91533f21c36f8b76392bd8f795a50c",
".git/objects/90/fc827f0efc35266965f16b2da26f4fb3aa7ca5": "8c1b24131c8d155cb0211e86fbec8bfb",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/b6c86858f9a5492032a0273281bc67180cbd38": "78f81808ab56e01fba7c4f14e6cb6350",
".git/objects/9f/62038fc421453a07eebcdc53265089998e3d6f": "9de1177c2b97ce080267e5a092dfba82",
".git/objects/a8/82fe8647e78db0ce6b4fe15908901524011d3b": "f0f734d6b5b2d3122a24fae14f1804f2",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ab/b22e1d8d4d02495ec9a879f2c54c6fbfe961b0": "55148962f4254de3041cd4025c269654",
".git/objects/ac/2c692976dbccb45b6e20c447337272a9c0ba11": "824c846b01242ca4e80745704fb52d54",
".git/objects/ad/1b4a29c315c11e0243439125c25489de92d4c3": "ae8df9d422dfb3f760466656b857ac84",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/ae/f6aa4ab2dfc538cfde26f0f0bc0c548d6f5143": "2b965e98366cf65d71fbdeb04f0c6225",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b1/fd3cb5746c67a168a97e1b38ca5795cfc745d6": "61451f2fe7bd693e28a9c8ba45704148",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b5/ba51025560f00f59a5e9121943032566bfdf38": "0f0f4384c519a163d3733277ec2d0ed2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6dcbc4dfe6b9588fd9985f541437ebb866efb2": "f46ac0ec39507a136354eab57e830c28",
".git/objects/ba/08c75abbddc07cc1e2e78afd8feb55a8bc0cc1": "843274461f119bb2789b3ffb1bd1ab65",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/c751e2533fb3702c032fd2a29f4397d98c16de": "770eec0c5e78580e0a706046d3e7b51b",
".git/objects/bc/3bfe9d9e27096c7c3b7c8f24fbfe4fc7a0f1a7": "5e62e3dd12662684ba354fad1e769b88",
".git/objects/bc/a2562754a6620df36dc94865ddda9dfa26bc3e": "c78bab8f8ea33b4fcc18e0e472364dc9",
".git/objects/c5/585bcb0bfd0c8c10697f1171a88bdd4b88e9f3": "9d9f029a3cacbb34bd146761d84d8129",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d6/6dcb60705a636265b77bff5ef940eded7d62e9": "af5f05d8a38baed72d69c10135641457",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/db/f41a127ced5c8241b7d1129000eb4cd0e65647": "5a6efbd185ad5b30aa3bebed3545cdc8",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/70de25c0de0f7fac1b6788a63735b57bc1ceb6": "4273d0a97ea2211dc9c9561c93c792a6",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/0ff110003bfc26981a542157c482bd3af05f62": "710544829f572773523394d4142ec41c",
".git/objects/f9/5f08524760f688597e87725932188a024004da": "b21d04df65465d5d64b86946e179dc48",
".git/objects/fa/f5c9925fa2f985f43a17a5a3fa98ec0d54d572": "a37c8a0900a81767678deda58d66b872",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/refs/heads/master": "b9fad4e80492dcb3cc067f9fe828c159",
".git/refs/remotes/origin/master": "b9fad4e80492dcb3cc067f9fe828c159",
"assets/AssetManifest.bin": "72f57138f3623543efadc4ffd72e3330",
"assets/AssetManifest.bin.json": "7e0659542a1cb23b9f382f99e0f0ab8f",
"assets/AssetManifest.json": "92481a079609d2879122cbd71333aeab",
"assets/assets/icons/dimension.svg": "82a6742d2f0990068d865ed64740e458",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excel_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/logout-svgrepo-com.svg": "4f69decc07b5928ba42aba441408ea32",
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
"assets/assets/icons/pregunta.svg": "5639009e610cc8fbcca4f92b94b250eb",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/test.svg": "51e49d861f8fa1115859442739660b51",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/image/checkbox-liked.svg": "36985a9577817744231acc49de0f77bc",
"assets/assets/image/estadistica.svg": "2182a6a893855046aafdc0d5215457dd",
"assets/assets/image/fondo.jpg": "1d912e70f428fc17688b0ffc5153b4c5",
"assets/assets/image/ia.svg": "aeff90187b6758e14e1882e8b712d9be",
"assets/assets/image/icon_active_faq.svg": "87abdfff1ecc42376a0f647314a8a469",
"assets/assets/image/icon_active_features.svg": "a3b301456797d23dc914fbc38678c27e",
"assets/assets/image/icon_active_home.svg": "e514447060f1262e0162c8a41d52bf1b",
"assets/assets/image/icon_active_pricing.svg": "f20095340edf43dd139411d6b5e5a365",
"assets/assets/image/icon_inactive_faq.svg": "6a62d054f7adbc14e92886d9ebc1d3e0",
"assets/assets/image/icon_inactive_features.svg": "0ca6d534693a5c2f36f047c46dbb8b40",
"assets/assets/image/icon_inactive_home.svg": "a5544e4c0c2c0ea361b6a9d91b40db0a",
"assets/assets/image/icon_inactive_pricing.svg": "55005be62853b12e8f3d259f311851db",
"assets/assets/image/seguridad.svg": "b4235ce6eb29db61adab26676c0c050b",
"assets/assets/image/thumbnail.png": "736ae06e7f80baed1cb81d65a25d76f8",
"assets/assets/image/thumbnail.svg": "e8f7a1c823ac939ac5f9345866b08fd9",
"assets/assets/image/undraw-selection.svg": "840aa3ca24f252c456558fe4959772f2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "88ce988bc1f9373790fe124d724df97e",
"assets/NOTICES": "168fbddcdf3129e7845835b94c9a4072",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8faebb457f1f73012c089b4846ba82d",
"/": "e8faebb457f1f73012c089b4846ba82d",
"main.dart.js": "53cda4c95420b6750458e817043559b0",
"manifest.json": "1a6c06d5210ce3992f9e4788d10b2e6f",
"version.json": "0de35c3fa69489651005f093e37ee286"};
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
