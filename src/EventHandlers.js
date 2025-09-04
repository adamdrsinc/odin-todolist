import { UIHandler } from "./UIHandler.js";
import { ToDo } from "./ToDoHandler.js";
import { ProjectHandler } from "./ProjectHandler.js";

function addEventHandlers(){
    buttonSliderEventHandler();
    onNewNoteSubmission();
    onNewProjectSubmission();
    onProjectDropdownChange();
}

function onNewProjectSubmission(){
    const form = document.getElementById("form-new-project");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(form));

        ProjectHandler.createProject(formData.title);

        form.reset();
    })
}

function buttonSliderEventHandler(){
    document.getElementById("button-slider").addEventListener('click', ()=> {
        UIHandler.slideOut();
    });
}

function onNewNoteSubmission(){
    const form = document.getElementById("form-new-note");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(form));

        const newToDo = new ToDo(
            formData.title,
            formData.description,
            formData.dueDate,
            formData.priority
        );
        ToDo.addToDo(newToDo);

        form.reset();
    });
}

function onProjectDropdownChange(){
    const dropdown = document.getElementById("project-dropdown");
    dropdown.addEventListener('change', (e) => {
        const selected = e.target.value;

        PubSub.publish('dropdown_change', selected);
    });
}

export {addEventHandlers};