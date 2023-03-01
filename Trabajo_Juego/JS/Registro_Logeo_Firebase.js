'use strict';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

import {firebaseConfig} from "./firebase.js";
import {Jugar} from "./juego.js";
// Inicialiar la conexión Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const analytics = getAnalytics(app);


function login() 
{
    console.log("LOGIN");
    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password)
    .then(function(user) 
        {
            console.log("User logged in: ", user);
            // Redirigir al panel de usuario o mostrar un mensaje
            ActivaBoton();
        }
    )
    .catch(function(error) 
        {
            console.log("Error logging in: ", error);
            alert("Error logging in: ", error)
            // Mostrar mensaje de error
        }
    );
}

function registro() {
    console.log("REGISTRADO");
    alert("REGISTRADO");
    var email = document.getElementById("email").value;;
    var password = document.getElementById('password').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email, password)
    .then(function(user) 
        {
            console.log("User registered: ", user);
            // Redirigir al panel de usuario o mostrar un mensaje
            ActivaBoton();
        }
    )
    .catch(function(error) 
        {
            console.log("Error registering: ", error);
            // Mostar mensaje de error
            alert("Error registering: ", error);
        }
    );
}

function inicio()
{
    Jugar();
    document.getElementsByClassName("btn btn-primary")[0].addEventListener("click",(e)=>
        {
            e.preventDefault();
            registro();            
        }
    );
    document.getElementsByClassName("btn btn-secondary")[0].addEventListener("click",(e)=>
        {
            e.preventDefault();
            login();
        }
    );
}

function ActivaBoton()
{
    let Juega = document.getElementById("Jugar");
    Juega.disabled = false;
}
window.onload=inicio;