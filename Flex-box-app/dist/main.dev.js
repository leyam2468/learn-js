"use strict";

var view = document.querySelector('.view'); // input width

var viewWidthInput = document.querySelector('.view-width'); // input Hight

var viewHeightInput = document.querySelector('.view-height'); // Aplly BTN

var apllyBTN = document.querySelector('.aplly'); // Set MinHeight

view.style.minHeight = "50vh"; // set new Height

viewHeightInput.value = view.offsetHeight; // set new Width

viewWidthInput.value = view.offsetWidth;

apllyBTN.onclick = function () {
  if (window.innerWidth - 20 > viewWidthInput.value) {
    view.style.width = "".concat(viewWidthInput.value, "px");
    view.style.height = "".concat(viewHeightInput.value, "px");
  }
}; // childs Section


var childs = document.querySelectorAll('.child');
var addChild = document.querySelector('.add-c');
var remChild = document.querySelector('.remover-c'); // colors child

var childColors = ['darkblue', 'darkgreen', 'darkmagenta', 'darkcyan', 'darkorange', 'darkslateblue', 'darkturquoise', 'firebrick', 'goldenrod', 'lightgreen'];

function childColor() {
  for (var x = 0; x < view.childElementCount; x++) {
    view.children[x].style.backgroundColor = childColors[x];
    view.children[x].textContent = x + 1;

    if (x > childColors.length - 1) {
      view.children[x].style.backgroundColor = childColors[x - 10];
    }
  }
}

addChild.addEventListener('click', function () {
  if (view.childElementCount > 19) {
    alert('Sorry You Apend The Max Element');
  } else {
    var child = document.createElement('div');
    child.className = 'child';
    view.appendChild(child);
    childColor();
  }
});
childColor();
remChild.addEventListener('click', function () {
  if (view.childElementCount != 0) {
    view.removeChild(view.lastElementChild);
  }
});
console.log(document.querySelectorAll("input[name='row']"));
console.log(document.querySelectorAll("input[name='wrap']"));
console.log(document.querySelectorAll("input[name='jus']"));
console.log(document.querySelectorAll("input[name='aitem']"));
console.log(document.querySelectorAll("input[name='ali']"));