// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Efeito de partículas com canvas (opcional, mas aqui mantemos o CSS)
// Pequeno efeito de digitação no subtítulo (opcional)
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  const type = setInterval(() => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(type);
    }
  }, 50);
}

// Animação de entrada dos cards (Intersection Observer)
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s ease';
  observer.observe(card);
});