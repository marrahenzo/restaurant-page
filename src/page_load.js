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
  navTabs[1].textContent = 'Home';
  navTabs[2].id = 'menu';
  navTabs[2].textContent = 'Menu';
  navTabs[3].id = 'contact';
  navTabs[3].textContent = 'Contact';

  const background = document.createElement('div');
  background.id = 'background';

  const main = document.createElement('div');
  main.id = 'main';

  const footer = document.createElement('div');
  footer.id = 'footer';
  const footerCredits = document.createElement('a');
  footerCredits.textContent = '2022 © Hernán Marrapodi';
  footerCredits.href = 'https://github.com/marrahenzo';
  const footerCredits2 = document.createElement('p');
  footerCredits2.textContent =
    'Photos by Aurélien Lemasson-Théobald, Brenna Huff and Tamara Malaniy from unsplash.com as well as photos from pizzasargentinas.com';
  const gitHubLogo = document.createElement('a');
  gitHubLogo.href = 'https://github.com/marrahenzo';
  const gitHubLogoImage = document.createElement('img');
  gitHubLogoImage.src = '../media/github-logo.png';
  gitHubLogoImage.width = 20;
  const creditsContainer = document.createElement('div');

  //Append elements
  nav.append(...navTabs);
  background.append(main);
  gitHubLogo.append(gitHubLogoImage);
  creditsContainer.append(footerCredits, gitHubLogo);
  footer.append(footerCredits2, creditsContainer);
  content.append(nav, background, footer);
}
