"use strict";

var view = document.querySelector('.view'); // input width

var viewWidthInput = document.querySelector('.view-width'); // input Hight

var viewHeightInput = document.querySelector('.view-height'); // Aplly BTN

var apllyBTN = document.querySelector('.aplly'); // Set MinHeight

view.style.minHeight = "50vh";
view.style.minWidth = "300px"; // set new Height

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
}); // flexDirection

var flexDirection = document.querySelectorAll("input[name='row']");
flexDirection.forEach(function (item) {
  item.addEventListener('click', function () {
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
}); // flex-wrap

var flexWrap = document.querySelectorAll("input[name='wrap']");
flexWrap.forEach(function (item) {
  item.addEventListener('click', function () {
    if (item.id === 'wrap') {
      view.style.flexWrap = 'wrap';
    } else if (item.id === 'norp-select') {
      view.style.flexWrap = 'nowrap';
    } else if (item.id === 'wrap-rv') {
      view.style.flexWrap = 'wrap-reverse';
    }
  });
}); // Justify-Content

var justifyContent = document.querySelectorAll("input[name='jus']");
justifyContent.forEach(function (item) {
  item.addEventListener('click', function () {
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
}); // Align-Items

var AlignItems = document.querySelectorAll("input[name='aitem']");
AlignItems.forEach(function (item) {
  item.addEventListener('click', function () {
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
}); // Align-Content

var AlignContent = document.querySelectorAll("input[name='ali']");
AlignContent.forEach(function (item) {
  item.addEventListener('click', function () {
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