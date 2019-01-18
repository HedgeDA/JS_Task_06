let xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);

let content;
let fromCurrency;
let toCurrency;
let source;
let result;
let loader;

function onLoad() {
  if (xhr.status !== 200) {
    return;
  }

  let currency;

  try {
    currency = JSON.parse(xhr.responseText);
  } catch (error) {
    return;
  }

  fromCurrency.innerHTML = currency.reduce((innerHTML, item) => {
    return innerHTML + `<option id="${item.code}" value="${item.value}">${item.title}</option>`;
  }, '');

  toCurrency.innerHTML = fromCurrency.innerHTML;

  loader.classList.add('hidden');
  content.classList.remove('hidden');
}

function calculateResult() {
  result.value = 0;
  if (toCurrency.value !== 0) {
    result.value = ((Number(source.value) * Number(fromCurrency.value)) / Number(toCurrency.value)).toFixed(2);
  }

}

function init() {
  content = document.getElementById('content');

  fromCurrency = document.getElementById('from');
  fromCurrency.addEventListener('change', calculateResult);

  toCurrency = document.getElementById('to');
  toCurrency.addEventListener('change', calculateResult);

  source = document.getElementById('source');
  source.addEventListener('input', calculateResult);

  result = document.getElementById('result');
  result.value = Number(source.value).toFixed(2);

  loader = document.getElementById('loader');
  loader.classList.remove('hidden');

  xhr.open("GET", 'https://neto-api.herokuapp.com/currency', true);
  xhr.send();
}

document.addEventListener('DOMContentLoaded', init);