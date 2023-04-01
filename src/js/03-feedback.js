import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onBtnSubmitClick);

checkStorageContent();

function onInputChange(e) {
  const feedbackForm = {
    email: form.email.value,
    message: form.message.value,
  };

  const feedbackFormJSON = JSON.stringify(feedbackForm);

  localStorage.setItem(STORAGE_KEY, feedbackFormJSON);
}