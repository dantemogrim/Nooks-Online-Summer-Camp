import anime from 'animejs/lib/anime.es.js';

// Spinning leaf.
const preloadAnimation = document.querySelector('.preload-animation');

preloadAnimation.addEventListener('load', () => {
  anime({
    targets: '.preload-animation',
    rotate: '4turn',
    backgroundColor: '',
    duration: 10000,
    loop: true,
  });
});

// Fade out.
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-complete');
});
