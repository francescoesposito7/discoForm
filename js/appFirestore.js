  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAz-Mr9afhvilZF2S80OR7I0az7_OAesGE",
    authDomain: "rememberparty-704ab.firebaseapp.com",
    projectId: "rememberparty-704ab",
    databaseURL:"https://rememberparty-704ab-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "rememberparty-704ab.appspot.com",
    messagingSenderId: "232836695865",
    appId: "1:232836695865:web:21f7c8ba162d1b94d84ae8"
  };

firebase.initializeApp(firebaseConfig);
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked)

function addUserBtnClicked() {
    const form = document.querySelector("#registerForm");
    const addUserInputsUI = document.getElementsByClassName("user-input");
    // this object will hold the new user information
    let newUser = {};

    // loop through View to get the data for the model 
    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

        let key = addUserInputsUI[i].getAttribute('data-key');
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
    }
    firebase
    .firestore()
    .collection("users")
    .add({newUser});
}
  