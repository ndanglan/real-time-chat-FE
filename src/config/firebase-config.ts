import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyA-kVPRRCJrX3DN1_7Iks6aIM_5gmTRucw',
  authDomain: 'nodejs-realtime.firebaseapp.com',
  databaseURL: 'https://nodejs-realtime-default-rtdb.firebaseio.com',
  projectId: 'nodejs-realtime',
  storageBucket: 'nodejs-realtime.appspot.com',
  messagingSenderId: '299619179305',
  appId: '1:299619179305:web:c541db204c650c3f993538',
  measurementId: 'G-C4BZ86VC94',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth, firebaseApp };
