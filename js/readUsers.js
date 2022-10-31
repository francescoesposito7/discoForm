// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDU0OLWd0h5X6kYaVLHNXTg4Z4ZSfWaydw",
  authDomain: "rememberparty-f2451.firebaseapp.com",
  projectId: "rememberparty-f2451",
  databaseURL:"https://rememberparty-f2451-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "rememberparty-f2451.appspot.com",
  messagingSenderId: "317422815123",
  appId: "1:317422815123:web:0f466c49d3e02569c24a66",
  measurementId: "G-06560FB3N9"
};

firebase.initializeApp(firebaseConfig);

const usersRef = firebase
  .firestore()
  .collection("users");
let tot = 0;
  usersRef
  .get()
  .then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        tot+=1;
        let row  = `<tr>
                        <td>${data.newUser.birthDate}</td>
                        <td>${data.newUser.email}</td>
                        <td>${data.newUser.name}</td>
                        <td>${data.newUser.surname}</td>
                        <td>${data.newUser.telephoneNo}</td>
                  </tr>`;
        let table = document.querySelector('#usersTable tbody');
        table.innerHTML += row
        document.getElementById("tot").innerHTML = tot;
    })
})
.catch(err=>{
    console.log(`Error: ${err}`)
});
  