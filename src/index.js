import loadPage from './page_load.js';

loadPage();

const page = document.querySelector('#content');
let title = document.createElement('h1');
title.textContent = 'Hello!';
page.appendChild(title);
