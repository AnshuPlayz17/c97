//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB0tHv7NXkI050tvsFpecwoyO959yqMWHw",
      authDomain: "kwitter-e1275.firebaseapp.com",
      databaseURL: "https://kwitter-e1275-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1275",
      storageBucket: "kwitter-e1275.appspot.com",
      messagingSenderId: "602899615437",
      appId: "1:602899615437:web:ff23096ff2bbf51322a384"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   username=localStorage.getItem("username")
   room_name=localStorage.getItem("room_name")
   function Send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtick="<h4>"+name+"<img src='tick.png' class='user_tick' ></h4>";
message1="<h4 class='message_h4' > "+message+"</h4>";
likebutton="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
thumbsup="<span class='glyphicon glyphicon-thumbs-up'>like="+like+"</span></button><hr>";
join=namewithtick+message1+likebutton+thumbsup
document.getElementById("output").innerHTML+=join

//End code
      } });  }); }
getData();

function Logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}


function updatelike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value
      updatelikes=Number(likes)+1
      console.log(updatelikes)
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      });
}