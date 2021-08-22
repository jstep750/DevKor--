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
  apiKey: "AIzaSyAIClo7wQnXWdTCMQq5jsmGIu2fKvnEhq4",
  authDomain: "hello-podo.firebaseapp.com",
  projectId: "hello-podo",
  storageBucket: "hello-podo.appspot.com",
  messagingSenderId: "511816057818",
  appId: "1:511816057818:web:fd0d70d96121f60054b6e3",
  measurementId: "G-N5J1ZP0JPK"
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
      var user = result.user;
      console.log("*"+user);
      var db = firebase.firestore();
      db.collection("user").doc(user.uid).set({
          email: user.email,
          signupMethod: "google"
      }).then(function(){
      }).catch(function(error) {
          console.error("Error adding document: ", error);
          alert(error.code+" / "+error.message);
      });
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

//logout();

function logout() {
  firebase.auth().signOut().then(function() {
    console.log("logout success");
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    console.log(error.code, error.message);
  });
}