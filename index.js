let btn = document.getElementById("btn");
let email = document.getElementById("email");
let firstName = document.getElementById("firstN");
let lastName = document.getElementById("lastN");
let password = document.getElementById("password");
let myP = document.querySelectorAll(".par");
let errorIcon = document.querySelectorAll(".icon");

btn.addEventListener("click", (e) => {
  let emailValue = email.value;
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let passwordValue = password.value.trim();
  e.preventDefault();
  if (
    !validateEmail(emailValue) &&
    firstNameValue == "" &&
    lastNameValue == "" &&
    passwordValue == ""
  ) {
    email.classList.add("error");
    firstName.classList.add("error");
    lastName.classList.add("error");
    password.classList.add("error");
    myP.forEach((e) => {
      e.classList.remove("d-none");
    });
    errorIcon.forEach((e) => {
      e.classList.remove("d-none");
    });
  } else {
    location.reload();
  }
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
