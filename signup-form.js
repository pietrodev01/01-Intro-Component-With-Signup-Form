const form = document.querySelector("#form");
const inputs = form.querySelectorAll("input");

// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    const value = input.value.trim();
    const errorText = input.nextElementSibling;

    if (input.id === "firstname" || input.id === "lastname") {
      isValid = validateText(value);
    } else if (input.id === "email") {
      isValid = validateEmail(value);
    } else if (input.id === "password") {
      isValid = validatePassword(value);
    }

    if (!isValid) {
      errorText.style.visibility = "visible";
      input.style.borderColor = "hsl(0, 100%, 74%)";
      input.style.borderWidth = "2px";
    } else {
      errorText.style.visibility = "hidden";
      input.style.borderColor = "grey";
    }
  });
});

function validateText(string) {
  const regex = /[A-Za-z'-]+/;
  return regex.test(string);
}

function validateEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validatePassword(password) {
  const regexPassword = /[A-Za-z'-]+/;
  return regexPassword.test(password);
}
