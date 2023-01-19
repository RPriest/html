//company data
var firebaseConfig = {
apiKey:"AIzaSyCvDRJDEeMMItKSly4DK7YMWvofQyG_r44",
authDomain:"advocacy-app-dev.firebaseapp.com",
databaseURL:"https://advocacy-app-dev.firebaseio.com",
projectId:"advocacy-app-dev",
storageBucket:"advocacy-app-dev.appspot.com",
messagingSenderId:"7603400618",
appId:"1:7603400618:web:5c17e9158d727c23abc5d3"
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
