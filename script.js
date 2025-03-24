AOS.init({
  duration: 1000,
  easing: "easeInOutQuad",
  once: true,
  mirror: true,
});

const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  spaceBetween: 0,
  mousewheel: false,
  keyboard: {
    enabled: true,
  },
  // speed: 1000,
  // Enabled autoplay mode
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamburger = document.querySelector(".hamburger");
const hamburger2 = document.querySelector(".hamburger2");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
hamburger2.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  hamburger2.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  hamburger2.classList.remove("active");
  navMenu.classList.remove("active");
}
