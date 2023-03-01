'use strict';
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

console.log("INICIALIZO FIREBASE");
    const firebaseConfig = 
    {
        apiKey: "AIzaSyBnGGoJnUol6hbz81VDwTehspdLZ6c_wbs",
        authDomain: "trabajojsdaw205.firebaseapp.com",
        projectId: "trabajojsdaw205",
        storageBucket: "trabajojsdaw205.appspot.com",
        messagingSenderId: "874529955771",
        appId: "1:874529955771:web:150acfb614364947d1ae9e"
    };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {firebaseConfig};