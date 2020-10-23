"use strict";

var playlist = document.querySelector('.playlist');
var mySong = [{
  name: 'مهرجان هنعمل لغبطيطا',
  time: '4:47',
  srcImg: 'https://i1.sndcdn.com/artworks-Dwz7wx03EaJYynlt-M3ZH2Q-t500x500.jpg',
  src: './حسن شاكوش - مهرجان هنعمل لغبطيطا - وركبت ال X6 - مع عمر كمال - MP3.mp3'
}, {
  name: 'Ed Sheeran - Perfect',
  time: '5:47',
  srcImg: 'https://i1.sndcdn.com/artworks-000210714414-u31uaj-t500x500.jpg',
  src: './Happier (ft. Bastille) by marshmello.mp3'
}, {
  name: 'Ed Sheeran - Perfect',
  time: '5:47',
  srcImg: 'https://i1.sndcdn.com/artworks-000210714414-u31uaj-t500x500.jpg',
  src: 'https://www.youtube.com/watch?v=ikNtgHvEfWY'
}];

var Addsongs = function Addsongs(song) {
  // Create Content Elm Firest
  var audioEl = "\n\t<img\n\tsrc=\"".concat(song.srcImg, "\"\n\talt=\"").concat(song.name, "\"\n\twidth=\"60px\"\n\t/>\n\t<div class=\"music-name\">\n\t\t<span class=\"name\">").concat(song.name, "</span>\n\t\t<span class=\"time\">").concat(song.time, "</span>\n\t</div>\n\t<div class=\"music-options\">\n\t\t<i class=\"fas fa-ellipsis-v\"></i>\n\t</div>"); // Create Perant El For Content

  var audioItem = document.createElement('div'); // Add Class

  audioItem.classList.add('music-item'); // Add data Atttr

  audioItem.setAttribute('data-src', song.src);
  audioItem.setAttribute('data-time', song.time); // add Cont To Parent

  audioItem.innerHTML = audioEl; // Add All To Page

  playlist.appendChild(audioItem);
};

for (var _i = 0, _mySong = mySong; _i < _mySong.length; _i++) {
  var song = _mySong[_i];
  Addsongs(song);
}

var musicItem = document.querySelectorAll('.music-item');
var sourceAudio = document.querySelector('.source-audio');
musicItem.forEach(function (item, index) {
  item.addEventListener('click', function () {
    // Remover Active Class
    musicItem.forEach(function (item) {
      item.classList.remove('active');
    }); // Add Active Class

    this.className += ' active';
    document.querySelector('.all-time').innerText = this.getAttribute('data-time'); // Add audio src To Audio Player

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
  var currentTimee = sourceAudio.currentTime;
  document.querySelector('.audo-range').setAttribute('value', currentTimee);
  document.querySelector('.curr-time').innerText = "".concat(Math.floor(currentTimee / 60), ":").concat(Math.floor(currentTimee % 60), " ");
};

sourceAudio.duration;

sourceAudio.onloadedmetadata = function () {
  document.querySelector('.audo-range').setAttribute('max', sourceAudio.duration);
  document.querySelector('.all-time').innerText = "".concat(Math.floor(sourceAudio.duration / 60), ":").concat(Math.floor(sourceAudio.duration % 60), " ");
};