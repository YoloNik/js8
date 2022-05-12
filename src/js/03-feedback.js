import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;

const refs = {
  form: document.querySelector(`.feedback-form`),
  textarea: document.querySelector(`.feedback-form textarea`),
  email: document.querySelector(`.feedback-form input`),
};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTextarea, 500));
refs.email.addEventListener(`input`, throttle(onEmail, 500));
const userMessage = { email: '', message: '' };

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(userMessage);
}
function onTextarea(e) {
  userMessage.message = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userMessage));
}
function onEmail(e) {
  userMessage.email = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userMessage));
}

function messageOutput(e) {
  const savedMesasge = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMesasge) {
    refs.email.value = savedMesasge.email;
    refs.textarea.value = savedMesasge.message;
  }
}
messageOutput();
