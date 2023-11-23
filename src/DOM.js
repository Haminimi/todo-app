import { main } from ".";
import todoList from './check.png';
const { parse, differenceInDays } = require('date-fns');

const header = document.querySelector('.header');
const headerSticker = new Image();
headerSticker.classList.add('header-sticker');
headerSticker.src = todoList;
header.appendChild(headerSticker);


export function displayProject(project, todoList, projectId) {
    //A project container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectHeaderButtons = document.createElement('div');
    projectHeaderButtons.classList.add('project-header-buttons');

    const projectTitle = document.createElement('p');
    projectTitle.classList.add('project-title');
    projectTitle.setAttribute('data-project-id', projectId);
    projectTitle.textContent = project;
    projectTitle.contentEditable = true;

    const projectDeleteButton = document.createElement('span');
    projectDeleteButton.classList.add('material-symbols-outlined', 'project-delete-button');
    projectDeleteButton.setAttribute('data-project-id', projectId);
    projectDeleteButton.textContent = 'delete';

    const addNewTodo = document.createElement('span');
    addNewTodo.classList.add('material-symbols-outlined', 'add-new-todo');
    addNewTodo.setAttribute('data-project-id', projectId);
    addNewTodo.textContent = 'add';

    projectHeaderButtons.appendChild(addNewTodo);
    projectHeaderButtons.appendChild(projectDeleteButton);
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectHeaderButtons);
    projectContainer.appendChild(projectHeader);

    function displayTodo(todoTitle, todoDescription, todoDueDate, todoPriority, todoStatus, todoId, todoExpandState) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');

    const unexpandedTodo = document.createElement('div');
    unexpandedTodo.classList.add('unexpanded-todo');

    const unexpandedTodoButtons = document.createElement('div');
    unexpandedTodoButtons.classList.add('unexpanded-todo-buttons');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const titleHeader = document.createElement('p');
    titleHeader.classList.add('title-header');
    titleHeader.textContent = 'Title';

    const title = document.createElement('p');
    title.classList.add('todo-title');
    title.contentEditable = true;
    title.setAttribute('data-project-id', projectId);
    title.setAttribute('data-id', todoId);
    title.textContent = todoTitle;

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('material-symbols-outlined', 'delete-button', 'delete-buttons');
    deleteButton.textContent = 'delete';
    deleteButton.setAttribute('data-project-id', projectId);
    deleteButton.setAttribute('data-id', todoId);

    const checkBox = document.createElement('span');
    checkBox.classList.add('material-symbols-outlined', 'check-box');
    checkBox.setAttribute('data-project-id', projectId);
    checkBox.setAttribute('data-id', todoId);

    const priorityIconContainer = document.createElement('div');
    priorityIconContainer.classList.add('priority-icon-container');

    //Define styles based on the current status and priority of a todo
    if (todoStatus === 'Done') {
        checkBox.textContent = 'check_box';
        title.style.textDecoration = 'line-through';
        priorityIconContainer.style.backgroundColor = 'lightgreen';
        checkBox.style.color = 'mediumseagreen';
    } else {
        checkBox.textContent = 'check_box_outline_blank';

        if (todoPriority === 'High') {
        priorityIconContainer.style.backgroundColor = '';
        priorityIconContainer.textContent = '🔥';
        }
    }

    
    }
}