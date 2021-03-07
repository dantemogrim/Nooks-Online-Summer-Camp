// Personalized greeting.

let urlParams = new URLSearchParams(window.location.search);
const welcomeName = document.querySelector('.welcome');
const nameFiller = document.querySelector('#name');
const emailFiller = document.querySelector('#email');
const phoneFiller = document.querySelector('#tel');

if (urlParams.has('name')) {
  let name = urlParams.get('name');
  welcomeName.innerText += `, ${name}!`;
  nameFiller.setAttribute('value', name);
}

if (urlParams.has('email')) {
  let email = urlParams.get('email');
  emailFiller.setAttribute('value', email);
}

if (urlParams.has('tel')) {
  let tel = urlParams.get('tel');
  phoneFiller.setAttribute('value', tel);
}
