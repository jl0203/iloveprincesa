// Hearts animation
(function(){
  const heartsContainer = document.querySelector('.hearts');
  if (!heartsContainer) return;
  const HEARTS = 28;
  for (let i = 0; i < HEARTS; i++){
    const h = document.createElement('div');
    h.className = 'heart';
    const size = Math.random() * 14 + 10;
    h.style.width = size + 'px';
    h.style.height = size + 'px';
    const left = Math.random() * 100;
    const delay = Math.random() * 6;
    const duration = 4 + Math.random() * 5;
    h.style.left = left + '%';
    h.style.animationDelay = delay + 's';
    h.style.animationDuration = duration + 's';
    heartsContainer.appendChild(h);
  }
})();

// Gallery (optional): list file names here
const FOTOS = ["abraco.jpg", "beijo_testa.jpg", "beijo_bochecha.jpg", "selfie.jpg"];

(function montarGaleria(){
  const grid = document.getElementById('grid-fotos');
  if (!grid || !FOTOS.length) return;
  FOTOS.forEach(nome => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = `assets/img/fotos/${nome}`;
    img.alt = 'Nossa foto';
    card.appendChild(img);
    grid.appendChild(card);
  });
})();
