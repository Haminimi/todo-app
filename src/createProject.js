import { v4 as uniqueId } from 'uuid';


export class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
        this.id = uniqueId();
    }

    addTodo(todo) {
        this.todoList.push(todo);
      }

    changeProjectTitle(newTitle) {
        this.title = newTitle;
    }
}


export class RetrievedProject {
    constructor(title, todoList, id) {
        this.title = title;
        this.todoList = todoList;
        this.id = id;
    }

    addTodo(todo) {
        this.todoList.push(todo);
      }

    changeProjectTitle(newTitle) {
        this.title = newTitle;
    }
}