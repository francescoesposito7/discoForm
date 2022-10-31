const firebaseConfig = {
    apiKey: "AIzaSyB8srW_dVNdUN2q2jSKHFuv11zh2oGjntU",
    authDomain: "rememberdisco-73206.firebaseapp.com",
    databaseURL:"https://rememberdisco-73206-default-rtdb.europe-west1.firebasedatabase.app/",
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
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let date = document.getElementById("date");
    let telephoneNo = document.getElementById("telephoneNo");
    console.log( name + surname + email + date + telephoneNo)
    firebase
    .firestore()
    .collection("users")
    .add({
        name: name,
        surname: surname,
        email: email,
        birthDate: date,
        telephoneNo: telephoneNo,
    });
}
  