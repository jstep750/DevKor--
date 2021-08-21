import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase';
//var firebase = require("firebase");
var $ = require('jquery');

// Add the Firebase products that you want to use
//var auth = require("firebase/auth");
//var firestore = require("firebase/firestore");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var firebaseConfig = {
  apiKey: "AIzaSyA0E-3mY4_qBgV7RfxEdzcU4B7xjJ74e-c",
  authDomain: "enter-ef3a8.firebaseapp.com",
  databaseURL: "https://enter-ef3a8-default-rtdb.firebaseio.com",
  projectId: "enter-ef3a8",
  storageBucket: "enter-ef3a8.appspot.com",
  messagingSenderId: "505540008688",
  appId: "1:505540008688:web:d3d89e4a7ac7ba57178035",
  measurementId: "G-88XNV769FN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().getRedirectResult()
.then((result) => {
  if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
  }).catch((error) => {
    // Handle Errors here.
});

$(document).ready(function(){
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)		// 인증 후 어떤 데이터를 받아오는지 확인해보기 위함.
          alert("로그인 완료 "+user.email);
        } else {
          // No user is signed in.
          alert("로그인 X");
        }
    });
});
