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
  