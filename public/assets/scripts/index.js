import anime from 'animejs/lib/anime.es.js';

// Click animation.
const tom = document.querySelector('.tom-wave');

tom.addEventListener('click', () => {
  anime({
    targets: '.tom-wave',
    rotate: '2turn',
    backgroundColor: '',
    duration: 8000,
  });
});

window.addEventListener('scroll', () => {
  console.log('Keep scrollin scrollin');
});

// Three pictures scroll animation.
// const threeSlides = document.querySelector('.three-description-wrappers');

// threeSlides.addEventListener('focus', () => {
//   anime({
//     targets: '.three-description-wrappers',
//     translateX: 270,
//     delay: anime.stagger(100, { direction: 'normal' }),
//   });
// });
