import PubSub from "pubsub-js";

new class UISubscriber{
    constructor(){
        PubSub.subscribe('new_to_do', (tag, data) => {
            UIHandler.addToDoToDOM(data);
        });
    }
}

class UIHandler{
    static slideOutNewNote(){
        document.getElementById("slide-out-form").classList.toggle("show-slide-out");
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