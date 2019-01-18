let formData = {};

function validateString(event) {
  let span = event.target.parentElement.getElementsByTagName('p')[0].getElementsByTagName('span')[0];

  if (!event.target.value) {
    span.classList.remove('hidden');
    delete formData[event.target.name];
  } else {
    span.classList.add('hidden');
    formData[event.target.name] = event.target.value;
  }

  console.log(formData);
}

function zipKeydown(event) {
  if (!(event instanceof KeyboardEvent)) {
    return;
  }

  console.log('key ', event.key);
  console.log('code ', event.code);
  console.log(/^key/.test(event.code));
  if (!/^[0-9]/.test(event.key) & /^Key/.test(event.code)) {
    event.preventDefault();

    return false;
  }
}

function init() {
  for (field of document.getElementsByTagName('input')) {
    field.addEventListener('change', validateString);
  }

  document.getElementsByName('zip')[0].addEventListener('keydown', zipKeydown);
}

document.addEventListener('DOMContentLoaded', init);