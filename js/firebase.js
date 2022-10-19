const firebaseConfig = {
    apiKey: "AIzaSyB8srW_dVNdUN2q2jSKHFuv11zh2oGjntU",
    authDomain: "rememberdisco-73206.firebaseapp.com",
    databaseURL: "https://rememberdisco-73206-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rememberdisco-73206",
    storageBucket: "rememberdisco-73206.appspot.com",
    messagingSenderId: "276922566600",
    appId: "1:276922566600:web:5961dae5577f4f319ca2fd"
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