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

export default loadMenu;
