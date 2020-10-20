"use strict";

var playlist = document.querySelector('.playlist');
var musicItem = document.querySelectorAll('.music-item');
var audio = document.querySelectorAll('.audio');
musicItem.forEach(function (item, index) {
  item.addEventListener('click', function () {
    item.classList.remove('active');
    item[index].classList.add('active'); // audio[index].currentTime = 0;
    // audio[index].play();
  });
});