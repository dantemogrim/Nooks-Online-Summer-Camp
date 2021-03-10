import anime from 'animejs/lib/anime.es.js';

// Click animation on Tom.
const tom = document.querySelector('.tom');

tom.addEventListener('click', () => {
  anime({
    targets: '.tom',
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
    console.log('scrolling');
  }
}, 300);
