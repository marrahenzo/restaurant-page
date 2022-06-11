import loadPage from './page_load.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

loadPage();
loadHome();

const page = document.querySelector('#content');
const main = document.querySelector('#main');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.className = 'active';

homeButton.addEventListener('click', () => {
  main.innerHTML = '';
  main.className = '';
  loadHome();
  clearButtons();
  homeButton.className = 'active';
});

menuButton.addEventListener('click', () => {
  main.innerHTML = '';
  main.className = 'menu';
  loadMenu();
  clearButtons();
  menuButton.className = 'active';
});

contactButton.addEventListener('click', () => {
  main.innerHTML = '';
  main.className = '';
  loadContact();
  clearButtons();
  contactButton.className = 'active';
});

function clearButtons() {
  homeButton.className = '';
  menuButton.className = '';
  contactButton.className = '';
}
