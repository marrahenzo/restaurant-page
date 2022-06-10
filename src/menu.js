export default function loadMenu() {
  const main = document.querySelector('#main');

  const pizzas = [
    new Pizza(
      'Salsiccia',
      'none',
      'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'
    ),
    new Pizza(
      'Gamberi',
      'none',
      'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'
    ),
    new Pizza(
      'Pepe',
      'none',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    ),
    new Pizza(
      'Disgustoso',
      'none',
      'Tomato sauce, Bacon, Pineapple, Olives, Basil'
    ),
    new Pizza(
      'Colorato',
      'none',
      'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'
    ),
    new Pizza(
      'Pomodoro',
      'none',
      'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'
    ),
    new Pizza(
      'Crema',
      'none',
      'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'
    ),
    new Pizza(
      'Carne',
      'none',
      'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'
    ),
  ];

  for (let pizza of pizzas) {
    let item = document.createElement('div');
    item.append(pizza.image, pizza.name, pizza.ingredients);
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
