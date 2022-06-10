export default function loadPage() {
  //Create DOM elements
  const content = document.querySelector('#content');

  const nav = document.createElement('div');
  nav.id = 'navbar';
  const navTabs = [
    document.createElement('p'),
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
  ];
  navTabs[0].id = 'logo';
  navTabs[0].textContent = 'PizzaPodi';
  navTabs[1].id = 'home';
  navTabs[1].href = '#';
  navTabs[1].textContent = 'Home';
  navTabs[2].id = 'menu';
  navTabs[2].href = '#';
  navTabs[2].textContent = 'Menu';
  navTabs[3].id = 'contact';
  navTabs[3].href = '#';
  navTabs[3].textContent = 'Contact';

  const background = document.createElement('div');
  background.id = 'background';

  const main = document.createElement('div');
  main.id = 'main';

  const footer = document.createElement('div');
  footer.id = 'footer';
  const footerCredits = document.createElement('a');
  footerCredits.textContent = '2022 © Hernán Marrapodi';
  const gitHubLogo = document.createElement('img');
  gitHubLogo.src = '../media/github-logo.png';
  gitHubLogo.width = 15;

  //Append elements
  nav.append(...navTabs);
  background.append(main);
  footerCredits.append(gitHubLogo);
  footer.append(footerCredits);
  content.append(nav, background, footer);
}
