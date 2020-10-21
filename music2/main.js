const app = () => {
	const song = document.querySelector('.song');
	const time = document.querySelector('.time');
	const play = document.querySelector('.play');

	const sounds = document.querySelectorAll('.sound-picker button');

	sounds.forEach((sound) => {
		sound.addEventListener('click', function () {
			song.src = this.getAttribute('data-src');

			sounds.forEach((soun) => {
				soun.classList.remove('active');
			});
			this.classList.add('active');
		});
	});
	// Controler
	play.addEventListener('click', () => {
		if (song.paused) {
			song.play();
			play.classList.replace('fa-play', 'fa-pause');
		} else {
			song.pause();
			play.classList.replace('fa-pause', 'fa-play');
		}

		song.ontimeupdate = () => {
			let currentTime = song.currentTime;

			time.innerText = `${Math.floor(currentTime / 60)}:${Math.floor(
				currentTime % 60
			)} // ${Math.floor(song.duration / 60)}:${Math.floor(
				song.duration % 60
			)}`;

			if (currentTime >= song.duration) {
				song.pause();
				play.classList.replace('fa-pause', 'fa-play');
			}
		};
	});
};
app();
