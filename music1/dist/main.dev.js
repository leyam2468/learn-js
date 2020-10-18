"use strict";

window.addEventListener('load', function () {
  var sounds = document.querySelectorAll('.sound');
  var taps = document.querySelectorAll('.taps div');
  var visual = document.querySelector('.visual');
  var colors = ['red', 'rgb(0, 172, 86)', 'rgb(26, 12, 109)', 'rgb(169, 0, 84)', 'rgb(5, 144, 175)', 'rgb(121, 3, 150)', 'rgb(115, 179, 13)', 'rgb(138, 6, 112)'];
  taps.forEach(function (tap, index) {
    tap.addEventListener('click', function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createffect(index);
    });
  }); // createffect

  var createffect = function createffect(index) {
    var bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1.5s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    });
  };
});