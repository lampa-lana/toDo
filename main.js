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
    const btnTodoRemove = li.querySelector('.todo-remove'); // получение со страницы
    btnTodoRemove.addEventListener('click', function () { // обработчик событий по клику , callbak функция
   
    todoData.splice(todoData.indexOf(item), 1); // изменяем массив возвращая первый индекс
    localStorage.setItem('todo', JSON.stringify(todoData)); // JSON.stringify для преобразования объектов в JSON.
    render();
});
    localStorage.setItem('todo', JSON.stringify(todoData)); 
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
    completed: false
   
  };
  console.log(newTodo);
  if (newTodo.value !== '') {    
  todoData.push(newTodo);
  render();
  } else {
    alert('Введите новое дело!');
    
  }
  headerInput.value = '';
   localStorage.setItem('todo', JSON.stringify(todoData));
 


});
render();


