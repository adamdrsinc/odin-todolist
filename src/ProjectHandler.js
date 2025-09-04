import { ToDo, ToDoHandler } from "./ToDoHandler";

class ProjectHandler{
    //A 2D array containing the ToDos
    static #projects = [];

    static createProject(title){
        this.#projects.push({
            title: title,
            todos: {}
        });

        PubSub.publish('projects_updated', {
            projects: this.#projects
        });
    }
    

    static addToDo(title, todo){
        if(!(todo instanceof ToDo)){
            return;
        }

        this.#projects.forEach(element => {
            if(element.title === title){
                element.todos.title = todo.title;
                element.todos.description = todo.description;
                element.todos.dueDate = todo.dueDate;
                element.todos.priority = todo.priority;
            }
        });

        ToDoHandler.addToDo(todo);
    }

}

export {ProjectHandler};