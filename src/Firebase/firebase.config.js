//firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID

    // apiKey: "AIzaSyDH9pqmuiHaFfwyR3vrxwC2sGI7E0j0KcI",
    // authDomain: "fragrance-shop.firebaseapp.com",
    // projectId: "fragrance-shop",
    // storageBucket: "fragrance-shop.appspot.com",
    // messagingSenderId: "116440282608",
    // appId: "1:116440282608:web:b171ab7f3190f11de11935"
};

export default firebaseConfig;