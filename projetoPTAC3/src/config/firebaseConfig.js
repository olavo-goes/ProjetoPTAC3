// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCo7JzRo4imwR_LjBNbps4oEBU8fUGqHOc',
  authDomain: 'olavo-6d28c.firebaseapp.com',
  projectId: 'olavo-6d28c',
  storageBucket: 'olavo-6d28c.firebasestorage.app',
  messagingSenderId: '797314721406',
  appId: '1:797314721406:web:0357e03fefea60975e9a2f',
  measurementId: 'G-JKKD4GL5JX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
