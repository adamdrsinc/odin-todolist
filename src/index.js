import "./css/style.css";
import { addEventHandlers } from "./EventHandlers";
import { ProjectHandler } from "./ProjectHandler";
import { ToDo } from "./ToDoHandler";
import { UIHandler } from "./UIHandler";

addEventHandlers();

ProjectHandler.createProject("Default");
ProjectHandler.createProject("Adam's Birthday");

const todo1 = new ToDo(
    "Hi",
    "Hi",
    "2025-07-07",
    1
);

ProjectHandler.addToDo("Default", todo1);
ProjectHandler.addToDo("Default", todo1);
ProjectHandler.addToDo("Default", todo1);
ProjectHandler.addToDo("Adam's Birthday", todo1);
ProjectHandler.addToDo("Adam's Birthday", todo1);
ProjectHandler.addToDo("Adam's Birthday", todo1);
ProjectHandler.addToDo("Adam's Birthday", todo1);

UIHandler.showToDoList("Default");