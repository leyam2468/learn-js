
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