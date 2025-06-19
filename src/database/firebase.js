// firebase.js atau firebase-config.js

// Import Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration dari environment Vite (pastikan prefix-nya VITE_)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

// Inisialisasi Analytics hanya jika environment mendukung (browser saja)
let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Export instance
export { app, db, analytics };
