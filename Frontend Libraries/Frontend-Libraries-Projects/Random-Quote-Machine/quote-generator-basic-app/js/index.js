let API_URL = 'https://talaikis.com/api/quotes/random/';
let quoteField = document.querySelector('#text');
let authorField = document.querySelector('#author');
let tweetButton = document.querySelector('#tweet-quote');


function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function fetchJSON(pathToResource) {
  fetch(pathToResource) // 1
  .then(validateResponse) // 2
  .then(readResponseAsJSON) // 3
  .then(renderQuote) // 4
  .catch(logError);
}

function resetFields() {
  quoteField.textContent = '';
  authorField.textContent = '';
  tweetButton.href = '';
}

function renderQuote(responseData) {
  resetFields();
  let currentQuote = responseData.quote;
  let currentAuthor = responseData.author;
  quoteField.textContent = currentQuote;
  authorField.textContent = currentAuthor;
  tweetButton.setAttribute("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
}

function getNewQuote() {
  fetchJSON(API_URL);
}

fetchJSON(API_URL);