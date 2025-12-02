// Espera a que todo el DOM se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // ===================== MENÚ MÓVIL =====================
  // Selecciona todos los botones de menú y los menús móviles correspondientes
  const menuBtns = document.querySelectorAll('#menuBtn, #menuBtnT'); // botones hamburguesa
  const mobileMenus = document.querySelectorAll('#mobileMenu, #mobileMenuT'); // menús móviles

  // Recorre cada botón de menú y le asigna funcionalidad
  menuBtns.forEach((btn, index) => {
    const menu = mobileMenus[index]; // obtiene el menú correspondiente al botón
    const icon = btn.querySelector('i'); // selecciona el icono dentro del botón

    if (menu) {
      // Al hacer clic en el botón, se alterna la visibilidad del menú
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden'); // muestra/oculta menú
        icon.classList.toggle('fa-bars'); // cambia icono de hamburguesa
        icon.classList.toggle('fa-xmark'); // cambia icono a X
      });
    }
  });

  // ===================== SCROLL REVEAL =====================
  // Selecciona todos los elementos que deben aparecer al hacer scroll
  const revealElements = document.querySelectorAll(
    ".js-reveal, .fade-up, .fade-left, .fade-right, .fade-down, .zoom-in"
  );

  // Función que verifica la posición de los elementos y activa la animación
  const revealOnScroll = () => {
    const trigger = window.innerHeight - 100; // distancia desde la parte inferior para activar
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top; // posición superior del elemento
      if (top < trigger) el.classList.add("reveal-active"); // agrega clase para animación
    });
  };

  // Escucha el evento scroll para activar animaciones al desplazarse
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // ejecuta también al cargar la página

  // ===================== ANIMACIÓN DE TARJETAS =====================
  // Selecciona todas las tarjetas que tendrán animación al aparecer
  const cards = document.querySelectorAll(".card-anim");

  const revealCardsOnScroll = () => {
    const windowHeight = window.innerHeight;
    cards.forEach(c => {
      const top = c.getBoundingClientRect().top; // posición superior de la tarjeta
      if (top < windowHeight - 80) c.classList.add("reveal-active"); // agrega clase para animación
    });
  };

  // Escucha el scroll para activar animaciones de las tarjetas
  window.addEventListener("scroll", revealCardsOnScroll);
  revealCardsOnScroll(); // ejecuta también al cargar la página
});


document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const icon = menuBtn.querySelector('i');

  menuBtn.addEventListener('click', () => {

    // Mostrar / ocultar menú
    mobileMenu.classList.toggle('hidden');

    // Animación suave
    if (!mobileMenu.classList.contains('hidden')) {
      setTimeout(() => {
        mobileMenu.classList.remove('-translate-y-2', 'opacity-0');
      }, 10);
    } else {
      mobileMenu.classList.add('-translate-y-2', 'opacity-0');
    }

    // Cambiar icono
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

});


// -------- MENÚ BURGER -------- //
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav"); // tu menú principal

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});
