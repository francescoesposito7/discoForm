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
  