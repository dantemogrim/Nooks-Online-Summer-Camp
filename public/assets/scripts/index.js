import anime from 'animejs/lib/anime.es.js';

// Click animation.
const tom = document.querySelector('.tom-wave');

tom.addEventListener('click', () => {
  anime({
    targets: '.tom-wave',
    translateX: 250,
    rotate: '2turn',
    backgroundColor: '',
    duration: 8000,
  });
});

// Letter animation for the user.
const letter = document.querySelector('.letter');

letter.addEventListener('click', () => {
  anime({
    targets: '.letter',
    // translateX: {
    //   value: 250,
    //   duration: 800,
    // },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine',
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart',
    },
    delay: 250, // All properties except 'scale' inherit 250ms delay
  });
});

// Preload animation for the site. Spinning leaf?
window.addEventListener('load', () => {
  const preload = document.querySelector('.className');
});
