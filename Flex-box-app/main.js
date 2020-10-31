let view = document.querySelector('.view');
// input width
let viewWidthInput = document.querySelector('.view-width');
// input Hight
let viewHeightInput = document.querySelector('.view-height');
// Aplly BTN
let apllyBTN = document.querySelector('.aplly');

// Set MinHeight
view.style.minHeight = `50vh`;
view.style.minWidth = `300px`;
// set new Height
viewHeightInput.value = view.offsetHeight;
// set new Width
viewWidthInput.value = view.offsetWidth;

apllyBTN.onclick = function () {
	if (window.innerWidth - 20 > viewWidthInput.value) {
		view.style.width = `${viewWidthInput.value}px`;
		view.style.height = `${viewHeightInput.value}px`;
	}
};

// childs Section
let childs = document.querySelectorAll('.child');
let addChild = document.querySelector('.add-c');
let remChild = document.querySelector('.remover-c');

// colors child
let childColors = [
	'darkblue',
	'darkgreen',
	'darkmagenta',
	'darkcyan',
	'darkorange',
	'darkslateblue',
	'darkturquoise',
	'firebrick',
	'goldenrod',
	'lightgreen',
];
function childColor() {
	for (let x = 0; x < view.childElementCount; x++) {
		view.children[x].style.backgroundColor = childColors[x];
		view.children[x].textContent = x + 1;

		if (x > childColors.length - 1) {
			view.children[x].style.backgroundColor = childColors[x - 10];
		}
	}
}

addChild.addEventListener('click', () => {
	if (view.childElementCount > 19) {
		alert('Sorry You Apend The Max Element');
	} else {
		let child = document.createElement('div');
		child.className = 'child';
		view.appendChild(child);
		childColor();
	}
});
childColor();
remChild.addEventListener('click', () => {
	if (view.childElementCount != 0) {
		view.removeChild(view.lastElementChild);
	}
});

console.log(document.querySelectorAll("input[name='row']"));
console.log(document.querySelectorAll("input[name='wrap']"));
console.log(document.querySelectorAll("input[name='jus']"));
console.log(document.querySelectorAll("input[name='aitem']"));
console.log(document.querySelectorAll("input[name='ali']"));
