var firebaseConfig = {
    apiKey: "AIzaSyBmqTPbwmapFXTUuQSAKPTJsdo_MkrNcww",
    authDomain: "famup-ec70b.firebaseapp.com",
    databaseURL: "https://famup-ec70b-default-rtdb.firebaseio.com",
    projectId: "famup-ec70b",
    storageBucket: "famup-ec70b.appspot.com",
    messagingSenderId: "1026663563777",
    appId: "1:1026663563777:web:27d347fc5ad44991d07600"
};

firebase.initializeApp(firebaseConfig)

roomname = localStorage.getItem("roomname")
username = localStorage.getItem("username")

function send() {
    msg = document.getElementById("msginput").value

    firebase.database().ref("/").child(roomname).push({
        name: username,
        message: msg
    })
    document.getElementById("msginput").innerHTML = ""
}

function getData() {
    firebase.database().ref("/" + roomname).on('value', function (snapshot) {
        document.getElementById("msgsdiv").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();

            firebase_message_id = childKey;
            message_data = childData;
            Name = message_data['name']
            message = message_data['message']
            name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png' width='25px' height='25px'></h4>"
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4><br><br>"
            row = name_with_tag + message_with_tag
            document.getElementById("msgsdiv").innerHTML += row

            
        });
    });
}
getData();

function logout(){
    localStorage.removeItem("roomname")
    localStorage.removeItem("username")
    window.location = "loginpage.html"
}