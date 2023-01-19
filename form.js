var firebaseConfig = {
apiKey:"AIzaSyAC7IU-swlsA1fMTveq66_4uXWVo3-R12I",
authDomain:"advocacy-app-20907.firebaseapp.com",
databaseURL:"https://advocacy-app-20907.firebaseio.com",
projectId:"advocacy-app-20907",
storageBucket:"advocacy-app-20907.appspot.com",
messagingSenderId:"88488987094",
appId:"1:88488987094:web:0545bd16011f58f9c93c77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
var email = document.getElementById("email");
var password = document.getElementById("password");
const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
alert("Signed Up");
}
function signIn(){
var email = document.getElementById("email");
var password = document.getElementById("password");
const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
}
function signOut(){
auth.signOut();
alert("Signed Out");
}
auth.onAuthStateChanged(function(user){
if(user){
var email = user.email;
alert("Active User " + email);
//Take user to a different or home page
//is signed in
}else{
alert("No Active User");
//no user is signed in
}
});
