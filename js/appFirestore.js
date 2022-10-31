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
  