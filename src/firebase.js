import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCOYqpCTFGI4AqeWMu7LEnQSfXLxnQFsPQ",
  authDomain: "notificationcenter-aed87.firebaseapp.com",
  projectId: "notificationcenter-aed87",
  storageBucket: "notificationcenter-aed87.appspot.com",
  messagingSenderId: "987243827543",
  appId: "1:987243827543:web:7b6f5daf4cf12da68aae12"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

export const getTokenFromFirebase = () => {
	return getToken(messaging, {
		vapidKey: "BMIhiPZyTP89xC_RYg3M8gyPlRtyuvHvH7ukX5OMgUDRIvhsUymvhPWCYqNbukNWA2zPYlgzia7KiREgua8k7Wc",
	})
		.then((currentToken) => {
			if (currentToken) {
				console.log("current token for client: ", currentToken);
			} else {
				console.log(
					"No registration token available. Request permission to generate one."
				);
			}
		})
		.catch((err) => {
			console.log("An error occurred while retrieving token. ", err);
		});
};

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			console.log(payload);
			resolve(payload);
		});
	});