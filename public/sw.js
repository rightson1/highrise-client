if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const o=e=>a(e,n),t={module:{uri:n},exports:r,require:o};i[n]=Promise.all(c.map((e=>t[e]||o(e)))).then((e=>(s(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Vector.svg",revision:"1ffa78d0bc112639115bb01cb7d6f32d"},{url:"/_next/static/-s3__jqaY_sXiNi-m6hnv/_buildManifest.js",revision:"5340544701b57e7bd73a2d248ab3fd57"},{url:"/_next/static/-s3__jqaY_sXiNi-m6hnv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/282-1259e508d9145dba.js",revision:"1259e508d9145dba"},{url:"/_next/static/chunks/299-fc5c8bec260ddfd4.js",revision:"fc5c8bec260ddfd4"},{url:"/_next/static/chunks/39-0b038eb299956e53.js",revision:"0b038eb299956e53"},{url:"/_next/static/chunks/424-52912f18a739c2c7.js",revision:"52912f18a739c2c7"},{url:"/_next/static/chunks/502-34ff1e4a6377bbc4.js",revision:"34ff1e4a6377bbc4"},{url:"/_next/static/chunks/531-6d69c9bce7e2c89f.js",revision:"6d69c9bce7e2c89f"},{url:"/_next/static/chunks/623-8128ab1233801240.js",revision:"8128ab1233801240"},{url:"/_next/static/chunks/659-72b732e7d6455fa0.js",revision:"72b732e7d6455fa0"},{url:"/_next/static/chunks/769-ca8b848fde186281.js",revision:"ca8b848fde186281"},{url:"/_next/static/chunks/800-265fb0b1f3564872.js",revision:"265fb0b1f3564872"},{url:"/_next/static/chunks/806-ca8a13fc5d69697a.js",revision:"ca8a13fc5d69697a"},{url:"/_next/static/chunks/828-e4d98eca0c18dcb8.js",revision:"e4d98eca0c18dcb8"},{url:"/_next/static/chunks/830-5724b6d382ddc933.js",revision:"5724b6d382ddc933"},{url:"/_next/static/chunks/950-578e38208ed0251e.js",revision:"578e38208ed0251e"},{url:"/_next/static/chunks/970-1667388376dbb85d.js",revision:"1667388376dbb85d"},{url:"/_next/static/chunks/framework-7751730b10fa0f74.js",revision:"7751730b10fa0f74"},{url:"/_next/static/chunks/main-200f5b5b6f5f09e7.js",revision:"200f5b5b6f5f09e7"},{url:"/_next/static/chunks/pages/_app-5bf70c46e8c6800f.js",revision:"5bf70c46e8c6800f"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-1eda581dc4cf7574.js",revision:"1eda581dc4cf7574"},{url:"/_next/static/chunks/pages/itemSearch-55c19897ffc66778.js",revision:"55c19897ffc66778"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-6574d32fbfffa45e.js",revision:"6574d32fbfffa45e"},{url:"/_next/static/chunks/pages/orders-fc4f584041e8f254.js",revision:"fc4f584041e8f254"},{url:"/_next/static/chunks/pages/search-c7fcf6c968ee368f.js",revision:"c7fcf6c968ee368f"},{url:"/_next/static/chunks/pages/stores-8b7249e3899b3793.js",revision:"8b7249e3899b3793"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D-372fa5f8b0a40486.js",revision:"372fa5f8b0a40486"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D/about-c5d700134ef2ce8a.js",revision:"c5d700134ef2ce8a"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D/carts-17839884d7c9cce4.js",revision:"17839884d7c9cce4"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D/chat-4d8a412fdaa2bfb5.js",revision:"4d8a412fdaa2bfb5"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D/item/%5Bid%5D-0e18032dd45b339b.js",revision:"0e18032dd45b339b"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D/order/%5Bid%5D-5b27ea2f05c9bfce.js",revision:"5b27ea2f05c9bfce"},{url:"/_next/static/chunks/pages/stores/%5Bstore%5D/orders-6fec4591121397ba.js",revision:"6fec4591121397ba"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/dc1a0dc95ef070dc.css",revision:"dc1a0dc95ef070dc"},{url:"/_next/static/media/empty.1845aba7.png",revision:"1b3b833189b748d3078b65b02ca94948"},{url:"/_next/static/media/roboto-all-300-normal.39add8fb.woff",revision:"39add8fb"},{url:"/_next/static/media/roboto-all-400-normal.2e9e9400.woff",revision:"2e9e9400"},{url:"/_next/static/media/roboto-all-500-normal.d96daa81.woff",revision:"d96daa81"},{url:"/_next/static/media/roboto-all-700-normal.ca3d0fdb.woff",revision:"ca3d0fdb"},{url:"/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2",revision:"88798412"},{url:"/_next/static/media/roboto-cyrillic-400-normal.2d9c9d60.woff2",revision:"2d9c9d60"},{url:"/_next/static/media/roboto-cyrillic-500-normal.aa68ea54.woff2",revision:"aa68ea54"},{url:"/_next/static/media/roboto-cyrillic-700-normal.258a358e.woff2",revision:"258a358e"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2",revision:"cd7c5715"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.d7827ae3.woff2",revision:"d7827ae3"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a1b5c90d.woff2",revision:"a1b5c90d"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.dd3651fb.woff2",revision:"dd3651fb"},{url:"/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2",revision:"25dc89b0"},{url:"/_next/static/media/roboto-greek-400-normal.63e6dc18.woff2",revision:"63e6dc18"},{url:"/_next/static/media/roboto-greek-500-normal.533b03d2.woff2",revision:"533b03d2"},{url:"/_next/static/media/roboto-greek-700-normal.432b858b.woff2",revision:"432b858b"},{url:"/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2",revision:"bc5ce703"},{url:"/_next/static/media/roboto-greek-ext-400-normal.2b547ded.woff2",revision:"2b547ded"},{url:"/_next/static/media/roboto-greek-ext-500-normal.7ea6cffa.woff2",revision:"7ea6cffa"},{url:"/_next/static/media/roboto-greek-ext-700-normal.a8d16efd.woff2",revision:"a8d16efd"},{url:"/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2",revision:"a4eae32d"},{url:"/_next/static/media/roboto-latin-400-normal.f2894edc.woff2",revision:"f2894edc"},{url:"/_next/static/media/roboto-latin-500-normal.3170fd9a.woff2",revision:"3170fd9a"},{url:"/_next/static/media/roboto-latin-700-normal.71b2beb8.woff2",revision:"71b2beb8"},{url:"/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2",revision:"37d4965d"},{url:"/_next/static/media/roboto-latin-ext-400-normal.21abc8c8.woff2",revision:"21abc8c8"},{url:"/_next/static/media/roboto-latin-ext-500-normal.85ebfb55.woff2",revision:"85ebfb55"},{url:"/_next/static/media/roboto-latin-ext-700-normal.6af98c24.woff2",revision:"6af98c24"},{url:"/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2",revision:"b3d3e960"},{url:"/_next/static/media/roboto-vietnamese-400-normal.c95fc061.woff2",revision:"c95fc061"},{url:"/_next/static/media/roboto-vietnamese-500-normal.7f8c0554.woff2",revision:"7f8c0554"},{url:"/_next/static/media/roboto-vietnamese-700-normal.72bf832f.woff2",revision:"72bf832f"},{url:"/avatar2.jpeg",revision:"9e422db71bc9c018baf9419e74bbc9d7"},{url:"/burger.png",revision:"ad26bd7f8c3621ec2f50daf0e03b0744"},{url:"/carrot.svg",revision:"8765c27111e4eca2a406aa13fd9e0898"},{url:"/chicken.png",revision:"09b3fbc544bbcebc78251817ffa1fd55"},{url:"/clip.svg",revision:"72f979c53ebf07e036e205849ce8f3b6"},{url:"/empty.png",revision:"1b3b833189b748d3078b65b02ca94948"},{url:"/face.svg",revision:"30b821d93a54c3809744d74817b062a9"},{url:"/favicon.ico",revision:"4ef758e60ee5c58afcc50e6fcf385848"},{url:"/fork.png",revision:"40abb08d25912e98d2868058c6ab73b0"},{url:"/free.svg",revision:"5519789fd321815d804857158357d82d"},{url:"/hoho.svg",revision:"feb58c8983a35e41644a45a6248c1147"},{url:"/icon-192x192.png",revision:"b8c72bc646c9e633d7b981f491993446"},{url:"/icon-256x256.png",revision:"40eb580f520d9be84aaceb1ad4d5e079"},{url:"/icon-384x384.png",revision:"13c72a2d5ea5738c7c52c40681138d2f"},{url:"/icon-512x512.png",revision:"ac6cd671e1b212e649318fabf1d749ef"},{url:"/img/NotFound.svg",revision:"a1b3b242d6e14a539db4ff0dd421c48d"},{url:"/img/avatar.png",revision:"2c8d68b94893461a6ef19b1e39a54bc0"},{url:"/img/c1.png",revision:"224909c3d1bd55a21f2f980e5080d404"},{url:"/img/c2.png",revision:"2f250608fe98d37dfea6215b0cb3b69d"},{url:"/img/c3.png",revision:"e72c3f94d46dee951a86c42fba0baddb"},{url:"/img/c4.png",revision:"c2565540cf6c7adf3fb9e40f999c6b59"},{url:"/img/c6.png",revision:"c78110d3f19aaab16c1f5c482e09ebe1"},{url:"/img/c7.png",revision:"a8a26690a88fd6f7054aaab3b5471a46"},{url:"/img/chef1.png",revision:"dc8ab556a5d38ee1b137683abeaeeda2"},{url:"/img/cheff.png",revision:"8e340e21ee788afc8eec8fd26241a6b7"},{url:"/img/cu1.png",revision:"0fb22930938b597a66f334f607c8bfe0"},{url:"/img/cu2.png",revision:"56549fb75879d7839212022281defc67"},{url:"/img/cu3.png",revision:"7d518068b10f3adbf1616547ece4b17b"},{url:"/img/cu4.png",revision:"1688dbb4c2f1955cc1b015094d562a30"},{url:"/img/cu5.png",revision:"6b41a2c43db8a99aa95f44f38ade989f"},{url:"/img/cu6.png",revision:"705ea7a31458afb1232c3c886b796bb5"},{url:"/img/d1.png",revision:"3200fb8256c21ffe70a29778d4dd65b6"},{url:"/img/d2.png",revision:"94c99a26abe7618244048e2142078632"},{url:"/img/d3.png",revision:"543b88704bec6df747392e44ed921eaa"},{url:"/img/d4.png",revision:"0e812d1dfd624ca46444b823f6a440a0"},{url:"/img/d5.png",revision:"13c92a43abd7b6983f331ee32a0337a3"},{url:"/img/d6.png",revision:"36057d2bd89a03427b72cc7e7f222fbe"},{url:"/img/d7.png",revision:"871cd54090e8e5a1546bec5cdfc9e857"},{url:"/img/d8.png",revision:"c84ea3fa0ad8efb558c970a5f6b6f8b9"},{url:"/img/delivery.png",revision:"2c9fbbff6de0f56b9138938073ee8004"},{url:"/img/doll.svg",revision:"af067233323248a07579b7202d748948"},{url:"/img/emptyCart.svg",revision:"840927a478f9d9f9e9f689935a8a9404"},{url:"/img/f1.png",revision:"ebedbc695058badb69dba130a8f39a5c"},{url:"/img/f10.png",revision:"74a1117111deeb3bb60416a0f303bef1"},{url:"/img/f2.png",revision:"b779c60f8fefeaece5be00362117b454"},{url:"/img/f3.png",revision:"f461e01acef2ef931d71b0c79a253af5"},{url:"/img/f4.png",revision:"0b0e150d3c318863e91da4c9f39322c9"},{url:"/img/f5.png",revision:"f5cdbe726c298e4453cce3bddf0b5acd"},{url:"/img/f6.png",revision:"af6fc8e19ae0dd8d23afc3173340569b"},{url:"/img/f7.png",revision:"f76b6eea36aabe4c4ab0147ed6e3de77"},{url:"/img/f8.png",revision:"50442354b745dde7be9c8d17529d3e72"},{url:"/img/f9.png",revision:"fe55f3a491b5e65d8d317db01acc883a"},{url:"/img/fi1.png",revision:"8f16a6132b7e48b0c2a46e5b92179743"},{url:"/img/fi2.png",revision:"12dcaeb2eae284fb1462b2eac1ad414e"},{url:"/img/fi3.png",revision:"681d739a19ce0a5790f823fd38a2a81a"},{url:"/img/fi4.png",revision:"f14b2d256dbd1357b53c238e8b8f39f5"},{url:"/img/fi5.png",revision:"5e354f126ff99ed443bed243a8c1d395"},{url:"/img/heroBg.png",revision:"6736e3901e48f86caafc5479ad05dd90"},{url:"/img/hotel.png",revision:"51b062a8eed66f767b1cd3421d61ea94"},{url:"/img/i1.png",revision:"7c45efced22987d22e223f673d39c7b9"},{url:"/img/i2.png",revision:"b661e710944345f5156373b2719aa63f"},{url:"/img/i3.png",revision:"449b14c5d47c66544194a4ee0267b254"},{url:"/img/i4.png",revision:"9ec6ff7b0f13ab80815197ec2b8ab192"},{url:"/img/i5.png",revision:"455187b169890c0f4c11482b21e8e357"},{url:"/img/i6.png",revision:"1af88beca4195f40a6fd907b16de4c14"},{url:"/img/i7.png",revision:"625d7e1f5e2cb0e33bcb77d6b700cf47"},{url:"/img/logo.png",revision:"17a01ce1d4ceeffa421420a13f997943"},{url:"/img/r1.png",revision:"a091fa71c19282dbcacb2019877c7e75"},{url:"/img/r2.png",revision:"e54638d2f49cd16dc045b399c9ceb1d4"},{url:"/img/r3.png",revision:"2168aa5e156d039ce06e61ef8277d807"},{url:"/img/r4.png",revision:"36415ab03e1eef58a95cac7e3da47974"},{url:"/img/r5.png",revision:"135de58c0e75e6699a99b3562116875c"},{url:"/manifest.json",revision:"498c428a253cacaf9cd47c7ca2d4a0ec"},{url:"/meat.svg",revision:"29aa738bc8a7774c79761bfdcec8dc16"},{url:"/plate.png",revision:"4ef758e60ee5c58afcc50e6fcf385848"},{url:"/plate.svg",revision:"4ef758e60ee5c58afcc50e6fcf385848"},{url:"/rice.png",revision:"aa7f99a299d613d7c0f53bb71e58be14"},{url:"/right.svg",revision:"18b52b81400b21c169c97411ec4c26e0"},{url:"/run.png",revision:"02f9b2de250b9248350318c6a2584942"},{url:"/scooter.svg",revision:"7fd106efd7526d1095bf7679ab77f307"},{url:"/send.svg",revision:"db5d4a42e5743e729d3cf72d4672a3e4"},{url:"/smile.svg",revision:"8973c21438455a256557f78568728fe7"},{url:"/tomato.svg",revision:"186664a88c1e15c85c3c0b0701066c1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
