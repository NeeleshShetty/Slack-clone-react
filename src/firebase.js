// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBkpWO5EeLTWPb0iucRxDuGAQdMLPwBE0M',
	authDomain: 'slack-clone-9be67.firebaseapp.com',
	projectId: 'slack-clone-9be67',
	storageBucket: 'slack-clone-9be67.appspot.com',
	messagingSenderId: '993925408831',
	appId: '1:993925408831:web:92577e068077f1ca72b08a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };