# html
<!DOCTYPE html>
<html>
<head>
<meta charset=”utf-8">
<meta http-equiv=”X-UA-Compatible” content=”IE=edge”>
<title>Form</title>
<link rel=”stylesheet” href=””>
<! — The core Firebase JS SDK is always required and must be listed first →
<script src=”https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>
<script src=”https://www.gstatic.com/firebasejs/7.18.0/firebase-auth.js"></script>
<script src=”form.js”></script>
</head>
<body>
<h1>Form</h1>
<div id=”fornContainer”>
<div id=”header”>
</div>
<input type=”email” placeholder=”email” id=”email”>
<input type=”password” placeholder=”password” id=”password”>
<button onclick=”signUp()” id=”signUp”>Sign Up</button>
<button onclick=”signIn()” id=”signIn”>Sign In</button>
<button onclick=”signOut()” id=”signUp”>Sign Out</button>
</body>
