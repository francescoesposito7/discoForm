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
const app = firebase.initializeApp(firebaseConfig);

document.getElementById('registerForm').addEventListener('submit', submitForm);

var messagesRef = firebase.database().ref('RemeberDB');

// Get values
var name = getInputVal('name');
var surname = getInputVal('surname');
var birthDate = getInputVal('birthDate');
var telephoneNo = getInputVal('telephoneNo');
var email = getInputVal('email');

const writeToDatabase = (name, surname, birthDate, telephoneNo, email) => {
    firebase
      .database()
      .ref("RemeberDB/" + Date.now())
      .set({
        name: name,
        surname: surname,
        birthDate: birthDate,
        telephoneNo: telephoneNo,
        email: email,
      });
  };
//saveMessage(name, surname, birthDate, telephoneNo, email);

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

// --------------------------
// ADD
// --------------------------

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked)

function addUserBtnClicked() {

	const usersRef = dbRef.child('users');

	const addUserInputsUI = document.getElementsByClassName("user-input");

 	// this object will hold the new user information
    let newUser = {};

    // loop through View to get the data for the model 
    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

        let key = addUserInputsUI[i].getAttribute('data-key');
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
    }

	usersRef.push(newUser)
    
   console.log(myPro)
}