document.addEventListener('DOMContentLoaded', function () {
  const track    = document.querySelector('.carrossel-track');
  const slides   = document.querySelectorAll('.carrossel-slide');
  const btnAntes = document.querySelector('.carrossel-btn-antes');
  const btnProx  = document.querySelector('.carrossel-btn-proximo');
  const pontos   = document.querySelectorAll('.carrossel-ponto');

  if (!track || slides.length === 0) return;

  let indiceAtual = 0;

  function irParaSlide(indice) {
    if (indice < 0) indice = slides.length - 1;
    if (indice >= slides.length) indice = 0;
    indiceAtual = indice;
    track.style.transform = 'translateX(-' + (indiceAtual * 100) + '%)';
    pontos.forEach(function (p, i) {
      p.classList.toggle('ativo', i === indiceAtual);
    });
  }

  if (btnAntes) btnAntes.addEventListener('click', function () { irParaSlide(indiceAtual - 1); });
  if (btnProx)  btnProx.addEventListener('click',  function () { irParaSlide(indiceAtual + 1); });

  pontos.forEach(function (p, i) {
    p.addEventListener('click', function () { irParaSlide(i); });
  });

  setInterval(function () { irParaSlide(indiceAtual + 1); }, 4000);
});
