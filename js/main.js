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
/*----commit7---*/
  // A. Fade-in des sections
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // On anime une seule fois
    }
  });
}, { threshold: 0.1 }); // Déclenche à 10% de visibilité

fadeElements.forEach(el => fadeObserver.observe(el));


// B. Compteurs animés
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;
      
      const updateCount = () => {
        const increment = target / 100; // Vitesse
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCount();
      counterObserver.unobserve(counter); // Joue une seule fois
    }
  });
}, { threshold: 0.5 }); // Déclenche à 50% de visibilité

counters.forEach(counter => counterObserver.observe(counter));
/*---commit 8---*/
// FILTRAGE FREELANCES PAR SELECLT
const categorySelect = document.getElementById('category-select');
const freelanceCards = document.querySelectorAll('#freelance-grid .col-lg-4');

if (categorySelect) {
  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    
    freelanceCards.forEach(card => {
      const cardCategory = card.dataset.category;
      
      if (selectedCategory === 'all' || cardCategory === selectedCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// VALIDATION FORMULAIRE
const form = document.getElementById('contactForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  
  // Reset erreurs
  form.querySelectorAll('.form-control').forEach(input => {
    input.classList.remove('is-invalid');
  });
  document.getElementById('successMessage').classList.add('d-none');
  
  // 1. Nom requis
  const nom = document.getElementById('nom');
  if (nom.value.trim() === '') {
    nom.classList.add('is-invalid');
    isValid = false;
  }
   
  //2.Prénom requis
   const prenom = document.getElementById('prenom');
  if (nom.value.trim() === '') {
    prenom.classList.add('is-invalid');
    isValid = false;
  }
  
  // 2. Email regex
  const email = document.getElementById('email');
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    isValid = false;
  }

  //4. Sujet requis
  const sujet = document.getElementById('sujet');
  if (!emailRegex.test(email.value.trim())) {
    sujet.classList.add('is-invalid');
    isValid = false;
  }
  
  // 5. Message min 20 caractères
  const message = document.getElementById('message');
  if (message.value.trim().length < 20) {
    message.classList.add('is-invalid');
    isValid = false;
  }
  
  // Succès
  if (isValid) {
    document.getElementById('successMessage').classList.remove('d-none');
    form.reset();
    // Ici tu ferais l’envoi AJAX en vrai
  }
});

