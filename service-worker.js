self.addEventListener('install', function(e) {
  console.log('Service Worker установлен');
});

self.addEventListener('fetch', function(e) {
  // Пока ничего не кэшируем, просто пропускаем
});
