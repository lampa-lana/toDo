'use strict';


const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed'), 
  addBtn = document.querySelector('.header-button');

let todoData = [];
const render = function () {
  todoList.textContent = '';
  todoCompleted.textContent = '';
 

  todoData.forEach(function (item) {
    
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      '</div>';

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }
    
    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function () {
      item.completed = !item.completed;
      render();     
    });
    
  });
  
};


if (localStorage.getItem('todo')) {
  todoData = JSON.parse(localStorage.getItem('todo'));
  render();

};

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();

  const newTodo = {
    value: headerInput.value,
    completed: false,
    remove:false
  };
  console.log(newTodo);
  if (newTodo.value !== '') {    
  todoData.push(newTodo);
  render();
  } else {
    alert('Введите новое дело!');
    
  }
   localStorage.setItem('todo', JSON.stringify(todoData));
  headerInput.value = '';

});
render();


