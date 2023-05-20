import Swiper from 'swiper/swiper-bundle.esm';
// import styles bundle
import 'swiper/swiper-bundle.min.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
