import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyB9BLOFu_W9ljKOrGZ3vDc07aMcy8ns0Tg",
    authDomain: "eyad-2ddc2.firebaseapp.com",
    databaseURL: "https://eyad-2ddc2.firebaseio.com",
    projectId: "eyad-2ddc2",
    storageBucket: "eyad-2ddc2.appspot.com",
    messagingSenderId: "589652418607",
    appId: "1:589652418607:web:337d71ff77a1e46864a6da"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  export default db;