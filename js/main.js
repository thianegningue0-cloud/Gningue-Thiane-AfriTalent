document.addEventListener('DOMContentLoaded', () => {
  // DÉCLARATION DES ÉLÉMENTS - c'est ça qui manque
  const themeToggle = document.getElementById('theme-toggle');
  const backToTopBtn = document.getElementById('back-to-top');
  const body = document.body;
  const navbar = document.querySelector('.navbar');
// 1. CHARGER LE THÈME SAUVEGARDÉ
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  // 2. CLICK SUR 🌙/☀️
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });

  // 3. BOUTON RETOUR EN HAUT + NAVBAR AU SCROLL
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopBtn.style.display = 'block';
      navbar.classList.add('navbar-scrolled');
    } else {
      backToTopBtn.style.display = 'none';
      navbar.classList.remove('navbar-scrolled');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  });
