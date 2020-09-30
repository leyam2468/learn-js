"use strict";

// slider
var slider = document.getElementById("slider");
var active = document.getElementById("active");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var line4 = document.getElementById("line4");

line1.onclick = function () {
  slider.style.transform = "translateX(0)";
  active.style.top = "0px";
};

line2.onclick = function () {
  slider.style.transform = "translateX(-25%)";
  active.style.top = "80px";
};

line3.onclick = function () {
  slider.style.transform = "translateX(-50%)";
  active.style.top = "160px";
};

line4.onclick = function () {
  slider.style.transform = "translateX(-75%)";
  active.style.top = "240px";
};

var a = 0;
var b = 0;

var auto = function auto() {
  if (a == -2400) {
    a = 0;
    b = 0;
  } else {
    slider.style.transform = "translateX(".concat(a, "px)");
    active.style.top = "".concat(b, "px");
    b = b + 80;
    a = a - 600;
  }
};

var intervel = setInterval(auto, 1000); // countDown

var targetDay = new Date("13 jun 2021").getTime();
var counter = setInterval(function () {
  var nowTime = new Date().getTime();
  var distance = targetDay - nowTime; // Days

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerHTML = days; // Hours

  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  document.getElementById("hours").innerHTML = hours; // minutes

  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  document.getElementById("mins").innerHTML = minutes; // sac

  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  document.getElementById("sec").innerHTML = seconds; //Days distance / (1000 * 60 * 60 * 24)
  // hours (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  // min (distance % (1000 * 60 * 60)) / (1000 * 60)
  // sac (distance % (1000 * 60)) / 1000

  if (distance < 0) {
    clearInterval(counter);
    document.getElementById("counter").innerHTML = "Happy BirthDay";
  }
}, 1000); // Cancel default scroll.

document.addEventListener("scoll", function (e) {
  e.preventDefault();
}); // Use wheel event to simulate scroll.

document.addEventListener("wheel", function (e) {
  e.preventDefault(); // #e1 is 100vh, get height in pixels for conversion rate.

  var pxPerVh = document.querySelector("#e1").offsetHeight / 100;
  console.log("s", document.querySelector("#e1").offsetHeight, pxPerVh); // Current scroll.

  var currScroll = document.body.scrollTop; // Modify scroll 100 vh

  if (e.wheelDelta < 0) {
    // scroll up
    var newScroll = currScroll - 100 * pxPerVh;
  } else if (e.wheelDelta > 0) {
    // scroll down
    var newScroll = currScroll + 100 * pxPerVh;
  } else {
    // no scroll
    var newScroll = 0;
  }

  console.log("p", e.wheelDelta, currScroll, newScroll);
  document.body.scrollTop = newScroll;
});