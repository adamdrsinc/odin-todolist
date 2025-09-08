import { UIHandler } from "./UIHandler.js";

function addEventHandlers() {
  buttonSliderEventHandler();
  onNewNoteSubmission();
  onNewProjectSubmission();
  onProjectDropdownChange();
}

function onNewProjectSubmission() {
  const form = document.getElementById("form-new-project");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));

    PubSub.publish("new_project", {
      projectTitle: formData.title,
    });

    form.reset();
  });
}

function buttonSliderEventHandler() {
  document.getElementById("button-slider").addEventListener("click", () => {
    UIHandler.slideOut();
  });
}

function onNewNoteSubmission() {
  const form = document.getElementById("form-new-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));

    const dropdownSelect = document.getElementById("project-dropdown");
    const value = dropdownSelect.value;

    PubSub.publish("new_todo", {
      projectTitle: value,
      todo: {
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        priority: formData.priority,
      },
    });

    form.reset();
  });
}

function onProjectDropdownChange() {
  const dropdown = document.getElementById("project-dropdown");
  dropdown.addEventListener("change", (e) => {
    const selected = e.target.value;

    PubSub.publish("dropdown_change", selected);
  });
}

export { addEventHandlers };
