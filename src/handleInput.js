import { projects, storeProjects } from './storage';

export function handleProjectTitleChange(title) {
    const projectId = title.getAttribute('data-project-id');
    projects.forEach(project => {
            if (projectId === project.id) {
                project.changeProjectTitle(title.innerText);
                console.log(project);
            }
        });
    storeProjects();
}

export function handleTitleChange(title) {
    const projectId = title.getAttribute('data-project-id');
    const titleId = title.getAttribute('data-id');
    
    projects.forEach(project => {
        if (projectId === project.id) {
            project.todoList.forEach(todo => {
                if (todo.id === titleId) {
                    todo.changeTitle(title.innerText);
                    console.log(project);
                }
            })
        }
    });
    storeProjects();
}

export function handleDescriptionChange(description) {
    const projectId = description.getAttribute('data-project-id');
    const descriptionId = description.getAttribute('data-id');

    projects.forEach(project => {
        if (projectId === project.id) {
            project.todoList.forEach(todo => {
                if (todo.id === descriptionId) {
                    todo.changeDescription(description.innerText);
                }
            })
        }
    });
    storeProjects();
}