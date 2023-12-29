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

const usersRef = firebase
  .firestore()
  .collection("users_12_2023");
let tot = 0;
let totSent = 0;
  usersRef
  .get()
  .then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        tot+=1;
        let row  = `<tr>
                        <td>${data.birthDate}</td>
                        <td>${data.email}</td>
                        <td>${data.name}</td>
                        <td>${data.surname}</td>
                        <td>${data.telephoneNo}</td>
                        `;

        if(!data.emailSent){ 
          row += `<td><button id="send-mail-btn" type="button" class="btn btn-success" onclick="sendMail('${data.email}')">Invia Mail</button></td> 
                  <td><button id="delete-usr-btn" type="button" class="btn btn-danger" onclick="deleteUser('${data.email}')">Elimina Invitato</button></td></tr>`
        } else {
          totSent+=1;
          row += `</tr>`
        }
        let table = document.querySelector('#usersTable tbody');
        table.innerHTML += row
        document.getElementById("tot").innerHTML = tot;
        document.getElementById("totSent").innerHTML = totSent;
    })
})
.catch(err=>{
    console.log(`Error: ${err}`)
});

const db = firestore.collection("users_12_2023");
const mail = firestore.collection("mail_12_2023");

function sendMail(email) {
  var message = `<html>
    <body>
    <h1>REMEMBER PARTY</h1>
    <p><strong>Venerdì 22 Dicembre</strong></p>
    <p><strong>2011-2023</strong></p>
    <p>Ciao!</p>
    <p>Ti confermiamo la registrazione all’evento!</p>
    <p>Verrai inserita/o in una lista nominale all&rsquo;ingresso del locale.Ti baster&agrave; quindi dimostrare la tua identit&agrave; con un documento in corso di validit&agrave; e contribuire alla riuscita della serata con una quota di <strong>10&euro;</strong> da pagare in cassa.</p>
    <p><strong>Orario: 23:30 - 05:00</strong></p>
    <p>Rimani aggiornato, iscriviti al canale Telegram ufficiale: <strong>https://t.me/rememberparty</strong></p>
    <p>Per qualsiasi richiesta, puoi contattarci:</p>
    <p>WhatsApp: <strong>https://wa.me/393486380115</strong> <br/> Email: <strong>paolochiarella@snackulture.it</strong></p>
    </body>
    </html>`

    db.where("email", "==", email).limit(1).get().then(query => {
      const thing = query.docs[0];
      let tmp = thing.data();
      tmp.emailSent = true;
      thing.ref.update(tmp);
  });

    mail
    .add({
      to: email,
      message: {
        subject: "Registrazione avvenuta con successo!",
        text: "",
        html: message
      },
    })
    .then(() => {
      location.reload();
      console.log("Queued email for delivery!");
    });
}

function deleteUser(email) {
  var result = confirm("Sei Sicuro?");
    if (result) {
      db.where("email", "==", email).where("emailSent", "==", false).limit(1).get().then(query => {
        const thing = query.docs[0];
        console.log(thing.ref.id);
        db.doc(thing.ref.id).delete()
        .then(() => {
          location.reload();
          console.log("Queued user deleted!");
        })
      });
    }

   
}
