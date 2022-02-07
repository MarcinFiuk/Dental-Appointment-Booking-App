// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCJHvQzHa6gr4og0yOs0XWcUfRuFuH9jWc',
    authDomain: 'dentalappointmentbookingsystem.firebaseapp.com',
    databaseURL:
        'https://dentalappointmentbookingsystem-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'dentalappointmentbookingsystem',
    storageBucket: 'dentalappointmentbookingsystem.appspot.com',
    messagingSenderId: '741087554712',
    appId: '1:741087554712:web:9c06dd6c3b6f5055e2b4ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
