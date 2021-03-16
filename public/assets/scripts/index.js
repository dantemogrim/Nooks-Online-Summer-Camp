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
