let listBlock;

function inputChange(event) {
  if (event.target.checked) {
    listBlock.getElementsByTagName('output')[0].value++
  } else {
    listBlock.getElementsByTagName('output')[0].value--
  }

  if (listBlock.getElementsByTagName('output')[0].value < 4) {
    listBlock.classList.remove('complete');
  } else {
    listBlock.classList.add('complete');
  }
}

function init() {
  listBlock = document.querySelector('.list-block');

  listBlock.getElementsByTagName('output')[0].value = 0;

  for (let input of listBlock.getElementsByTagName('input')) {
    input.checked = false;

    input.addEventListener('change', inputChange);
  }
}

document.addEventListener('DOMContentLoaded', init);
