"use strict";

var todoInput = document.querySelector('.todo-input');
var todoBtn = document.querySelector('.todo-submit');
var todoList = document.querySelector('.todo-list');
todoBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteAndCheck);

function addToDo(event) {
  // Stop Pehaver
  event.preventDefault();

  if (todoInput.value !== '') {
    // Creat Element content
    var todoDiv = "\n        <li class=\"todo-text\">".concat(todoInput.value, "</li>\n        <div>\n            <button class=\"todo-check\">\n                <i class=\"fas fa-check\"></i>\n            </button>\n            <button class=\"todo-trash\">\n                <i class=\"fas fa-trash\"></i>\n            </button>\n        </div>"); // create Elment for but content

    var todoItem = document.createElement('div');
    todoItem.classList.add('todo-item'); // bur all div in page

    todoItem.innerHTML = todoDiv;
    document.querySelector('.todo-list').appendChild(todoItem);
  } // clear todoinput value


  todoInput.value = '';
  todoInput.focus();
}

function deleteAndCheck(e) {
  var item = e.target; // delate

  if (item.classList[0] === 'todo-trash') {
    var itemP = item.parentElement.parentElement;
    itemP.style.animation = 'fall .8s ease';
    itemP.addEventListener('animationend', function () {
      itemP.remove();
    });
  } // complete


  if (item.classList[0] === 'todo-check') {
    var itemS = item.parentElement.parentElement;
    itemS.classList.toggle('completed');
  }
}