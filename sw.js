const CACHE_NAME = 'olivia-app-v1';
const assets = [
  '/',
  '/index.html',
  'https://cdn-icons-png.flaticon.com/512/2592/2592209.png'
];

// تثبيت التطبيق وتخزين الملفات الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// استقبال الإشعارات في الخلفية
self.addEventListener('push', event => {
  const options = {
    body: 'يوسف بيفكر فيكِ حالاً! ❤️',
    icon: 'https://cdn-icons-png.flaticon.com/512/2592/2592209.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2592/2592209.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Olivia App', options)
  );
});
