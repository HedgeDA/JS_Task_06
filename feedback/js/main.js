let contentform;
let output;
let formData = {};
let formButton;

function validateString(event) {
  let span = event.target.parentElement.getElementsByTagName('p')[0].getElementsByTagName('span')[0];

  if (!event.target.value) {
    span.classList.remove('hidden');
    delete formData[event.target.name];
  } else {
    span.classList.add('hidden');
    formData[event.target.name] = event.target.value;
  }

  formButton.disabled = (!(Object.keys(formData).length === 11));
}

function zipKeydown(event) {
  if (!(event instanceof KeyboardEvent)) {
    return;
  }

  if (!/^[0-9]/.test(event.key) && /^Key/.test(event.code)) {
    event.preventDefault();

    return false;
  }
}

function hideForm(event) {
  event.preventDefault();

  for (let key in formData) {
    if (!formData.hasOwnProperty(key)) {
      continue;
    }

    let element = document.getElementById(key);

    if (element != null) {
      element.value = formData[key];
    }
  }

  contentform.classList.add('hidden');
  output.classList.remove('hidden');
}

function showForm(event) {
  event.preventDefault();

  output.classList.add('hidden');
  contentform.classList.remove('hidden');
}

function init() {
  contentform = document.querySelector('.contentform');
  output = document.getElementById('output');

  for (let field of contentform.getElementsByTagName('input')) {
    field.addEventListener('change', validateString);
  }
  document.getElementsByName('message')[0].addEventListener('input', validateString);
  document.getElementsByName('zip')[0].addEventListener('keydown', zipKeydown);

  formButton = contentform.getElementsByTagName('button')[0];
  formButton.addEventListener('click', hideForm);

  output.getElementsByTagName('button')[0].addEventListener('click', showForm);
}

document.addEventListener('DOMContentLoaded', init);