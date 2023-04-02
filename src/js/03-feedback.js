import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/03-feedback.css";

const STORAGE_KEY = "message";

const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

const formData = {};

refs.form.addEventListener("input", (e) => {
  console.log(e.target.name);
    console.log(e.target.value);
    
    formData[e.target.name] = e.target.value;
});

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
