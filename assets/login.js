// validation form login
// const inputUsername = document.querySelector(".login-username");
// const inputPassword = document.querySelector(".login-password");
// const btnLogin = document.querySelector(".loginButton");

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email-error');
var password_error = document.getElementById('password-error');
// validation form login

// email.addEventListener('textInput', email_Verify);
// password. addEventListener('textInput', pass_Verify());
//  function validated() {
//   if(email.value.length < 9) {
//     email_error.style.display = "block";
//     return false;  
//   }
//   if(password.value.length < 9) {
//     password_error.style.display = "block";
//     return false;  
//   }
// }
// function email_Verify() {
//   if (email.value.length >= 8) {
//     email_error.style.display = "none";
//     return true;  
//   }
// }
// function password_Verify() {
//   if (password.value.length >= 8) {
//   password_error.style.display = "none";
//     return true;  
//   }
// }

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Please fill all these fields");
    
  } 
  else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Logged in successfully");
      window.location.href = "index.html";
    } else {
      alert("Login failed");
    }
  }
});