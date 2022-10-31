  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAz-Mr9afhvilZF2S80OR7I0az7_OAesGE",
    authDomain: "rememberparty-704ab.firebaseapp.com",
    projectId: "rememberparty-704ab",
    storageBucket: "rememberparty-704ab.appspot.com",
    messagingSenderId: "232836695865",
    appId: "1:232836695865:web:21f7c8ba162d1b94d84ae8"
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
  