// slider
let slider = document.getElementById("slider");
let active = document.getElementById("active");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");

line1.onclick = () => {
    slider.style.transform = "translateX(0)";
    active.style.top = "0px";
};

line2.onclick = () => {
    slider.style.transform = "translateX(-25%)";
    active.style.top = "80px";
};

line3.onclick = () => {
    slider.style.transform = "translateX(-50%)";
    active.style.top = "160px";
};

line4.onclick = () => {
    slider.style.transform = "translateX(-75%)";
    active.style.top = "240px";
};

let a = 0;
let b = 0;
let auto = function () {
    if (a == -2400) {
        a = 0;
        b = 0;
    } else {
        slider.style.transform = `translateX(${a}px)`;
        active.style.top = `${b}px`;
        b = b + 80;
        a = a - 600;
    }
};
let intervel = setInterval(auto, 1000);

// countDown*****************************

let targetDay = new Date("13 jun 2021").getTime();
const counter = setInterval(() => {
    let nowTime = new Date().getTime();

    let distance = targetDay - nowTime;
    // Days
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerHTML = days;
    // Hours
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.getElementById("hours").innerHTML = hours;
    // minutes
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("mins").innerHTML = minutes;
    // sac
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("sec").innerHTML = seconds;

    //Days distance / (1000 * 60 * 60 * 24)
    // hours (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // min (distance % (1000 * 60 * 60)) / (1000 * 60)
    // sac (distance % (1000 * 60)) / 1000

    if (distance < 0) {
        clearInterval(counter);
        document.getElementById("counter").innerHTML = "Happy BirthDay";
    }
}, 1000);

// Clock********************************
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let ClockDay = new Date();
    let ClockHour = ClockDay.getHours() * 30;
    let ClockMin = ClockDay.getMinutes() * deg;
    let ClockSec = ClockDay.getSeconds() * deg;

    hr.style.transform = `rotateZ(${ClockHour + ClockMin / 12}deg)`;
    mn.style.transform = `rotateZ(${ClockMin}deg)`;
    sc.style.transform = `rotateZ(${ClockSec}deg)`;
});

// Write text**************************************
const writeText = document.getElementById("writetext");
let typing = "Welcome to My Site For Learn-Js.";
let textletter = 0;

let writeTextF = () => {
    writeText.innerText = typing.slice(0, textletter);
    textletter++;

    if (textletter > typing.length) {
        textletter = 0;
    }
};
setInterval(writeTextF, 100);

// Heart Section **********

let hearts = document.getElementById("hearts");
setInterval(() => {
    const Heart = document.createElement("dvi");
    Heart.classList.add("heart");

    Heart.style.left = Math.random() * 100 + "vw";

    console.log(Math.random() * 100 + "vw");
    Heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    Heart.innerText = "❤";

    hearts.appendChild(Heart);

    setTimeout(() => {
        Heart.remove();
    }, 5000);
}, 300);
