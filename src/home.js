function createHome() {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');

  const chefImage = document.createElement('img');
  chefImage.src = 'img/chef.png';
  chefImage.alt = 'Chef';

  const order = createParagraph(
    'Order online using your favorite App or visit us!'
  );
  order.classList.add('description');

  const apps = document.createElement('div');
  apps.classList.add('app');

  home.appendChild(createParagraph('Best Italian pizza in Germany'));
  home.appendChild(createParagraph('Made with passion since 2010'));
  home.appendChild(chefImage);
  home.appendChild(order);
  home.appendChild(apps);

  apps.appendChild(createAppIcon('img/uber-eats.png'));
  apps.appendChild(createAppIcon('img/grubhub.png'));
  apps.appendChild(createAppIcon('img/door-dash.png'));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function createAppIcon(src) {
  const icon = document.createElement('img');
  icon.src = src;
  return icon;
}

function loadHome() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(createHome());
}

export default loadHome;
