export default function loadPage() {
  //Create DOM elements
  const content = document.querySelector('#content');
  const nav = document.createElement('div');
  const background = document.createElement('div');
  const main = document.createElement('div');
  const footer = document.createElement('div');
  const navTabs = [
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
  ];
  nav.id = 'navbar';
  background.id = 'background';
  main.id = 'main';
  footer.id = 'footer';
  //Append elements
  background.appendChild(main);
  content.append(nav, background, footer);
}
