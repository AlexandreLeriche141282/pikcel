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

setInterval(nextSlide, 5000); // Changement d'image toutes les 4 secondes
showSlide(currentSlide); // Afficher la première image au chargement




