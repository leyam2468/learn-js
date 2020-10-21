const playlist = document.querySelector('.playlist');
const musicItem = document.querySelectorAll('.music-item');
const audio = document.querySelectorAll('.audio');

musicItem.forEach((item, index) => {
	item.addEventListener('click', function () {
		this.className += ' active';
		// item.classList.remove('active');
		// item[index].classList.add('active');
		// audio[index].currentTime = 0;
		// audio[index].play();
	});
});
