function adduser(){
    username=document.getElementById("user").value;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html"
}