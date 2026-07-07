function abrirWhatsApp(mensagem) {
  const texto = mensagem || 'Olá! Vim pela página da Eder Barber e gostaria de agendar um horário.';
  const url = 'https://wa.me/554891607932?text=' + encodeURIComponent(texto);
  window.open(url, '_blank');
}

function abrirMaps() {
  window.open('https://www.google.com/maps/dir/?api=1&destination=Eder+Barber%2C+Rod.+Gov.+Jorge+Lacerda+-+Sangao%2C+Crici%C3%BAma+-+SC%2C+88805-350', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.classList.add('ativo');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.nav-menu-btn');
  const menuLinks = document.getElementById('nav-links-mobile');
  if (!menuBtn || !menuLinks) return;

  menuBtn.addEventListener('click', function () {
    const aberto = menuLinks.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  menuLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuLinks.classList.remove('aberto');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
});
