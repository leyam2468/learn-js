"use strict";

var app = function app() {
  var song = document.querySelector('.song');
  var time = document.querySelector('.time');
  var play = document.querySelector('.play');
  var sounds = document.querySelectorAll('.sound-picker button');
  sounds.forEach(function (sound) {
    sound.addEventListener('click', function () {
      song.src = this.getAttribute('data-src');
      sounds.forEach(function (soun) {
        soun.classList.remove('active');
      });
      this.classList.add('active');
    });
  }); // Controler

  play.addEventListener('click', function () {
    if (song.paused) {
      song.play();
      play.classList.replace('fa-play', 'fa-pause');
    } else {
      song.pause();
      play.classList.replace('fa-pause', 'fa-play');
    }

    song.ontimeupdate = function () {
      var currentTime = song.currentTime;
      time.innerText = "".concat(Math.floor(currentTime / 60), ":").concat(Math.floor(currentTime % 60), " // ").concat(Math.floor(song.duration / 60), ":").concat(Math.floor(song.duration % 60));

      if (currentTime >= song.duration) {
        song.pause();
        play.classList.replace('fa-pause', 'fa-play');
      }
    };
  });
};

app();