var firebaseConfig = {
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
const db = firestore.collection("users_12_2023");

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  
  //Get Form Values
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let telephoneNo = document.getElementById("telephoneNo").value;

  if ((firstName == "") || (firstName == "undefined")) {
    alert("Il campo Nome è obbligatorio.");
    document.modulo.name.focus();
    return false;
  }
    //Effettua il controllo sul campo COGNOME
    else if ((lastName == "") || (lastName == "undefined")) {
    alert("Il campo Cognome è obbligatorio.");
    document.modulo.surname.focus();
    return false;
  }

  if (document.modulo.date.value.substring(6,10) < 1900) {
    alert("Impossibile utilizzare un valore inferiore a 1900 per l'anno");
    document.modulo.date.value = "";
    document.modulo.date.focus();
    return false;
  }

  if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
    alert("Inserire un indirizzo email corretto.");
    document.modulo.email.select();
    return false;
  }

  if ((isNaN(telephoneNo)) || (telephoneNo == "") || (telephoneNo == "undefined")) {
    alert("Il campo Telefono è numerico ed obbligatorio.");
    document.modulo.telephoneNo.value = "";
    document.modulo.telephoneNo.focus();
    return false;
  }
  let controlDate = new Date(date)
  if(controlDate.getFullYear() <= 1998) {
    db
    .doc()
    .set({
      name: firstName,
      surname: lastName,
      email: email,
      birthDate: date,
      telephoneNo: telephoneNo,
      emailSent: false,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });
  
    document.getElementById("registerForm").reset();
    let msg = "Registrazione avvenuta con Successo. A breve riceverai una mail di conferma."
    functionAlert(msg);
  } else {
    document.getElementById("registerForm").reset();
    let msg = "Siamo Spiacenti! Registrazione non avvenuta. Occorre avere un\' età minima di 25 anni per accedere all\'evento."
    functionAlert(msg);
  }
})

function functionAlert(msg,myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function() {
    confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}
