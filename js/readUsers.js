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
                        <td>${data.birthDate}</td>
                        <td>${data.email}</td>
                        <td>${data.name}</td>
                        <td>${data.surname}</td>
                        <td>${data.telephoneNo}</td>
                  </tr>`;
        let table = document.querySelector('#usersTable tbody');
        table.innerHTML += row
        document.getElementById("tot").innerHTML = tot;
    })
})
.catch(err=>{
    console.log(`Error: ${err}`)
});
  