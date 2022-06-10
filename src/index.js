import loadPage from './page_load.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

loadPage();

const page = document.querySelector('#content');
const main = document.querySelector('#main');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', () => {
  main.innerHTML = '';
  loadHome();
});

menuButton.addEventListener('click', () => {
  main.innerHTML = '';
  loadMenu();
});

contactButton.addEventListener('click', () => {
  main.innerHTML = '';
  loadContact();
});
