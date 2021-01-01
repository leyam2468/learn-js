const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteAndCheck);

function addToDo(event) {
	// Stop Pehaver
	event.preventDefault();
	if (todoInput.value !== '') {
		// Creat Element content
		let todoDiv = `
        <li class="todo-text">${todoInput.value}</li>
        <div>
            <button class="todo-check">
                <i class="fas fa-check"></i>
            </button>
            <button class="todo-trash">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;

		// create Elment for but content
		let todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		// bur all div in page
		todoItem.innerHTML = todoDiv;
		document.querySelector('.todo-list').appendChild(todoItem);
	}
	// clear todoinput value
	todoInput.value = '';
	todoInput.focus();
}
function deleteAndCheck(e) {
	const item = e.target;

	// delate
	if (item.classList[0] === 'todo-trash') {
		const itemP = item.parentElement.parentElement;
		itemP.style.animation = 'fall .8s ease';
		itemP.addEventListener('animationend', function () {
			itemP.remove();
		});
	}

	// complete
	if (item.classList[0] === 'todo-check') {
		const itemS = item.parentElement.parentElement;
		itemS.classList.toggle('completed');
	}
}
