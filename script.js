// Galería animada de "frames" con animaciones llamativas.

const animationList = [
  'anim-bounce',
  'anim-rotate',
  'anim-flip',
  'anim-scale',
  'anim-pulse',
  'anim-shake',
  'anim-heart',
  'anim-waves',
];

const captions = [
  "Rebote alegre",
  "Rotación hipnótica",
  "Flip 3D sorprendente",
  "Crecimiento dinámico",
  "Pulso vibrante",
  "Terremoto divertido",
  "Latido apasionado",
  "Olas energéticas",
];

const emojis = [
  "⚽", "🌎", "💫", "🌀", "🔵", "🟣", "💖", "🌊"
];

function createFilmFrame(animationClass, caption, emoji) {
  const frame = document.createElement('div');
  frame.className = 'film-frame';

  const animDiv = document.createElement('div');
  animDiv.className = `film-anim ${animationClass}`;
  animDiv.textContent = emoji || "⭐";
  frame.appendChild(animDiv);

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
  filmStrip.innerHTML = '';
  animationList.forEach((anim, idx) => {
    filmStrip.appendChild(
      createFilmFrame(anim, captions[idx] || `Animación ${idx + 1}`, emojis[idx] || "✨")
    );
  });
}

// Animación de movimiento automático del strip
function autoScrollFilmStrip() {
  const strip = document.getElementById('film-strip');
  let direction = 1;
  setInterval(() => {
    if (!strip.matches(':hover')) {
      strip.scrollLeft += 1.35 * direction;
      // rebote automático
      if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 5) direction = -1;
      if (strip.scrollLeft <= 0) direction = 1;
    }
  }, 16);
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilmStrip();
  autoScrollFilmStrip();
  // Año automático para el footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
});
