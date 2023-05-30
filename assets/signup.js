// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".signup-username");
const inputPasswordRegister = document.querySelector(".signup-password");
const btnRegister = document.querySelector(".signupButton");


// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("Please fill all these fields");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Sign up success");
    window.location.href = "login.html";
  }
});