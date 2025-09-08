import { ToDo } from "./ToDoHandler";
import { PubSub } from "pubsub-js";

new (class ProjectSubscriber {
  constructor() {
    PubSub.subscribe("new_project", (tag, data) => {
      ProjectHandler.addNewProject(new Project(data.projectTitle));
    });

    PubSub.subscribe("new_todo", (tag, data) => {
      const value = data.projectTitle;
      const newToDo = new ToDo(
        data.todo.title,
        data.todo.description,
        data.todo.dueDate,
        data.todo.priority,
      );

      ProjectHandler.addToDo(value, newToDo);

      PubSub.publish("update_storage", {
        projects: ProjectHandler.projects,
      });
    });

    PubSub.subscribe("populate_projects", (tag, projectsArray) => {
      //Do project population here
      projectsArray.forEach((project) => {
        ProjectHandler.addNewProject(
          new Project(project.projectTitle, project.todos),
        );
      });

      PubSub.publish(
        "projects_populated",
        ProjectHandler.getProject("Default"),
      );
    });
  }
})();

class ProjectHandler {
  //A 2D array containing the ToDos
  static #projects = [];

  static get projects() {
    return this.#projects;
  }

  static getProject(title) {
    const foundProject = this.#projects.find(
      (project) => project.projectTitle === title,
    );
    return foundProject;
  }

  static addNewProject(project) {
    this.#projects.push(project);

    PubSub.publish("projects_updated", {
      projects: this.#projects,
    });

    PubSub.publish("update_storage", {
      projects: this.#projects,
    });
  }

  static addToDo(title, todo) {
    if (!(todo instanceof ToDo)) {
      return;
    }

    this.#projects.forEach((project) => {
      if (project.projectTitle === title) {
        project.todos.push(todo.disassemble);
      }
    });
  }

  static defaultInit() {
    this.addNewProject(new Project("Default"));
  }
}

class Project {
  #projectTitle = "";
  #todos = [];

  constructor(title, todos = []) {
    this.#projectTitle = title;
    this.#todos = todos;
  }

  get projectTitle() {
    return this.#projectTitle;
  }
  set projectTitle(newTitle) {
    this.#projectTitle = newTitle;
  }

  get todos() {
    return this.#todos;
  }
  set todos(newTodos) {
    this.#todos = newTodos;
  }

  addToDo(todo) {
    this.#todos.push(todo);
  }

  get asObjectLiteral() {
    return {
      projectTitle: this.#projectTitle,
      todos: this.#todos,
    };
  }
}

export { ProjectHandler, Project };
