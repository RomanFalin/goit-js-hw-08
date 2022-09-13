import throttle from "lodash.throttle";

const form = document.querySelector("form");

form.addEventListener("input", throttle(onFormAction, 500));
form.addEventListener("submit", submitForm);
window.onload = checkForm();

const onFormData = {};

function onFormAction(evt) {
    const onFormData = new FormData(form);
    const onFormDataJSON = JSON.stringify(Object.fromEntries(onFormData));
    localStorage.setItem('feedback-form-state', onFormDataJSON);
}

function submitForm(evt) {
    evt.preventDefault();
    
    const {elements: { email, message }, } = evt.currentTarget;
    
    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    }
    
    console.log({ email: email.value, message: message.value });
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function checkForm() {
    const savedData = localStorage.getItem('feedback-form-state');
    
    if (savedData) {
        try {
            const savedDataParsed = JSON.parse(savedData);
            Object.keys(savedDataParsed).forEach(key => (form[key].value = savedDataParsed[key]));
        } catch (error) {
            console.log(error.email);
            console.log(error.message);
        }
    }
}