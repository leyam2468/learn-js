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

// flexDirection
const flexDirection = document.querySelectorAll("input[name='row']");
flexDirection.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.id === 'row') {
			view.style.flexDirection = 'row';
		} else if (item.id === 'row-rev') {
			view.style.flexDirection = 'row-reverse';
		} else if (item.id === 'column') {
			view.style.flexDirection = 'column';
		} else if (item.id === 'column-rev') {
			view.style.flexDirection = 'column-reverse';
		}
	});
});

// flex-wrap
const flexWrap = document.querySelectorAll("input[name='wrap']");
flexWrap.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.id === 'wrap') {
			view.style.flexWrap = 'wrap';
		} else if (item.id === 'norp-select') {
			view.style.flexWrap = 'nowrap';
		} else if (item.id === 'wrap-rv') {
			view.style.flexWrap = 'wrap-reverse';
		}
	});
});

// Justify-Content
const justifyContent = document.querySelectorAll("input[name='jus']");
justifyContent.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.id === 'jus-center') {
			view.style.justifyContent = 'center';
		} else if (item.id === 'jus-start') {
			view.style.justifyContent = 'flex-start';
		} else if (item.id === 'jus-end') {
			view.style.justifyContent = 'flex-end';
		} else if (item.id === 'jus-between') {
			view.style.justifyContent = 'space-between';
		} else if (item.id === 'jus-around') {
			view.style.justifyContent = 'space-around';
		}
	});
});

// Align-Items
const AlignItems = document.querySelectorAll("input[name='aitem']");
AlignItems.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.id === 'ai-center') {
			view.style.alignItems = 'center';
		} else if (item.id === 'ai-start') {
			view.style.alignItems = 'flex-start';
		} else if (item.id === 'ai-end') {
			view.style.alignItems = 'flex-end';
		} else if (item.id === 'ai-stretch') {
			view.style.alignItems = 'stretch';
		} else if (item.id === 'ai-baseline') {
			view.style.alignItems = 'baseline';
		}
	});
});

// Align-Content
const AlignContent = document.querySelectorAll("input[name='ali']");
AlignContent.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.id === 'ali-center') {
			view.style.alignContent = 'center';
		} else if (item.id === 'ali-start') {
			view.style.alignContent = 'flex-start';
		} else if (item.id === 'ali-end') {
			view.style.alignContent = 'flex-end';
		} else if (item.id === 'ali-between') {
			view.style.alignContent = 'space-between';
		} else if (item.id === 'ali-around') {
			view.style.alignContent = 'space-around`';
		} else if (item.id === 'ali-stretch') {
			view.style.alignContent = 'stretch';
		}
	});
});
