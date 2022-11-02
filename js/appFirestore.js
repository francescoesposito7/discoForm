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
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("users");

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked)

function addUserBtnClicked() {
    db.doc()
    .set({
      name: "nome",
      surnname: "nome",
      email: "nome",
      birthDate: "nome",
      telephoneNo: "nome",
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });
}
  