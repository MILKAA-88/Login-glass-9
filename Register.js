  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAZm1_GN7YGiONZmk5_QPmDKRdyXnbeSoE",
    authDomain: "login-glass-cad21.firebaseapp.com",
    projectId: "login-glass-cad21",
    storageBucket: "login-glass-cad21.firebasestorage.app",
    messagingSenderId: "543114254068",
    appId: "1:543114254068:web:fb9df1e1368a9d7a1e30a1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 //Inputs 
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 const submit = document.getElementById('Submit').value;
 submit.addEventListener("click, function(event){
   event.preventDefault()
   alert(5)
 }