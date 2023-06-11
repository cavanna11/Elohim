const burguerMenu = document.getElementById('toggle-menu')
const navMenu = document.querySelector('.nav-menu')

document.addEventListener('load', function (event) {
    if (event) {
        navMenu.classList.remove('hidden')
    }
})

burguerMenu.addEventListener('click', function (e) {
    e.preventDefault()
    if (e) {
        navMenu.classList.toggle('hidden')
    }
})

// EFECTO SCROLL LANDING PAGE

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var offset = 65; // Ajusta este valor según tus necesidades
      var targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
  

//   HASTA ACA EFECTO SCROLL




// ACA ARRANCA EL BEFORE/AFTER de PAGINA OBRAS
