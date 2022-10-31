const firebaseConfig = {
    apiKey: "AIzaSyDU0OLWd0h5X6kYaVLHNXTg4Z4ZSfWaydw",
    authDomain: "rememberparty-f2451.firebaseapp.com",
    projectId: "rememberparty-f2451",
    storageBucket: "rememberparty-f2451.appspot.com",
    messagingSenderId: "317422815123",
    appId: "1:317422815123:web:0f466c49d3e02569c24a66",
    measurementId: "G-06560FB3N9"
  };
  
firebase.initializeApp(firebaseConfig);
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked)

function addUserBtnClicked() {
    const form = document.querySelector("#registerForm");

    firebase
    .firestore()
    .collection("users")
    .add({
        name: form.name.value,
        surname: form.surname.value,
        birthDate: form.birthDate.value,
        email: form.email.value,
        telephoneNo: form.telephoneNo.value,
    });
}
  