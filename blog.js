function revealSections() {
    const sections = document.querySelectorAll('section.invisible');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.60) {
            section.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections); // Ensure it runs on page load as well

const toggleMenu = (action) => {
    document.querySelector('nav ul').classList[action]('active');
    document.querySelector('.menu-burger').classList[action]('active');
    // document.querySelector('.menu-background').classList[action]('active');
  };
  
  document.querySelector('.menu-burger').addEventListener('click', () => toggleMenu('toggle'));
  document.querySelector('.closeMenu').addEventListener('click', () => toggleMenu('remove'));
  // document.querySelector('.menu-background').addEventListener('click', () => toggleMenu('remove'));
  document.querySelectorAll('.link1, .link2, .link3, .link4, .link5, .link6').forEach(link => {
      link.addEventListener('click', () => toggleMenu('remove'));
  });