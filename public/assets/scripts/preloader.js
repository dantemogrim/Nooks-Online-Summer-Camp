'use strict';
// Spinning leaf.
const preloadAnimation = document.querySelector('.preload-logo-animation');

preloadAnimation.addEventListener('load', () => {});

// Fade out.
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');

  preload.classList.add('preload-complete');
});
