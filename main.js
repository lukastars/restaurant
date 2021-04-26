/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
    homeButton.classList.add('active');
    menuButton.classList.remove('active');
    contactButton.classList.remove('active');
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';

  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();
    menuButton.classList.add('active');
    homeButton.classList.remove('active');
    contactButton.classList.remove('active');
  });

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';

  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();
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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');

  const pizza = document.createElement('p');
  pizza.classList.add('category');
  pizza.textContent = 'Pizza';

  menu.appendChild(pizza);

  menu.appendChild(
    createMenuItem(
      'Margherita',
      'San Marzano tomatoes sauce, Fresh mozzarella, Fresh basil 10$'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Bologna',
      'Spicy salami, Mozzarella, Bolognese meat sauce 12$'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Quattro Formaggi',
      'Mozzarella, Fontina, Ricotta, Parmesan 10$'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Sicllian',
      'Sweet Italian sausage, Spicy capicola ham, Mozzarella, Fontina, Basil 13$'
    )
  );

  const pasta = document.createElement('p');
  pasta.classList.add('category');
  pasta.textContent = 'Pasta';

  menu.appendChild(pasta);

  const note = document.createElement('p');
  note.classList.add('description');
  note.textContent = 'Gluten free option upon request';

  menu.appendChild(note);

  menu.appendChild(
    createMenuItem(
      'Spaghetti Pomodoro',
      'Tomatoes, Fresh basil, Garlic, Olive oil 10$'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Orecchiette with Sausage',
      'Grilled sausage, Pecorino Romano, Garlic, White wine 12$'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Pappardelle con Coniglio',
      'Braised rabbit, Carrot, Onion, Garlic, White wine 15$'
    )
  );

  return menu;
}

function createMenuItem(name, discription) {
  const menuItem = document.createElement('div');

  const foodName = document.createElement('p');
  foodName.classList.add('name');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.classList.add('description');
  foodDescription.textContent = discription;

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function createContact() {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');

  const address = document.createElement('p');
  address.classList.add('contact-details');
  address.textContent = ' Tübinger Str. 26, 70178 Stuttgart, Germany';
  const addressIcon = document.createElement('i');
  addressIcon.classList.add('fas', 'fa-map-marked-alt');
  address.prepend(addressIcon);

  const time = document.createElement('p');
  time.classList.add('contact-details');
  time.textContent = ' Mon-Thurs:8am-8pm Fri-Sun:8am-11pm';
  const timeIcon = document.createElement('i');
  timeIcon.classList.add('fas', 'fa-clock');
  time.prepend(timeIcon);

  const phone = document.createElement('p');
  phone.classList.add('contact-details');
  phone.textContent = ' (222)-888 5555';
  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('fas', 'fa-phone-alt');
  phone.prepend(phoneIcon);

  //FORM
  const container = document.createElement('div');
  container.classList.add('container');
  const messageTitle = document.createElement('h1');
  messageTitle.textContent = ' Message Us';
  const messageIcon = document.createElement('i');
  messageIcon.classList.add('fas', 'fa-envelope');
  messageTitle.prepend(messageIcon);

  container.appendChild(messageTitle);

  const p = document.createElement('p');
  p.textContent = 'Please give us any feedback or suggestions';

  container.appendChild(p);

  const hr = document.createElement('hr');
  container.appendChild(hr);

  const fullNameLabel = document.createElement('label');
  fullNameLabel.textContent = 'Full Name';
  fullNameLabel.setAttribute('for', 'full-name');

  const fullNameInput = document.createElement('input');
  fullNameInput.setAttribute('type', 'text');
  fullNameInput.setAttribute('placeholder', 'Full Name');
  fullNameInput.setAttribute('name', 'full-name');
  fullNameInput.setAttribute('id', 'full-name');
  fullNameInput.setAttribute('required', 'true');

  container.appendChild(fullNameLabel);
  container.appendChild(fullNameInput);

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  emailLabel.setAttribute('for', 'email');

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'text');
  emailInput.setAttribute('placeholder', 'Enter Email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('required', 'true');

  container.appendChild(emailLabel);
  container.appendChild(emailInput);

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message';
  messageLabel.setAttribute('for', 'message');

  const messageInput = document.createElement('input');
  messageInput.setAttribute('type', 'text');
  messageInput.setAttribute('placeholder', 'Type your message...');
  messageInput.setAttribute('name', 'message');
  messageInput.setAttribute('id', 'message');
  messageInput.setAttribute('required', 'true');

  container.appendChild(messageLabel);
  container.appendChild(messageInput);

  container.appendChild(hr);

  const sendBtn = document.createElement('button');
  sendBtn.classList.add('send');
  sendBtn.setAttribute('type', 'submit');
  sendBtn.textContent = 'Send';

  container.appendChild(sendBtn);

  const map = document.createElement('img');
  map.src = 'img/map.png';

  contact.appendChild(address);
  contact.appendChild(time);
  contact.appendChild(phone);
  contact.appendChild(container);
  contact.appendChild(map);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.default)();

})();

/******/ })()
;