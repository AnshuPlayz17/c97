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
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("username")
document.getElementById("username").innerHTML="welcome "+username+"!"

function addroom(){
      roomname=document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("roomname", roomname);
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>"
      document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location="index.html"


}


