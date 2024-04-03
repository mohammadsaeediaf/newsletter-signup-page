import Subscription from "./components/subscription.js";
import Success from "./components/success.js";

const body = document.querySelector("body");

// States //

let state = "subscription";
let email = "";

function isValidEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function createView() {
  if (state === "subscription") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", Subscription());

    const form = document.querySelector("form");
    const emailInput = document.querySelector(".emailInput");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!isValidEmail(emailInput.value)) {
        errorMessage.style.opacity = "1";
        emailInput.classList.add("input-error");
        emailInput.style = "border-color: var(--red); background: #ffe8e6;";
        return;
      }

      state = "success";
      email = emailInput.value;
      emailInput.value = "";
      createView();
    });
  } else if (state === "success") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", Success());

    const successEmail = document.querySelector(".email");
    const successForm = document.querySelector(".success-btn");
    successEmail.textContent = email;

    successForm.addEventListener("click", () => {
      state = "subscription";
      createView();
    });
  }
}

createView();
