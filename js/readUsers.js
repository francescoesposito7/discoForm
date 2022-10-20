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

usersRef.once('value', function(snapshot){
	if(snapshot.exists()){
		var content = '';
		snapshot.forEach(function(data){
			var val = data.val();
			content +='<tr>';
			content += '<td>' + val.descripcion + '</td>';
			content += '<td>' + val.direccion + '</td>';
			content += '<td>' + val.estado + '</td>';
			content += '<td>' + val.imagen + '</td>';
			content += '<td>' + val.tipo + '</td>';
			content += '<td>' + val.udisplayName + '</td>';
			content += '<td>' + val.uemail + '</td>';
			content += '</tr>';
		});
		$('#ex-table').append(content);
	}
})
