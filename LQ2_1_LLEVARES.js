//Using a CONDITIONAL Statement, Alert() and prompt()

let password = "your_password";
let username = prompt("Enter your username:");
let userPassword = prompt("Enter your password:");

if (userPassword === password) {
  alert("Welcome, " + username + "!");
} else {
  alert("Maybe Username or Password is Invalid or Does not Match");
}