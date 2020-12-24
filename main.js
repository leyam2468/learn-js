const menuApps = [
	{
		name: "Calculater",
		href: "calculater/index.html",
		icon: "img/calculator.svg",
	},
	{
		name: "Qr Generator",
		href: "qr-code-generator/index.htm",
		icon: "img/qr.svg",
	},
	{
		name: "ToDo List",
		href: "todolist/index.html",
		icon: "img/to-do-list.svg",
	},
	{
		name: "Clock",
		href: "clock/main.html",
		icon: "img/wall-clock.svg",
	},
	{
		name: "Digital Colck",
		href: "digital-clock/index.html",
		icon: "img/digital-clock.svg",
	},
	{
		name: "Winter Of Hearts",
		href: "winter/index.html",
		icon: "img/snowing.svg",
	},
	{
		name: "Count Down",
		href: "countdown/index.html",
		icon: "img/countdown.svg",
	},
	{
		name: "Write Text",
		href: "writetext/index.html",
		icon: "img/write.svg",
	},
	{
		name: "BTN Effect",
		href: "btn-scroll-ef/index.html",
		icon: "img/button.svg",
	},
	{
		name: "Rock Paper Scissors",
		href: "rock-paper-scissors/index.html",
		icon: "img/paper.svg",
	},
	{
		name: "X&O Game",
		href: "x&o-game/index.html",
		icon: "img/tic-tac-toe.svg",
	},
	{
		name: "Flex-box-app",
		href: "Flex-box-app/index.html",
		icon: "img/01-container.svg",
	},
];

const sitesApps = [
	{
		name: "Weather App",
		href: "weather-app/index.html",
		icon: "img/snowing.svg",
	},
	{
		name: "Music app v1",
		href: "music1/index.htm",
		icon: "img/music.svg",
	},
	{
		name: "Music app v2",
		href: "music2/index.htm",
		icon: "img/soundcloud.svg",
	},
];
// Web Application
const OpenAppsBTN = document.querySelector("#open-btn-apps");
const CloseAppsBTN = document.querySelector("#close-btn-apps");
const AppsSidenav = document.querySelector("#apps-sidenav");

// WebSites
const OpenSitesBTN = document.querySelector("#open-btn-sites");
const CloseSitesBTN = document.querySelector("#close-btn-sites");
const SitesSidenav = document.querySelector("#sites-sidenav");

const navBar = document.querySelector("#navbar");
// Window Scrolling

window.addEventListener("scroll", () => {
	console.log(window.pageYOffset);
	if (window.pageYOffset > 90) {
		navBar.style.background =
			"linear-gradient(rgb(128 2 2 / 15%), rgb(0 0 0 / 5%))";
		navBar.style.padding = " 3px";
	} else {
		navBar.style.background = `linear-gradient(
			180deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.871508344548757) 18%,
			rgba(0, 0, 0, 0.7734691288624824) 34%,
			rgba(0, 0, 0, 0.7286512016916141) 50%,
			rgba(0, 0, 0, 0.5745895770417542) 69%,
			rgba(0, 0, 0, 0.3000797731201855) 86%,
			rgba(0, 0, 0, 0.24125624370842091) 100%
		)`;
	}
});

OpenAppsBTN.addEventListener("click", () => {
	AppsSidenav.style.left = "0";
});
CloseAppsBTN.addEventListener("click", () => {
	AppsSidenav.style.left = "-100%";
});

menuApps.forEach((element) => {
	let = menuItem = `
	<a href="${element.href}" class="main-item">
        <div class="icon">
            <img src="${element.icon}" alt="" width="100%" />
		</div>
		<div class="text">${element.name}</div>
    </a>`;

	const AppsSlienavManu = document.querySelector("#AppsSlienavManu");
	AppsSlienavManu.innerHTML += menuItem;
});

// Sites Part

OpenSitesBTN.addEventListener("click", () => {
	SitesSidenav.style.right = "0";
});
CloseSitesBTN.addEventListener("click", () => {
	SitesSidenav.style.right = "-100%";
});

sitesApps.forEach((element) => {
	let menuItem = `
	<a href="${element.href}" class="main-item">
		<div class="text">${element.name}</div>
        <div class="icon">
            <img src="${element.icon}" alt="" width="100%" />
		</div>
		
    </a>`;
	const SitesSlienavManu = document.querySelector("#SitesSlienavManu");
	SitesSlienavManu.innerHTML += menuItem;
});
