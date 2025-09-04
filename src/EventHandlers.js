import { UIHandler } from "./UIHandler.js";
import { ToDoHandler, ToDo } from "./ToDoHandler.js";


function addEventHandlers(){
    addNewItemButtonEventHandler();
    addNewNoteFormSubmissionEventHandler();
}

function addNewItemButtonEventHandler(){
    const buttonNewItem = document.getElementById("button-new-item");
    buttonNewItem.addEventListener('click', ()=> {
        UIHandler.slideOutNewNote();
    });
}

function addNewNoteFormSubmissionEventHandler(){
    const form = document.getElementById("form-new-note");
    console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = Object.fromEntries((new FormData(form)));

        const newToDo = new ToDo(
            formData.formTitle,
            formData.formDescription,
            formData.formDueDate,
            formData.formPriority
        );
        ToDoHandler.addToDo(newToDo);

        form.reset();
    });

}

export {addEventHandlers};