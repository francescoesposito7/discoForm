const firebaseConfig = {
  apiKey: "AIzaSyAz-Mr9afhvilZF2S80OR7I0az7_OAesGE",
  authDomain: "rememberparty-704ab.firebaseapp.com",
  databaseURL: "https://rememberparty-704ab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rememberparty-704ab",
  storageBucket: "rememberparty-704ab.appspot.com",
  messagingSenderId: "232836695865",
  appId: "1:232836695865:web:21f7c8ba162d1b94d84ae8"
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
