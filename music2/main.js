const playlist = document.querySelector(".playlist");

const mySong = [
	{
		name: "مهرجان هنعمل لغبطيطا",
		time: "4:47",
		srcImg:
			"https://i1.sndcdn.com/artworks-Dwz7wx03EaJYynlt-M3ZH2Q-t500x500.jpg",
		src:
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/915556366&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
	},
	{
		name: "انتى بسكوتايه مقرمشة",
		time: "4:06",
		srcImg:
			"https://i1.sndcdn.com/artworks-Jvxun4gfVEphV9X9-wt8XHQ-t500x500.jpg",
		src:
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/915558670&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
	},
	{
		name: "محمد رمضان - يا حبيبي",
		time: "4:44",
		srcImg:
			"https://i1.sndcdn.com/artworks-bqIxvOF1GhGkeaFI-n9y7HA-t500x500.jpg",
		src:
			"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/903401953&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
	},
];

let Addsongs = (song) => {
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
	let audioItem = document.createElement("div");
	// Add Class
	audioItem.classList.add("music-item");
	// Add data Atttr
	audioItem.setAttribute("data-src", song.src);
	// add Cont To Parent
	audioItem.innerHTML = audioEl;
	// Add All To Page
	playlist.appendChild(audioItem);
};
for (const song of mySong) {
	Addsongs(song);
}

const musicItem = document.querySelectorAll(".music-item");
const audioPlayer = document.querySelector(".audio-player");

musicItem.forEach((item, index) => {
	item.addEventListener("click", function () {
		// Remover Active Class
		musicItem.forEach((item) => {
			item.classList.remove("active");
		});
		// Add Active Class
		this.className += " active";
		// Add audio src To Audio Player
		audioPlayer.src = this.getAttribute("data-src");
	});
});
