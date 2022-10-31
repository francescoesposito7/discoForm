// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDU0OLWd0h5X6kYaVLHNXTg4Z4ZSfWaydw",
    authDomain: "rememberparty-f2451.firebaseapp.com",
    projectId: "rememberparty-f2451",
    databaseURL:"https://rememberparty-f2451-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "rememberparty-f2451.appspot.com",
    messagingSenderId: "317422815123",
    appId: "1:317422815123:web:0f466c49d3e02569c24a66",
    measurementId: "G-06560FB3N9"
  };
  
firebase.initializeApp(firebaseConfig);

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');
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
    document.getElementById("registerForm").reset();

}
