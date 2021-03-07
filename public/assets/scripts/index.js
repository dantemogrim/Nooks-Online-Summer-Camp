import anime from 'animejs/lib/anime.es.js';

// Click animation on Tom.
const tom = document.querySelector('.tom-wave');

tom.addEventListener('click', () => {
  anime({
    targets: '.tom-wave',
    rotate: '2turn',
    backgroundColor: '',
    duration: 8000,
  });
});

// Scroll event test.
window.addEventListener('scroll', () => {
  console.log('Keep scrollin scrollin');
});

// Three wrappers test.
const threeWrappers = document.querySelector('.three-description-wrappers');

// Animejs + scroll event test.
let scrolling = false;

window.scroll = () => {
  scrolling = true;
};

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    threeWrappers.anime({
      targets: '.three-description-wrappers',
      translateX: 270,
      delay: anime.stagger(100, { direction: 'normal' }),
    });
  }
}, 300);
