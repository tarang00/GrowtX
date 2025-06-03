
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyArhazAuyCMP2trNzO8miutbrTLdgOAaPw",
  authDomain: "growtx-89571.firebaseapp.com",
  projectId: "growtx-89571",
  storageBucket: "growtx-89571.firebasestorage.app",
  messagingSenderId: "57012263641",
  appId: "1:57012263641:web:92536d4c21edd2cb6bbcc8",
  measurementId: "G-DPM43S2RDT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;
