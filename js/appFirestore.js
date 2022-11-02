  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8srW_dVNdUN2q2jSKHFuv11zh2oGjntU",
    authDomain: "rememberdisco-73206.firebaseapp.com",
    databaseURL: "https://rememberdisco-73206-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rememberdisco-73206",
    storageBucket: "rememberdisco-73206.appspot.com",
    messagingSenderId: "276922566600",
    appId: "1:276922566600:web:5961dae5577f4f319ca2fd"
  };

firebase.initializeApp(firebaseConfig);
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked)

function addUserBtnClicked() {
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
    .addDoc({newUser});
}
  