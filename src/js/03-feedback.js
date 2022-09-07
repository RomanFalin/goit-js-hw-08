import throttle from "lodash.throttle";

const form = document.querySelector("form");

form.addEventListener("input", throttle(onFormAction, 500));
form.addEventListener("submit", submitForm);
window.onload = checkForm;

const onFormData = {};

function onFormAction(evt) {
    onFormData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(onFormData));
    console.log(localStorage.getItem("feedback-form-state"));
}

function submitForm(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.currentTarget.reset();
}

function checkForm() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('[name="email"]');
    const message = document.querySelector('[name="message"]');
    if (data) {
        email.value = data.email;
        message.value = data.message;
  }
}