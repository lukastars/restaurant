import loadHome from './home';

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

export default loadContact;
