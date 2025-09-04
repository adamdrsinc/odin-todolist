import PubSub from "pubsub-js";
import { ProjectHandler } from "./ProjectHandler";

new class UISubscriber{
    constructor(){
        PubSub.subscribe('new_todo', (tag, data) => {
            UIHandler.showToDoList(data);
        });

        PubSub.subscribe('projects_updated', (tag, data) => {
            UIHandler.updateProjects(data);
        })

        PubSub.subscribe('dropdown_change', (tag, data) => {
            UIHandler.showToDoList(data);
        });
    }
}

class UIHandler{
    static slideOut(){
        const noteSlideOut = document.getElementById("slide-out");
        noteSlideOut.classList.toggle("show-slide-out");
    }

    static showToDoList(title){
        const project = ProjectHandler.getProject(title);
        console.log(project.todos);

        document.getElementById("list-item-grid").innerHTML = ``;

        project.todos.forEach(todo => {
            UIHandler.addToDoToDOM(todo);
        });
    }

    static updateProjects(data){
        const projectDropdown = document.getElementById("project-dropdown");
        projectDropdown.innerHTML = ``;

        data.projects.forEach(element => {
            const option = document.createElement("option");
            option.value = element.title;
            option.innerText = element.title;

            projectDropdown.appendChild(option);
        });
    }

    static addToDoToDOM(todo){
        const title = todo.title;
        const description = todo.description;
        const dueDate = todo.dueDate;
        const priority = todo.priority;

        const listItemDiv = document.createElement("div");
        listItemDiv.classList.add("list-item");

        const titleH2 = document.createElement("h2");
        titleH2.innerText = title;
        titleH2.classList.add("title");

        const decscriptionP = document.createElement("p");
        decscriptionP.innerText = description;
        decscriptionP.classList.add("description");

        const secondaryContainer = document.createElement("div");
        secondaryContainer.classList.add("list-item-secondary-container");
        
        const dueDateH3 = document.createElement("h3");
        dueDateH3.innerText = dueDate;
        dueDateH3.classList.add("due-date");
        const priorityP = document.createElement("p");
        priorityP.innerText = priority;
        priorityP.classList.add("priority");
        secondaryContainer.appendChild(dueDateH3);
        secondaryContainer.appendChild(priorityP);

        listItemDiv.appendChild(titleH2);
        listItemDiv.appendChild(decscriptionP);
        listItemDiv.appendChild(secondaryContainer);

        document.getElementById("list-item-grid").appendChild(listItemDiv);
    }
}

export {UIHandler};