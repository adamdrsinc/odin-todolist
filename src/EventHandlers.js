import { UIHandler } from "./UIHandler.js";
import { ToDoHandler, ToDo } from "./ToDoHandler.js";

function addEventHandlers(){
    buttonSliderEventHandler();
    addNewNoteFormSubmissionEventHandler();
}

function buttonSliderEventHandler(){
    document.getElementById("button-slider").addEventListener('click', ()=> {
        UIHandler.slideOut();
    });
}

function addNewNoteFormSubmissionEventHandler(){
    const form = document.getElementById("form-new-note");
    console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = Object.fromEntries((new FormData(form)));

        const newToDo = new ToDo(
            formData.title,
            formData.description,
            formData.dueDate,
            formData.priority
        );
        ToDoHandler.addToDo(newToDo);

        form.reset();
    });

}

export {addEventHandlers};