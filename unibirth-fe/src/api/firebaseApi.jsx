// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyOsqoZjmx3f75EIqqrrcFQrN2XsDZbeQ",
  authDomain: "uni-birth.firebaseapp.com",
  projectId: "uni-birth",
  storageBucket: "uni-birth.appspot.com",
  messagingSenderId: "157033568661",
  appId: "1:157033568661:web:bf12dbf7828658a87c3e9c",
  measurementId: "G-914K1QHY2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   ReapiKey: process.env.API_KEY,
//   authDomain: process.env.AUTO_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSEING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

// // const firebaseConfig = {
// //   API_KEY: "AIzaSyCyOsqoZjmx3f75EIqqrrcFQrN2XsDZbeQ",
// //   AUTO_DOMAIN: "uni-birth.firebaseapp.com",
// //   PROJECT_ID: "uni-birth",
// //   STORAGE_BUCKET: "uni-birth.appspot.com",
// //   MESSEING_SENDER_ID: "157033568661",
// //   APP_ID: "1:157033568661:web:bf12dbf7828658a87c3e9c",
// //   MEASUREMENT_ID: "G-914K1QHY2Y",
// // };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);

// export { app, analytics, storage };
