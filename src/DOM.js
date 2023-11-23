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
        
    }
}