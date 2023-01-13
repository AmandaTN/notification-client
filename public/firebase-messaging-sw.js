// Scripts for firebase and firebase messaging
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
	apiKey: "AIzaSyCOYqpCTFGI4AqeWMu7LEnQSfXLxnQFsPQ",
  authDomain: "notificationcenter-aed87.firebaseapp.com",
  projectId: "notificationcenter-aed87",
  storageBucket: "notificationcenter-aed87.appspot.com",
  messagingSenderId: "987243827543",
  appId: "1:987243827543:web:7b6f5daf4cf12da68aae12"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});