import "./css/style.css";
import { addEventHandlers } from "./EventHandlers";
import { ProjectHandler } from "./ProjectHandler";
import { ToDo } from "./ToDoHandler";

addEventHandlers();

ProjectHandler.createProject("Default");

const todo1 = new ToDo(
    "Hi",
    "Hi",
    "2025-07-07",
    1
);

ProjectHandler.addToDo("Default", todo1);
ProjectHandler.addToDo("Default", todo1);
ProjectHandler.addToDo("Default", todo1);