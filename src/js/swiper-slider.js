import Swiper from 'swiper/swiper-bundle.esm';
// import styles bundle
import 'swiper/swiper-bundle.min.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  effect: 'fade',
  speed: 1500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.hero-pagination',
  },

  navigation: {
    nextEl: '.hero-slider-forward',
    prevEl: '.hero-slider-back',
  },
});
