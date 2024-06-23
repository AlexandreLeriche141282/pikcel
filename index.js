// Display progressive h1 header //

const words = document.querySelectorAll('.word');

function animateText() {
  let delay = 0;
  words.forEach((word) => {
    setTimeout(() => {
      word.classList.add('visible');
    }, delay);
    delay += 200; // Délai de 100 millisecondes entre chaque mot
  });
}

document.addEventListener('DOMContentLoaded', animateText);
// --------------------------------------------------------

// Slider --------------- //

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Changement d'image toutes les 5 secondes
showSlide(currentSlide); // Afficher la première image au chargement
//  --------------------------------------------------------------

// Initialisation de ScrollReveal
ScrollReveal().reveal('.section1', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.section2', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.section3', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.section4', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});
window.sr = ScrollReveal();

sr.reveal('.process-card-1', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});

sr.reveal('.process-card-2', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  delay: 400,
  reset: false
});

sr.reveal('.process-card-3', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  delay: 600,
  reset: false
});

sr.reveal('.process-card-4', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  delay: 800,
  reset: false
});

// ------------------------------------------------------

// ----------- Apparition et disparition nav --------- //

const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        nav.style.top ="20px";
    } else {
        nav.style.top = "-140px"
    }
    lastScroll = window.scrollY;

});
// ---------------------------------------------------------

// ----------- Menu Burger ---------------------- //

const toggleMenu = (action) => {
  document.querySelector('nav ul').classList[action]('active');
  document.querySelector('.menu-burger').classList[action]('active');
  document.querySelector('.menu-background').classList[action]('active');
};

document.querySelector('.menu-burger').addEventListener('click', () => toggleMenu('toggle'));
document.querySelector('.closeMenu').addEventListener('click', () => toggleMenu('remove'));
document.querySelector('.menu-background').addEventListener('click', () => toggleMenu('remove'));
document.querySelector('.link').addEventListener('click', () => toggleMenu('remove'));

// ------------------------------------------------------------------


document.querySelector('.btn').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({
  });
});
document.querySelector('.card').addEventListener('click', function() {
  document.getElementById('section1').scrollIntoView({
  });
});
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}




