"use strict";

var playlist = document.querySelector('.playlist');
var mySong = [{
  name: 'مهرجان هنعمل لغبطيطا',
  time: '4:47',
  srcImg: 'https://i1.sndcdn.com/artworks-Dwz7wx03EaJYynlt-M3ZH2Q-t500x500.jpg',
  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/903123313&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
}, {
  name: 'Ed Sheeran - Perfect',
  time: '5:47',
  srcImg: 'https://i1.sndcdn.com/artworks-000210714414-u31uaj-t500x500.jpg',
  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310640631&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
}];

var Addsongs = function Addsongs(song) {
  // Create Content Elm Firest
  var audioEl = "\n\t<img\n\tsrc=\"".concat(song.srcImg, "\"\n\talt=\"").concat(song.name, "\"\n\twidth=\"60px\"\n\t/>\n\t<div class=\"music-name\">\n\t\t<span class=\"name\">").concat(song.name, "</span>\n\t\t<span class=\"time\">").concat(song.time, "</span>\n\t</div>\n\t<div class=\"music-options\">\n\t\t<i class=\"fas fa-ellipsis-v\"></i>\n\t</div>"); // Create Perant El For Content

  var audioItem = document.createElement('div'); // Add Class

  audioItem.classList.add('music-item'); // Add data Atttr

  audioItem.setAttribute('data-src', song.src); // add Cont To Parent

  audioItem.innerHTML = audioEl; // Add All To Page

  playlist.appendChild(audioItem);
};

for (var _i = 0, _mySong = mySong; _i < _mySong.length; _i++) {
  var song = _mySong[_i];
  Addsongs(song);
}

var musicItem = document.querySelectorAll('.music-item');
var audioPlayer = document.querySelector('.audio-player');
musicItem.forEach(function (item, index) {
  item.addEventListener('click', function () {
    // Remover Active Class
    musicItem.forEach(function (item) {
      item.classList.remove('active');
    }); // Add Active Class

    this.className += ' active'; // Add audio src To Audio Player

    audioPlayer.src = this.getAttribute('data-src');
  });
});