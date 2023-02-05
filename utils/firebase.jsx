import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDkSAqVBylMMp5yuaNTrusczyLvmNLsW0Y",
    authDomain: "admins-f0142.firebaseapp.com",
    projectId: "admins-f0142",
    storageBucket: "admins-f0142.appspot.com",
    messagingSenderId: "210520532864",
    appId: "1:210520532864:web:dc61c6237f75434e32c365"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);