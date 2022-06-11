export default function loadHome() {
  const main = document.querySelector('#main');

  const description = [
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
  ];
  description[0].textContent =
    'PizzaPodi provides the tastiest pizzas in the region';

  description[1].textContent =
    'With decades of experience in our hands, we employ some of the best chefs, so that you can enjoy the best food';

  description[2].textContent =
    'Ask us about our daily specialties and promos! We may even give you some extras if you ask nicely ;)';

  const image = document.createElement('img');
  image.src = './media/home.jpg';
  image.style.width = '500px';

  const slogan = document.createElement('p');
  slogan.textContent = 'Your best pizza, since 1998';

  main.append(...description, image, slogan);
}
