import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'nav-container');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Mozzafiato';

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.classList.add('home-button');
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    loadHome();
    homeButton.classList.add('active');
    menuButton.classList.remove('active');
    contactButton.classList.remove('active');
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';

  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    loadMenu();
    menuButton.classList.add('active');
    homeButton.classList.remove('active');
    contactButton.classList.remove('active');
  });

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';

  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    loadContact();
    contactButton.classList.add('active');
    homeButton.classList.remove('active');
    menuButton.classList.remove('active');
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Copyright © 2021 Made with ❤️ by Ali';

  footer.appendChild(copyright);
  return footer;
}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  const homeBtn = document.querySelector('.home-button');
  homeBtn.classList.add('active');
  loadHome();
}

export default initializeWebsite;
