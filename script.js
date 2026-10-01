document.addEventListener('DOMContentLoaded', () => {

  // Gestione pulsante Login
  const loginBtn = document.getElementById('loginBtn');
  
  loginBtn.addEventListener('click', () => {
    alert('Area riservata agli studenti. Inserisci le tue credenziali per accedere ai contenuti riservati!');
  });

  // Scorrimento morbido per i link del menu
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animazione di comparsa delle schede allo scorrimento
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
  });

});