import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBA2ZlBFrLZO4Cw7_tfFPShsudrt-yS49Y",
    authDomain: "learnearne.firebaseapp.com",
    projectId: "learnearne",
    storageBucket: "learnearne.appspot.com",
    messagingSenderId: "978749308516",
    appId: "1:978749308516:web:b55ae40564ce9876682971",
    measurementId: "G-V32RLFDX67"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()