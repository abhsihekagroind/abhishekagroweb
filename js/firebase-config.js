// js/firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBvJoIP0-rCSnkwwm6ATqIFemsxgfmla7g",
    authDomain: "abhishek-agro-admin.firebaseapp.com",
    projectId: "abhishek-agro-admin",
    storageBucket: "abhishek-agro-admin.firebasestorage.app",
    messagingSenderId: "507703167668",
    appId: "1:507703167668:web:c5e796ee717fb8c46a65e1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Make available globally
window.auth = auth;
window.db = db;
