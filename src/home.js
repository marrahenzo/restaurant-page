export default function loadHome() {
  const main = document.querySelector('#main');

  const descripcion = document.createElement('p');
  descripcion.textContent =
    'El restaurante "El Viejo Marino"en el balnerio Reta, Provincia de Buenos Aires, Argentina.';

  const especialidades = document.createElement('p');
  especialidades.textContent =
    'Especialidad: Mariscos, pescados, carnes grilladas, pastas caseras, postres de cocina, cafetería.';

  const slogan = document.createElement('p');
  slogan.textContent = 'Más de una década disfrutando juntos de Reta...';

  main.append(descripcion, especialidades, slogan);
}
