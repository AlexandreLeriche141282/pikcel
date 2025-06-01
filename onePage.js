// --------- Section faq onePage.html ----- //
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = this.classList.contains('active');
  
        // Ferme toutes les réponses ouvertes
        faqQuestions.forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        });
  
        // Ouvre la réponse cliquée si elle n'était pas déjà ouverte
        if (!isActive) {
          this.classList.add('active');
          answer.classList.add('active');
        }
      });
    });
});
  
// ----------- Apparition et disparition nav --------- //

const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        nav.style.top ="0px";
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
  // document.querySelector('.menu-background').classList[action]('active');
};

document.querySelector('.menu-burger').addEventListener('click', () => toggleMenu('toggle'));
document.querySelector('.closeMenu').addEventListener('click', () => toggleMenu('remove'));
// document.querySelector('.menu-background').addEventListener('click', () => toggleMenu('remove'));
document.querySelectorAll('.link1, .link2, .link3, .link4, .link5, .link6, .link7').forEach(link => {
    link.addEventListener('click', () => toggleMenu('remove'));
});

// ------------------------------------------------------------------