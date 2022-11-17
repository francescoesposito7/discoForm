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
const db = firestore.collection("users");
const mail = firestore.collection("mail");

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const openModalBtn = document.querySelector(".btn-open");
  const closeModalBtn = document.querySelector(".btn-close");
  
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

  db
  .doc()
  .set({
    name: firstName,
    surname: lastName,
    email: email,
    birthDate: date,
    telephoneNo: telephoneNo,
  })
  .then(() => { })
  .catch((error) => {
    console.log(error);
  });

  var message = `<html>
  <body>
  <h1>REMEMBER PARTY</h1>
  <p><strong>2011-2022</strong></p>
  <p>Verrai inserita/o in una lista nominale all&rsquo;ingresso del locale.Ti baster&agrave; quindi dimostrare la tua identit&agrave; con un documento in corso di validit&agrave; e contribuire alla riuscita della serata con una quota di <strong>10&euro;</strong> da pagare in cassa.</p>
  <p><strong>Orario: 23:30 - 04:30</strong></p>
  <p>Rimani aggiornato, iscriviti al canale Telegram ufficiale: <strong>https://t.me/rememberparty</strong></p>
  <p>Per qualsiasi richiesta, puoi contattarci:</p>
  <p>WhatsApp: <strong>https://wa.me/393486380115</strong> <br/> Email: <strong>paolochiarella@snackulture.it</strong></p>
  </body>
  </html>`

  mail
  .add({
    to: email,
    message: {
      subject: "Registrazione avvenuta con successo!",
      text: "",
      html: message
    },
  })
  .then(() => console.log("Queued email for delivery!"));

  document.getElementById("registerForm").reset();
  functionAlert();
})

function functionAlert(msg, myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function() {
      confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}




  