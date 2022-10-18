// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsjHBJe9nfv8YBMaGbNu0tkmNKcGL-a_U",
  authDomain: "rememberdiscoparty.firebaseapp.com",
  projectId: "rememberdiscoparty",
  storageBucket: "rememberdiscoparty.appspot.com",
  messagingSenderId: "1031019882194",
  appId: "1:1031019882194:web:cc2762b673562ac6acaf0b",
  measurementId: "G-DHLGNSR4T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById('registerForm').addEventListener('submit', submitForm);

var messagesRef = firebase.database().ref('RemeberDB');

// Get values
var name = getInputVal('name');
var surname = getInputVal('surname');
var birthDate = getInputVal('birthDate');
var telephoneNo = getInputVal('telephoneNo');
var email = getInputVal('email');


saveMessage(name, surname, birthDate, telephoneNo, email);
document.getElementById('registerForm').reset();


// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, surname, birthDate, telephoneNo, email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        birthDate: birthDate,
        telephoneNo: telephoneNo,
        email: email,
    });
}