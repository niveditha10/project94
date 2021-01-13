
var firebaseConfig = {
      apiKey: "AIzaSyBHotio-NQjAoguQaO4aP1UKBCMqLfb_Eg",
      authDomain: "lets-chat-f99ef.firebaseapp.com",
      databaseURL: "https://lets-chat-f99ef-default-rtdb.firebaseio.com",
      projectId: "lets-chat-f99ef",
      storageBucket: "lets-chat-f99ef.appspot.com",
      messagingSenderId: "267873514729",
      appId: "1:267873514729:web:bb71707c750eb32bcaac78",
      measurementId: "G-4FRZCK513Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    function addRoom(){

      var room_name =document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"room_name"
      });

    }

function logout(){

window.location="login.html"

}

function body_onload(){

var name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="welcome "+name;

}