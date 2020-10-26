const playlist = document.querySelector('.playlist');

const mySong = [
	{
		name: 'مهرجان هنعمل لغبطيطا',
		time: '4:47',
		srcImg:
			'https://i1.sndcdn.com/artworks-Dwz7wx03EaJYynlt-M3ZH2Q-t500x500.jpg',
		src:
			'./حسن شاكوش - مهرجان هنعمل لغبطيطا - وركبت ال X6 - مع عمر كمال - MP3.mp3',
	},
	{
		name: 'Ed Sheeran - Perfect',
		time: '5:47',
		srcImg:
			'https://i1.sndcdn.com/artworks-000210714414-u31uaj-t500x500.jpg',
		src: './Happier (ft. Bastille) by marshmello.mp3',
	},
];

let AddsongsEl = (song) => {
	// Create Content Elm Firest
	let audioEl = `
	<img
	src="${song.srcImg}"
	alt="${song.name}"
	width="60px"
	/>
	<div class="music-name">
		<span class="name">${song.name}</span>
		<span class="time">${song.time}</span>
	</div>
	<div class="music-options">
		<i class="fas fa-ellipsis-v"></i>
	</div>`;
	// Create Perant El For Content
	let audioItem = document.createElement('div');
	// Add Class
	audioItem.classList.add('music-item');
	// Add data Atttr
	audioItem.setAttribute('data-src', song.src);
	audioItem.setAttribute('data-time', song.time);

	// add Cont To Parent
	audioItem.innerHTML = audioEl;
	// Add All To Page
	playlist.appendChild(audioItem);
};
for (const song of mySong) {
	AddsongsEl(song);
}

const musicItem = document.querySelectorAll('.music-item');
const sourceAudio = document.querySelector('.source-audio');
musicItem[0].classList.add('active');

musicItem.forEach((item, index) => {
	item.addEventListener('click', function () {
		// Remover Active Class
		musicItem.forEach((item) => {
			item.classList.remove('active');
		});
		// Add Active Class
		this.className += ' active';
		document.querySelector('.all-time').innerText = this.getAttribute(
			'data-time'
		);

		// Add audio src To Audio Player
		sourceAudio.src = this.getAttribute('data-src');
		sourceAudio.play();
	});
});

function play() {
	iconPlay = document.querySelector('#icon-play');

	if (iconPlay.classList.contains('fa-play')) {
		iconPlay.classList.replace('fa-play', 'fa-pause');
		sourceAudio.pause();
	} else {
		iconPlay.classList.replace('fa-pause', 'fa-play');
		sourceAudio.play();
	}
}

sourceAudio.ontimeupdate = function () {
	let currentTimee = sourceAudio.currentTime;
	document.querySelector('.audo-range').setAttribute('value', currentTimee);

	document.querySelector('.curr-time').innerText = `${Math.floor(
		currentTimee / 60
	)}:${Math.floor(currentTimee % 60)} `;
};
sourceAudio.duration;

sourceAudio.onloadedmetadata = function () {
	document
		.querySelector('.audo-range')
		.setAttribute('max', sourceAudio.duration);
	document.querySelector('.all-time').innerText = `${Math.floor(
		sourceAudio.duration / 60
	)}:${Math.floor(sourceAudio.duration % 60)} `;
};
// ************************
