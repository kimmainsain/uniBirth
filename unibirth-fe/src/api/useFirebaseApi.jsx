import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyOsqoZjmx3f75EIqqrrcFQrN2XsDZbeQ",
  authDomain: "uni-birth.firebaseapp.com",
  projectId: "uni-birth",
  storageBucket: "uni-birth.appspot.com",
  messagingSenderId: "157033568661",
  appId: "1:157033568661:web:bf12dbf7828658a87c3e9c",
  measurementId: "G-914K1QHY2Y",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };
