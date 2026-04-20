importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "732047395029" // ده الرقم اللي جبته من Project Settings
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/2592/2592209.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/2592/2592209.png'
    };
    return self.registration.showNotification(title, options);
});
