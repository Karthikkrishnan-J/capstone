function login() {
  var loginName = "<h2>Enter Your Name</h2><br><input style='width:30%; margin-bottom:5%' type='text' id='username'><br>";
  var next_page = "<button onclick='next()' id='next'>NEXT</button>"
  var row = loginName + next_page;
  document.getElementById("Login").innerHTML = row;
}
function next(){
  window.location="menu.html";
}