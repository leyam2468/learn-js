const icon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature-value");
const description = document.querySelector(".temperature-description");
const locationEl = document.querySelector(".location");
const notification = document.querySelector(".notification");
// app data
const weather = {};

weather.temperature = {
	unit: "celsius",
};

const kelvin = 273;
// Api Key
const key = "97716098a9c895d58ffc4d2bfd72e110";

// check if pw supports geoloation
if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
	notification.style.display = "block";
	notification.innerHTML = "<p>Browser Doesn't Support Geolocation</p>";
}
// Set User Postion
function setPosition(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	getWeather(latitude, longitude);
}

// Show Error
function showError(error) {
	notification.style.display = "block";
	notification.innerHTML = `<p>${error.message}</p>`;
}

// get Weather from API
function getWeather(latitude, longitude) {
	let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
	fetch(api)
		.then(function (response) {
			let data = response.json();
			return data;
		})
		.then(function (data) {
			console.log(data);

			weather.temperature.value = Math.floor(data.main.temp - kelvin);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
			weather.city = data.name;
			weather.country = data.sys.country;
		})
		.then(function () {
			displayWeather();
		});
}

// DISPLAY WEATHER TO UI
function displayWeather() {
	icon.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
	temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
	description.innerHTML = weather.description;
	locationEl.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature) {
	return (temperature * 9) / 5 + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
temperature.addEventListener("click", function () {
	if (weather.temperature.value === undefined) return;

	if (weather.temperature.unit == "celsius") {
		let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
		fahrenheit = Math.floor(fahrenheit);

		temperature.innerHTML = `${fahrenheit}°<span>F</span>`;
		weather.temperature.unit = "fahrenheit";
	} else {
		temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
		weather.temperature.unit = "celsius";
	}
});
