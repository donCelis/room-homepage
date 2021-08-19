import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const options = {
  /* direction: "horizontal", */
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  parallax: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const swiper = new Swiper(".swiper-container", options);
