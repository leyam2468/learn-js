"use strict";

// Get Parent Section
var myParent = document.querySelector(".parent"); // Parent Controls
// Get Width Input

var widthInput = document.querySelector("#parent-width"); // Get Height Input

var heightInput = document.querySelector("#parent-height"); // Get Parent Apply Button

var parentApply = document.querySelector("#parent-apply"); // Set Parent Height

myParent.style.minHeight = "400px"; // Set Height Input Value

heightInput.value = myParent.offsetHeight; // Set Width Input Value

widthInput.value = myParent.offsetWidth; // Apply Functions

parentApply.onclick = function () {
  myParent.style.width = "".concat(widthInput.value, "px");
  myParent.style.height = "".concat(heightInput.value, "px");
}; // Get Children Items


var myChildren = document.querySelectorAll(".childen"); // Color List

var bgColor = ["darkblue", "darkgreen", "darkmagenta", "darkcyan", "darkorange", "darkslateblue", "darkturquoise", "firebrick", "goldenrod", "lightgreen"]; // Dynamic Background Color & Numbers Function

function myBgColor() {
  for (var x = 0; x < myParent.childElementCount; x++) {
    myParent.children[x].style.backgroundColor = bgColor[x];
    myParent.children[x].textContent = x + 1;

    if (x > bgColor.length - 1) {
      myParent.children[x].style.backgroundColor = bgColor[x - 10];
    }
  }
} // Get Add Child Button


var addChild = document.querySelector("#add-child");
var hhh;
addChild.addEventListener("click", function () {
  if (myParent.childElementCount > 19) {
    alert("Sorry You Append The Max Element");
  } else {
    var nweChild = document.createElement("div");
    nweChild.className = "childen";
    nweChild.style.order = 1;
    myParent.appendChild(nweChild);
    myBgColor();
  }
});
myBgColor(); // Get Remove Button

var removeChild = document.querySelector("#remove-child"); // Remove Child Function

removeChild.addEventListener("click", function () {
  myParent.removeChild(myParent.lastElementChild);
}); //Get Flex-Direction Controls

var flexDirction = document.querySelectorAll(".flex-dir input[type=radio]"); // Flex-Direction Functions

flexDirction.forEach(function (dirc) {
  dirc.addEventListener("click", function () {
    if (dirc.className === "dir" && dirc.id === "row-select" && dirc.checked) {
      myParent.style.flexDirection = "row";
    } else if (dirc.className === "dir" && dirc.id === "row-select-re" && dirc.checked) {
      myParent.style.flexDirection = "row-reverse";
    } else if (dirc.className === "dir" && dirc.id === "column-select" && dirc.checked) {
      myParent.style.flexDirection = "column";
    } else if (dirc.className === "dir" && dirc.id === "column-select-re" && dirc.checked) {
      myParent.style.flexDirection = "column-reverse";
    }
  });
}); //Get Flex-Direction Controls

var flexWrap = document.querySelectorAll(".flex-rp input[type=radio]"); // Flex-Wrap Functions

flexWrap.forEach(function (myWrap) {
  myWrap.addEventListener("click", function () {
    if (myWrap.className === "rp" && myWrap.id === "norp-select" && myWrap.checked) {
      myParent.style.flexWrap = "nowrap";
      contDiesable();
    } else if (myWrap.className === "rp" && myWrap.id === "rp-select" && myWrap.checked) {
      myParent.style.flexWrap = "wrap";
      contOpen();
    } else if (myWrap.className === "rp" && myWrap.id === "rp-select-re" && myWrap.checked) {
      myParent.style.flexWrap = "wrap-reverse";
      contOpen();
    }
  });
}); //Get Justify-Content Controls

var myJustify = document.querySelectorAll(".justify-cont input[type=radio]"); // Justify-Content Functions

myJustify.forEach(function (justify) {
  justify.addEventListener("click", function () {
    if (justify.className === "just" && justify.id === "jus-start" && justify.checked) {
      myParent.style.justifyContent = "flex-start";
    } else if (justify.className === "just" && justify.id === "jus-center" && justify.checked) {
      myParent.style.justifyContent = "center";
    } else if (justify.className === "just" && justify.id === "jus-end" && justify.checked) {
      myParent.style.justifyContent = "flex-end";
    } else if (justify.className === "just" && justify.id === "jus-between" && justify.checked) {
      myParent.style.justifyContent = "space-between";
    } else if (justify.className === "just" && justify.id === "jus-around" && justify.checked) {
      myParent.style.justifyContent = "space-around";
    }
  });
}); //Get Align-Content Controls

var myAlignCont = document.querySelectorAll(".align-cont input[type=radio]"); // Align-Content Functions

myAlignCont.forEach(function (alignCont) {
  alignCont.addEventListener("click", function () {
    if (alignCont.className === "align" && alignCont.id === "ali-stretch" && alignCont.checked) {
      myParent.style.alignContent = "stretch";
    } else if (alignCont.className === "align" && alignCont.id === "ali-start" && alignCont.checked) {
      myParent.style.alignContent = "flex-start";
    } else if (alignCont.className === "align" && alignCont.id === "ali-center" && alignCont.checked) {
      myParent.style.alignContent = "center";
    } else if (alignCont.className === "align" && alignCont.id === "ali-end" && alignCont.checked) {
      myParent.style.alignContent = "flex-end";
    } else if (alignCont.className === "align" && alignCont.id === "ali-between" && alignCont.checked) {
      myParent.style.alignContent = "space-between";
    } else if (alignCont.className === "align" && alignCont.id === "ali-around" && alignCont.checked) {
      myParent.style.alignContent = "space-around";
    }
  });
}); //Align-Content Disabled

function contDiesable() {
  for (var x = 0; x < myAlignCont.length; x++) {
    myAlignCont[x].disabled = true;
  }
} //Align-Content Open


function contOpen() {
  for (var x = 0; x < myAlignCont.length; x++) {
    myAlignCont[x].disabled = false;
  }
}

contDiesable(); //Get Align-Items Controls

var myAlignItems = document.querySelectorAll(".align-items input[type=radio]"); // Align-Items Functions

myAlignItems.forEach(function (alignItem) {
  alignItem.addEventListener("click", function () {
    if (alignItem.className === "alignitem" && alignItem.id === "ai-stretch" && alignItem.checked) {
      myParent.style.alignItems = "stretch";
    } else if (alignItem.className === "alignitem" && alignItem.id === "ai-baseline" && alignItem.checked) {
      myParent.style.alignItems = "baseline";
    } else if (alignItem.className === "alignitem" && alignItem.id === "ai-start" && alignItem.checked) {
      myParent.style.alignItems = "flex-start";
    } else if (alignItem.className === "alignitem" && alignItem.id === "ai-center" && alignItem.checked) {
      myParent.style.alignItems = "center";
    } else if (alignItem.className === "alignitem" && alignItem.id === "ai-end" && alignItem.checked) {
      myParent.style.alignItems = "flex-end";
    }
  });
}); //////////////////////////////////////////////////
//Children Controls.

var selfText = ["auto", "stretch", "baseline", "flex-start", "center", "flex-end"];
var selfId = ["self-auto", "self-stretch", "self-baseline", "self-start", "self-center", "self-end"]; //Child Oject

var newValue; // Create Elements

function myElement() {
  // Cerate Child Container
  var eleContainer = document.createElement("div"); // Create Child Container Attribute

  eleContainer.setAttribute("class", "childControl"); // Create Child Control

  var alignSelf = document.createElement("div"); // Create Child Control Attribute

  alignSelf.setAttribute("class", "align-self"); // Create Align-self H2

  var alignH2 = document.createElement("span");
  alignH2.textContent = "Align-self";
  alignSelf.appendChild(alignH2);

  for (var x = 0; x < selfText.length; x++) {
    var newDiv = document.createElement("div");
    var myRadio = document.createElement("input");
    myRadio.setAttribute("class", "self");
    myRadio.setAttribute("type", "radio");
    myRadio.setAttribute("name", "sf");
    myRadio.setAttribute("id", selfId[x]); //----

    var myLable = document.createElement("label");
    myLable.setAttribute("for", selfId[x]);
    myLable.textContent = " : ".concat(selfText[x]);
    newDiv.appendChild(myRadio);
    newDiv.appendChild(myLable);
    alignSelf.appendChild(newDiv);
  } //Create Flex-Grow Element Controls


  var growDiv = document.createElement("div");
  var growH2 = alignH2.cloneNode(true);
  var growText = document.createElement("input");
  growText.setAttribute("type", "text");
  growText.setAttribute("id", "fg-text");
  growText.value = 0;
  growH2.textContent = "Flex-grow"; // Append Flex-Grow

  growDiv.appendChild(growH2);
  growDiv.appendChild(growText); // Create Shrink Element Control

  var shrinkDiv = growDiv.cloneNode();
  var shrinkH2 = alignH2.cloneNode(true);
  var shrinkInput = growText.cloneNode(true);
  shrinkH2.textContent = "Flex-shrink";
  shrinkInput.setAttribute("id", "fs-text");
  shrinkInput.value = 1; //Append Flex-Shrink

  shrinkDiv.appendChild(shrinkH2);
  shrinkDiv.appendChild(shrinkInput); // Create basis Element Control

  var basisDiv = growDiv.cloneNode();
  var basisH2 = alignH2.cloneNode(true);
  var basisInput = growText.cloneNode(true);
  basisH2.textContent = "Flex-basis";
  basisInput.setAttribute("id", "fb-text");
  basisInput.value = "auto"; //Append Flex-basis

  basisDiv.appendChild(basisH2);
  basisDiv.appendChild(basisInput); // Create order Element Control

  var orderDiv = growDiv.cloneNode();
  var orderH2 = alignH2.cloneNode(true);
  var orderInput = growText.cloneNode(true);
  orderInput.setAttribute("id", "fo-text");
  orderInput.setAttribute("type", "number");
  orderInput.setAttribute("min", 1);
  orderH2.textContent = "order";
  orderInput.value = 1; //Append Flex-basis

  orderDiv.appendChild(orderH2);
  orderDiv.appendChild(orderInput); // Create Width Element Control

  var heightDiv = growDiv.cloneNode();
  var heightH2 = alignH2.cloneNode(true);
  var heightInput = growText.cloneNode(true);
  heightH2.textContent = "Height";
  heightInput.setAttribute("id", "wd-text"); //Append Flex-basis

  heightDiv.appendChild(heightH2);
  heightDiv.appendChild(heightInput); //Create Apply Button

  var ApplyButton = document.createElement("button");
  ApplyButton.setAttribute("id", "applyBtn");
  ApplyButton.textContent = "Apply";
  ApplyButton.title = "Apply Change"; // Create Close Button

  var closeButton = alignH2.cloneNode(true);
  closeButton.className = "close-btn";
  closeButton.textContent = "X";
  closeButton.title = "Close";
  closeButton.addEventListener("click", function () {
    document.querySelector(".childControl").style.display = "none";
  }); //Append All Controls To Container

  eleContainer.appendChild(alignSelf);
  eleContainer.appendChild(growDiv);
  eleContainer.appendChild(shrinkDiv);
  eleContainer.appendChild(basisDiv);
  eleContainer.appendChild(orderDiv);
  eleContainer.appendChild(heightDiv);
  eleContainer.appendChild(ApplyButton);
  eleContainer.appendChild(closeButton); // document.querySelector('body').appendChild(eleContainer);

  myParent.addEventListener("click", childReset);

  function childReset(e) {
    if (e.target.nodeName == "DIV" && e.target.classList.contains("childen")) {
      for (var _x = 0; _x < myParent.childElementCount; _x++) {
        myParent.children[_x].style.zIndex = 1;
        myParent.children[_x].id = "";
        orderInput.setAttribute("max", _x + 1);
        eleContainer.style.backgroundColor = e.target.style.backgroundColor;
      }

      e.target.id = "myActiv";
      e.target.style.zIndex = 100;
      e.target.appendChild(eleContainer);
      heightInput.value = e.target.offsetHeight;
      growText.value = e.target.style.flexGrow;
      shrinkInput.value = e.target.style.flexShrink;
      basisInput.value = e.target.style.flexBasis;
      orderInput.value = e.target.style.order;
      document.querySelector(".childControl").style.display = "block";
      var flexSelf = document.querySelectorAll(".self");
      ApplyButton.addEventListener("click", function () {
        if (e.target.id === "myActiv") {
          flexSelf.forEach(function (mySelf) {
            if (mySelf.className === "self" && mySelf.id === "self-auto" && mySelf.checked) {
              document.getElementById("myActiv").style.alignSelf = "auto";
            } else if (mySelf.className === "self" && mySelf.id === "self-stretch" && mySelf.checked) {
              document.getElementById("myActiv").style.alignSelf = "stretch";
            } else if (mySelf.className === "self" && mySelf.id === "self-baseline" && mySelf.checked) {
              document.getElementById("myActiv").style.alignSelf = "baseline";
            } else if (mySelf.className === "self" && mySelf.id === "self-start" && mySelf.checked) {
              document.getElementById("myActiv").style.alignSelf = "flex-start";
            } else if (mySelf.className === "self" && mySelf.id === "self-center" && mySelf.checked) {
              document.getElementById("myActiv").style.alignSelf = "center";
            } else if (mySelf.className === "self" && mySelf.id === "self-end" && mySelf.checked) {
              document.getElementById("myActiv").style.alignSelf = "flex-end";
            }
          });
          document.getElementById("myActiv").style.flexGrow = growText.value;
          document.getElementById("myActiv").style.flexShrink = shrinkInput.value;
          document.getElementById("myActiv").style.flexBasis = basisInput.value + "px";
          document.getElementById("myActiv").style.order = orderInput.value;
          document.getElementById("myActiv").style.height = heightInput.value + "px";
        }

        document.querySelector(".childControl").style.display = "none";
      });
    }
  }
}

myElement();