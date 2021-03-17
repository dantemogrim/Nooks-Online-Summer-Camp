'use strict';

// Borrowed from: https://codepen.io/Glucio/pen/JRVAwR

let confettiRain = function confettiRain(confetti) {
  this.confetti = confetti;
  this.container = null;

  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];

  this._setupElements();
  this._renderConfetti();
};

confettiRain.prototype._setupElements = function () {
  let container = document.createElement('div');
  let location = this.confetti.style.position;

  if (location !== 'absolute' || location !== 'absolute') {
    this.confetti.style.position = 'absolute';
  }

  container.classList.add('confetti-container');

  this.confetti.appendChild(container);

  this.container = container;
};

confettiRain.prototype._renderConfetti = function () {
  let _this = this;

  this.confettiInterval = setInterval(function () {
    let confetti = document.createElement('div');
    let confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
    let confettiBackground =
      _this.confettiColors[
        Math.floor(Math.random() * _this.confettiColors.length)
      ];
    let confettiLeft =
      Math.floor(Math.random() * _this.confetti.offsetWidth) + 'px';
    let confettiAnimation =
      _this.confettiAnimations[
        Math.floor(Math.random() * _this.confettiAnimations.length)
      ];

    confetti.classList.add(
      'confetti',
      'confetti--animation-' + confettiAnimation
    );
    confetti.style.left = confettiLeft;
    confetti.style.width = confettiSize;
    confetti.style.height = confettiSize;
    confetti.style.backgroundColor = confettiBackground;

    confetti.removeTimeout = setTimeout(function () {
      confetti.parentNode.removeChild(confetti);
    }, 3000);

    _this.container.appendChild(confetti);
  }, 25);
};

window.confettiRain = new confettiRain(
  document.querySelector('.confetti-container')
);
