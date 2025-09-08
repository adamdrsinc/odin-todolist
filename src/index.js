import "./css/style.css";
import { addEventHandlers } from "./EventHandlers.js";
import { ProjectHandler } from "./ProjectHandler.js";
import { StorageHandler } from "./StorageHandler.js";
import { PubSub } from "pubsub-js";

addEventHandlers();

new (class Main {
  #PROJECT_STORAGE = "PROJECTS";

  constructor() {
    if (StorageHandler.storageAvailable("localStorage")) {
      //Check info already exists
      const projectsString = window.localStorage.getItem(this.#PROJECT_STORAGE);

      if (projectsString !== null) {
        //If yes:
        if (projectsString !== "") {
          const parsedProjects = JSON.parse(projectsString);
          PubSub.publish("populate_projects", parsedProjects);
        } else {
          PubSub.publish("populate_projects", []);
        }
      } else {
        //If no:
        StorageHandler.init();
        ProjectHandler.defaultInit();
      }
    } else {
      ProjectHandler.defaultInit();
    }
  }
})();
