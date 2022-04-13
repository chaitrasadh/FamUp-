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


function LogIn(){
    username = document.getElementById("usernameinput").value
    roomname = document.getElementById("roomnameinput").value

    localStorage.setItem("username",username)
    localStorage.setItem("roomname",roomname)

    firebase.database().ref("/").child(roomname).update({
            
    })

    window.location = "msgpage.html"
}

