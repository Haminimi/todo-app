import Todo, { Project, RetrievedProject, RetrievedTodo } from './createProject';
import { addProjectToDatabase } from './addAndDelete';

//The projects array that is used throughout the app as a database
export let projects = [];

//Store projects from the projects array to the local storage
export function storeProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

/* localStorage.clear(); */

//Retrieve stored projects from the local storage
let storedProjectsWithoutMethods = JSON.parse(localStorage.getItem('projects'));

export let retrievedProjects;
if (!storedProjectsWithoutMethods) {
    const defaultProject = new Project('Daily Adventures');
    const anotherDefaultProject = new Project('Project Title');
    const todoRecipe = new Todo('Cook a New Recipe', 'Trying my hand at cooking a gourmet meal from a new recipe I\'ve been curious about.', '2023-11-22', 'Low', 'Done');
    const todoMeeting = new Todo('Meeting with Team', 'Attend the weekly team meeting.', '2023-11-25', 'High', 'In progress');
    const todoDIY = new Todo('Create a DIY Home Decor', 'Expressing my creativity by making a unique piece of home decor using recycled materials.', '2023-12-03', 'Low', 'In progress');
    const todoPhotography = new Todo('Photography Challenge', 'Participate in a weekly photography challenge and capture unique moments.', '2023-11-28', 'Low', 'Done');
    const todoMuseum = new Todo('Virtual Museum Tour', 'Explore an art or history museum virtually to appreciate different exhibits from around the world.', '2023-11-30', 'High', 'In progress');
    defaultProject.addTodo(todoRecipe);
    defaultProject.addTodo(todoMeeting);
    defaultProject.addTodo(todoDIY);
    defaultProject.addTodo(todoPhotography);
    defaultProject.addTodo(todoMuseum);
    addProjectToDatabase(defaultProject);
    addProjectToDatabase(anotherDefaultProject);
    storeProjects();
    storedProjectsWithoutMethods = JSON.parse(localStorage.getItem('projects'));

    //Add the lost methods back to the projects
    retrievedProjects = storedProjectsWithoutMethods.map(project => {
        const returnedProject = new RetrievedProject(project.title, project.todoList, project.id);

        returnedProject.todoList = project.todoList.map(todo => {
        return new RetrievedTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.status, todo.id, todo.expanded);
        });

        return returnedProject;
    });

  //Assign the retrieved projects to the projects array for use throughout the app
  projects = retrievedProjects;
} else {
//Add the lost methods back to the projects
    retrievedProjects = storedProjectsWithoutMethods.map(project => {
    const returnedProject = new RetrievedProject(project.title, project.todoList, project.id);

    returnedProject.todoList = project.todoList.map(todo => {
    return new RetrievedTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.status, todo.id, todo.expanded);
      });

    return returnedProject;
  });

  //Assign the retrieved projects to the projects array for use throughout the app
  projects = retrievedProjects;
}