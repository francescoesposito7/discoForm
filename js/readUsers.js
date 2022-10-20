// Initialize Firebase
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

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

var table = document.querySelector('#usersTable tbody');
usersRef.on('value', snap => {
	var users = snap.val();
	for(var i in users) {
	 var row = table.insertRow(-1);
		for(var j in users[i]) {				
			cell = row.insertCell(-1);				
			cell.innerHTML = users[i][j];			
		}
	}
});

