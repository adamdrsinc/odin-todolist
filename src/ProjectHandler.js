import { ToDo } from "./ToDoHandler";
import {PubSub} from "pubsub-js";

new class ProjectSubscriber{
    constructor(){
        
    }
}

class ProjectHandler{
    //A 2D array containing the ToDos
    static #projects = [];

    static get projects(){
        return this.#projects;
    }

    static getProject(title){
        return this.#projects.find(project => project.title === title);
    }

    static createProject(title){
        this.#projects.push({
            title: title,
            todos: []
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
                element.todos.push(todo.disassemble);
            }
        });
    }

}

export {ProjectHandler};