import anime from '/node_modules/animejs/lib/anime.es.js';

// const anime = require('animejs');

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
