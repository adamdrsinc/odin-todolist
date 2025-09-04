function addToDoToDOM(todo){
    const [title, description, dueDate, priority] = todo;

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


export {addToDoToDOM};