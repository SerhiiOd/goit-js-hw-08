const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback- form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {}

function onTextareaInput(e) {
  const message = e.currentTurget.value;

  localStorage.setItem('feedback-msg', message);
}
