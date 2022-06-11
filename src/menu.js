export default function loadMenu() {
  const main = document.querySelector('#main');

  const pizzas = [
    new Pizza(
      'Primavera',
      '../media/primavera.jpg',
      'Tomato sauce, Mozarella, Tomato, Olives, Hard-boiled eggs and Oregano'
    ),
    new Pizza(
      'Ham and Eggs',
      '../media/hamandeggs.jpg',
      'Tomato sauce, Mozarella, Ham, Olives, Hard-boiled eggs and Oregano'
    ),
    new Pizza(
      'Fugazza',
      '../media/fugazza.jpg',
      'Provolone, Onions, Olives and Oregano'
    ),
    new Pizza(
      'Fried Eggs',
      '../media/friedeggs.jpg',
      'Tomato sauce, Mozzarella, 4 Fried eggs, Olive oil and Oregano'
    ),
    new Pizza(
      'Hard-Boiled Eggs',
      '../media/boiledeggs.jpg',
      'Tomato sauce, Mozarella, Hard-boiled eggs, Olive oil and Oregano'
    ),
    new Pizza(
      'Corn',
      '../media/corn.jpg',
      'Tomato sauce, Mozarella, Corn, Olives and Oregano'
    ),
    new Pizza(
      'Roquefort',
      '../media/roquefort.jpg',
      'Tomato Sauce, Mozarella, Roquefort, Olives and Oregano'
    ),
    new Pizza(
      'Napolitana',
      '../media/napolitana.jpg',
      'Tomato sauce, Mozarella, Tomato, Provolone, Garlic, Parsley, Olives and Oregano'
    ),
  ];

  for (let pizza of pizzas) {
    let item = document.createElement('div');
    let name = document.createElement('p');
    name.textContent = pizza.name;
    let image = document.createElement('img');
    image.src = pizza.image;
    let ingredients = document.createElement('p');
    ingredients.textContent = pizza.ingredients;
    item.className = 'pizza';
    item.append(name, image, ingredients);
    main.append(item);
  }
}

class Pizza {
  constructor(name, image, ingredients) {
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
  }
}
