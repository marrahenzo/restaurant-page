export default function loadContact() {
  const main = document.querySelector('#main');

  const address = document.createElement('p');
  address.textContent =
    'You can find us at Calle Falsa 123, Ciudad Autónoma de Buenos Aires, Argentina';

  const phone = document.createElement('p');
  phone.textContent = 'Call Us! 📞 +54 9 11 1234 5678';

  const image = document.createElement('img');
  image.src = './media/contact.jpg';
  image.style.width = '500px';

  const email = document.createElement('p');
  email.textContent =
    'Questions? Complaints? Just wanna talk to someone? Send us an email at ';

  const email2 = document.createElement('span');
  email2.id = 'email';
  email2.textContent = 'pizzapodi@totallylegitemail.com';
  email.append(email2);

  main.append(address, image, phone, email);
}
