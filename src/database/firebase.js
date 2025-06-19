// firebase.js atau firebase-config.js

// Import Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration dari environment Vite (pastikan prefix-nya VITE_)

const firebaseConfig = {
  apiKey: 'AIzaSyD9kjBUC9JeIi58YabbrVywes02c2B-hiE',
  authDomain: 'kmm-unj.firebaseapp.com',
  projectId: 'kmm-unj',
  storageBucket: 'kmm-unj.firebasestorage.app',
  messagingSenderId: '670034068497',
  appId: '1:670034068497:web:d9949d325f30645ec05db0',
  measurementId: 'G-Z181CEJHR3',
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

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
