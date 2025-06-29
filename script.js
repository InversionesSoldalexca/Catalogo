// Este script escanea la carpeta 'assets' buscando imágenes y las coloca en la galería
// NOTA: Por restricciones de seguridad de los navegadores, el escaneo automático del directorio solo funciona en servidores (no en archivos locales).
// Para hacerlo funcionar localmente, debes poner las imágenes en 'assets/' y luego agregar sus nombres aquí o bien usar un generador de archivos JS.

const assetsPath = 'assets/';
const imageList = [
  // Añade aquí el nombre de tus imágenes:
  'proyecto1.jpg',
  'proyecto2.jpg',
  'proyecto3.jpg',
  'proyecto4.jpg',
  'proyecto5.jpg',
  // ...agrega más imágenes según tus assets
];

const captions = [
  "Edificio residencial",
  "Remodelación integral",
  "Obra industrial",
  "Construcción en altura",
  "Viviendas modernas",
  // ...puedes modificar o ampliar captions
];

function createFilmFrame(imgSrc, caption) {
  const frame = document.createElement('div');
  frame.className = 'film-frame';
  const img = document.createElement('img');
  img.src = assetsPath + imgSrc;
  img.alt = caption || 'Proyecto Soldalexca';
  img.loading = "lazy";
  img.onerror = function() { 
    this.src = 'assets/placeholder.png'; 
    this.alt='Imagen no disponible';
  };
  frame.appendChild(img);

  const cap = document.createElement('div');
  cap.className = 'film-caption';
  cap.textContent = caption || '';
  frame.appendChild(cap);

  // Animación al hacer click
  frame.addEventListener('click', () => {
    frame.classList.add('film-frame-active');
    setTimeout(() => frame.classList.remove('film-frame-active'), 600);
  });

  return frame;
}

// Pinta la galería
function renderFilmStrip() {
  const filmStrip = document.getElementById('film-strip');
  imageList.forEach((img, idx) => {
    filmStrip.appendChild(
      createFilmFrame(img, captions[idx] || `Proyecto ${idx+1}`)
    );
  });
}

// Animación de movimiento automático del rollo
function autoScrollFilmStrip() {
  const strip = document.getElementById('film-strip');
  let direction = 1;
  setInterval(() => {
    if (!strip.matches(':hover')) {
      strip.scrollLeft += 1.1 * direction;
      // rebote automático
      if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 5) direction = -1;
      if (strip.scrollLeft <= 0) direction = 1;
    }
  }, 20);
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilmStrip();
  autoScrollFilmStrip();
});
